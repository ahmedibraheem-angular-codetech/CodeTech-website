import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  afterEveryRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  ContactIntent,
  ContactProductOption,
  ContactServiceOption,
  ContactSubmissionResponse,
  ContactValidationError,
} from '../../models/contact-api.model';
import { ContactService } from '../../services/contact.service';

type SubmitResult = 'success' | 'error' | 'rateLimited';
type FormField = 'name' | 'organization' | 'phone' | 'email' | 'optionIds' | 'message';

function requiredIds(control: AbstractControl): ValidationErrors | null {
  const value = control.value as number[];
  return value.length > 0 ? null : { required: true };
}

@Component({
  selector: 'ct-contact-form-section',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-form-section.component.html',
  styleUrl: './contact-form-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormSectionComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly sectionId = input.required<string>();
  readonly intent = input.required<ContactIntent>();
  readonly services = input.required<ContactServiceOption[]>();
  readonly products = input.required<ContactProductOption[]>();

  readonly optionsOpen = signal(false);
  readonly submitting = signal(false);
  readonly submitResult = signal<SubmitResult | null>(null);
  readonly reference = signal<string | null>(null);
  readonly retryAfterSeconds = signal<number | null>(null);
  readonly serverErrors = signal<Readonly<Record<string, string>>>({});

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    organization: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.email],
    optionIds: [[] as number[], requiredIds],
    message: [''],
    website: [''],
  });

  /** Options for the single select: services for a project request, products for an inquiry. */
  readonly options = computed(() =>
    this.intent() === 'project'
      ? this.services().map((service) => ({ id: service.id, label: service.name }))
      : this.products().map((product) => ({ id: product.id, label: product.title })),
  );

  readonly selectedIds = signal<number[]>([]);

  readonly primarySelectedLabel = computed(() => {
    const firstId = this.selectedIds()[0];
    return this.options().find((option) => option.id === firstId)?.label ?? '';
  });

  readonly extraSelectedCount = computed(() => Math.max(this.selectedIds().length - 1, 0));
  readonly titleId = computed(() => `${this.sectionId()}-title`);
  readonly optionLabelId = computed(() => `${this.sectionId()}-option-label`);
  readonly resultTitleId = computed(() => `${this.sectionId()}-result-title`);

  private readonly resultRoot = viewChild<ElementRef<HTMLElement>>('resultRoot');
  private readonly selectRoot = viewChild<ElementRef<HTMLElement>>('selectRoot');
  private resultNode: HTMLElement | null = null;

  constructor() {
    this.form.statusChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      this.changeDetector.markForCheck();
    });

    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      if (Object.keys(this.serverErrors()).length) {
        this.serverErrors.set({});
      }
    });

    effect(() => {
      this.intent();
      this.selectedIds.set([]);
      this.form.controls.optionIds.reset([]);
      this.optionsOpen.set(false);
    });

    effect(() => {
      this.syncPageScroll(this.submitResult() !== null);
    });

    afterEveryRender(() => this.attachResultToPage());

    this.destroyRef.onDestroy(() => {
      this.syncPageScroll(false);
      this.resultNode?.remove();
      this.resultNode = null;
    });
  }

  fieldId(suffix: string): string {
    return `${this.sectionId()}-${suffix}`;
  }

  /** Keep the dialog centered on the viewport, outside transformed page content. */
  private attachResultToPage(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const node = this.resultRoot()?.nativeElement ?? null;
    this.resultNode = node;
    if (!node || node.parentElement === this.document.body) {
      return;
    }

    this.document.body.appendChild(node);
  }

  isInvalid(field: FormField): boolean {
    const control = this.form.controls[field];
    return (control.invalid && control.touched) || !!this.serverError(field);
  }

  serverError(field: FormField): string | null {
    const errors = this.serverErrors();
    const key = this.apiField(field);
    if (errors[key]) {
      return errors[key];
    }

    const nestedKey = Object.keys(errors).find((name) => name.startsWith(`${key}.`));
    return nestedKey ? errors[nestedKey] : null;
  }

  toggleOptions(): void {
    const nextOpen = !this.optionsOpen();
    this.optionsOpen.set(nextOpen);
    if (!nextOpen) {
      this.form.controls.optionIds.markAsTouched();
    }
  }

  isSelected(id: number): boolean {
    return this.selectedIds().includes(id);
  }

  toggleOption(id: number): void {
    const current = this.selectedIds();
    const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
    this.selectedIds.set(next);
    this.form.controls.optionIds.setValue(next);
    this.form.controls.optionIds.markAsTouched();
  }

  submit(): void {
    this.form.markAllAsTouched();
    this.optionsOpen.set(false);
    this.changeDetector.markForCheck();

    if (this.form.invalid || this.submitting()) {
      return;
    }

    const value = this.form.getRawValue();
    const optionIds = value.optionIds;

    if (optionIds.length === 0) {
      return;
    }

    const common = {
      name: value.name.trim(),
      organization: value.organization.trim(),
      phone: value.phone.trim(),
      email: value.email.trim() || null,
      message: value.message.trim() || null,
      website: value.website,
    };

    this.submitting.set(true);

    const request$ =
      this.intent() === 'project'
        ? this.contactService.submitProjectRequest({ ...common, service_ids: optionIds })
        : this.contactService.submitInquiry({ ...common, product_ids: optionIds });

    request$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.submitting.set(false);
        this.onSuccess(response.body);
      },
      error: (error: unknown) => {
        this.submitting.set(false);
        this.onFailure(error);
      },
    });
  }

  closeResult(): void {
    this.submitResult.set(null);
  }

  retrySubmit(): void {
    this.submitResult.set(null);
  }

  goHome(): void {
    this.submitResult.set(null);
    void this.router.navigateByUrl('/');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.submitResult()) {
      this.closeResult();
      return;
    }

    if (this.optionsOpen()) {
      this.optionsOpen.set(false);
      this.form.controls.optionIds.markAsTouched();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.optionsOpen()) {
      return;
    }

    const target = event.target;
    const root = this.selectRoot()?.nativeElement;
    if (!(target instanceof Node) || !root || root.contains(target)) {
      return;
    }

    this.optionsOpen.set(false);
    this.form.controls.optionIds.markAsTouched();
  }

  private onSuccess(body: ContactSubmissionResponse | null): void {
    this.reference.set(body?.data?.reference ?? null);
    this.selectedIds.set([]);
    this.form.reset();
    this.submitResult.set('success');
  }

  private onFailure(error: unknown): void {
    if (!(error instanceof HttpErrorResponse)) {
      this.submitResult.set('error');
      return;
    }

    if (error.status === 422) {
      this.applyValidationErrors(error.error as ContactValidationError | null);
      return;
    }

    if (error.status === 429) {
      const retryAfter = Number(error.headers.get('Retry-After'));
      this.retryAfterSeconds.set(Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter : null);
      this.submitResult.set('rateLimited');
      return;
    }

    this.submitResult.set('error');
  }

  private applyValidationErrors(body: ContactValidationError | null): void {
    const errors: Record<string, string> = {};

    for (const [field, messages] of Object.entries(body?.errors ?? {})) {
      if (messages[0]) {
        errors[field] = messages[0];
      }
    }

    this.serverErrors.set(errors);
    this.form.markAllAsTouched();
    this.changeDetector.markForCheck();
  }

  private apiField(field: FormField): string {
    if (field === 'optionIds') {
      return this.intent() === 'project' ? 'service_ids' : 'product_ids';
    }

    return field;
  }

  private syncPageScroll(locked: boolean): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.document.body.style.overflow = locked ? 'hidden' : '';
  }
}
