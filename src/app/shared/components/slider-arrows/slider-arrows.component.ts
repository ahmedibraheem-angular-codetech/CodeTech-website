import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export type CtSliderArrowVariant = 'primary';

@Component({
  selector: 'ct-slider-arrows',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './slider-arrows.component.html',
  styleUrl: './slider-arrows.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderArrowsComponent {
  readonly canPrev = input(false);
  readonly canNext = input(true);
  readonly variant = input<CtSliderArrowVariant>('primary');

  readonly prev = output<void>();
  readonly next = output<void>();

  onPrev(): void {
    if (!this.canPrev()) {
      return;
    }

    this.prev.emit();
  }

  onNext(): void {
    if (!this.canNext()) {
      return;
    }

    this.next.emit();
  }
}
