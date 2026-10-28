import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostListener,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import type { ContactCoordinates } from '../../model/contact-channel.model';
import type { ContactRequest, ContactServiceOption } from '../../model/contact-form.model';

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
  private readonly language = inject(LanguageService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly services = input.required<ContactServiceOption[]>();
  readonly coordinates = input.required<ContactCoordinates>();

  readonly zoom = signal(14);
  readonly servicesOpen = signal(false);
  readonly serviceIds = signal<string[]>([]);
  readonly submitResult = signal<'success' | 'error' | null>(null);

  readonly form = this.formBuilder.nonNullable.group({
    fullName: ['', Validators.required],
    organizationName: ['', Validators.required],
    phone: ['', Validators.required],
    email: [''],
    serviceIds: [[] as string[]],
    brief: [''],
  });

  constructor() {
    this.form.statusChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      this.changeDetector.markForCheck();
    });

    effect(() => {
      this.syncPageScroll(this.submitResult() !== null);
    });

    this.destroyRef.onDestroy(() => {
      this.syncPageScroll(false);
    });
  }

  readonly mapUrl = computed(() => {
    const { latitude, longitude } = this.coordinates();
    const url = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${this.zoom()}&hl=${this.language.currentLang()}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  readonly allSelected = computed(() => {
    const services = this.services();
    if (!services.length) {
      return false;
    }

    const selected = new Set(this.serviceIds());
    return services.every((service) => selected.has(service.id));
  });

  readonly selectedSummary = computed(() => {
    const selected = new Set(this.serviceIds());
    const labels = this.services()
      .filter((service) => selected.has(service.id))
      .map((service) => service.label);

    return {
      name: labels[0] ?? '',
      count: labels.length,
    };
  });

  isInvalid(name: 'fullName' | 'organizationName' | 'phone'): boolean {
    const control = this.form.controls[name];
    return control.invalid && control.touched;
  }

  isServiceSelected(id: string): boolean {
    return this.serviceIds().includes(id);
  }

  toggleServices(): void {
    this.servicesOpen.update((open) => !open);
  }

  toggleAllServices(): void {
    const next = this.allSelected() ? [] : this.services().map((service) => service.id);
    this.serviceIds.set(next);
    this.form.controls.serviceIds.setValue(next);
  }

  toggleService(id: string): void {
    const next = this.serviceIds().includes(id)
      ? this.serviceIds().filter((item) => item !== id)
      : [...this.serviceIds(), id];

    this.serviceIds.set(next);
    this.form.controls.serviceIds.setValue(next);
  }

  zoomIn(): void {
    this.zoom.update((value) => Math.min(value + 1, 18));
  }

  zoomOut(): void {
    this.zoom.update((value) => Math.max(value - 1, 8));
  }

  submit(): void {
    this.form.markAllAsTouched();
    this.servicesOpen.set(false);
    this.changeDetector.markForCheck();

    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();
    const request: ContactRequest = {
      fullName: value.fullName.trim(),
      organizationName: value.organizationName.trim(),
      phone: value.phone.trim(),
      email: value.email.trim(),
      serviceIds: value.serviceIds,
      brief: value.brief.trim(),
    };

    console.log(request);
    this.serviceIds.set([]);
    this.form.reset();
    this.submitResult.set('success');
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

  private syncPageScroll(locked: boolean): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.document.body.style.overflow = locked ? 'hidden' : '';
  }
}
