import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProjectResultsSection } from '../../model/projects.model';

@Component({
  selector: 'ct-project-results-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './project-results-section.component.html',
  styleUrl: './project-results-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectResultsSectionComponent {
  readonly data = input.required<ProjectResultsSection>();
}
