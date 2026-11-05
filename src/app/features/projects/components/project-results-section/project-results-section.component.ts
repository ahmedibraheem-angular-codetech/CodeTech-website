import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProjectResult } from '../../models/projects-api.model';

@Component({
  selector: 'ct-project-results-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './project-results-section.component.html',
  styleUrl: './project-results-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectResultsSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly items = input.required<ProjectResult[]>();

  /** Grid area class per card position, matching the layout in the SCSS. */
  readonly areas: readonly string[] = [
    'time',
    'performance',
    'speed',
    'productivity',
    'experience',
    'errors',
  ];
}
