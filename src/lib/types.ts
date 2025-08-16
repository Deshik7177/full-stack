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
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Workshop = {
  title: string;
  description: string;
  date: string;
  image: string;
  dataAiHint?: string;
};

export type Career = {
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  description: string;
};
