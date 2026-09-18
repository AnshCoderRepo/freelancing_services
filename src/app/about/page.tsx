import type { Metadata } from "next";
import { SpiralDemo } from "@/components/ui/spiral-demo";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy",
  description:
    "Learn more about Ansh Adarsh — Software Development Engineer background, academic foundation at LIET (CGPA 8.4), production experience at Euroasiann, and technical proficiencies.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Ansh Adarsh | Software Development Engineer",
    description:
      "Full-stack engineering philosophy, academic background, and professional experience.",
    url: "https://anshadarsh.dev/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <SpiralDemo skipEnter={true} />
    </main>
  );
}
