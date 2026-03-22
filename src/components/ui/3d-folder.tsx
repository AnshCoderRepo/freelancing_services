"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  forwardRef,
} from "react";
import { X, ExternalLink, ChevronLeft, ChevronRight, HardDrive, Cpu, Layers } from "lucide-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Badge } from "@/components/ui/badge";

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Interfaces & Constants ---
export interface Project {
  id: string;
  image: string;
  title: string;
  description?: string;
  tech?: string[];
}

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200";

// --- ProjectCard ---
interface ProjectCardProps {
  image: string;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  totalCount: number;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, delay, isVisible, index, totalCount, onClick, isSelected }, ref) => {
    const middleIndex = (totalCount - 1) / 2;
    const factor = totalCount > 1 ? (index - middleIndex) / middleIndex : 0;
    const rotation = factor * 25;
    const translationX = factor * 85;
    const translationY = Math.abs(factor) * 12;

    return (
      <div
        ref={ref}
        className={cn("absolute w-20 h-28 cursor-pointer group/card", isSelected && "opacity-0")}
        style={{
          transform: isVisible
            ? `translateY(calc(-100px + ${translationY}px)) translateX(${translationX}px) rotate(${rotation}deg) scale(1)`
            : "translateY(0px) translateX(0px) rotate(0deg) scale(0.4)",
          opacity: isSelected ? 0 : isVisible ? 1 : 0,
           transition: `transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 700ms linear ${delay}ms`,
           zIndex: 10 + index,
           left: "-40px",
           top: "-56px",
           willChange: "transform, opacity",
         }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <div
          className={cn(
            "w-full h-full rounded-lg overflow-hidden shadow-xl bg-card border border-white/5 relative",
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "group-hover/card:-translate-y-6 group-hover/card:shadow-2xl group-hover/card:shadow-accent/40 group-hover/card:ring-2 group-hover/card:ring-accent group-hover/card:scale-125"
          )}
        >
          <img
            src={image || PLACEHOLDER_IMAGE}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <p className="absolute bottom-1.5 left-1.5 right-1.5 text-[9px] font-black uppercase tracking-tighter text-white truncate drop-shadow-md">
            {title}
          </p>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

// --- ImageLightbox ---
interface ImageLightboxProps {
  projects: Project[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  sourceRect: DOMRect | null;
  onCloseComplete?: () => void;
  onNavigate: (index: number) => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  projects,
  currentIndex,
  isOpen,
  onClose,
  sourceRect,
  onCloseComplete,
  onNavigate,
}) => {
  const [animationPhase, setAnimationPhase] = useState<"initial" | "animating" | "complete">("initial");
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalProjects = projects.length;
  const hasNext = internalIndex < totalProjects - 1;
  const hasPrev = internalIndex > 0;
  const currentProject = projects[internalIndex];

  useEffect(() => {
    if (isOpen && currentIndex !== internalIndex && !isSliding) {
      setIsSliding(true);
      const timer = setTimeout(() => {
        setInternalIndex(currentIndex);
        setIsSliding(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isOpen, internalIndex, isSliding]);

  useEffect(() => {
    if (isOpen) {
      setInternalIndex(currentIndex);
      setIsSliding(false);
    }
  }, [isOpen, currentIndex]);

  const navigateNext = useCallback(() => {
    if (internalIndex >= totalProjects - 1 || isSliding) return;
    onNavigate(internalIndex + 1);
  }, [internalIndex, totalProjects, isSliding, onNavigate]);

  const navigatePrev = useCallback(() => {
    if (internalIndex <= 0 || isSliding) return;
    onNavigate(internalIndex - 1);
  }, [internalIndex, isSliding, onNavigate]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    onClose();
    setTimeout(() => {
      setIsClosing(false);
      setShouldRender(false);
      setAnimationPhase("initial");
      onCloseComplete?.();
    }, 500);
  }, [onClose, onCloseComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, navigateNext, navigatePrev]);

  useLayoutEffect(() => {
    if (isOpen && sourceRect) {
      setShouldRender(true);
      setAnimationPhase("initial");
      setIsClosing(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimationPhase("animating");
        });
      });
      const timer = setTimeout(() => setAnimationPhase("complete"), 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen, sourceRect]);

  const handleDotClick = (idx: number) => {
    if (isSliding || idx === internalIndex) return;
    onNavigate(idx);
  };

  if (!shouldRender || !currentProject) return null;

  const getInitialStyles = (): React.CSSProperties => {
    if (typeof window === "undefined" || !sourceRect) return {};
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const targetWidth = Math.min(800, viewportWidth - 64);
    const targetHeight = Math.min(viewportHeight * 0.85, 600);
    const targetX = (viewportWidth - targetWidth) / 2;
    const targetY = (viewportHeight - targetHeight) / 2;
    const scaleX = sourceRect.width / targetWidth;
    const scaleY = sourceRect.height / targetHeight;
    const scale = Math.max(scaleX, scaleY);
    const translateX =
      sourceRect.left + sourceRect.width / 2 - (targetX + targetWidth / 2) + window.scrollX;
    const translateY =
      sourceRect.top + sourceRect.height / 2 - (targetY + targetHeight / 2) + window.scrollY;
    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity: 0.5,
      borderRadius: "12px",
    };
  };

  const getFinalStyles = (): React.CSSProperties => ({
    transform: "translate(0, 0) scale(1)",
    opacity: 1,
    borderRadius: "24px",
  });

  const currentStyles =
    animationPhase === "initial" && !isClosing ? getInitialStyles() : getFinalStyles();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={handleClose}
      style={{
        opacity: isClosing ? 0 : 1,
        transition: "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
        style={{
          opacity: animationPhase === "initial" && !isClosing ? 0 : 1,
          transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      {/* Close button */}
      <button
        onClick={(e) => { e.stopPropagation(); handleClose(); }}
        className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-muted/30 backdrop-blur-xl border border-white/10 shadow-2xl text-foreground hover:bg-muted transition-all duration-300"
        style={{
          opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateY(0)" : "translateY(-30px)",
          transition: "opacity 400ms ease-out 400ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 400ms",
        }}
      >
        <X className="w-5 h-5" strokeWidth={2.5} />
      </button>
      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); navigatePrev(); }}
        disabled={!hasPrev || isSliding}
        className="absolute left-4 md:left-10 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-muted/30 backdrop-blur-xl border border-white/10 text-foreground hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none shadow-2xl"
        style={{
          opacity: animationPhase === "complete" && !isClosing && hasPrev ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateX(0)" : "translateX(-40px)",
          transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 600ms",
        }}
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={3} />
      </button>
      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); navigateNext(); }}
        disabled={!hasNext || isSliding}
        className="absolute right-4 md:right-10 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-muted/30 backdrop-blur-xl border border-white/10 text-foreground hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none shadow-2xl"
        style={{
          opacity: animationPhase === "complete" && !isClosing && hasNext ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateX(0)" : "translateX(40px)",
          transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 600ms",
        }}
      >
        <ChevronRight className="w-6 h-6" strokeWidth={3} />
      </button>
      {/* Content */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          ...currentStyles,
          transform: isClosing ? "translate(0, 0) scale(0.92)" : currentStyles.transform,
          transition:
            animationPhase === "initial" && !isClosing
              ? "none"
              : "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms ease-out, border-radius 700ms ease",
          transformOrigin: "center center",
        }}
      >
        <div className="relative overflow-hidden rounded-[inherit] bg-card border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10]">
            <div
              className="flex w-full h-full"
              style={{
                transform: `translateX(-${internalIndex * 100}%)`,
                transition: isSliding ? "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)" : "none",
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-full h-full relative">
                  <img
                    src={project.image || PLACEHOLDER_IMAGE}
                    alt={project.title}
                    className="w-full h-full object-cover select-none"
                    onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
          <div
            className="px-8 py-7 bg-card border-t border-white/5"
            style={{
              opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
              transform: animationPhase === "complete" && !isClosing ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 500ms ease-out 500ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) 500ms",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-foreground tracking-tight truncate">
                  {currentProject?.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-400 leading-relaxed max-w-xl">
                  {projects[internalIndex]?.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {projects[internalIndex]?.tech?.map((t) => (
                    <span key={t} className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted rounded-full border border-white/5">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all duration-500",
                          idx === internalIndex
                            ? "bg-foreground scale-150"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                        )}
                      />
                    ))}
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground bg-primary hover:brightness-110 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95">
                    <span>Explore</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- AnimatedFolder ---
interface AnimatedFolderProps {
  title: string;
  projects: Project[];
  className?: string;
  gradient?: string;
  icon?: React.ElementType;
}

const AnimatedFolder: React.FC<AnimatedFolderProps> = ({ title, projects, className, gradient, icon: FolderIcon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const [hiddenCardId, setHiddenCardId] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const previewProjects = projects.slice(0, 5);

  const handleProjectClick = (project: Project, index: number) => {
    const cardEl = cardRefs.current[index];
    if (cardEl) setSourceRect(cardEl.getBoundingClientRect());
    setSelectedIndex(index);
    setHiddenCardId(project.id);
  };

  const handleCloseLightbox = () => { setSelectedIndex(null); setSourceRect(null); };
  const handleCloseComplete = () => { setHiddenCardId(null); };
  const handleNavigate = (newIndex: number) => {
    setSelectedIndex(newIndex);
    setHiddenCardId(projects[newIndex]?.id || null);
  };

  const backBg = gradient || "linear-gradient(135deg, var(--folder-back) 0%, var(--folder-tab) 100%)";
  const tabBg = gradient || "var(--folder-tab)";
  const frontBg = gradient || "linear-gradient(135deg, var(--folder-front) 0%, var(--folder-back) 100%)";
  const accentColor = gradient?.match(/#[a-fA-F0-9]{3,6}/)?.[0] || "var(--accent)";

  return (
    <>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center p-8 rounded-3xl cursor-pointer bg-neutral-900/40 border border-white/5 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-neutral-900/60 hover:border-white/10 group",
          className
        )}
        style={{
          width: "100%",
          maxWidth: "340px",
          minHeight: "380px",
          perspective: "1200px",
          transform: isHovered ? "scale(1.02) translateY(-4px)" : "scale(1) translateY(0)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow overlay */}
        <div
          className="absolute inset-0 rounded-3xl transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 70%, ${accentColor} 0%, transparent 70%)`,
            opacity: isHovered ? 0.15 : 0,
          }}
        />

        {/* Folder graphic */}
        <div className="relative flex items-center justify-center mb-8" style={{ height: "160px", width: "100%" }}>
          {/* Back panel */}
          <div
            className="absolute w-36 h-28 rounded-xl shadow-md border border-white/10"
            style={{
              background: backBg,
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(-20deg) scaleY(1.05)" : "rotateX(0deg) scaleY(1)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 10,
            }}
          />
          {/* Tab */}
          <div
            className="absolute w-14 h-5 rounded-t-lg border-t border-x border-white/5"
            style={{
              background: tabBg,
              top: "calc(50% - 56px - 14px)",
              left: "calc(50% - 72px + 20px)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(-30deg) translateY(-4px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 10,
            }}
          />
          {/* Cards */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 20 }}>
            {previewProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                image={project.image}
                title={project.title}
                delay={index * 50}
                isVisible={isHovered}
                index={index}
                totalCount={previewProjects.length}
                onClick={() => handleProjectClick(project, index)}
                isSelected={hiddenCardId === project.id}
              />
            ))}
          </div>
          {/* Front panel */}
          <div
            className="absolute w-36 h-28 rounded-xl shadow-lg border border-white/20"
            style={{
              background: frontBg,
              top: "calc(50% - 56px + 6px)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(35deg) translateY(14px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              transformStyle: "preserve-3d",
              willChange: "transform, opacity, filter",
              zIndex: 30,
            }}
          />
          {/* Icon indicator */}
          {FolderIcon && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[32] pointer-events-none opacity-40 group-hover:opacity-0 transition-opacity duration-500">
               <FolderIcon className="w-12 h-12 text-white" strokeWidth={1} />
            </div>
          )}
        </div>

        {/* Label */}
        <div className="text-center relative z-40">
          <h3
            className="text-xl font-bold text-foreground mt-4 transition-all duration-500 tracking-tight"
            style={{
              transform: isHovered ? "translateY(2px)" : "translateY(0)",
            }}
          >
            {title}
          </h3>
          <p className="text-sm font-medium text-neutral-400 mt-1 transition-all duration-500" style={{ opacity: isHovered ? 0.8 : 1 }}>
            {projects.length} Showcase {projects.length === 1 ? "Module" : "Modules"}
          </p>
        </div>
      </div>

      <ImageLightbox
        projects={projects}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={handleCloseLightbox}
        sourceRect={sourceRect}
        onCloseComplete={handleCloseComplete}
        onNavigate={handleNavigate}
      />
    </>
  );
};

// --- Portfolio Data based on Ansh's CV ---
const portfolioData = [
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

export function PortfolioFolderSection() {
  return (
    <section className="w-full py-12 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="mb-16 md:mb-24 text-center">
          <Badge
            variant="outline"
            className="mb-8 rounded-full border-white/10 bg-white/5 px-6 py-2 text-[10px] uppercase tracking-[0.4em] text-neutral-400"
          >
            Selected Works
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-foreground">
            Project <span className="text-primary italic">Deep-Dive</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Hover over certificates to reveal interactive modules and architectural breakdowns.
          </p>
        </div>
        
        {/* Grid - Centered items with responsive sizing */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
          {portfolioData.map((folder, index) => (
            <div
              key={folder.title}
              className="animate-in fade-in slide-in-from-bottom-12 duration-1000"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <AnimatedFolder
                title={folder.title}
                projects={folder.projects}
                gradient={folder.gradient}
                icon={folder.icon}
                className="mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
