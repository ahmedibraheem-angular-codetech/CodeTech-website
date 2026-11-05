import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InfoCardData } from './info-card.model';

@Component({
  selector: 'ct-info-card',
  standalone: true,
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent {
  /** Icon URL from the API or a local asset path. */
  readonly icon = input<string>('');
  readonly data = input.required<InfoCardData>();
  /** CSS min-height for the card (e.g. `16rem`, `220px`). */
  readonly minHeight = input('22rem');
}
