export interface Spoke {
  id: string;
  name: string;
  slug: string;
  domain: string;
  url: string;
  description: string;
  longDescription: string;
  color: string;
  colorLight: string;
  iconName: string;
  features: string[];
  status: 'live' | 'coming-soon' | 'beta';
  vertical: string;
  verticalFi: string;
  ctaText: string;
  stats?: { label: string; value: string }[];
}

export interface LifeEvent {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  iconName: string;
  color: string;
  colorLight: string;
  relatedSpokeIds: string[];
  steps: LifeEventStep[];
  tips: string[];
  /**
   * Optional long-form content blocks rendered after the step-by-step journey.
   * Use for high-intent pages (e.g. Google Ads destinations) where 1 500+ words
   * of genuine depth materially improves Quality Score and conversion rate.
   */
  content?: LifeEventContentBlock[];
  /** Optional FAQ Schema.org entries specific to this life event. */
  faqs?: LifeEventFaq[];
}

export interface LifeEventStep {
  order: number;
  title: string;
  description: string;
  spokeId: string;
  actionText: string;
}

export type LifeEventContentBlock =
  | {
      type: 'section';
      heading: string;
      paragraphs: string[];
    }
  | {
      type: 'section-with-list';
      heading: string;
      paragraphs: string[];
      listHeading?: string;
      listItems: string[];
    }
  | {
      type: 'table';
      heading: string;
      intro?: string;
      columns: string[];
      rows: string[][];
      footnote?: string;
    };

export interface LifeEventFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  author: string;
  tags: string[];
  content: string;
  relatedSpokeIds: string[];
}

export interface BlogCategory {
  id: string;
  label: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  hasDropdown?: boolean;
}

export interface VerticalContent {
  spokeId: string;
  howItWorks: { step: number; title: string; description: string }[];
  detailedFeatures: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}
