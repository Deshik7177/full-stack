
import type { Project, Service, Workshop, Career, TeamMember } from "@/lib/types";
import { Film, FlaskConical, Cpu, Search, Package, Briefcase, Ruler, Rocket } from "lucide-react";

export const projects: Project[] = [
  {
    title: "Vayuyman",
    description: "Built for precision and performance. Whether you're capturing epic shots or pushing limits, this drone delivers top-tier tech and smooth flights. Ready to level up your aerial game? Let's fly.",
    image: "https://placehold.co/600x400.png",
    technologies: ["Drone Technology", "Aerospace Engineering", "Embedded Systems"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "drone technology"
  },
  {
    title: "Project Alpha",
    description: "A cutting-edge e-commerce platform with AI-powered recommendations.",
    image: "https://placehold.co/600x400.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "ecommerce website"
  },
  {
    title: "Project Beta",
    description: "A collaborative project management tool for remote teams.",
    image: "https://placehold.co/600x400.png",
    technologies: ["React", "Firebase", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "dashboard interface"
  },
  {
    title: "Project Gamma",
    description: "A mobile-first social networking app for creative professionals.",
    image: "https://placehold.co/600x400.png",
    technologies: ["React Native", "Node.js", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "mobile app"
  },
  {
    title: "Project Delta",
    description: "An IoT platform for smart home automation and monitoring.",
    image: "https://placehold.co/600x400.png",
    technologies: ["Python", "MQTT", "Grafana"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "smart home"
  },
];

export const services: Service[] = [
  {
    title: "Embedded Designing & Coding",
    tagline: "Bringing smart ideas to life, one circuit at a time.",
    description: "We provide expert embedded systems design and coding, from initial concept and hardware design to firmware development and rapid prototyping.",
    icon: Cpu,
    category: "Technology & Innovation",
  },
  {
    title: "Research & Development",
    tagline: "Innovating today for the breakthroughs of tomorrow.",
    description: "Our dedicated R&D services explore emerging technologies to solve complex challenges and drive future-forward innovation for your business.",
    icon: Search,
    category: "Technology & Innovation",
  },
  {
    title: "Product Development",
    tagline: "From a great idea to a market-ready reality.",
    description: "We guide your product from initial concept to a successful market launch, handling strategy, design, development, and deployment.",
    icon: Package,
    category: "Technology & Innovation",
  },
  {
    title: "Drone Services",
    tagline: "A new perspective from the sky.",
    description: "We offer specialized drone solutions, including custom-built RC drones for enthusiasts and advanced aerial advertisement drones for marketing.",
    icon: Rocket,
    category: "Technology & Innovation",
  },
  {
    title: "Digital Media Works",
    tagline: "Crafting stories that captivate and convert.",
    description: "Our comprehensive digital media services include scripting, filming, editing, and strategic digital marketing to bring your vision to life.",
    icon: Film,
    category: "Creative Solutions",
  },
  {
    title: "Interior Designing",
    tagline: "Designing spaces that inspire and function beautifully.",
    description: "Our creative and functional interior design services transform commercial and residential spaces into beautiful, inspiring environments.",
    icon: Ruler,
    category: "Creative Solutions",

  },
  {
    title: "STEM Education",
    tagline: "Inspiring the next generation of innovators.",
    description: "We deliver engaging and interactive STEM education programs designed to cultivate curiosity and build critical skills for the future.",
    icon: FlaskConical,
    category: "Education & Training",
  },
  {
    title: "Internships & Training",
    tagline: "Empowering talent to shape the future of tech.",
    description: "Our hands-on internships and professional training programs are designed to empower the next wave of talent with real-world experience.",
    icon: Briefcase,
    category: "Education & Training",
  },
];

export const workshops: Workshop[] = [
  {
    title: "Introduction to Next.js 14",
    description: "Learn the fundamentals of the latest version of Next.js, including the App Router, Server Components, and Server Actions.",
    date: "2024-09-15",
    image: "https://placehold.co/600x400.png",
    registrationUrl: "#",
    dataAiHint: "coding workshop"
  },
  {
    title: "Advanced Tailwind CSS",
    description: "Master the art of utility-first CSS and create beautiful, custom designs without writing a single line of custom CSS.",
    date: "2024-10-20",
    image: "https://placehold.co/600x400.png",
    registrationUrl: "#",
    dataAiHint: "design workshop"
  },
  {
    title: "UI/UX Design for Developers",
    description: "A crash course in design principles, user research, and prototyping for developers who want to build better products.",
    date: "2024-11-10",
    image: "https://placehold.co/600x400.png",
    registrationUrl: "#",
    dataAiHint: "team collaboration"
  },
];

export const careers: Career[] = [
  {
    title: "Senior Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "We are looking for an experienced Frontend Developer proficient in React and TypeScript to join our team and build amazing user experiences.",
    applyUrl: "/contact"
  },
  {
    title: "UI/UX Designer",
    location: "New York, NY",
    type: "Full-time",
    description: "Join our creative team to design intuitive and visually appealing interfaces for our web and mobile applications.",
    applyUrl: "/contact"
  },
  {
    title: "Backend Developer Intern",
    location: "Remote",
    type: "Internship",
    description: "A great opportunity for a student or recent graduate to gain hands-on experience with Node.js, databases, and cloud infrastructure.",
    applyUrl: "/contact"
  },
];

export const team: TeamMember[] = [
  {
    name: "xxxxxxx",
    role: "CEO & Founder",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "man portrait",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "xxxxxxx",
    role: "Chief Technology Officer",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "woman portrait",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "xxxxxxx",
    role: "Lead Developer",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "man portrait tech",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "xxxxxxx",
    role: "Creative Director",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "woman portrait creative",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];
