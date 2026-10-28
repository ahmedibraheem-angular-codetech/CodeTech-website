/** Card payload for the shared services slider (UI input, not an API envelope). */
export interface ServiceCardItem {
  id: string;
  /** Route segment for `/services/:slug`. */
  slug: string;
  icon: string;
  title: string;
  description: string;
}
