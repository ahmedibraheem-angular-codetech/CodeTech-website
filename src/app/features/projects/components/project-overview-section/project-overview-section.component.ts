import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProjectOverviewSection } from '../../model/projects.model';

@Component({
  selector: 'ct-project-overview-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './project-overview-section.component.html',
  styleUrl: './project-overview-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectOverviewSectionComponent {
  readonly data = input.required<ProjectOverviewSection>();
}
