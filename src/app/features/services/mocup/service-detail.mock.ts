import { ServiceDetail } from '../model/service-detail.model';
import { ANALYSIS_DETAIL } from './analysis.detail.mock';
import { AUTOMATION_DETAIL } from './automation.detail.mock';
import { BRANDING_DETAIL } from './branding.detail.mock';
import { CLOUD_DETAIL } from './cloud.detail.mock';
import { INTEGRATION_DETAIL } from './integration.detail.mock';
import { MOBILE_DETAIL } from './mobile.detail.mock';
import { SUPPORT_DETAIL } from './support.detail.mock';
import { SYSTEMS_DETAIL } from './systems.detail.mock';
import { UX_DETAIL } from './ux.detail.mock';
import { WEBSITES_DETAIL } from './websites.detail.mock';

/** Temporary mock map for GET /api/services/{slug}. */
export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  automation: AUTOMATION_DETAIL,
  support: SUPPORT_DETAIL,
  systems: SYSTEMS_DETAIL,
  websites: WEBSITES_DETAIL,
  mobile: MOBILE_DETAIL,
  analysis: ANALYSIS_DETAIL,
  ux: UX_DETAIL,
  branding: BRANDING_DETAIL,
  cloud: CLOUD_DETAIL,
  integration: INTEGRATION_DETAIL,
};

export function getServiceDetailBySlug(slug: string): ServiceDetail | null {
  const detail = SERVICE_DETAILS[slug];
  if (!detail || !detail.isPublished) {
    return null;
  }
  return detail;
}
