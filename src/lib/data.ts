import type { Project, Service, Workshop, Career } from "@/lib/types";
import { Code, LayoutTemplate, Palette, Rocket, Briefcase, Bot } from "lucide-react";

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A cutting-edge e-commerce platform with AI-powered recommendations.",
    image: "/images/project-alpha.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "ecommerce website"
  },
  {
    title: "Project Beta",
    description: "A collaborative project management tool for remote teams.",
    image: "/images/project-beta.png",
    technologies: ["React", "Firebase", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "dashboard interface"
  },
  {
    title: "Project Gamma",
    description: "A mobile-first social networking app for creative professionals.",
    image: "/images/project-gamma.png",
    technologies: ["React Native", "Node.js", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "mobile app"
  },
  {
    title: "Project Delta",
    description: "An IoT platform for smart home automation and monitoring.",
    image: "/images/project-delta.png",
    technologies: ["Python", "MQTT", "Grafana"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "smart home"
  },
];

export const services: Service[] = [
  {
    title: "Web Development",
    description: "We build modern, responsive, and high-performance websites and web applications using the latest technologies like Next.js, React, and TypeScript.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Our design team creates intuitive, engaging, and beautiful user interfaces that provide a seamless user experience across all devices.",
    icon: Palette,
  },
  {
    title: "Digital Strategy",
    description: "We help you define your digital strategy, from product discovery and market research to launch and post-launch optimization.",
    icon: Rocket,
  },
  {
    title: "MVP Development",
    description: "Launch your product idea quickly with a Minimum Viable Product. We help startups validate their concepts and iterate fast.",
    icon: Briefcase,
  },
  {
    title: "AI Integration",
    description: "Leverage the power of Artificial Intelligence. We integrate AI models and services to make your applications smarter.",
    icon: Bot,
  },
  {
    title: "Brand Identity",
    description: "We help you build a strong brand identity with a memorable logo, color palette, and typography that resonates with your audience.",
    icon: LayoutTemplate,
  },
];

export const workshops: Workshop[] = [
  {
    title: "Introduction to Next.js 14",
    description: "Learn the fundamentals of the latest version of Next.js, including the App Router, Server Components, and Server Actions.",
    date: "2024-09-15",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "coding workshop"
  },
  {
    title: "Advanced Tailwind CSS",
    description: "Master the art of utility-first CSS and create beautiful, custom designs without writing a single line of custom CSS.",
    date: "2024-10-20",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "design workshop"
  },
  {
    title: "UI/UX Design for Developers",
    description: "A crash course in design principles, user research, and prototyping for developers who want to build better products.",
    date: "2024-11-10",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "team collaboration"
  },
];

export const careers: Career[] = [
  {
    title: "Senior Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "We are looking for an experienced Frontend Developer proficient in React and TypeScript to join our team and build amazing user experiences.",
  },
  {
    title: "UI/UX Designer",
    location: "New York, NY",
    type: "Full-time",
    description: "Join our creative team to design intuitive and visually appealing interfaces for our web and mobile applications.",
  },
  {
    title: "Backend Developer Intern",
    location: "Remote",
    type: "Internship",
    description: "A great opportunity for a student or recent graduate to gain hands-on experience with Node.js, databases, and cloud infrastructure.",
  },
];
