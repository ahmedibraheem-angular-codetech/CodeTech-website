import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { FaqTabsSectionComponent } from '../../components/faq-tabs-section/faq-tabs-section.component';
import { FAQ_CATEGORIES } from '../../mocup/faq.mock';

@Component({
  selector: 'ct-faq-page',
  standalone: true,
  imports: [FaqTabsSectionComponent, PageHeroComponent, TranslatePipe],
  templateUrl: './faq-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqPageComponent {
  private readonly language = inject(LanguageService);

  /** Ready localized categories. Replace FAQ_CATEGORIES with the FAQ API response. */
  readonly categories = computed(() => FAQ_CATEGORIES[this.language.currentLang()]);
}
