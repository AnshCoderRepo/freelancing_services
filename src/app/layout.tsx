import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Suspense } from "react";
import { ClientOnly } from "@/components/client-only";
import GlassNavbar from "@/components/glass-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASSolution | Premium Engineering Services",
  description: "High-performance full-stack solutions and digital architecture by ASSolution.",
};

import PageTransition from "@/components/providers/page-transition";
import InitialLoadProvider from "@/components/providers/initial-load-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
