import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** `brand` = navy + blue mark. `white` = all white on dark backgrounds. */
export type CtDividerVariant = 'brand' | 'white';

@Component({
  selector: 'ct-divider',
  standalone: true,
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  readonly label = input<string>('');
  readonly variant = input<CtDividerVariant>('brand');
}
