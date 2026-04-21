import { Briefcase, GraduationCap, Code2, Award, Linkedin, Github, Mail, Phone, LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

export type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const BRANDING = {
  name: "ASSolution",
  role: "Software Engineer",
  email: "contact@assolution.com",
  phone: "+91-7070410031",
  tagline: "Building high-performance digital experiences with precision and speed.",
  bio: "Full-stack engineer passionate about architecting scalable platforms and crafting exceptional user experiences. Currently leading Web Tech at EUROASIANN — building with Next.js and end-to-end development workflows.",
};

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: Briefcase,
    title: "Current Role",
    description:
      "Software Engineer at EUROASIANN — leading the Web Tech Team to build full-stack portfolio platforms with Next.js, ShadcnUI, and modular components.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "B.Tech from Lloyd Institute of Engineering & Technology (GPA: 8.25 / 10.00) · Graduated May 2025 · Greater Noida, UP",
  },
  {
    icon: Code2,
    title: "Tech Stack",
    description:
      "Java · JavaScript · Python · C++ · TypeScript · React · Next.js · Node.js · Express.js · MongoDB · PostgreSQL · Docker · Vue.js · REST APIs",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "Full Stack Development — LIET  ·  Java Development — LIET",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "ASSolution",
    href: "https://linkedin.com/in/ASSolution",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "ASSolution",
    href: "https://github.com/ASSolution",
    icon: Github,
  },
  {
    label: "Email",
    handle: "contact@assolution.com",
    href: "mailto:contact@assolution.com",
    icon: Mail,
  },
  {
    label: "Phone",
    handle: "+91-7070410031",
    href: "tel:+917070410031",
    icon: Phone,
  },
];
