export interface WMSModule {
  name: string;
  category: 'Inbound' | 'Outbound' | 'Storage & Inventory' | 'System Core';
  description: string;
  details: string[];
}

export interface WMSRole {
  role: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  techStack: string[];
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  architectureDescription: string;
  modules?: WMSModule[];
  userRoles?: WMSRole[];
  engineeringChallenges: string[];
  contributions: string[];
  outcome: string;
  isFeatured: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  isPrimary?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface EngineeringFocus {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  highlights: string[];
  isPrimary?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  credentialUrl?: string;
}
