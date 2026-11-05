import { ApiFile } from '../../../core/api/api.model';

/** Sector card from the Laravel API (`id`, `image`). */
export interface IndustryItem {
  id: number;
  image: ApiFile | null;
}
