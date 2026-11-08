import { FeatureItem } from '../../../shared/components/features-section/features-section.model';

const WHY_IMAGES = '/assets/images/home/why';
const VALUES_IMAGES = '/assets/images/about';

/** Static value card — copy lives in i18n, not in the API. */
export interface AboutValueItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const VALUE_IDS = [
  ['sustainability', '55570f39f5547ac1fe1e46a416697dcc260a173d'],
  ['reliability', '25f729853a5d5f0e0ac5544cd2ef27dc9ad30415'],
  ['innovation', '8288a033ba84f7537866da224b48452dc813fc59'],
  ['excellence', '32854f3645c86eb1b82a8d963a6cd2775a20c31b'],
  ['quality', '9c8c8f790a4cdbacd7e8bc23dd5d080e5d675ca6'],
] as const;

export const ABOUT_VALUE_ITEMS: AboutValueItem[] = VALUE_IDS.map(([id, image]) => ({
  id,
  title: `about.values.items.${id}.title`,
  description: `about.values.items.${id}.description`,
  imageSrc: `${VALUES_IMAGES}/${image}.webp`,
  imageAlt: `about.values.items.${id}.imageAlt`,
}));

const FEATURE_IDS = [
  'grow',
  'understand',
  'quality',
  'product',
  'expertise',
  'connect',
  'integrate',
  'partner',
] as const;

/** Static "Why CodeTech" tiles — translation keys, not supplied by the API. */
export const ABOUT_FEATURE_ITEMS: FeatureItem[] = FEATURE_IDS.map((id) => ({
  id,
  title: `about.features.items.${id}.title`,
  short_description: `about.features.items.${id}.description`,
  image: { url: `${WHY_IMAGES}/${id}.png` },
}));
