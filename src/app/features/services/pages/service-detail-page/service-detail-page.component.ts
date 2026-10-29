import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs';
import { FaqSectionComponent } from '../../../../shared/components/faq-section/faq-section.component';
import { FeaturesSectionComponent } from '../../../../shared/components/features-section/features-section.component';
import { IndustriesSectionComponent } from '../../../../shared/components/industries-section/industries-section.component';
import { JourneySectionComponent } from '../../../../shared/components/journey-section/journey-section.component';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { ProjectsSectionComponent } from '../../../../shared/components/projects-section/projects-section.component';
import { TechnologiesSectionComponent } from '../../../../shared/components/technologies-section/technologies-section.component';
import { SolutionsSectionComponent } from '../../components/solutions-section/solutions-section.component';
import { WhyNeededSectionComponent } from '../../components/why-needed-section/why-needed-section.component';
import { getServiceDetailBySlug } from '../../mocup/service-detail.mock';
import { ServiceDetail } from '../../model/service-detail.model';

@Component({
  selector: 'ct-service-detail-page',
  standalone: true,
  imports: [
    FaqSectionComponent,
    FeaturesSectionComponent,
    IndustriesSectionComponent,
    JourneySectionComponent,
    PageHeroComponent,
    ProjectsSectionComponent,
    SolutionsSectionComponent,
    TechnologiesSectionComponent,
    TranslatePipe,
    WhyNeededSectionComponent,
  ],
  templateUrl: './service-detail-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  readonly detail = computed<ServiceDetail | null>(() =>
    getServiceDetailBySlug(this.slug()),
  );

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
