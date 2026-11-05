import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../../../core/routing/bind-resolved-page';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { FaqTabsSectionComponent } from '../../components/faq-tabs-section/faq-tabs-section.component';
import { FaqPageData } from '../../models/legal-api.model';
import { LegalService } from '../../services/legal.service';

@Component({
  selector: 'ct-faq-page',
  standalone: true,
  imports: [
    FaqTabsSectionComponent,
    PageErrorStateComponent,
    PageHeroComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './faq-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqPageComponent {
  private readonly legalService = inject(LegalService);
  private readonly resolved = bindResolvedPage<FaqPageData>(() => this.legalService.getFaqPage());

  readonly status = this.resolved.status;
  readonly page = this.resolved.page;

  retry(): void {
    this.resolved.retry();
  }
}
