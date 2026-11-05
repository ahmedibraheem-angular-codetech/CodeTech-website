import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../../../core/routing/bind-resolved-page';
import { FaqSectionComponent } from '../../../../shared/components/faq-section/faq-section.component';
import { IndustriesSectionComponent } from '../../../../shared/components/industries-section/industries-section.component';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { ProductListSectionComponent } from '../../components/product-list-section/product-list-section.component';
import { ProductReasonsSectionComponent } from '../../components/product-reasons-section/product-reasons-section.component';
import { ProductsPageData } from '../../models/products-api.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'ct-products-page',
  standalone: true,
  imports: [
    FaqSectionComponent,
    IndustriesSectionComponent,
    PageErrorStateComponent,
    PageHeroComponent,
    ProductListSectionComponent,
    ProductReasonsSectionComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './products-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent {
  private readonly productsService = inject(ProductsService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly resolved = bindResolvedPage<ProductsPageData>(() =>
    this.productsService.getProductsPage(),
  );

  readonly status = this.resolved.status;
  readonly page = this.resolved.page;

  retry(): void {
    this.resolved.retry();
  }

  scrollToProducts(): void {
    const section = this.document.getElementById('product-list');
    if (!section) {
      return;
    }

    const reduceMotion =
      this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
