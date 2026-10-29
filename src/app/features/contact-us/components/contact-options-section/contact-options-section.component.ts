import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';

@Component({
  selector: 'ct-contact-options-section',
  standalone: true,
  imports: [ButtonComponent, DividerComponent, TranslatePipe],
  templateUrl: './contact-options-section.component.html',
  styleUrl: './contact-options-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactOptionsSectionComponent {
  readonly formClick = output<void>();

  goToForm(): void {
    this.formClick.emit();
  }
}
