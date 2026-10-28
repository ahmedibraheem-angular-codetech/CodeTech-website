import type { ContactChannel, ContactCoordinates } from '../model/contact-channel.model';

/** Temporary mock matching the contact channels endpoint. */
export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'phone',
    label: 'contactUs.channels.items.phone.label',
    value: 'contactUs.channels.items.phone.value',
    href: 'tel:+966552983389',
    iconSrc: '/assets/icons/contact-us/phone.svg',
  },
  {
    id: 'email',
    label: 'contactUs.channels.items.email.label',
    value: 'contactUs.channels.items.email.value',
    href: 'mailto:ceo@codetech-sa.com',
    iconSrc: '/assets/icons/contact-us/email.svg',
  },
  {
    id: 'whatsapp',
    label: 'contactUs.channels.items.whatsapp.label',
    value: 'contactUs.channels.items.whatsapp.value',
    href: 'https://wa.me/966552983389',
    iconSrc: '/assets/icons/contact-us/whatsapp.svg',
  },
];

/** Temporary office coordinates for the contact map. Swap for the API value later. */
export const CONTACT_COORDINATES: ContactCoordinates = {
  latitude: 24.7136,
  longitude: 46.6753,
};
