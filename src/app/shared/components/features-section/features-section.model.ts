import { ApiFile } from '../../../core/api/api.model';

/** Feature tile from the Laravel API (`id`, `title`, `short_description`, `image`). */
export interface FeatureItem {
  id: number | string;
  title: string;
  short_description: string;
  image: Pick<ApiFile, 'url'> | null;
}
