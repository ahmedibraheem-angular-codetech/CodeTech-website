import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ct-step-card',
  standalone: true,
  templateUrl: './step-card.component.html',
  styleUrl: './step-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepCardComponent {
  readonly number = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
