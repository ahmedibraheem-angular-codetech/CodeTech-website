import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ClientsSectionComponent } from '../../shared/components/clients-section/clients-section.component';
import { FeaturesSectionComponent } from '../../shared/components/features-section/features-section.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ServicesSectionComponent } from '../../shared/components/services-section/services-section.component';
import { AboutFounderSectionComponent } from './components/founder-section/founder-section.component';
import { AboutOverviewSectionComponent } from './components/overview-section/overview-section.component';
import { AboutTeamSectionComponent } from './components/team-section/team-section.component';
import { AboutValuesSectionComponent } from './components/values-section/values-section.component';
import { AboutVisionMissionSectionComponent } from './components/vision-mission-section/vision-mission-section.component';
import { ABOUT_PAGE } from './mocup/about.mock';

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
    PageHeroComponent,
    ServicesSectionComponent,
    TranslatePipe,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  readonly about = ABOUT_PAGE;
}
