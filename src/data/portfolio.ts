import { HardDrive, Cpu, Layers, Globe, Database, Bot } from "lucide-react";

export interface Project {
  id: string;
  image: string;
  title: string;
  description?: string;
  tech?: string[];
  href?: string;
  meta?: string;
}

export type FocusRailItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc: string;
  href?: string;
  meta?: string;
};

export const FOCUS_RAIL_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "PartFinder Portfolio",
    description: "Marketing portfolio built with Next.js SSR/SSG, boosting SEO discoverability by 30–40% and cutting load time by 2s.",
    meta: "Next.js • Euroasiann",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    href: "https://github.com/AnshCoderRepo",
  },
  {
    id: 2,
    title: "EuroasiannIT Platform",
    description: "Corporate presence across 10+ pages, reducing LCP by 35% with streamlined component architecture and Agile Git reviews.",
    meta: "Corporate Web • Next.js",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    href: "https://github.com/AnshCoderRepo",
  },
  {
    id: 3,
    title: "Inventory System",
    description: "Stock and order-tracking platform load-tested to 1,000+ concurrent users with Clerk role-based access and optimized MongoDB queries.",
    meta: "Full Stack • Clerk • MongoDB",
    imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    href: "https://github.com/AnshCoderRepo",
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "Real-time chat platform serving 500+ users with OpenAI contextual replies, batching/caching, and Dockerized microservices.",
    meta: "AI • OpenAI • Docker",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    href: "https://github.com/AnshCoderRepo",
  },
  {
    id: 5,
    title: "Job & Feedback Portal",
    description: "3-role hiring system (Admin, Recruiter, Applicant) with Jest-tested TypeScript scoring engine in Docker environments.",
    meta: "TypeScript • PostgreSQL • Docker",
    imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200",
    href: "https://github.com/AnshCoderRepo",
  },
  {
    id: 6,
    title: "LV Prasad Eye Institute",
    description: "Patient appointment booking UI in Next.js & Material UI for 1,000+ users, paired with a data-driven eye-care recommendation engine.",
    meta: "Next.js • HealthTech",
    imageSrc: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200",
    href: "https://github.com/AnshCoderRepo",
  },
];

export const PORTFOLIO_FOLDERS = [
  {
    title: "Euroasiann Production",
    gradient: "linear-gradient(135deg, #0ea5e9, #0284c7)",
    icon: Globe,
    projects: [
      { 
        id: "euro-1", 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", 
        title: "PartFinder Portfolio",
        description: "SSR/SSG marketing platform improving SEO by 30-40% and cutting initial page load by 2s.",
        tech: ["Next.js", "React", "REST APIs", "SSR/SSG"]
      },
      { 
        id: "euro-2", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", 
        title: "EuroasiannIT Group Site",
        description: "10+ page corporate web presence with refined frontend pipelines cutting LCP by 35%.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Agile Workflow"]
      },
      { 
        id: "euro-3", 
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200&auto=format&fit=crop", 
        title: "Component Architecture",
        description: "Reusable modular UI components lowering future maintenance effort by ~25%.",
        tech: ["React Components", "REST API Integration", "UI/UX Strategy"]
      },
    ] as Project[],
  },
  {
    title: "Full-Stack Applications",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    icon: Database,
    projects: [
      { 
        id: "proj-1", 
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop", 
        title: "Inventory Management",
        description: "Stock & order tracking load-tested to 1,000+ concurrent users with Clerk role access.",
        tech: ["React", "Express", "MongoDB", "Clerk Auth", "REST API"]
      },
      { 
        id: "proj-2", 
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop", 
        title: "Role-Based Job Portal",
        description: "3-role hiring system (Admin, Recruiter, Applicant) with Jest-tested TypeScript scoring.",
        tech: ["Node.js", "TypeScript", "PostgreSQL", "Clerk", "Docker"]
      },
      { 
        id: "proj-3", 
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1200&auto=format&fit=crop", 
        title: "Backend Optimization",
        description: "Query optimization and index tuning reducing backend response times by ~30%.",
        tech: ["PostgreSQL", "MongoDB", "Express.js", "Docker"]
      },
    ] as Project[],
  },
  {
    title: "AI & HealthTech",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    icon: Bot,
    projects: [
      { 
        id: "ai-1", 
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop", 
        title: "AI Chat Application",
        description: "Real-time chat serving 500+ simultaneous users with OpenAI contextual responses.",
        tech: ["React", "Node.js", "Express", "OpenAI API", "Docker"]
      },
      { 
        id: "ai-2", 
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop", 
        title: "LVPEI Patient Booking UI",
        description: "Redesigned appointment flow in Next.js & Material UI shortening booking flow by 2 steps.",
        tech: ["Next.js", "Material UI", "Healthcare UX", "Patient Portal"]
      },
      { 
        id: "ai-3", 
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1200&auto=format&fit=crop", 
        title: "Eye-Care Recommendation",
        description: "Data-driven recommendation engine on patient records lifting scheduling accuracy.",
        tech: ["Data Science", "Python", "Predictive Scheduling", "REST APIs"]
      },
    ] as Project[],
  },
];

