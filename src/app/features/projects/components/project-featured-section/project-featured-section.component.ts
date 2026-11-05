import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { ApiProjectCard } from '../../../../core/api/api.model';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';

@Component({
  selector: 'ct-project-featured-section',
  standalone: true,
  imports: [ButtonComponent, DividerComponent],
  templateUrl: './project-featured-section.component.html',
  styleUrl: './project-featured-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFeaturedSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly ctaLabel = input('');
  readonly project = input.required<ApiProjectCard>();
  readonly ctaClick = output<ApiProjectCard>();

  readonly imageSrc = computed(
    () => this.project().cover?.url ?? this.project().thumbnail?.url ?? '',
  );
  readonly imageAlt = computed(
    () => this.project().cover_alt ?? this.project().thumbnail_alt ?? this.project().title,
  );

  onCtaClick(): void {
    this.ctaClick.emit(this.project());
  }
}
