import { HardDrive, Cpu, Layers } from "lucide-react";

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
    title: "SCOPE Platform",
    description: "Architected a MERN-based LMS platform with Razorpay and secure JWT auth for 1,000+ users.",
    meta: "Full Stack • Fintech",
    imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    href: "#scope",
  },
  {
    id: 2,
    title: "ChatX AI Suite",
    description: "Developed a real-time AI chat ecosystem with three custom OpenAI-powered bot personalities.",
    meta: "AI • Real-time",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    href: "#chatx",
  },
  {
    id: 3,
    title: "REFLECTO Dashboard",
    description: "Engineered high-performance enterprise feedback systems with 3D visualizations and Docker.",
    meta: "Systems • 3D",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    href: "#reflecto",
  },
  {
    id: 4,
    title: "LV Prasad Eye Inst.",
    description: "Optimized patient UI and built health recommendation systems improving efficiency by 30%.",
    meta: "Health • Internship",
    imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200",
    href: "#lvp",
  },
];

export const PORTFOLIO_FOLDERS = [
  {
    title: "SCOPE Platform",
    gradient: "linear-gradient(135deg, #0ea5e9, #0284c7)",
    icon: HardDrive,
    projects: [
      { 
        id: "scope-1", 
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop", 
        title: "LMS Interface",
        description: "MERN-based LMS platform supporting 1,000+ users with secure course delivery.",
        tech: ["MongoDB", "Express", "React", "Node.js"]
      },
      { 
        id: "scope-2", 
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200&auto=format&fit=crop", 
        title: "Razorpay Gateway",
        description: "Integrated secure payment pipelines for streamlined course transactions.",
        tech: ["Razorpay API", "JWT", "OTP Auth"]
      },
      { 
        id: "scope-3", 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", 
        title: "Analytics Engine",
        description: "Improved efficiency via automated inventory tracking and real-time stock updates.",
        tech: ["Recharts", "SCSS", "Context API"]
      },
    ] as Project[],
  },
  {
    title: "ChatX AI Suite",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    icon: Cpu,
    projects: [
      { 
        id: "chat-1", 
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop", 
        title: "AI Messaging",
        description: "Full-stack chat app with real-time messaging and media sharing for 500+ users.",
        tech: ["Node.js", "MongoDB", "CometChat"]
      },
      { 
        id: "chat-2", 
        image: "https://images.unsplash.com/photo-1620712943543-bcc4638d9980?q=80&w=1200&auto=format&fit=crop", 
        title: "OpenAI Bots",
        description: "Three OpenAI-powered bots integrated for intelligent automated responses.",
        tech: ["OpenAI API", "Redux", "Shadcn UI"]
      },
      { 
        id: "chat-3", 
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop", 
        title: "Dockerized Scale",
        description: "Services deployed with Docker for zero-downtime, reducing latency by 30%.",
        tech: ["Docker", "JWT Auth", "Scalability"]
      },
    ] as Project[],
  },
  {
    title: "REFLECTO Systems",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    icon: Layers,
    projects: [
      { 
        id: "ref-1", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", 
        title: "Feedback Engine",
        description: "Role-based system with sentiment tagging and structured evaluation workflows.",
        tech: ["FastAPI", "PostgreSQL", "SQLAlchemy"]
      },
      { 
        id: "ref-2", 
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop", 
        title: "Interactive Viz",
        description: "Dashboards for manager insights and anonymous employee feedback timelines.",
        tech: ["Three.js", "Vue.js", "TypeScript"]
      },
      { 
        id: "ref-3", 
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1200&auto=format&fit=crop", 
        title: "Backend Core",
        description: "Containerized backend with ORM for multi-database compatibility.",
        tech: ["Docker", "Node.js", "ORM Integration"]
      },
    ] as Project[],
  },
];
