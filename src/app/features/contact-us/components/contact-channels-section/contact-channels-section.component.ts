import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import type { ContactChannel } from '../../model/contact-channel.model';

@Component({
  selector: 'ct-contact-channels-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact-channels-section.component.html',
  styleUrl: './contact-channels-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactChannelsSectionComponent {
  readonly items = input.required<ContactChannel[]>();

  isExternal(href: string): boolean {
    return href.startsWith('http');
  }
}
