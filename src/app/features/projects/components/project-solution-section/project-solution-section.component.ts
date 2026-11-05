import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ApiFile } from '../../../../core/api/api.model';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProjectSolution } from '../../models/projects-api.model';

/** Grid cell: either a solution card or the media preview (`solution` is null). */
interface SolutionCell {
  id: string;
  solution: ProjectSolution | null;
}

/** The preview image sits in the fifth cell of the grid. */
const MEDIA_CELL_INDEX = 4;

@Component({
  selector: 'ct-project-solution-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './project-solution-section.component.html',
  styleUrl: './project-solution-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSolutionSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly solutions = input.required<ProjectSolution[]>();
  readonly image = input<ApiFile | null>(null);
  readonly imageAlt = input<string | null>(null);
  readonly imageTitle = input<string | null>(null);

  readonly cells = computed<SolutionCell[]>(() => {
    const cells: SolutionCell[] = this.solutions().map((solution) => ({
      id: `solution-${solution.id}`,
      solution,
    }));

    if (this.image()?.url) {
      cells.splice(Math.min(MEDIA_CELL_INDEX, cells.length), 0, { id: 'media', solution: null });
    }

    return cells;
  });

}
