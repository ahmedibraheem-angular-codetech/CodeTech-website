export type JourneyCardType = 'text' | 'image' | 'hybrid';

export interface JourneyCard {
  id: string;
  type: JourneyCardType;
  number?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}
