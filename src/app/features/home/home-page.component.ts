import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../core/routing/bind-resolved-page';
import { ClientsSectionComponent } from '../../shared/components/clients-section/clients-section.component';
import { FaqSectionComponent } from '../../shared/components/faq-section/faq-section.component';
import { FeaturesSectionComponent } from '../../shared/components/features-section/features-section.component';
import { JourneySectionComponent } from '../../shared/components/journey-section/journey-section.component';
import { PageErrorStateComponent } from '../../shared/components/page-state/page-error-state.component';
import { ProjectsSectionComponent } from '../../shared/components/projects-section/projects-section.component';
import { ServicesSectionComponent } from '../../shared/components/services-section/services-section.component';
import { ContentMediaSectionComponent } from './components/content-media-section/content-media-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { HomePageData } from './models/home-api.model';
import { HomeService } from './services/home.service';
import { HOME_FEATURE_ITEMS, HOME_JOURNEY_CARDS } from './static/home-static.content';

@Component({
  selector: 'ct-home-page',
  standalone: true,
  imports: [
    ClientsSectionComponent,
    ContentMediaSectionComponent,
    FaqSectionComponent,
    FeaturesSectionComponent,
    HeroSectionComponent,
    JourneySectionComponent,
    PageErrorStateComponent,
    ProductsSectionComponent,
    ProjectsSectionComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    TranslatePipe,
    VideoSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private readonly homeService = inject(HomeService);
  private readonly router = inject(Router);
  private readonly resolved = bindResolvedPage<HomePageData>(() => this.homeService.getHomePage());

  readonly status = this.resolved.status;
  readonly page = this.resolved.page;
  readonly journeyCards = HOME_JOURNEY_CARDS;
  readonly featureItems = HOME_FEATURE_ITEMS;

  retry(): void {
    this.resolved.retry();
  }

  goAbout(): void {
    void this.router.navigateByUrl('/about');
  }
}
