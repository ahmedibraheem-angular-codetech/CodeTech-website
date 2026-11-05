import { ApiFile, ApiProjectTag } from '../../../core/api/api.model';

export interface ProjectCardData {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: ApiFile | null;
  thumbnail_alt: string | null;
  cover?: ApiFile | null;
  cover_alt?: string | null;
  tags?: ApiProjectTag[];
}
