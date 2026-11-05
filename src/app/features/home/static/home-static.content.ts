import { FeatureItem } from '../../../shared/components/features-section/features-section.model';
import { JourneyCard } from '../../../shared/components/journey-section/journey-section.model';

const JOURNEY_IMAGES = '/assets/images/fake-image';
const FEATURE_IMAGE =
  '/assets/images/fake-image/b4dae8e1c56f95eb1799534160129eacdb13b0fa.png';

/** Static journey timeline — not supplied by the API. */
export const HOME_JOURNEY_CARDS: JourneyCard[] = [
  {
    id: 'analysis',
    type: 'text',
    number: '01',
    title: 'home.journey.steps.analysis.title',
    description: 'home.journey.steps.analysis.description',
  },
  {
    id: 'analysis-image',
    type: 'image',
    imageSrc: `${JOURNEY_IMAGES}/journey-magnify.svg`,
    imageAlt: 'home.journey.steps.analysis.title',
  },
  {
    id: 'design',
    type: 'text',
    number: '03',
    title: 'home.journey.steps.design.title',
    description: 'home.journey.steps.design.description',
  },
  {
    id: 'testing',
    type: 'hybrid',
    number: '05',
    title: 'home.journey.steps.testing.title',
    description: 'home.journey.steps.testing.description',
    imageSrc: `${JOURNEY_IMAGES}/journey-step-05.webp`,
    imageAlt: 'home.journey.steps.testing.title',
  },
  {
    id: 'support',
    type: 'text',
    number: '07',
    title: 'home.journey.steps.support.title',
    description: 'home.journey.steps.support.description',
  },
  {
    id: 'planning-image',
    type: 'image',
    imageSrc: `${JOURNEY_IMAGES}/journey-stairs.svg`,
    imageAlt: 'home.journey.steps.planning.title',
  },
  {
    id: 'planning',
    type: 'text',
    number: '02',
    title: 'home.journey.steps.planning.title',
    description: 'home.journey.steps.planning.description',
  },
  {
    id: 'development',
    type: 'hybrid',
    number: '04',
    title: 'home.journey.steps.development.title',
    description: 'home.journey.steps.development.description',
    imageSrc: `${JOURNEY_IMAGES}/journey-step-04.webp`,
    imageAlt: 'home.journey.steps.development.title',
  },
  {
    id: 'launch',
    type: 'text',
    number: '06',
    title: 'home.journey.steps.launch.title',
    description: 'home.journey.steps.launch.description',
  },
  {
    id: 'launch-image',
    type: 'image',
    imageSrc: `${JOURNEY_IMAGES}/journey-arrow.svg`,
    imageAlt: 'home.journey.steps.launch.title',
  },
];

/** Static why-CodeTech tiles — not supplied by the API on home. */
export const HOME_FEATURE_ITEMS: FeatureItem[] = [
  {
    id: 'grow',
    title: 'home.features.items.grow.title',
    short_description: 'home.features.items.grow.description',
    image: { url: FEATURE_IMAGE },
  },
  {
    id: 'understand',
    title: 'home.features.items.understand.title',
    short_description: 'home.features.items.understand.description',
    image: { url: FEATURE_IMAGE },
  },
  {
    id: 'quality',
    title: 'home.features.items.quality.title',
    short_description: 'home.features.items.quality.description',
    image: { url: FEATURE_IMAGE },
  },
  {
    id: 'product',
    title: 'home.features.items.product.title',
    short_description: 'home.features.items.product.description',
    image: { url: FEATURE_IMAGE },
  },
  {
    id: 'expertise',
    title: 'home.features.items.expertise.title',
    short_description: 'home.features.items.expertise.description',
    image: { url: FEATURE_IMAGE },
  },
  {
    id: 'connect',
    title: 'home.features.items.connect.title',
    short_description: 'home.features.items.connect.description',
    image: { url: FEATURE_IMAGE },
  },
  {
    id: 'integrate',
    title: 'home.features.items.integrate.title',
    short_description: 'home.features.items.integrate.description',
    image: { url: FEATURE_IMAGE },
  },
  {
    id: 'partner',
    title: 'home.features.items.partner.title',
    short_description: 'home.features.items.partner.description',
    image: { url: FEATURE_IMAGE },
  },
];
