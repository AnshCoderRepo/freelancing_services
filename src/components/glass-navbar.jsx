 "use client"
import React, { useState } from "react"
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import Image from "next/image"
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassNavbar({ 
  navItems = ["Home", "About", "Projects", "Blogs"], 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-12 bg-black/80 backdrop-blur-[20px] saturate-[180%] border-b border-white/10 flex items-center justify-center px-4 md:px-6">
      <div className="w-full max-w-[980px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="opacity-80 hover:opacity-100 transition-opacity">
           <svg viewBox="0 0 17 48" className="h-10 w-4 fill-white">
             <path d="M15.073 28.51c-.624.912-1.396 1.83-2.316 2.753-1.468 1.48-2.618 2.37-3.9 2.37-.423 0-.915-.123-1.48-.372-.563-.247-1.127-.373-1.685-.373-.557 0-1.12.126-1.68.373-.565.249-1.07.382-1.517.398-1.248.046-2.485-.89-3.715-2.808C.198 28.694-.52 25.106-.52 21.6c0-2.433.486-4.444 1.458-6.035.794-1.3 1.914-2.112 3.36-2.112.443 0 .973.125 1.588.374.616.248 1.134.372 1.556.372.392 0 .895-.12 1.51-.36.618-.24 1.138-.36 1.558-.36 1.343 0 2.454.76 3.333 1.88-1.465.882-2.198 2.215-2.198 3.997 0 1.518.57 2.784 1.71 3.798.54.484 1.144.823 1.808 1.018-.158.463-.352.93-.58 1.41zM11.693 8.1c0 1.258-.453 2.463-1.36 3.616-1.137 1.452-2.397 2.246-3.714 2.246-.11 0-.276-.015-.494-.047.07-2.324 1.075-4.42 2.518-5.632.744-.622 1.637-1.036 2.68-1.242.062.333.1.728.1 1.059z"></path>
           </svg>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[12px] text-white/80 hover:text-white transition-colors font-normal tracking-tight"
            >
              {item}
            </a>
          ))}
          <button className="text-white/80 hover:text-white transition-colors"><Search size={14} /></button>
          <button className="text-white/80 hover:text-white transition-colors"><ShoppingBag size={14} /></button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/80">
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             className="fixed inset-0 top-12 bg-black z-[99] flex flex-col items-center pt-8 px-10"
           >
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-[24px] font-semibold text-white/90 border-b border-white/10"
                >
                  {item}
                </a>
              ))}
           </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}


