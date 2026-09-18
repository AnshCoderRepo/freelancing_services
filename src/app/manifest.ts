import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ansh Adarsh — Software Development Engineer",
    short_name: "Ansh Adarsh",
    description: "Portfolio of Ansh Adarsh — Software Development Engineer specializing in React, Next.js, TypeScript, Node.js, and high-performance digital platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0B0F17",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
