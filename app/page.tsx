import { SplineSceneBasic } from "@/components/spline-scene-basic";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-24 bg-zinc-50 dark:bg-black gap-20">
      <div className="w-full max-w-6xl">
        <SplineSceneBasic />
      </div>

      <div className="w-full max-w-6xl">
        <HeroScrollDemo />
      </div>
      
      <div className="pb-12 text-center text-sm text-neutral-500">
        <p>Built with Next.js, Spline, Framer Motion, and Tailwind CSS</p>
      </div>
    </main>
  );
}
