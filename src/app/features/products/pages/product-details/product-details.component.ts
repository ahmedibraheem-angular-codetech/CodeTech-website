import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../../../core/routing/bind-resolved-page';
import { FaqSectionComponent } from '../../../../shared/components/faq-section/faq-section.component';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { TechnologiesSectionComponent } from '../../../../shared/components/technologies-section/technologies-section.component';
import { ProductChallengesSectionComponent } from '../../components/product-challenges-section/product-challenges-section.component';
import { ProductFeaturesSectionComponent } from '../../components/product-features-section/product-features-section.component';
import { ProductHeroSectionComponent } from '../../components/product-hero-section/product-hero-section.component';
import { ProductIndustriesSectionComponent } from '../../components/product-industries-section/product-industries-section.component';
import { ProductInterfacesSectionComponent } from '../../components/product-interfaces-section/product-interfaces-section.component';
import { ProductModulesSectionComponent } from '../../components/product-modules-section/product-modules-section.component';
import { ProductOfferSectionComponent } from '../../components/product-offer-section/product-offer-section.component';
import { ProductReasonsSectionComponent } from '../../components/product-reasons-section/product-reasons-section.component';
import { ProductResultsSectionComponent } from '../../components/product-results-section/product-results-section.component';
import { ProductSolutionSectionComponent } from '../../components/product-solution-section/product-solution-section.component';
import { ProductStatsSectionComponent } from '../../components/product-stats-section/product-stats-section.component';
import { ProductStepsSectionComponent } from '../../components/product-steps-section/product-steps-section.component';
import { ProductDetail } from '../../models/products-api.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'ct-product-details',
  standalone: true,
  imports: [
    FaqSectionComponent,
    PageErrorStateComponent,
    ProductChallengesSectionComponent,
    ProductFeaturesSectionComponent,
    ProductHeroSectionComponent,
    ProductIndustriesSectionComponent,
    ProductInterfacesSectionComponent,
    ProductModulesSectionComponent,
    ProductOfferSectionComponent,
    ProductReasonsSectionComponent,
    ProductResultsSectionComponent,
    ProductSolutionSectionComponent,
    ProductStatsSectionComponent,
    ProductStepsSectionComponent,
    RouterLink,
    SkeletonComponent,
    TechnologiesSectionComponent,
    TranslatePipe,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly productsService = inject(ProductsService);
  private readonly resolved = bindResolvedPage<ProductDetail>(() =>
    this.productsService.getProductBySlug(this.route.snapshot.paramMap.get('slug') ?? ''),
  );

  readonly status = this.resolved.status;
  readonly product = this.resolved.page;

  retry(): void {
    this.resolved.retry();
  }

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
