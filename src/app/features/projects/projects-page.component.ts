import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ApiProjectCard } from '../../core/api/api.model';
import { bindResolvedPage } from '../../core/routing/bind-resolved-page';
import { JourneySectionComponent } from '../../shared/components/journey-section/journey-section.component';
import { PageErrorStateComponent } from '../../shared/components/page-state/page-error-state.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';
import { HOME_JOURNEY_CARDS } from '../home/static/home-static.content';
import { ProjectFeaturedSectionComponent } from './components/project-featured-section/project-featured-section.component';
import { ProjectListSectionComponent } from './components/project-list-section/project-list-section.component';
import { ProjectStatsSectionComponent } from './components/project-stats-section/project-stats-section.component';
import { ProjectsPageData } from './models/projects-api.model';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'ct-projects-page',
  standalone: true,
  imports: [
    PageErrorStateComponent,
    PageHeroComponent,
    ProjectStatsSectionComponent,
    ProjectFeaturedSectionComponent,
    ProjectListSectionComponent,
    JourneySectionComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
  private readonly projectsService = inject(ProjectsService);
  private readonly router = inject(Router);
  private readonly resolved = bindResolvedPage<ProjectsPageData>(() =>
    this.projectsService.getProjectsPage(),
  );

  readonly status = this.resolved.status;
  readonly page = this.resolved.page;
  readonly journeyCards = HOME_JOURNEY_CARDS;

  retry(): void {
    this.resolved.retry();
  }

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }

  openCaseStudy(project: ApiProjectCard): void {
    void this.router.navigateByUrl(`/projects/${project.slug}`);
  }
}
