import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { BlogArticle } from '../../model/blog.model';

@Component({
  selector: 'ct-compact-article-card',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './compact-article-card.component.html',
  styleUrl: './compact-article-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompactArticleCardComponent {
  readonly article = input.required<BlogArticle>();
  readonly revealOnHover = input(false);
}
