export interface NavItem {
  id: string;
  label: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  isFullWidth?: boolean;
}

export interface BrandingStats {
  label: string;
  value: string;
}

export interface CaseStudy {
  client: string;
  role: string;
  description: string;
  colors: string[];
}