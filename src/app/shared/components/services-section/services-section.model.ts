import { ApiFile } from '../../../core/api/api.model';

/** Service card from Laravel API lists (home, about, services page). */
export interface ServiceCardItem {
  id: number;
  slug: string | null;
  name: string;
  description: string;
  icon: ApiFile | null;
}
