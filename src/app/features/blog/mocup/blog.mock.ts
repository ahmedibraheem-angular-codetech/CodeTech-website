import {
  BlogArticle,
  BlogArticleDetails,
  BlogCategory,
  BlogPageResponse,
} from '../model/blog.model';
import articleEditor from './article-details.json';

const COVER = '/assets/images/fake-image/blog1.png';
const THUMB = '/assets/images/fake-image/blog2.png';
const AVATAR = '/assets/images/fake-image/team-member.webp';

const DATE_KEY = 'blog.mock.date';
const TIME_KEY = 'blog.mock.time';
const AUTHOR_NAME = 'blog.mock.author.name';
const AUTHOR_ROLE = 'blog.mock.author.role';
const AUTHOR_BIO = 'blog.mock.author.bio';
const AUTHOR_ALT = 'blog.mock.author.alt';
const IMAGE_ALT = 'blog.mock.imageAlt';
const STORY = 'blog.mock.story';

interface ArticleCopy {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: 'cover' | 'thumb';
  keywords: string;
  seoDescription: string;
}

function createArticle(copy: ArticleCopy): BlogArticle {
  const src = copy.image === 'cover' ? COVER : THUMB;

  return {
    id: copy.id,
    title: copy.title,
    category: copy.category,
    publishedAt: '2026-09-25',
    publishedAtLabel: DATE_KEY,
    readingTime: TIME_KEY,
    excerpt: copy.excerpt,
    author: {
      name: AUTHOR_NAME,
      role: AUTHOR_ROLE,
      bio: AUTHOR_BIO,
      avatarSrc: AVATAR,
      avatarAlt: AUTHOR_ALT,
    },
    thumbnail: {
      src,
      title: copy.title,
      alt: IMAGE_ALT,
    },
    cover: {
      src,
      title: copy.title,
      alt: IMAGE_ALT,
    },
    seo: {
      title: copy.title,
      slug: copy.slug,
      keywords: copy.keywords,
      description: copy.seoDescription,
    },
    content: STORY,
  };
}

const ARTICLES: ArticleCopy[] = [
  {
    id: 'article-custom-growth',
    slug: 'custom-digital-solutions',
    title: 'blog.mock.growth.title',
    category: 'blog.mock.growth.category',
    excerpt: 'blog.mock.growth.excerpt',
    image: 'cover',
    keywords: 'blog.mock.growth.keywords',
    seoDescription: 'blog.mock.growth.seo',
  },
  {
    id: 'article-analysis-1',
    slug: 'systems-requirements-analysis',
    title: 'blog.mock.compact.title',
    category: 'blog.mock.compact.category',
    excerpt: 'blog.mock.compact.excerpt',
    image: 'cover',
    keywords: 'blog.mock.compact.keywords',
    seoDescription: 'blog.mock.compact.seo',
  },
  {
    id: 'article-analysis-2',
    slug: 'requirements-workshop',
    title: 'blog.mock.compact.title',
    category: 'blog.mock.compact.category',
    excerpt: 'blog.mock.compact.excerpt',
    image: 'thumb',
    keywords: 'blog.mock.compact.keywords',
    seoDescription: 'blog.mock.compact.seo',
  },
  {
    id: 'article-analysis-3',
    slug: 'government-platforms',
    title: 'blog.mock.compact.title',
    category: 'blog.mock.compact.category',
    excerpt: 'blog.mock.compact.excerpt',
    image: 'cover',
    keywords: 'blog.mock.compact.keywords',
    seoDescription: 'blog.mock.compact.seo',
  },
  {
    id: 'article-analysis-4',
    slug: 'service-blueprints',
    title: 'blog.mock.compact.title',
    category: 'blog.mock.compact.category',
    excerpt: 'blog.mock.compact.excerpt',
    image: 'thumb',
    keywords: 'blog.mock.compact.keywords',
    seoDescription: 'blog.mock.compact.seo',
  },
  {
    id: 'article-government-trust',
    slug: 'trusted-government-platforms',
    title: 'blog.mock.trust.title',
    category: 'blog.mock.compact.category',
    excerpt: 'blog.mock.trust.excerpt',
    image: 'thumb',
    keywords: 'blog.mock.trust.keywords',
    seoDescription: 'blog.mock.trust.seo',
  },
  {
    id: 'article-analysis-5',
    slug: 'operating-procedures',
    title: 'blog.mock.compact.title',
    category: 'blog.mock.compact.category',
    excerpt: 'blog.mock.compact.excerpt',
    image: 'thumb',
    keywords: 'blog.mock.compact.keywords',
    seoDescription: 'blog.mock.compact.seo',
  },
  {
    id: 'article-analysis-6',
    slug: 'data-requirements',
    title: 'blog.mock.compact.title',
    category: 'blog.mock.compact.category',
    excerpt: 'blog.mock.compact.excerpt',
    image: 'cover',
    keywords: 'blog.mock.compact.keywords',
    seoDescription: 'blog.mock.compact.seo',
  },
  {
    id: 'article-analysis-7',
    slug: 'stakeholder-interviews',
    title: 'blog.mock.compact.title',
    category: 'blog.mock.compact.category',
    excerpt: 'blog.mock.compact.excerpt',
    image: 'thumb',
    keywords: 'blog.mock.compact.keywords',
    seoDescription: 'blog.mock.compact.seo',
  },
  {
    id: 'article-analysis-8',
    slug: 'acceptance-criteria',
    title: 'blog.mock.compact.title',
    category: 'blog.mock.compact.category',
    excerpt: 'blog.mock.compact.excerpt',
    image: 'cover',
    keywords: 'blog.mock.compact.keywords',
    seoDescription: 'blog.mock.compact.seo',
  },
];

const LISTING_CATEGORIES: BlogCategory[] = [
  { id: 'digital', label: 'blog.mock.listing.categories.digital' },
  { id: 'software', label: 'blog.mock.listing.categories.software' },
  { id: 'ux', label: 'blog.mock.listing.categories.ux' },
  { id: 'ai', label: 'blog.mock.listing.categories.ai' },
  { id: 'cloud', label: 'blog.mock.listing.categories.cloud' },
  { id: 'projects', label: 'blog.mock.listing.categories.projects' },
  { id: 'news', label: 'blog.mock.listing.categories.news' },
];

const LISTING_ARTICLES: BlogArticle[] = Array.from({ length: 27 }, (_, index) => {
  const category = LISTING_CATEGORIES[index % LISTING_CATEGORIES.length];

  return createArticle({
    id: `listing-article-${index + 1}`,
    slug: `listing-article-${index + 1}`,
    title: 'blog.mock.compact.title',
    category: category.label,
    excerpt: 'blog.mock.compact.excerpt',
    image: index % 2 === 0 ? 'thumb' : 'cover',
    keywords: 'blog.mock.compact.keywords',
    seoDescription: 'blog.mock.compact.seo',
  });
});

/** One blog payload. Text fields are translation keys; the active language fills them in. */
export const BLOG_PAGE: BlogPageResponse = {
  featured: {
    isPublished: true,
    label: 'blog.mock.label',
    title: 'blog.mock.title',
    articles: ARTICLES.map((article) => createArticle(article)),
  },
  listing: {
    isPublished: true,
    label: 'blog.mock.listing.label',
    title: 'blog.mock.listing.title',
    allLabel: 'blog.mock.listing.all',
    categories: LISTING_CATEGORIES,
    articles: LISTING_ARTICLES,
  },
};

export function getBlogArticle(slug: string): BlogArticle | null {
  const articles = [...BLOG_PAGE.featured.articles, ...BLOG_PAGE.listing.articles];
  return articles.find((article) => article.seo.slug === slug) ?? null;
}

const RELATED_LIMIT = 9;

function relatedArticles(current: BlogArticle): BlogArticle[] {
  const articles = [...BLOG_PAGE.featured.articles, ...BLOG_PAGE.listing.articles];
  const others = articles.filter((article) => article.id !== current.id);
  const sameCategory = others.filter((article) => article.category === current.category);
  const rest = others.filter((article) => article.category !== current.category);

  return [...sameCategory, ...rest].slice(0, RELATED_LIMIT);
}

type ArticleLang = 'ar' | 'en';

/** Article editor HTML plus the related slider. The HTML matches the dashboard payload. */
export function getBlogArticleDetails(slug: string, lang: ArticleLang): BlogArticleDetails | null {
  const article = getBlogArticle(slug);
  if (!article) {
    return null;
  }

  const editor = articleEditor[lang];

  return {
    html: editor.html,
    seoTitle: editor.seoTitle,
    related: {
      isPublished: true,
      label: 'blog.mock.related.label',
      title: 'blog.mock.related.title',
      articles: relatedArticles(article),
    },
  };
}
