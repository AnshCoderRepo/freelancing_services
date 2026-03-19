"use client"
import React from "react"
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import Image from "next/image"

export default function GlassNavbar({ 
  logoSrc = "/only_text.png", 
  navItems = ["Home", "About", "Blogs"], 
  showLogo = true 
}) {
  return (
    <div 
      className="relative w-full h-32 flex items-center justify-center p-8 overflow-hidden bg-transparent"
    > 
      <nav className="relative w-full max-w-6xl h-15 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-between px-8 shadow-2xl z-10 md:px-6 md:h-14 sm:px-4 sm:h-13">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {showLogo && (
            <div className="flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image 
                src={logoSrc} 
                alt="Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto object-contain" 
              />
            </div>
          )}
        </div>
        
        {/* Navigation Items */}
        <div className="flex items-center gap-8 md:gap-6 sm:gap-4">
          <div className="flex items-center gap-4 md:gap-2">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`} 
                className="text-white font-medium text-sm px-4 py-2 rounded-full 
                transition-all duration-300 relative overflow-hidden
              hover:bg-white/10 hover:-translate-y-0.5 md:text-xs 
              md:px-3 md:py-1.5 sm:px-2.5 sm:py-1"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-white/20 pl-6 ml-2 md:gap-3 md:pl-4 sm:gap-2 sm:pl-3">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-white text-sm font-medium hover:text-white/80 transition-colors md:text-xs">
                  Login
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-all active:scale-95 md:text-xs md:px-3 md:py-1.5">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton afterSignOutUrl="/" />
            </Show>
          </div>
        </div>
      </nav>
    </div>
  )
}
