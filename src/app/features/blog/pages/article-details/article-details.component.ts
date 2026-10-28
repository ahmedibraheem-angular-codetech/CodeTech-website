import { ChangeDetectionStrategy, Component, computed, effect, inject, ViewEncapsulation } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs';
import { LanguageService } from '../../../../core/i18n/language.service';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { RelatedArticlesSectionComponent } from '../../components/related-articles-section/related-articles-section.component';
import { getBlogArticleDetails } from '../../mocup/blog.mock';

@Component({
  selector: 'ct-article-details',
  standalone: true,
  imports: [PageHeroComponent, RelatedArticlesSectionComponent, RouterLink, TranslatePipe],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ArticleDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly language = inject(LanguageService);
  private readonly title = inject(Title);
  private readonly sanitizer = inject(DomSanitizer);

  readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  readonly details = computed(() => getBlogArticleDetails(this.slug(), this.language.currentLang()));

  readonly safeHtml = computed(() => {
    const html = this.details()?.html;
    return html ? this.sanitizer.bypassSecurityTrustHtml(html) : null;
  });

  constructor() {
    effect(() => {
      const page = this.details();
      if (!page) {
        return;
      }

      this.title.setTitle(`${page.seoTitle} | CodeTech`);
    });
  }
}
