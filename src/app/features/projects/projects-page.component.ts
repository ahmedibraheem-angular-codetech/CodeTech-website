import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../core/i18n/language.service';
import { JourneySectionComponent } from '../../shared/components/journey-section/journey-section.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ProjectFeaturedSectionComponent } from './components/project-featured-section/project-featured-section.component';
import { ProjectListSectionComponent } from './components/project-list-section/project-list-section.component';
import { ProjectStatsSectionComponent } from './components/project-stats-section/project-stats-section.component';
import { ProjectFeaturedItem } from './model/projects.model';
import {
  getProjectFeaturedSection,
  getProjectJourneySection,
  getProjectListSection,
  getProjectStatsSection,
} from './mocup/projects.mock';

@Component({
  selector: 'ct-projects-page',
  standalone: true,
  imports: [
    PageHeroComponent,
    ProjectStatsSectionComponent,
    ProjectFeaturedSectionComponent,
    ProjectListSectionComponent,
    JourneySectionComponent,
    TranslatePipe,
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
  private readonly router = inject(Router);
  private readonly language = inject(LanguageService);

  readonly stats = computed(() => getProjectStatsSection(this.language.currentLang()));
  readonly featured = computed(() => getProjectFeaturedSection(this.language.currentLang()));
  readonly list = computed(() => getProjectListSection(this.language.currentLang()));
  readonly journey = computed(() => getProjectJourneySection(this.language.currentLang()));

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us');
  }

  openCaseStudy(item: ProjectFeaturedItem): void {
    void this.router.navigateByUrl(`/projects/${item.slug}`);
  }
}
