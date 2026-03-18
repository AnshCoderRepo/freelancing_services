"use client"
import React from "react"
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export default function GlassNavbar({ 
  logo = "Glass Navbar", 
  navItems = ["Home", "About", "Blogs"], 
  showLogo = true 
}) {
  return (
    <div 
      className="relative w-full h-32 flex items-center justify-center p-8 overflow-hidden bg-transparent"
    > 
      <nav className="relative w-full max-w-6xl h-15 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-between px-8 shadow-2xl z-10 md:px-6 md:h-14 sm:px-4 sm:h-13">
        {/* Logo Section */}
        <div className="flex items-center gap-3 text-white font-semibold text-lg md:text-base">
          {showLogo && (
            <div className="flex items-center justify-center text-white transition-transform duration-300 hover:rotate-180 cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          )}
          <span className="font-semibold tracking-tight">{logo}</span>
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
