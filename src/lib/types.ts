
import type { LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  dataAiHint?: string;
};

export type Service = {
  title:string;
  slug: string;
  description: string;
  longDescription: string;
  images?: { url: string; dataAiHint?: string }[];
  icon: LucideIcon;
  tagline: string;
  category: 'Technology & Innovation' | 'Creative Solutions' | 'Education & Training';
};

export type Workshop = {
  title: string;
  description: string;
  date: string;
  image: string;
  registrationUrl: string;
  dataAiHint?: string;
};

export type Career = {
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  description: string;
  applyUrl: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  dataAiHint?: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
};

export type WhyJoinUsItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};
