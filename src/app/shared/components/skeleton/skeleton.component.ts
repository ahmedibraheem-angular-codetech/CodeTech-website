import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ct-skeleton',
  standalone: true,
  imports: [NgClass],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ct-skeleton-block]': 'block()',
  },
})
export class SkeletonComponent {
  readonly width = input('100%');
  readonly height = input('1rem');
  readonly radius = input('0.5rem');
  readonly className = input('');
  /** Fills the parent box. Use inside a sized wrapper such as a card image. */
  readonly block = input(false);
}
