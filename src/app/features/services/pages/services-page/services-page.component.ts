import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../../../core/routing/bind-resolved-page';
import { FaqSectionComponent } from '../../../../shared/components/faq-section/faq-section.component';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { ServicesSectionComponent } from '../../../../shared/components/services-section/services-section.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { ServicesPageData } from '../../models/services-api.model';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'ct-services-page',
  standalone: true,
  imports: [
    FaqSectionComponent,
    PageErrorStateComponent,
    PageHeroComponent,
    ServicesSectionComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './services-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPageComponent {
  private readonly servicesService = inject(ServicesService);
  private readonly router = inject(Router);
  private readonly resolved = bindResolvedPage<ServicesPageData>(() =>
    this.servicesService.getServicesPage(),
  );

  readonly status = this.resolved.status;
  readonly page = this.resolved.page;

  retry(): void {
    this.resolved.retry();
  }

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
