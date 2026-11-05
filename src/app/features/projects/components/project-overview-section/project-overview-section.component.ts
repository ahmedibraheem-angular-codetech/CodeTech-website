import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { ProjectOverviewCard } from '../../models/projects-api.model';

const BACKGROUND_OVERLAY = 'linear-gradient(0deg, rgba(0, 41, 81, 0.82) 0%, rgba(0, 41, 81, 0.62) 100%)';

@Component({
  selector: 'ct-project-overview-section',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './project-overview-section.component.html',
  styleUrl: './project-overview-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectOverviewSectionComponent {
  readonly label = input('');
  readonly title = input('');
  /** API order: client, background, reason, goal, audience. */
  readonly cards = input.required<ProjectOverviewCard[]>();

  readonly client = computed(() => this.cards()[0] ?? null);
  readonly background = computed(() => this.cards()[1] ?? null);
  readonly reason = computed(() => this.cards()[2] ?? null);
  readonly goal = computed(() => this.cards()[3] ?? null);
  readonly audience = computed(() => this.cards()[4] ?? null);

  readonly goalImage = computed(() => {
    const url = this.goal()?.background?.url;
    return url ? `url('${url}')` : null;
  });

  readonly backgroundImage = computed(() => {
    const url = this.background()?.background?.url;
    return url ? `${BACKGROUND_OVERLAY}, url('${url}')` : null;
  });
}
