import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { LocalizedDatePipe } from '../../../../shared/pipes/localized-date.pipe';

@Component({
  selector: 'ct-terms-document-section',
  standalone: true,
  imports: [LocalizedDatePipe, TranslatePipe],
  templateUrl: './terms-document-section.component.html',
  styleUrl: './terms-document-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsDocumentSectionComponent {
  readonly lang = inject(LanguageService).currentLang;

  readonly content = input.required<string>();
  readonly updatedAt = input.required<string>();
}
