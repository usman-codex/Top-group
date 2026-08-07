export interface Company {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  industry: string;
  logoText: string;
  logoBg: string;
  coverImage: string;
  videoUrl?: string;
  foundedYear: string;
  headquarters: string;
  employeeCount: string;
  keyServices: string[];
  techStack: string[];
  websiteUrl: string;
  stats: { label: string; value: string }[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string;
}

export interface MediaEvent {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  location: string;
  shortDesc: string;
  fullStory: string;
  coverImage: string;
  galleryImages: string[];
  keyGuests: string[];
  videoUrl?: string;
  certificates?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: 'Whitepaper' | 'Case Study' | 'Market Report' | 'Executive Guide' | 'Research Paper' | 'Webinar';
  category: string;
  industry: string;
  coverImage: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  fileSize?: string;
  pages?: string;
  downloadCount: string;
  featured?: boolean;
  description: string;
  keyTakeaways: string[];
  tableOfContents?: string[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  position: string;
  company: string;
  rating: number;
  review: string;
  avatar: string;
  hasVideo?: boolean;
}

export interface FaqItem {
  id: string;
  category: 'Company' | 'Services' | 'Pricing' | 'Projects' | 'Partnerships' | 'Support';
  question: string;
  answer: string;
}

export interface CountryImpact {
  id: string;
  country: string;
  region: string;
  status: 'Active Hub' | 'Partner Office' | 'Expansion Zone';
  clients: string;
  coordinates: { x: number; y: number }; // Percentage on map
  description: string;
}
