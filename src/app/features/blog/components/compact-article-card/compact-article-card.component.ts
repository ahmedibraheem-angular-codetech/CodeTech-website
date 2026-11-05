import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { BlogArticleCard } from '../../models/blog-api.model';
import { LocalizedDatePipe } from '../../../../shared/pipes/localized-date.pipe';

@Component({
  selector: 'ct-compact-article-card',
  standalone: true,
  imports: [LocalizedDatePipe, RouterLink, TranslatePipe],
  templateUrl: './compact-article-card.component.html',
  styleUrl: './compact-article-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompactArticleCardComponent {
  readonly lang = inject(LanguageService).currentLang;

  readonly article = input.required<BlogArticleCard>();
  readonly revealOnHover = input(false);
}
