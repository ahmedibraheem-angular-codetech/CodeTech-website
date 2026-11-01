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
  private scrollTimer: number | null = null;
  private hashScrollStarted = false;

  constructor() {
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => this.clearScrollTimer());

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
    this.scrollToForm('smooth');
  }

  private scrollToFormIfRequested(): void {
    if (!this.shouldScrollToForm() || this.hashScrollStarted) {
      return;
    }

    this.hashScrollStarted = true;
    this.scrollWhenReady();
  }

  private scrollWhenReady(remaining = 20): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    this.clearScrollTimer();

    const section = this.document.getElementById('contact-form');
    const ready = (section?.getBoundingClientRect().height ?? 0) > 0;
    if (!ready) {
      if (remaining > 0) {
        this.scrollTimer = view.setTimeout(() => this.scrollWhenReady(remaining - 1), 50);
      }
      return;
    }

    this.scrollTimer = view.setTimeout(() => {
      this.scrollTimer = null;
      this.scrollToForm('auto');
    }, 0);
  }

  private shouldScrollToForm(): boolean {
    const hash = this.document.location?.hash.replace(/^#/, '') ?? '';
    return this.route.snapshot.fragment === 'contact-form' || hash === 'contact-form';
  }

  private scrollToForm(behavior: ScrollBehavior): void {
    const view = this.document.defaultView;
    const section = this.document.getElementById('contact-form');
    if (!view || !section) {
      return;
    }

    const reduceMotion = view.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const resolved: ScrollBehavior = reduceMotion ? 'auto' : behavior;
    const headerHeight = this.document.querySelector('ct-header')?.getBoundingClientRect().height ?? 0;
    const top = section.getBoundingClientRect().top + view.scrollY - headerHeight - 16;
    const root = this.document.documentElement;
    const previousBehavior = root.style.scrollBehavior;

    if (resolved === 'auto') {
      root.style.scrollBehavior = 'auto';
    }

    view.scrollTo({ top: Math.max(0, top), behavior: resolved });

    if (resolved === 'auto') {
      root.style.scrollBehavior = previousBehavior;
    }
  }

  private clearScrollTimer(): void {
    if (this.scrollTimer === null) {
      return;
    }

    this.document.defaultView?.clearTimeout(this.scrollTimer);
    this.scrollTimer = null;
  }
}

