export type PageName = 'home' | 'project' | 'about' | 'contact';

export interface Project {
  id: string;
  title: string;
  cat: string;
  year: number;
  color: string;
  summary: string;
  desc: string;
  highlights: string[];
  tech: string[];
  link?: string;
}

export interface Accomplishment {
  id: string;
  year: number;
  title: string;
  desc: string;
}

export interface SpiralItem {
  kind: 'project' | 'accomplishment';
  color: string;
  year: number;
  id: string;
  title: string;
  cat?: string;
  summary?: string;
  desc?: string;
  highlights?: string[];
  tech?: string[];
  link?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  skills: Record<string, string[]>;
  contact: Record<string, string>;
  projects: Project[];
  accomplishments: Accomplishment[];
}

