import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardData } from './project-card.model';

@Component({
  selector: 'ct-project-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly data = input.required<ProjectCardData>();
  readonly link = input<string>();
  readonly showTools = input(true);
  /** Keeps the highlighted (hover) look without hovering. */
  readonly active = input(false);

  readonly tags = computed(() => (this.showTools() ? (this.data().tags ?? []) : []));
  readonly imageSrc = computed(
    () => this.data().thumbnail?.url ?? this.data().cover?.url ?? ''
  );
  readonly imageAlt = computed(
    () => this.data().thumbnail_alt ?? this.data().cover_alt ?? this.data().title
  );
  readonly detailLink = computed(
    () => this.link() ?? `/projects/${this.data().slug}`
  );
}
