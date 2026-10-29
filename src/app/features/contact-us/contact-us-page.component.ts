import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { LanguageService } from '../../core/i18n/language.service';
import { FaqSectionComponent } from '../../shared/components/faq-section/faq-section.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ContactChannelsSectionComponent } from './components/contact-channels-section/contact-channels-section.component';
import { ContactFormSectionComponent } from './components/contact-form-section/contact-form-section.component';
import { ContactOptionsSectionComponent } from './components/contact-options-section/contact-options-section.component';
import { ContactStepsSectionComponent } from './components/contact-steps-section/contact-steps-section.component';
import { CONTACT_CHANNELS, CONTACT_COORDINATES } from './mocup/contact-channels.mock';
import { CONTACT_FAQ } from './mocup/contact-faq.mock';
import { CONTACT_SERVICES } from './mocup/contact-services.mock';

@Component({
  selector: 'ct-contact-us-page',
  standalone: true,
  imports: [
    ContactChannelsSectionComponent,
    ContactFormSectionComponent,
    ContactOptionsSectionComponent,
    ContactStepsSectionComponent,
    FaqSectionComponent,
    PageHeroComponent,
    TranslatePipe,
  ],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsPageComponent {
  private readonly language = inject(LanguageService);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => this.scrollToFormIfRequested());

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(destroyRef),
      )
      .subscribe(() => this.scrollToFormIfRequested());
  }

  readonly channels = CONTACT_CHANNELS;
  readonly coordinates = CONTACT_COORDINATES;
  readonly faqItems = CONTACT_FAQ;
  readonly services = computed(() => CONTACT_SERVICES[this.language.currentLang()]);

  goToForm(): void {
    this.scrollToForm();
  }

  private scrollToFormIfRequested(remaining = 12): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    const section = this.document.getElementById('contact-form');
    const ready = this.shouldScrollToForm() && (section?.getBoundingClientRect().height ?? 0) > 0;

    if (!ready) {
      if (remaining > 0) {
        view.setTimeout(() => this.scrollToFormIfRequested(remaining - 1), 50);
      }
      return;
    }

    this.scrollToForm();

    const headerBottom = this.document.querySelector('ct-header')?.getBoundingClientRect().bottom ?? 0;
    const formTop = section?.getBoundingClientRect().top ?? 0;
    if (remaining > 0 && formTop > headerBottom + 48) {
      view.setTimeout(() => this.scrollToFormIfRequested(remaining - 1), 50);
    }
  }

  private shouldScrollToForm(): boolean {
    const hash = this.document.location?.hash.replace(/^#/, '') ?? '';
    return this.route.snapshot.fragment === 'contact-form' || hash === 'contact-form';
  }

  private scrollToForm(): void {
    const section = this.document.getElementById('contact-form');
    if (!section) {
      return;
    }

    const reduceMotion =
      this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
}

