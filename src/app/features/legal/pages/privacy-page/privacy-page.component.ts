import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { PrivacyDocumentSectionComponent } from '../../components/privacy-document-section/privacy-document-section.component';
import { PRIVACY_DOCUMENT } from '../../mocup/privacy.mock';

@Component({
  selector: 'ct-privacy-page',
  standalone: true,
  imports: [PageHeroComponent, PrivacyDocumentSectionComponent, TranslatePipe],
  templateUrl: './privacy-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPageComponent {
  private readonly language = inject(LanguageService);

  readonly document = computed(() => PRIVACY_DOCUMENT[this.language.currentLang()]);
}
