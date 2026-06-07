export type PageName = 'home' | 'project' | 'accomplishment' | 'about' | 'contact' | 'expro' | 'expro-detail';

export interface PresentationBlock {
  type: 'text' | 'image';
  content: string; // texte ou URL/chemin de l'image
  caption?: string;
}

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
  presentation?: PresentationBlock[];
}

export interface Accomplishment {
  id: string;
  year: number;
  title: string;
  shortDesc: string;
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
  shortDesc?: string;
  desc?: string;
  highlights?: string[];
  tech?: string[];
  link?: string;
  presentation?: PresentationBlock[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'stage' | 'alternance' | 'emploi';
  color: string;
  icon: string;
  summary: string;
  tech: string[];
  missions: string[];
  achievements: string[];
  linkedProjectId?: string;
}

export interface ExperienceDetail extends Experience {
  context: string;
  problems: string[];
  solutions: string[];
  results: string[];
  feedback: string;
}

export interface MilestoneConfig {
  experienceId: string;
  pathFraction: number;
  svgX: number;
  svgY: number;
}

export interface PortfolioData {
  name: string;
  surname: string;
  title: string;
  tagline: string;
  bio: string;
  skills: Record<string, string[]>;
  contact: Record<string, string>;
  projects: Project[];
  accomplishments: Accomplishment[];
}

