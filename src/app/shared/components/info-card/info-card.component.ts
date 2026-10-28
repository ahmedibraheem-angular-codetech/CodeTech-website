import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { InfoCardData } from './info-card.model';

@Component({
  selector: 'ct-info-card',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent {
  /** Icon path, e.g. `/assets/icons/services/automation.svg`. */
  readonly icon = input<string>('');
  readonly data = input.required<InfoCardData>();
  /** CSS min-height for the card (e.g. `16rem`, `220px`). */
  readonly minHeight = input('22rem');

  readonly iconMask = computed(() => {
    const src = this.icon();
    return src ? `url('${src}')` : '';
  });
}
