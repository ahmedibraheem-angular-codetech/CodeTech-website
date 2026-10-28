import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { AboutFounderSection } from '../../model/about.model';

@Component({
  selector: 'ct-about-founder-section',
  standalone: true,
  imports: [DividerComponent, TranslatePipe],
  templateUrl: './founder-section.component.html',
  styleUrl: './founder-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutFounderSectionComponent {
  readonly data = input.required<AboutFounderSection>();
  readonly label = input('');
  readonly title = input('');
}
