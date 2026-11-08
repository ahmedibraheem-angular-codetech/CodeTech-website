import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { bindResolvedPage } from '../../core/routing/bind-resolved-page';
import { FaqSectionComponent } from '../../shared/components/faq-section/faq-section.component';
import { PageErrorStateComponent } from '../../shared/components/page-state/page-error-state.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';
import { ContactChannelsSectionComponent } from './components/contact-channels-section/contact-channels-section.component';
import { ContactFormSectionComponent } from './components/contact-form-section/contact-form-section.component';
import { ContactOptionsSectionComponent } from './components/contact-options-section/contact-options-section.component';
import { ContactStepsSectionComponent } from './components/contact-steps-section/contact-steps-section.component';
import { ContactIntent, ContactPageData } from './models/contact-api.model';
import { ContactService } from './services/contact.service';

const PROJECT_FORM_ID = 'contact-project-form';
const INQUIRY_FORM_ID = 'contact-inquiry-form';
const LEGACY_FORM_HASH = 'contact-form';

@Component({
  selector: 'ct-contact-us-page',
  standalone: true,
  imports: [
    ContactChannelsSectionComponent,
    ContactFormSectionComponent,
    ContactOptionsSectionComponent,
    ContactStepsSectionComponent,
    FaqSectionComponent,
    PageErrorStateComponent,
    PageHeroComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsPageComponent {
  private readonly contactService = inject(ContactService);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly resolved = bindResolvedPage<ContactPageData>(() =>
    this.contactService.getContactPage(),
  );
  private scrollTimer: number | null = null;
  private hashScrollStarted = false;
  private pendingFormId = PROJECT_FORM_ID;

  readonly status = this.resolved.status;
  readonly page = this.resolved.page;

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

  retry(): void {
    this.resolved.retry();
  }

  selectIntent(intent: ContactIntent): void {
    this.pendingFormId = intent === 'inquiry' ? INQUIRY_FORM_ID : PROJECT_FORM_ID;
    this.scrollWhenReady(this.pendingFormId, 'smooth');
  }

  private scrollToFormIfRequested(): void {
    if (!this.shouldScrollToForm() || this.hashScrollStarted) {
      return;
    }

    this.hashScrollStarted = true;
    this.pendingFormId = this.resolveHashFormId();
    this.scrollWhenReady(this.pendingFormId, 'auto');
  }

  private scrollWhenReady(
    formId: string,
    behavior: ScrollBehavior,
    remaining = 100,
  ): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    this.clearScrollTimer();

    const section = this.findFormSection(formId);
    const ready = (section?.getBoundingClientRect().height ?? 0) > 0;
    if (!ready) {
      if (remaining > 0) {
        this.scrollTimer = view.setTimeout(
          () => this.scrollWhenReady(formId, behavior, remaining - 1),
          50,
        );
      }
      return;
    }

    this.scrollTimer = view.setTimeout(() => {
      this.scrollTimer = null;
      this.scrollToForm(formId, behavior);
    }, 0);
  }

  private shouldScrollToForm(): boolean {
    const hash = this.document.location?.hash.replace(/^#/, '') ?? '';
    const fragment = this.route.snapshot.fragment ?? '';
    return (
      fragment === LEGACY_FORM_HASH ||
      fragment === PROJECT_FORM_ID ||
      fragment === INQUIRY_FORM_ID ||
      hash === LEGACY_FORM_HASH ||
      hash === PROJECT_FORM_ID ||
      hash === INQUIRY_FORM_ID
    );
  }

  private resolveHashFormId(): string {
    const hash = this.document.location?.hash.replace(/^#/, '') ?? '';
    const fragment = this.route.snapshot.fragment ?? '';
    const target = fragment || hash;

    if (target === INQUIRY_FORM_ID) {
      return INQUIRY_FORM_ID;
    }

    return PROJECT_FORM_ID;
  }

  private scrollToForm(formId: string, behavior: ScrollBehavior): void {
    const view = this.document.defaultView;
    const section = this.findFormSection(formId);
    if (!view || !section) {
      return;
    }

    const reduceMotion = view.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const resolved: ScrollBehavior = reduceMotion ? 'auto' : behavior;
    const headerHeight = this.document.querySelector('ct-header')?.getBoundingClientRect().height ?? 0;
    const top = section.getBoundingClientRect().top + view.scrollY - headerHeight - 16;

    view.scrollTo({ top: Math.max(0, top), behavior: resolved });
  }

  private findFormSection(formId: string): HTMLElement | null {
    const byId = this.document.getElementById(formId);
    if (byId) {
      return byId;
    }

    const sections = this.document.querySelectorAll<HTMLElement>('.contact-form-section');
    if (formId === INQUIRY_FORM_ID) {
      return sections.item(1);
    }

    return sections.item(0);
  }

  private clearScrollTimer(): void {
    if (this.scrollTimer === null) {
      return;
    }

    this.document.defaultView?.clearTimeout(this.scrollTimer);
    this.scrollTimer = null;
  }
}
