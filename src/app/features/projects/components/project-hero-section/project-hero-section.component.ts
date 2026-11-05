import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ProjectDetail } from '../../models/projects-api.model';

@Component({
  selector: 'ct-project-hero-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './project-hero-section.component.html',
  styleUrl: './project-hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHeroSectionComponent {
  readonly project = input.required<ProjectDetail>();
  readonly buttonLabel = input('');

  readonly ctaClick = output<void>();

  readonly imageSrc = computed(
    () => this.project().cover?.url ?? this.project().thumbnail?.url ?? '',
  );
  readonly imageAlt = computed(
    () => this.project().cover_alt ?? this.project().thumbnail_alt ?? this.project().title,
  );
}
