import { ApiFile } from '../../../core/api/api.model';

export interface ClientLogo {
  id: number;
  logo: ApiFile | null;
}
