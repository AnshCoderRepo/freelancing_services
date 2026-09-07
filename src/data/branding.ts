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
  name: "Ansh Adarsh",
  role: "Software Development Engineer",
  email: "anshk1126@gmail.com",
  phone: "+91-7070410031",
  tagline: "Shipping production-grade, high-performance web applications and scalable backend systems.",
  bio: "Entry-level Software Development Engineer with hands-on experience shipping production interfaces in React, TypeScript, and Next.js, backed by Node.js on the backend. SDE Intern at Euroasiann & former Data Science Intern at LV Prasad Eye Institute.",
};

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: Briefcase,
    title: "Experience",
    description:
      "SDE Intern at Euroasiann (PartFinder & EuroasiannIT platforms) · Former Data Science Intern at LV Prasad Eye Institute (Patient UI & AI scheduling).",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "B.Tech in Computer Science Engineering — LIET, Greater Noida (CGPA: 8.4 / 10) · 2021 – 2025.",
  },
  {
    icon: Code2,
    title: "Technical Skills",
    description:
      "React.js · Next.js · TypeScript · JavaScript (ES6+) · Node.js · Express.js · Java · Python · C++ · PostgreSQL · MongoDB · Docker · REST APIs",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "AI on Azure — Microsoft (2024)  ·  Java Programming — Coursera (2025)",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "ansh-adarsh2021",
    href: "https://linkedin.com/in/ansh-adarsh2021",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "AnshCoderRepo",
    href: "https://github.com/AnshCoderRepo",
    icon: Github,
  },
  {
    label: "Email",
    handle: "anshk1126@gmail.com",
    href: "mailto:anshk1126@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    handle: "+91-7070410031",
    href: "tel:+917070410031",
    icon: Phone,
  },
];

