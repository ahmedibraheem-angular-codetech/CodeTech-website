import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs';
import { LanguageService } from '../../../../core/i18n/language.service';
import { FaqSectionComponent } from '../../../../shared/components/faq-section/faq-section.component';
import { TechnologiesSectionComponent } from '../../../../shared/components/technologies-section/technologies-section.component';
import { ProductChallengesSectionComponent } from '../../components/product-challenges-section/product-challenges-section.component';
import { ProductFeaturesSectionComponent } from '../../components/product-features-section/product-features-section.component';
import { ProductIndustriesSectionComponent } from '../../components/product-industries-section/product-industries-section.component';
import { ProductModulesSectionComponent } from '../../components/product-modules-section/product-modules-section.component';
import { ProductHeroSectionComponent } from '../../components/product-hero-section/product-hero-section.component';
import { ProductOfferSectionComponent } from '../../components/product-offer-section/product-offer-section.component';
import { ProductReasonsSectionComponent } from '../../components/product-reasons-section/product-reasons-section.component';
import { ProductInterfacesSectionComponent } from '../../components/product-interfaces-section/product-interfaces-section.component';
import { ProductResultsSectionComponent } from '../../components/product-results-section/product-results-section.component';
import { ProductStepsSectionComponent } from '../../components/product-steps-section/product-steps-section.component';
import { ProductSolutionSectionComponent } from '../../components/product-solution-section/product-solution-section.component';
import { ProductStatsSectionComponent } from '../../components/product-stats-section/product-stats-section.component';
import {
  getProductChallengesSection,
  getProductChooseSection,
  getProductDetailsIndustriesSection,
  getProductFeaturesSection,
  getProductHero,
  getProductInterfacesSection,
  getProductModulesSection,
  getProductOfferSection,
  getProductResultsSection,
  getProductStepsSection,
  getProductSolutionSection,
  getProductStatsSection,
  getProductTechnologiesSection,
} from '../../mocup/product-details.mock';
import { getProductFaqSection } from '../../mocup/products-list.mock';

@Component({
  selector: 'ct-product-details',
  standalone: true,
  imports: [
    ProductHeroSectionComponent,
    ProductStatsSectionComponent,
    ProductChallengesSectionComponent,
    ProductSolutionSectionComponent,
    ProductReasonsSectionComponent,
    ProductFeaturesSectionComponent,
    ProductModulesSectionComponent,
    ProductOfferSectionComponent,
    ProductResultsSectionComponent,
    ProductInterfacesSectionComponent,
    ProductStepsSectionComponent,
    ProductIndustriesSectionComponent,
    TechnologiesSectionComponent,
    FaqSectionComponent,
    TranslatePipe,
    RouterLink,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly language = inject(LanguageService);

  readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  readonly hero = computed(() => getProductHero(this.language.currentLang(), this.slug()));

  readonly stats = computed(() =>
    this.hero() ? getProductStatsSection(this.language.currentLang()) : null,
  );

  readonly challenges = computed(() =>
    this.hero() ? getProductChallengesSection(this.language.currentLang()) : null,
  );

  readonly solution = computed(() =>
    this.hero() ? getProductSolutionSection(this.language.currentLang()) : null,
  );

  readonly choose = computed(() =>
    this.hero() ? getProductChooseSection(this.language.currentLang()) : null,
  );

  readonly features = computed(() =>
    this.hero() ? getProductFeaturesSection(this.language.currentLang()) : null,
  );

  readonly modules = computed(() =>
    this.hero() ? getProductModulesSection(this.language.currentLang()) : null,
  );

  readonly offer = computed(() =>
    this.hero() ? getProductOfferSection(this.language.currentLang()) : null,
  );

  readonly results = computed(() =>
    this.hero() ? getProductResultsSection(this.language.currentLang()) : null,
  );

  readonly interfaces = computed(() =>
    this.hero() ? getProductInterfacesSection(this.language.currentLang()) : null,
  );

  readonly steps = computed(() =>
    this.hero() ? getProductStepsSection(this.language.currentLang()) : null,
  );

  readonly industries = computed(() =>
    this.hero() ? getProductDetailsIndustriesSection(this.language.currentLang()) : null,
  );

  readonly technologies = computed(() =>
    this.hero() ? getProductTechnologiesSection(this.language.currentLang()) : null,
  );

  readonly faq = computed(() =>
    this.hero() ? getProductFaqSection(this.language.currentLang()) : null,
  );

  readonly missing = computed(() =>
    this.language.currentLang() === 'en'
      ? { title: 'Product not found', back: 'Back to products' }
      : { title: 'المنتج غير متوفر', back: 'العودة إلى المنتجات' },
  );

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
