import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../../../core/routing/bind-resolved-page';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { TermsDocumentSectionComponent } from '../../components/terms-document-section/terms-document-section.component';
import { LegalDocument } from '../../models/legal-api.model';
import { LegalService } from '../../services/legal.service';

@Component({
  selector: 'ct-terms-page',
  standalone: true,
  imports: [
    PageErrorStateComponent,
    PageHeroComponent,
    TermsDocumentSectionComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './terms-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsPageComponent {
  private readonly legalService = inject(LegalService);
  private readonly resolved = bindResolvedPage<LegalDocument>(() =>
    this.legalService.getLegalDocument('terms'),
  );

  readonly status = this.resolved.status;
  readonly document = this.resolved.page;

  retry(): void {
    this.resolved.retry();
  }
}
