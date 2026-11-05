import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ApiFile } from '../../../../core/api/api.model';

@Component({
  selector: 'ct-product-hero-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-hero-section.component.html',
  styleUrl: './product-hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHeroSectionComponent {
  readonly title = input('');
  readonly description = input('');
  readonly image = input<ApiFile | null>(null);
  readonly imageAlt = input<string | null>(null);
  readonly imageTitle = input('');
  readonly buttonLabel = input('');

  readonly ctaClick = output<void>();
}
