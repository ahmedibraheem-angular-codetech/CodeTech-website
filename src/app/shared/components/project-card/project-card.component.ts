import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectCardData } from './project-card.model';

@Component({
  selector: 'ct-project-card',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProjectCardComponent {
  readonly data = input.required<ProjectCardData>();
  readonly link = input<string>();
  readonly showFlag = input(true);
  readonly showTools = input(true);
  /** Keeps the highlighted (hover) look without hovering. */
  readonly active = input(false);

  readonly tools = computed(() => (this.showTools() ? (this.data().tools ?? []) : []));
  readonly flag = computed(() => (this.showFlag() ? this.data().flag : undefined));

  iconMask(src?: string): string {
    return src ? `url('${src}')` : '';
  }
}
