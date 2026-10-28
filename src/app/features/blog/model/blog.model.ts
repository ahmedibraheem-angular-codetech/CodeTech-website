/** Author stored with the article. The dashboard sends the name and avatar. */
export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  avatarSrc: string;
  avatarAlt: string;
}

/** Thumbnail or cover upload: file URL, title, and alt text. */
export interface BlogImage {
  src: string;
  title: string;
  alt: string;
}

/** SEO block from the article form. */
export interface BlogSeo {
  title: string;
  slug: string;
  keywords: string;
  description: string;
}

/**
 * Dashboard create/update body.
 * Images are URLs after upload. `content` is the rich-text HTML.
 * `publishedAt` is an ISO date. `readingTime` is the selected duration label.
 */
export interface BlogArticleInput {
  title: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  excerpt: string;
  author: BlogAuthor;
  thumbnail: BlogImage;
  cover: BlogImage;
  seo: BlogSeo;
  content: string;
}

/** Article returned by the API, already localized for the active language. */
export interface BlogArticle extends BlogArticleInput {
  id: string;
  publishedAtLabel: string;
}

export interface BlogFeaturedSection {
  isPublished: boolean;
  label: string;
  title: string;
  articles: BlogArticle[];
}

/** Sidebar category for the articles grid. */
export interface BlogCategory {
  id: string;
  label: string;
}

/** All-articles block under the featured slider (Laravel GET /blog). */
export interface BlogListingSection {
  isPublished: boolean;
  label: string;
  title: string;
  allLabel: string;
  categories: BlogCategory[];
  articles: BlogArticle[];
}

/** Blog listing payload (Laravel GET /blog). */
export interface BlogPageResponse {
  featured: BlogFeaturedSection;
  listing: BlogListingSection;
}

/** Related articles under an article (Laravel GET /blog/:slug). */
export interface BlogRelatedSection {
  isPublished: boolean;
  label: string;
  title: string;
  articles: BlogArticle[];
}

/**
 * Article page payload (Laravel GET /blog/:slug).
 * `html` is the dashboard editor output for the article block.
 */
export interface BlogArticleDetails {
  html: string;
  seoTitle: string;
  related: BlogRelatedSection;
}
