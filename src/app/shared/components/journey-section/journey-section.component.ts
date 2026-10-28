import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../divider/divider.component';
import { JourneyCard } from './journey-section.model';

@Component({
  selector: 'ct-journey-section',
  standalone: true,
  imports: [DividerComponent, TranslatePipe],
  templateUrl: './journey-section.component.html',
  styleUrl: './journey-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneySectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly cards = input<JourneyCard[]>([]);

  /** Figma lays the cards out in two rows; the first half fills the top row. */
  readonly rows = computed(() => {
    const cards = this.cards();
    const splitAt = Math.ceil(cards.length / 2);
    return [cards.slice(0, splitAt), cards.slice(splitAt)];
  });
}
