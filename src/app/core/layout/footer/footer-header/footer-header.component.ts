import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'ct-footer-header',
  standalone: true,
  imports: [ButtonComponent, TranslatePipe],
  templateUrl: './footer-header.component.html',
  styleUrl: './footer-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterHeaderComponent {
  readonly title = input('footer.header.title');
  readonly description = input('footer.header.description');
  readonly ctaLabel = input('footer.header.cta');

  readonly ctaClicked = output<void>();

  onCtaClick(): void {
    this.ctaClicked.emit();
  }
}
