import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ct-privacy-document-section',
  standalone: true,
  templateUrl: './privacy-document-section.component.html',
  styleUrl: './privacy-document-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyDocumentSectionComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly contentHtml = input.required<string>();

  readonly safeContent = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.contentHtml()),
  );
}
