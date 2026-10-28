import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {
  ButtonComponent,
  CtButtonIcon,
} from '../../../../shared/components/button/button.component';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { HomeContentMediaSection } from '../../model/home.model';

@Component({
  selector: 'ct-content-media-section',
  standalone: true,
  imports: [DividerComponent, ButtonComponent, TranslatePipe],
  templateUrl: './content-media-section.component.html',
  styleUrl: './content-media-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentMediaSectionComponent {
  readonly data = input.required<HomeContentMediaSection>();
  /** UI-only flag — not part of the API payload. */
  readonly showButton = input(false);
  readonly buttonLabel = input('');
  readonly buttonIcon = input<CtButtonIcon>('double-alt-arrow-left');

  readonly ctaClick = output<void>();

  onCtaClick(): void {
    this.ctaClick.emit();
  }
}
