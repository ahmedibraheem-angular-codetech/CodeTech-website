import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { TermsDocumentSectionComponent } from '../../components/terms-document-section/terms-document-section.component';
import { TERMS_DOCUMENT } from '../../mocup/terms.mock';

@Component({
  selector: 'ct-terms-page',
  standalone: true,
  imports: [PageHeroComponent, TermsDocumentSectionComponent, TranslatePipe],
  templateUrl: './terms-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsPageComponent {
  private readonly language = inject(LanguageService);

  readonly document = computed(() => TERMS_DOCUMENT[this.language.currentLang()]);
}
