"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { Terminal, Sparkles, ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 gap-2 px-4 py-2 text-sm",
        xs: "h-6 gap-1 rounded-md px-2 text-xs",
        sm: "h-8 gap-1.5 rounded-md px-3 text-xs",
        lg: "h-10 gap-2 rounded-md px-6 text-base",
        icon: "size-9",
        "icon-sm": "size-7 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export interface VisualContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface TeamCardProps {
  visual: React.ReactNode;
  title: string;
  description: string;
  url?: string;
}

export interface SkillIntegrationItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  path: string;
  delay: number;
  glowColor: string;
  badge: string;
}

// Center point is (282, 205)
export const SKILL_INTEGRATIONS: SkillIntegrationItem[] = [
  {
    id: "react",
    name: "React 19",
    icon: SiReact,
    x: 100,
    y: 80,
    path: "M 270 205 V 95 Q 270 80 255 80 H 100",
    delay: 0.1,
    glowColor: "text-cyan-400 border-cyan-500/40 bg-cyan-950/50",
    badge: "Frontend UI",
  },
  {
    id: "nextjs",
    name: "Next.js 16",
    icon: SiNextdotjs,
    x: 464,
    y: 80,
    path: "M 294 205 V 95 Q 294 80 309 80 H 464",
    delay: 0.2,
    glowColor: "text-white border-white/40 bg-slate-900/80",
    badge: "SSR / SSG",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    x: 70,
    y: 205,
    path: "M 250 205 H 70",
    delay: 0.3,
    glowColor: "text-blue-400 border-blue-500/40 bg-blue-950/50",
    badge: "Type Safety",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    icon: SiJavascript,
    x: 494,
    y: 205,
    path: "M 314 205 H 494",
    delay: 0.4,
    glowColor: "text-yellow-400 border-yellow-500/40 bg-yellow-950/50",
    badge: "Modern Core",
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    icon: SiNodedotjs,
    x: 140,
    y: 330,
    path: "M 270 215 V 315 Q 270 330 255 330 H 140",
    delay: 0.5,
    glowColor: "text-green-400 border-green-500/40 bg-green-950/50",
    badge: "REST APIs",
  },
  {
    id: "python",
    name: "Python & AI",
    icon: SiPython,
    x: 282,
    y: 360,
    path: "M 282 205 V 360",
    delay: 0.6,
    glowColor: "text-emerald-400 border-emerald-500/40 bg-emerald-950/50",
    badge: "Data Science",
  },
  {
    id: "docker",
    name: "Docker & Cloud",
    icon: SiDocker,
    x: 430,
    y: 330,
    path: "M 294 215 V 315 Q 294 330 309 330 H 430",
    delay: 0.7,
    glowColor: "text-sky-400 border-sky-500/40 bg-sky-950/50",
    badge: "Containers",
  },
];

const AnimatedPath = ({ d, id }: { d: string; id: string }) => {
  return (
    <>
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-cyan-500/20"
      />
      <motion.path
        d={d}
        stroke={`url(#${id})`}
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="50 150"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: -200 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear",
          delay: (id.length % 5) * 0.3,
        }}
      />
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </>
  );
};

export function SkillsIntegrationCircuit() {
  const containerId = useId();

  return (
    <div className="relative h-full w-full">
      {/* SVG Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 564 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {SKILL_INTEGRATIONS.map((skill) => (
          <AnimatedPath
            key={skill.id}
            d={skill.path}
            id={`${containerId}-${skill.id}`}
          />
        ))}
      </svg>

      {/* Central Hub Icon */}
      <div className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-cyan-500/40 bg-[#0B0F17] p-1.5 shadow-[0_0_30px_rgba(6,182,212,0.35)] sm:p-3">
        <div className="border border-cyan-500/30 p-2 sm:p-3 rounded-xl bg-gradient-to-br from-cyan-950/80 via-slate-900 to-indigo-950/60 flex items-center justify-center text-cyan-400">
          <Terminal className="size-6 sm:size-8 animate-pulse" />
        </div>
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Peripheral Skill Nodes */}
      {SKILL_INTEGRATIONS.map((skill) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: skill.delay, duration: 0.5 }}
            style={{
              left: `${(skill.x / 564) * 100}%`,
              top: `${(skill.y / 410) * 100}%`,
            }}
            className={cn(
              "absolute z-10 flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-xl sm:rounded-2xl border backdrop-blur-md shadow-lg p-2 sm:p-3 transition-transform duration-300 hover:scale-115 group cursor-default",
              skill.glowColor
            )}
          >
            <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
            <span className="hidden sm:block text-[9px] font-mono font-bold mt-1 text-slate-200 tracking-tight whitespace-nowrap">
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export function VisualContainer({ children, className }: VisualContainerProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-564/460 w-full items-center justify-center overflow-hidden rounded-none bg-[#070b12] p-6 sm:p-8 sm:aspect-564/410 border-b border-white/10",
        className
      )}
    >
      {/* Dots Background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(56, 189, 248, 0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export const IntegrationCard = ({
  visual,
  title,
  description,
  url = "#projects",
}: TeamCardProps) => {
  return (
    <Card className="mx-auto flex w-full flex-col sm:max-w-2xl rounded-3xl overflow-hidden p-0 ring-0 border border-white/10 bg-[#0B0F17]/90 backdrop-blur-xl shadow-2xl gap-0">
      <VisualContainer>{visual}</VisualContainer>

      <CardContent className="p-6 sm:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              Interactive Tech Ecosystem
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {title}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            {description}
          </p>
        </div>

        {/* Skill Badges Quick Strip */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {["React 19", "Next.js 16", "TypeScript", "Node.js", "Express.js", "Python", "Java", "PostgreSQL", "MongoDB", "Docker", "REST APIs"].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={url}
          className="inline-flex items-center gap-2 h-10 w-fit rounded-full px-6 bg-white text-black hover:bg-cyan-300 font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
        >
          <span>Explore Production Code</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </CardContent>
    </Card>
  );
};

export function IntegrationCardDemo() {
  return (
    <div className="flex items-center justify-center w-full p-4 sm:p-6">
      <IntegrationCard
        visual={<SkillsIntegrationCircuit />}
        title="Full-Stack Engineering Stack"
        description="Unified technology stack powering production applications, high-throughput microservices, and modern user experiences across the entire web lifecycle."
        url="#projects"
      />
    </div>
  );
}

export default IntegrationCardDemo;
