import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactInfo } from '../../models/contact-api.model';

interface ContactChannelCard {
  id: string;
  labelKey: string;
  value: string;
  href: string;
  iconSrc: string;
}

@Component({
  selector: 'ct-contact-channels-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact-channels-section.component.html',
  styleUrl: './contact-channels-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactChannelsSectionComponent {
  readonly contact = input.required<ContactInfo>();

  readonly items = computed<ContactChannelCard[]>(() => {
    const contact = this.contact();

    return [
      {
        id: 'phone',
        labelKey: 'contactUs.channels.items.phone.label',
        value: contact.phone,
        href: `tel:${contact.phone.replace(/\s+/g, '')}`,
        iconSrc: '/assets/icons/contact-us/phone.svg',
      },
      {
        id: 'email',
        labelKey: 'contactUs.channels.items.email.label',
        value: contact.email,
        href: `mailto:${contact.email}`,
        iconSrc: '/assets/icons/contact-us/email.svg',
      },
      {
        id: 'whatsapp',
        labelKey: 'contactUs.channels.items.whatsapp.label',
        value: contact.phone,
        href: contact.whatsapp_url,
        iconSrc: '/assets/icons/contact-us/whatsapp.svg',
      },
    ];
  });

  isExternal(href: string): boolean {
    return href.startsWith('http');
  }
}
