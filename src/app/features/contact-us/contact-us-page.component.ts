import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
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

  readonly channels = CONTACT_CHANNELS;
  readonly coordinates = CONTACT_COORDINATES;
  readonly faqItems = CONTACT_FAQ;
  readonly services = computed(() => CONTACT_SERVICES[this.language.currentLang()]);
}

