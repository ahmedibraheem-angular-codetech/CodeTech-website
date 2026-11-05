import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../../../core/routing/bind-resolved-page';
import { FaqSectionComponent } from '../../../../shared/components/faq-section/faq-section.component';
import { FeaturesSectionComponent } from '../../../../shared/components/features-section/features-section.component';
import { IndustriesSectionComponent } from '../../../../shared/components/industries-section/industries-section.component';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { ProjectsSectionComponent } from '../../../../shared/components/projects-section/projects-section.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { SolutionsSectionComponent } from '../../components/solutions-section/solutions-section.component';
import { StagesSectionComponent } from '../../components/stages-section/stages-section.component';
import { WhyNeededSectionComponent } from '../../components/why-needed-section/why-needed-section.component';
import { ServiceDetail } from '../../models/services-api.model';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'ct-service-detail-page',
  standalone: true,
  imports: [
    FaqSectionComponent,
    FeaturesSectionComponent,
    IndustriesSectionComponent,
    PageErrorStateComponent,
    PageHeroComponent,
    ProjectsSectionComponent,
    RouterLink,
    SkeletonComponent,
    SolutionsSectionComponent,
    StagesSectionComponent,
    TranslatePipe,
    WhyNeededSectionComponent,
  ],
  templateUrl: './service-detail-page.component.html',
  styleUrl: './service-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly servicesService = inject(ServicesService);
  private readonly resolved = bindResolvedPage<ServiceDetail>(() =>
    this.servicesService.getServiceBySlug(this.route.snapshot.paramMap.get('slug') ?? ''),
  );

  readonly status = this.resolved.status;
  readonly service = this.resolved.page;

  retry(): void {
    this.resolved.retry();
  }

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
