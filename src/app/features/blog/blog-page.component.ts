import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../core/routing/bind-resolved-page';
import { PageErrorStateComponent } from '../../shared/components/page-state/page-error-state.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';
import { AllArticlesSectionComponent } from './components/all-articles-section/all-articles-section.component';
import { FeaturedArticlesSectionComponent } from './components/featured-articles-section/featured-articles-section.component';
import { KnowledgeCenterData } from './models/blog-api.model';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'ct-blog-page',
  standalone: true,
  imports: [
    AllArticlesSectionComponent,
    FeaturedArticlesSectionComponent,
    PageErrorStateComponent,
    PageHeroComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {
  private readonly blogService = inject(BlogService);
  private readonly resolved = bindResolvedPage<KnowledgeCenterData>(() =>
    this.blogService.getKnowledgeCenter(),
  );

  readonly status = this.resolved.status;
  readonly page = this.resolved.page;

  retry(): void {
    this.resolved.retry();
  }
}
