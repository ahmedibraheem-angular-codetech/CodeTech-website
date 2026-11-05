import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../../../core/routing/bind-resolved-page';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { ProjectsSectionComponent } from '../../../../shared/components/projects-section/projects-section.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { TechnologiesSectionComponent } from '../../../../shared/components/technologies-section/technologies-section.component';
import { ProjectChallengesSectionComponent } from '../../components/project-challenges-section/project-challenges-section.component';
import { ProjectFeaturesSectionComponent } from '../../components/project-features-section/project-features-section.component';
import { ProjectHeroSectionComponent } from '../../components/project-hero-section/project-hero-section.component';
import { ProjectInterfacesSectionComponent } from '../../components/project-interfaces-section/project-interfaces-section.component';
import { ProjectOverviewSectionComponent } from '../../components/project-overview-section/project-overview-section.component';
import { ProjectResultsSectionComponent } from '../../components/project-results-section/project-results-section.component';
import { ProjectScreensSectionComponent } from '../../components/project-screens-section/project-screens-section.component';
import { ProjectSolutionSectionComponent } from '../../components/project-solution-section/project-solution-section.component';
import { ProjectDetail } from '../../models/projects-api.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'ct-project-details',
  standalone: true,
  imports: [
    PageErrorStateComponent,
    ProjectHeroSectionComponent,
    ProjectOverviewSectionComponent,
    ProjectChallengesSectionComponent,
    ProjectSolutionSectionComponent,
    ProjectScreensSectionComponent,
    ProjectFeaturesSectionComponent,
    ProjectInterfacesSectionComponent,
    ProjectResultsSectionComponent,
    TechnologiesSectionComponent,
    ProjectsSectionComponent,
    RouterLink,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly projectsService = inject(ProjectsService);
  private readonly resolved = bindResolvedPage<ProjectDetail>(() =>
    this.projectsService.getProject(this.route.snapshot.paramMap.get('projectId') ?? ''),
  );

  readonly status = this.resolved.status;
  readonly project = this.resolved.page;

  retry(): void {
    this.resolved.retry();
  }

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
