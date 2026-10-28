import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FeatureCardData } from './feature-card.model';

@Component({
  selector: 'ct-feature-card',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardComponent {
  readonly data = input.required<FeatureCardData>();
}
