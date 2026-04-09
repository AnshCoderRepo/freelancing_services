 "use client"
import React, { useState } from "react"
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import Image from "next/image"
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassNavbar({ 
  logoSrc = "/only_text.png", 
  navItems = ["Home", "About", "Blogs"], 
  showLogo = true 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative w-full h-24 md:h-32 flex items-center justify-center p-4 md:p-8 overflow-hidden bg-transparent"
    > 
      <nav className="relative w-full max-w-6xl h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-between px-6 md:px-8 shadow-2xl z-50">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {showLogo && (
            <div className="flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image 
                src={logoSrc} 
                alt="Logo" 
                width={120} 
                height={40} 
                className="h-6 md:h-8 w-auto object-contain" 
              />
            </div>
          )}
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-2 lg:gap-4">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`} 
                className="text-white font-medium text-sm px-4 py-2 rounded-full 
                transition-all duration-300 relative overflow-hidden
              hover:bg-white/10 hover:-translate-y-0.5"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-white/20 pl-6 ml-2">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-white text-xs lg:text-sm font-medium hover:text-white/80 transition-colors">
                  Login
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-white text-black px-4 py-2 rounded-full text-xs lg:text-sm font-semibold hover:bg-white/90 transition-all active:scale-95">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton afterSignOutUrl="/" />
            </Show>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-3">
           <Show when="signed-in">
              <UserButton afterSignOutUrl="/" />
            </Show>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 bg-white/10 rounded-full border border-white/10 active:scale-95 transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 z-40 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-white font-medium text-lg p-4 rounded-2xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <Show when="signed-out">
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <SignInButton mode="modal">
                  <button className="w-full text-white text-base font-medium py-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full bg-white text-black py-4 rounded-2xl text-base font-bold hover:bg-white/90 active:scale-95 transition-all shadow-xl shadow-white/5">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </Show>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
