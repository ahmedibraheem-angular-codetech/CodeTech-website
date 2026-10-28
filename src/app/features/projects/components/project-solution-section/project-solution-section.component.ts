import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProjectSolutionSection } from '../../model/projects.model';

@Component({
  selector: 'ct-project-solution-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './project-solution-section.component.html',
  styleUrl: './project-solution-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSolutionSectionComponent {
  readonly data = input.required<ProjectSolutionSection>();

  iconMask(src: string): string {
    return `url('${src}')`;
  }

  isMedia(imageSrc: string): boolean {
    return imageSrc.trim().length > 0;
  }
}
