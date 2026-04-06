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
}

export interface LifeEventStep {
  order: number;
  title: string;
  description: string;
  spokeId: string;
  actionText: string;
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
