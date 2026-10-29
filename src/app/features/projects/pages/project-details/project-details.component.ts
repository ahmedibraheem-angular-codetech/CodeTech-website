import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { LanguageService } from '../../../../core/i18n/language.service';
import { ProjectsSectionComponent } from '../../../../shared/components/projects-section/projects-section.component';
import { TechnologiesSectionComponent } from '../../../../shared/components/technologies-section/technologies-section.component';
import { ProjectChallengesSectionComponent } from '../../components/project-challenges-section/project-challenges-section.component';
import { ProjectFeaturesSectionComponent } from '../../components/project-features-section/project-features-section.component';
import { ProjectHeroSectionComponent } from '../../components/project-hero-section/project-hero-section.component';
import { ProjectInterfacesSectionComponent } from '../../components/project-interfaces-section/project-interfaces-section.component';
import { ProjectOverviewSectionComponent } from '../../components/project-overview-section/project-overview-section.component';
import { ProjectResultsSectionComponent } from '../../components/project-results-section/project-results-section.component';
import { ProjectScreensSectionComponent } from '../../components/project-screens-section/project-screens-section.component';
import { ProjectSolutionSectionComponent } from '../../components/project-solution-section/project-solution-section.component';
import {
  getProjectChallengesSection,
  getProjectFeaturesSection,
  getProjectHero,
  getProjectInterfacesSection,
  getProjectOverviewSection,
  getProjectResultsSection,
  getProjectScreensSection,
  getProjectSimilarSection,
  getProjectSolutionSection,
  getProjectTechnologiesSection,
} from '../../mocup/project-details.mock';

@Component({
  selector: 'ct-project-details',
  standalone: true,
  imports: [
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
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly language = inject(LanguageService);

  readonly projectId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('projectId') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('projectId') ?? '' },
  );

  readonly hero = computed(() =>
    getProjectHero(this.language.currentLang(), this.projectId()),
  );

  readonly overview = computed(() =>
    this.hero()
      ? getProjectOverviewSection(this.language.currentLang(), this.projectId())
      : null,
  );

  readonly challenges = computed(() =>
    this.hero()
      ? getProjectChallengesSection(this.language.currentLang(), this.projectId())
      : null,
  );

  readonly solution = computed(() =>
    this.hero()
      ? getProjectSolutionSection(this.language.currentLang(), this.projectId())
      : null,
  );

  readonly features = computed(() =>
    this.hero()
      ? getProjectFeaturesSection(this.language.currentLang(), this.projectId())
      : null,
  );

  readonly screens = computed(() =>
    this.hero()
      ? getProjectScreensSection(this.language.currentLang(), this.projectId())
      : null,
  );

  readonly interfaces = computed(() =>
    this.hero()
      ? getProjectInterfacesSection(this.language.currentLang(), this.projectId())
      : null,
  );

  readonly results = computed(() =>
    this.hero()
      ? getProjectResultsSection(this.language.currentLang(), this.projectId())
      : null,
  );

  readonly technologies = computed(() =>
    this.hero()
      ? getProjectTechnologiesSection(this.language.currentLang(), this.projectId())
      : null,
  );

  readonly similar = computed(() =>
    this.hero()
      ? getProjectSimilarSection(this.language.currentLang(), this.projectId())
      : null,
  );

  readonly missing = computed(() =>
    this.language.currentLang() === 'en'
      ? { title: 'Project not found', back: 'Back to projects' }
      : { title: 'المشروع غير متوفر', back: 'العودة إلى المشاريع' },
  );

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
