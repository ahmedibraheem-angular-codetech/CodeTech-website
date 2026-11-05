import { ApiFile } from '../../../core/api/api.model';

/**
 * Tool tile. API integrations send `image`; static tool lists may send `iconSrc` and `name`.
 */
export interface TechnologyTool {
  id: string | number;
  image?: ApiFile | null;
  iconSrc?: string;
  name?: string;
}
