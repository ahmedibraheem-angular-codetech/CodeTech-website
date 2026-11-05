import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { bindResolvedPage } from '../../../../core/routing/bind-resolved-page';
import { PageHeroComponent } from '../../../../shared/components/page-hero/page-hero.component';
import { PageErrorStateComponent } from '../../../../shared/components/page-state/page-error-state.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { PrivacyDocumentSectionComponent } from '../../components/privacy-document-section/privacy-document-section.component';
import { LegalDocument } from '../../models/legal-api.model';
import { LegalService } from '../../services/legal.service';

@Component({
  selector: 'ct-privacy-page',
  standalone: true,
  imports: [
    PageErrorStateComponent,
    PageHeroComponent,
    PrivacyDocumentSectionComponent,
    SkeletonComponent,
    TranslatePipe,
  ],
  templateUrl: './privacy-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPageComponent {
  private readonly legalService = inject(LegalService);
  private readonly resolved = bindResolvedPage<LegalDocument>(() =>
    this.legalService.getLegalDocument('privacy'),
  );

  readonly status = this.resolved.status;
  readonly document = this.resolved.page;

  retry(): void {
    this.resolved.retry();
  }
}
