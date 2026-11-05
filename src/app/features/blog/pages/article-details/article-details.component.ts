import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { bindResolvedPage } from '../../../../core/routing/bind-resolved-page';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { LocalizedDatePipe } from '../../../../shared/pipes/localized-date.pipe';
import { RelatedArticlesSectionComponent } from '../../components/related-articles-section/related-articles-section.component';
import { BlogArticleDetail } from '../../models/blog-api.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'ct-article-details',
  standalone: true,
  imports: [
    LocalizedDatePipe,
    PageErrorStateComponent,
    PageHeroComponent,
    RelatedArticlesSectionComponent,
    RouterLink,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ArticleDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly blogService = inject(BlogService);
  private readonly resolved = bindResolvedPage<BlogArticleDetail>(() =>
    this.blogService.getArticle(this.route.snapshot.paramMap.get('slug') ?? ''),
  );

  readonly lang = inject(LanguageService).currentLang;
  readonly status = this.resolved.status;
  readonly article = this.resolved.page;

  retry(): void {
    this.resolved.retry();
  }
}
