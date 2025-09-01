
import type { Project, Service, Workshop, Career, TeamMember, WhyJoinUsItem } from "@/lib/types";
import { Film, FlaskConical, Cpu, Search, Package, Briefcase, Ruler, Rocket, Users, Handshake, BrainCircuit, HeartHandshake, ToyBrick, Droplet } from "lucide-react";

export const projects: Project[] = [
  {
    title: "Vayuyman",
    description: "Built for precision and performance. Whether you're capturing epic shots or pushing limits, this drone delivers top-tier tech and smooth flights. Ready to level up your aerial game? Let's fly.",
    image: "/images/vayuman.png",
    technologies: ["Drone Technology", "Aerospace Engineering", "Embedded Systems"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "drone technology"
  },
  {
    title: "Vayuyman lite",
    description: "Built for precision and performance. Whether you're capturing epic shots or pushing limits, this drone delivers top-tier tech and smooth flights. Ready to level up your aerial game? Let's fly.",
    image: "/images/vayuman.png",
    technologies: ["Drone Technology", "Aerospace Engineering", "Embedded Systems"],
    liveUrl: "#",
    githubUrl: "#",
    dataAiHint: "drone technology"
  }
];

export const services: Service[] = [
  {
    title: "Embedded Designing & Coding",
    slug: "embedded-designing-coding",
    tagline: "Bringing smart ideas to life, one circuit at a time.",
    description: "We provide expert embedded systems design and coding, from initial concept and hardware design to firmware development and rapid prototyping.",
    longDescription: "Our embedded systems services cover the full development lifecycle. We begin with a deep dive into your requirements to architect a solution that is both powerful and efficient. Our team specializes in microcontroller selection, schematic design, and PCB layout. We then develop robust firmware and drivers, ensuring seamless hardware-software integration. We build functional prototypes for testing and validation, ensuring the final product is ready for production and meets all your specifications.",
    icon: Cpu,
    category: "Technology & Innovation",
    images: [
        { url: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjaXJjdWl0JTIwYm9hcmR8ZW58MHx8fHwxNzU2MTE5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080", dataAiHint: "circuit board" },
        { url: "https://images.unsplash.com/photo-1610812388300-cd1e9cf28b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwcm90b3R5cGluZyUyMGVsZWN0cm9uaWNzfGVufDB8fHx8MTc1NjExOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080", dataAiHint: "prototyping electronics" },
    ]
  },
  {
    title: "Research & Development",
    slug: "research-development",
    tagline: "Innovating today for the breakthroughs of tomorrow.",
    description: "Our dedicated R&D services explore emerging technologies to solve complex challenges and drive future-forward innovation for your business.",
    longDescription: "Innovation is at the core of our R&D services. We help companies stay ahead of the curve by exploring new technological frontiers, from artificial intelligence and machine learning to IoT and blockchain. Our process involves feasibility studies, proof-of-concept development, and rigorous testing to validate new ideas and turn them into viable, market-leading solutions.",
    icon: Search,
    category: "Technology & Innovation",
    images: [
      { url: "https://images.unsplash.com/photo-1677756041243-08ac39882525?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dataAiHint: "product design" },
    ]
  },
  {
    title: "Product Development",
    slug: "product-development",
    tagline: "From a great idea to a market-ready reality.",
    description: "We guide your product from initial concept to a successful market launch, handling strategy, design, development, and deployment.",
    longDescription: "We provide end-to-end product development services to transform your vision into a successful product. Our process covers market research, strategic planning, UI/UX design, full-stack development, quality assurance, and launch strategy. We work as your strategic partner, ensuring your product is not only well-built but also perfectly aligned with market needs and business goals.",
    icon: Package,
    category: "Technology & Innovation",
    images: [
        { url: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dataAiHint: "product design" },
    ]
  },
  {
    title: "Drone Services",
    slug: "drone-services",
    tagline: "A new perspective from the sky.",
    description: "We offer specialized drone solutions, including custom-built RC drones and advanced aerial advertisement drones for marketing.",
    longDescription: "Our drone services offer cutting-edge solutions for a variety of applications. We design and build custom drones tailored to specific needs, from high-performance racing drones for enthusiasts to sophisticated aerial systems for commercial photography and marketing. Our expertise covers everything from frame design and component selection to flight control programming and payload integration.",
    icon: Rocket,
    category: "Technology & Innovation",
    images: [
        { url: "https://plus.unsplash.com/premium_photo-1745034092251-cf14d6fb3fcd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dataAiHint: "drone aerial" },
        { url: "https://images.unsplash.com/photo-1482169078677-7d5fa2b50e1a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dataAiHint: "custom drone" },
    ]
  },
  {
    title: "Digital Media Works",
    slug: "digital-media-works",
    tagline: "Crafting stories that captivate and convert.",
    description: "Our comprehensive digital media services include scripting, filming, editing, and strategic digital marketing to bring your vision to life.",
    longDescription: "In the digital age, compelling content is king. Our digital media services cover the entire creative process, from initial concept and scriptwriting to professional videography, post-production, and strategic distribution. We help brands tell their stories, engage their audiences, and achieve their marketing objectives through high-quality video content and targeted digital campaigns.",
    icon: Film,
    category: "Creative Solutions",
    images: [
        { url: "https://images.unsplash.com/photo-1750233894598-6b7db500a3e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dataAiHint: "video production" },
    ]
  },
  {
    title: "Interior Designing",
    slug: "interior-designing",
    tagline: "Designing spaces that inspire and function beautifully.",
    description: "Our creative and functional interior design services transform commercial and residential spaces into beautiful, inspiring environments.",
    longDescription: "We believe that great design can transform spaces and enhance lives. Our interior design services focus on creating environments that are not only aesthetically pleasing but also highly functional and tailored to our clients' lifestyles and brand identities. We handle everything from space planning and material selection to furniture design and final styling.",
    icon: Ruler,
    category: "Creative Solutions",
    images: [
        { url: "https://images.unsplash.com/photo-1642210410202-2fb2d081e2d8?q=80&w=1095&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dataAiHint: "modern interior" },
    ]
  },
  {
    title: "STEM Education",
    slug: "stem-education",
    tagline: "Inspiring the next generation of innovators.",
    description: "We deliver engaging and interactive STEM education programs designed to cultivate curiosity and build critical skills for the future.",
    longDescription: "We empower students with hands-on learning in future technologies through our specialized STEM modules, aligned with NEP 2020 and designed to spark innovation in every child.",
    icon: FlaskConical,
    category: "Education & Training",
    images: [
      { url: "https://images.unsplash.com/photo-1655088651367-f9f4e1328f08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dataAiHint: "robot box" },
    ]
  },
  {
    title: "Internships & Training",
    slug: "internships-training",
    tagline: "Empowering talent to shape the future of tech.",
    description: "Our hands-on internships and professional training programs are designed to empower the next wave of talent with real-world experience.",
    longDescription: "We are committed to nurturing the next generation of tech talent. Our internship and training programs offer students and recent graduates the opportunity to work on real-world projects, learn from experienced mentors, and develop the professional skills needed to launch a successful career. We partner with leading companies to provide valuable industry experience and create pathways to employment.",
    icon: Briefcase,
    category: "Education & Training",
  },
];

export const workshops: Workshop[] = [
  {
    title: "3D Designing Workshop",
    description: "Learn the fundamentals of 3D design and bring your ideas to life. This hands-on workshop covers modeling, sculpting, and rendering techniques.",
    date: "2024-09-15T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1547194936-28214bd75193?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registrationUrl: "/contact",
    dataAiHint: "3d modeling"
  }
];

export const careers: Career[] = [
  {
    title: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    description: "We're seeking a skilled Backend Developer to design, build, and maintain the server-side of our web applications.",
    applyUrl: "/contact"
  }
];

export const team: TeamMember[] = [
  // {
  //   name: "Kandi Ajay Kumar",
  //   role: "Founder",
  //   image: "https://placehold.co/400x400.png",
  //   dataAiHint: "man portrait tech",
  //   socials: {
  //     linkedin: "#",
  //     twitter: "#",
  //     github: "#",
  //   },
  // },
  {
    name: "Nakkella Kiran",
    role: "Co-Founder",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "man portrait creative",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Madireddy Bala Chaitanya",
    role: "Chief Executive Officer",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "man portrait",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Chaganti Sandeep",
    role: "Chief Technology Officer",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "man portrait tech",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Paila Dhana Deshik",
    role: "Developer",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "man portrait developer",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Ajay Brahma Surada",
    role: "Content Writer",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "man portrait creative",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export const whyJoinUs: WhyJoinUsItem[] = [
  {
    title: "Innovate with Purpose",
    description: "Work on cutting-edge projects that solve real-world problems and make a tangible impact on a global scale.",
    icon: BrainCircuit,
  },
  {
    title: "Collaborative Culture",
    description: "Join a supportive and inclusive team where your ideas are valued and you can learn from the best in the industry.",
    icon: Users,
  },
  {
    title: "Continuous Growth",
    description: "We invest in your development with ongoing training, mentorship, and opportunities to advance your career.",
    icon: Handshake,
  },
  {
    title: "Well-being First",
    description: "Enjoy comprehensive benefits, flexible work arrangements, and a culture that prioritizes your health and happiness.",
    icon: HeartHandshake,
  }
];

    