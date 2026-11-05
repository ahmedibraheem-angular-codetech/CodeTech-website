import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { LocalizedDatePipe } from '../../../../shared/pipes/localized-date.pipe';

@Component({
  selector: 'ct-privacy-document-section',
  standalone: true,
  imports: [LocalizedDatePipe, TranslatePipe],
  templateUrl: './privacy-document-section.component.html',
  styleUrl: './privacy-document-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyDocumentSectionComponent {
  readonly lang = inject(LanguageService).currentLang;

  readonly content = input.required<string>();
  readonly updatedAt = input.required<string>();
}
