import { SplineSceneBasic } from "@/components/spline-scene-basic";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";
import { StackedCircularFooterDemo } from "@/components/ui/stacked-circular-footer-demo";
import { GlassmorphismPortfolioBlock } from "@/components/ui/glassmorphism-portfolio-block-shadcnui";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";
import { PortfolioFolderSection } from "@/components/ui/3d-folder";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";

const FOCUS_RAIL_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "Neon Tokyo",
    description: "Experience the vibrant nightlife and illuminated streets of Shinjuku.",
    meta: "Urban • Travel",
    imageSrc: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop",
    href: "#tokyo",
  },
  {
    id: 2,
    title: "Nordic Silence",
    description: "Minimalist architecture meeting the raw beauty of the Icelandic coast.",
    meta: "Design • Nature",
    imageSrc: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000&auto=format&fit=crop",
    href: "#nordic",
  },
  {
    id: 3,
    title: "Sahara Echoes",
    description: "Wandering through the timeless dunes under an endless golden sun.",
    meta: "Adventure • Heat",
    imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
    href: "#sahara",
  },
  {
    id: 4,
    title: "Cyber Future",
    description: "A glimpse into a technological singularity where AI meets humanity.",
    meta: "Tech • AI",
    imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    href: "#cyber",
  },
  {
    id: 5,
    title: "Deep Ocean",
    description: "The crushing pressure and alien beauty of the Mariana Trench.",
    meta: "Science • Deep",
    imageSrc: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1000&auto=format&fit=crop",
    href: "#ocean",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-start p-4 md:p-24 bg-zinc-50 dark:bg-black gap-20">
        <div className="w-full max-w-6xl">
          <SplineSceneBasic />
        </div>

        <div className="w-full max-w-6xl">
          <GlassmorphismPortfolioBlock />
        </div>

        {/* FocusRail: 3D carousel below profile section */}
        <div className="w-full">
          <div className="mb-8 text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Stories</h2>
            <p className="text-neutral-400">Navigate the rail to explore selected works.</p>
          </div>
          <FocusRail items={FOCUS_RAIL_ITEMS} autoPlay={false} loop={true} />
        </div>

        {/* 3D Folder Portfolio */}
        <div className="w-full">
          <PortfolioFolderSection />
        </div>

        <div className="w-full max-w-6xl">
          <HeroScrollDemo />
        </div>
        
        <div className="pb-12 text-center text-sm text-neutral-500">
          <p>Built with Next.js, Spline, Framer Motion, and Tailwind CSS</p>
        </div>
      </main>

      {/* Testimonials — above footer */}
      <div className="w-full bg-zinc-50 dark:bg-black">
        <TestimonialsSection />
      </div>

      <StackedCircularFooterDemo />
    </div>
  );
}
