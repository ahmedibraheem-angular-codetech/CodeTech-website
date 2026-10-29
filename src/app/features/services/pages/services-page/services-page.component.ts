import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FaqSectionComponent } from '../../../../shared/components/faq-section/faq-section.component';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { ServicesSectionComponent } from '../../../../shared/components/services-section/services-section.component';
import { SERVICES_LIST } from '../../mocup/services-list.mock';

@Component({
  selector: 'ct-services-page',
  standalone: true,
  imports: [
    FaqSectionComponent,
    PageHeroComponent,
    ServicesSectionComponent,
    TranslatePipe,
  ],
  templateUrl: './services-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPageComponent {
  private readonly router = inject(Router);

  readonly servicesList = SERVICES_LIST;

  goToContact(): void {
    void this.router.navigateByUrl('/contact-us#contact-form');
  }
}
