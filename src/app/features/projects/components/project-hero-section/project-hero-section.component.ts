import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ProjectHero } from '../../model/projects.model';

@Component({
  selector: 'ct-project-hero-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './project-hero-section.component.html',
  styleUrl: './project-hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHeroSectionComponent {
  readonly data = input.required<ProjectHero>();

  readonly ctaClick = output<void>();
}
