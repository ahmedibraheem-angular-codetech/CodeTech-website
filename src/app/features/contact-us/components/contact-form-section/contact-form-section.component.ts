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
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
type FormField = 'name' | 'organization' | 'phone' | 'email' | 'optionId' | 'message';

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
    optionId: [null as number | null],
    message: [''],
    website: [''],
  });

  /** Options for the single select: services for a project request, products for an inquiry. */
  readonly options = computed(() =>
    this.intent() === 'project'
      ? this.services().map((service) => ({ id: service.id, label: service.name }))
      : this.products().map((product) => ({ id: product.id, label: product.title })),
  );

  readonly selectedLabel = computed(() => {
    const selectedId = this.selectedId();
    return this.options().find((option) => option.id === selectedId)?.label ?? '';
  });

  readonly selectedId = signal<number | null>(null);
  readonly titleId = computed(() => `${this.sectionId()}-title`);
  readonly optionLabelId = computed(() => `${this.sectionId()}-option-label`);
  readonly resultTitleId = computed(() => `${this.sectionId()}-result-title`);

  private readonly resultRoot = viewChild<ElementRef<HTMLElement>>('resultRoot');
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
      const requiresOption = this.intent() === 'inquiry';
      const optionControl = this.form.controls.optionId;
      optionControl.setValidators(requiresOption ? Validators.required : []);
      optionControl.updateValueAndValidity({ emitEvent: false });
      this.selectedId.set(null);
      optionControl.reset(null);
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
    return this.serverErrors()[this.apiField(field)] ?? null;
  }

  toggleOptions(): void {
    this.optionsOpen.update((open) => !open);
  }

  selectOption(id: number): void {
    this.selectedId.set(id);
    this.form.controls.optionId.setValue(id);
    this.form.controls.optionId.markAsTouched();
    this.optionsOpen.set(false);
  }

  submit(): void {
    this.form.markAllAsTouched();
    this.optionsOpen.set(false);
    this.changeDetector.markForCheck();

    if (this.form.invalid || this.submitting()) {
      return;
    }

    const value = this.form.getRawValue();
    const optionId = value.optionId;

    if (this.intent() === 'inquiry' && optionId === null) {
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
        ? this.contactService.submitProjectRequest({ ...common, service_id: optionId })
        : this.contactService.submitInquiry({ ...common, product_id: optionId as number });

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
    }
  }

  private onSuccess(body: ContactSubmissionResponse | null): void {
    this.reference.set(body?.data?.reference ?? null);
    this.selectedId.set(null);
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
    if (field === 'optionId') {
      return this.intent() === 'project' ? 'service_id' : 'product_id';
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
