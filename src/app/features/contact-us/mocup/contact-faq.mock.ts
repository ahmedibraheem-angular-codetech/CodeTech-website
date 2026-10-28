import type { FaqItem } from '../../../shared/components/faq-section/faq-section.model';

/** Temporary mock matching the contact FAQ endpoint. */
export const CONTACT_FAQ: FaqItem[] = [
  {
    id: 'response',
    number: '01',
    question: 'contactUs.faq.items.response.question',
    answer: 'contactUs.faq.items.response.answer',
  },
  {
    id: 'channels',
    number: '02',
    question: 'contactUs.faq.items.channels.question',
    answer: 'contactUs.faq.items.channels.answer',
  },
  {
    id: 'start',
    number: '03',
    question: 'contactUs.faq.items.start.question',
    answer: 'contactUs.faq.items.start.answer',
  },
  {
    id: 'consult',
    number: '04',
    question: 'contactUs.faq.items.consult.question',
    answer: 'contactUs.faq.items.consult.answer',
  },
  {
    id: 'remote',
    number: '05',
    question: 'contactUs.faq.items.remote.question',
    answer: 'contactUs.faq.items.remote.answer',
  },
];
