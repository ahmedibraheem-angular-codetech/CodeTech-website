import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { FaqSectionComponent } from '../../../../shared/components/faq-section/faq-section.component';
import { IndustriesSectionComponent } from '../../../../shared/components/industries-section/industries-section.component';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { ProductListSectionComponent } from '../../components/product-list-section/product-list-section.component';
import { ProductReasonsSectionComponent } from '../../components/product-reasons-section/product-reasons-section.component';
import {
  getProductFaqSection,
  getProductIndustriesSection,
  getProductListSection,
  getProductReasonsSection,
} from '../../mocup/products-list.mock';

@Component({
  selector: 'ct-products-page',
  standalone: true,
  imports: [
    PageHeroComponent,
    ProductListSectionComponent,
    ProductReasonsSectionComponent,
    IndustriesSectionComponent,
    FaqSectionComponent,
    TranslatePipe,
  ],
  templateUrl: './products-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly language = inject(LanguageService);

  readonly productList = computed(() => getProductListSection(this.language.currentLang()));
  readonly productReasons = computed(() => getProductReasonsSection(this.language.currentLang()));
  readonly productIndustries = computed(() => getProductIndustriesSection(this.language.currentLang()));
  readonly productFaq = computed(() => getProductFaqSection(this.language.currentLang()));

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
    void this.router.navigateByUrl('/contact-us');
  }
}
