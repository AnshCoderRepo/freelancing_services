import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Suspense } from "react";
import { ClientOnly } from "@/components/client-only";
import GlassNavbar from "@/components/glass-navbar";
import PageTransition from "@/components/providers/page-transition";
import InitialLoadProvider from "@/components/providers/initial-load-provider";
import { JsonLd } from "@/components/seo/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://anshadarsh.dev";

export const viewport: Viewport = {
  themeColor: "#0B0F17",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ansh Adarsh | Software Development Engineer",
    template: "%s | Ansh Adarsh",
  },
  description:
    "Portfolio of Ansh Adarsh — Software Development Engineer specializing in React, Next.js 16, TypeScript, Node.js, and high-concurrency cloud architectures. Explore production works, interactive terminals, and systems benchmarks.",
  keywords: [
    "Ansh Adarsh",
    "Software Development Engineer",
    "SDE Portfolio",
    "Full Stack Engineer",
    "Next.js Developer",
    "React 19",
    "TypeScript",
    "Node.js",
    "Web Architect",
    "Euroasiann SDE",
    "Software Engineer India",
    "Frontend Developer",
    "Backend Systems",
  ],
  authors: [{ name: "Ansh Adarsh", url: "https://github.com/AnshCoderRepo" }],
  creator: "Ansh Adarsh",
  publisher: "Ansh Adarsh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ansh Adarsh | Software Development Engineer",
    description:
      "Explore production applications, high-throughput microservices, and interactive developer terminals built by Ansh Adarsh.",
    siteName: "Ansh Adarsh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Adarsh | Software Development Engineer",
    description:
      "Shipping production-grade web interfaces and scalable systems in React, Next.js, and TypeScript.",
    creator: "@AnshCoderRepo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <Suspense>
            <InitialLoadProvider>
              <SmoothScroll>
                <div className="fixed top-0 left-0 right-0 z-50">
                  <ClientOnly>
                    <GlassNavbar />
                  </ClientOnly>
                </div>
                <PageTransition>
                  {children}
                </PageTransition>
              </SmoothScroll>
            </InitialLoadProvider>
          </Suspense>
        </ClerkProvider>
      </body>
    </html>
  );
}
