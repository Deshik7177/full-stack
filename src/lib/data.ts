import type { Project, Service, Workshop, Career } from "@/lib/types";
import { Film, FlaskConical, Cpu, Search, Package, Briefcase, Ruler, Rocket } from "lucide-react";

export const projects: Project[] = [
  {
    title: "Vayuyman",
    description: "Built for precision and performance. Whether you're capturing epic shots or pushing limits, this drone delivers top-tier tech and smooth flights. Ready to level up your aerial game? Let's fly.",
    image: "/vayuyman.png",
    technologies: ["Drone Technology", "Aerospace Engineering", "Embedded Systems"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "drone technology"
  },
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
    title: "Digital Media Works",
    description: "Comprehensive digital media services including scripting, filming, editing, podcasting, and digital marketing to bring your vision to life.",
    icon: Film,
  },
  {
    title: "STEM Education",
    description: "Engaging and interactive STEM education programs designed to inspire the next generation of innovators and thinkers.",
    icon: FlaskConical,
  },
  {
    title: "Embedded Designing & Coding",
    description: "Expert embedded systems design and coding, from initial concept and hardware design to firmware development and prototyping.",
    icon: Cpu,
  },
  {
    title: "Research & Development",
    description: "Dedicated R&D services to explore new technologies, solve complex problems, and drive innovation for your business.",
    icon: Search,
  },
  {
    title: "Product Development",
    description: "End-to-end product development, from ideation and strategy to design, development, and market launch.",
    icon: Package,
  },
  {
    title: "Drone Services",
    description: "Specialized drone solutions including custom RC drones for enthusiasts and aerial advertisement drones for marketing.",
    icon: Rocket,
  },
  {
    title: "Internships & Training",
    description: "Empowering the next wave of talent with hands-on internships and professional training programs in the tech industry.",
    icon: Briefcase,
  },
  {
    title: "Interior Designing",
    description: "Creative and functional interior design services that transform spaces into beautiful and inspiring environments.",
    icon: Ruler,
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
