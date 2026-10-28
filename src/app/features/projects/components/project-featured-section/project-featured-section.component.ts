import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProjectFeaturedItem, ProjectFeaturedSection } from '../../model/projects.model';

@Component({
  selector: 'ct-project-featured-section',
  standalone: true,
  imports: [ButtonComponent, DividerComponent],
  templateUrl: './project-featured-section.component.html',
  styleUrl: './project-featured-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFeaturedSectionComponent {
  readonly data = input.required<ProjectFeaturedSection>();
  readonly ctaClick = output<ProjectFeaturedItem>();

  onCtaClick(item: ProjectFeaturedItem): void {
    this.ctaClick.emit(item);
  }
}
