import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../core/routing/bind-resolved-page';
import { ClientsSectionComponent } from '../../shared/components/clients-section/clients-section.component';
import { FeaturesSectionComponent } from '../../shared/components/features-section/features-section.component';
import { PageErrorStateComponent } from '../../shared/components/page-state/page-error-state.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ServicesSectionComponent } from '../../shared/components/services-section/services-section.component';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';
import { AboutFounderSectionComponent } from './components/founder-section/founder-section.component';
import { AboutOverviewSectionComponent } from './components/overview-section/overview-section.component';
import { AboutTeamSectionComponent } from './components/team-section/team-section.component';
import { AboutValuesSectionComponent } from './components/values-section/values-section.component';
import { AboutVisionMissionSectionComponent } from './components/vision-mission-section/vision-mission-section.component';
import { AboutPageData } from './models/about-api.model';
import { AboutService } from './services/about.service';
import { ABOUT_FEATURE_ITEMS, ABOUT_VALUE_ITEMS } from './static/about-static.content';

@Component({
  selector: 'ct-about-page',
  standalone: true,
  imports: [
    AboutFounderSectionComponent,
    AboutOverviewSectionComponent,
    AboutTeamSectionComponent,
    AboutValuesSectionComponent,
    AboutVisionMissionSectionComponent,
    ClientsSectionComponent,
    FeaturesSectionComponent,
    PageErrorStateComponent,
    PageHeroComponent,
    ServicesSectionComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  private readonly aboutService = inject(AboutService);
  private readonly router = inject(Router);
  private readonly resolved = bindResolvedPage<AboutPageData>(() => this.aboutService.getAboutPage());

  readonly status = this.resolved.status;
  readonly page = this.resolved.page;
  readonly featureItems = ABOUT_FEATURE_ITEMS;
  readonly valueItems = ABOUT_VALUE_ITEMS;

  retry(): void {
    this.resolved.retry();
  }

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
