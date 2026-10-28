import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { StepCardComponent } from '../../../../shared/components/step-card/step-card.component';

@Component({
  selector: 'ct-contact-steps-section',
  standalone: true,
  imports: [DividerComponent, StepCardComponent, TranslatePipe],
  templateUrl: './contact-steps-section.component.html',
  styleUrl: './contact-steps-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactStepsSectionComponent {
  readonly steps = ['01', '02', '03', '04', '05'] as const;
}
