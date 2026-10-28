import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ct-terms-document-section',
  standalone: true,
  templateUrl: './terms-document-section.component.html',
  styleUrl: './terms-document-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsDocumentSectionComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly contentHtml = input.required<string>();

  readonly safeContent = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.contentHtml()),
  );
}
