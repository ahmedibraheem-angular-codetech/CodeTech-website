import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ClientsSectionComponent } from '../../shared/components/clients-section/clients-section.component';
import { FaqSectionComponent } from '../../shared/components/faq-section/faq-section.component';
import { FeaturesSectionComponent } from '../../shared/components/features-section/features-section.component';
import { JourneySectionComponent } from '../../shared/components/journey-section/journey-section.component';
import { ContentMediaSectionComponent } from './components/content-media-section/content-media-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { ProjectsSectionComponent } from '../../shared/components/projects-section/projects-section.component';
import { ServicesSectionComponent } from '../../shared/components/services-section/services-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { HOME_PAGE } from './mocup/home.mock';

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
  readonly home = HOME_PAGE;
}
