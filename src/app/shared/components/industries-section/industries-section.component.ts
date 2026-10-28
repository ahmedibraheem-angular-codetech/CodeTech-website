import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../divider/divider.component';
import { IndustryItem } from './industries-section.model';

@Component({
  selector: 'ct-industries-section',
  standalone: true,
  imports: [DividerComponent, TranslatePipe],
  templateUrl: './industries-section.component.html',
  styleUrl: './industries-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndustriesSectionComponent {
  readonly label = input('');
  readonly title = input('');
  readonly items = input<IndustryItem[]>([]);
}
