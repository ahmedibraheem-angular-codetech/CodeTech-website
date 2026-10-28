import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { AllArticlesSectionComponent } from './components/all-articles-section/all-articles-section.component';
import { FeaturedArticlesSectionComponent } from './components/featured-articles-section/featured-articles-section.component';
import { BLOG_PAGE } from './mocup/blog.mock';
 
@Component({
  selector: 'ct-blog-page',
  standalone: true,
  imports: [AllArticlesSectionComponent, FeaturedArticlesSectionComponent, PageHeroComponent, TranslatePipe],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {
  readonly blog = BLOG_PAGE;
}
