'use client'

import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { useState, useEffect } from 'react'
import { BRANDING, HIGHLIGHTS, SOCIAL_LINKS } from "@/data/branding"
import { Github, Linkedin, Mail, Twitter, ChevronRight } from "lucide-react"

const SpiralDemo = ({ skipEnter = false }: { skipEnter?: boolean }) => {
  const [isEntered, setIsEntered] = useState(skipEnter)
  const [buttonVisible, setButtonVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(skipEnter)
  
  // Initial fade-in for the "Enter" button
  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonVisible(true)
    }, 1200)
    
    return () => clearTimeout(timer)
  }, [])

  const handleEnter = () => {
    setButtonVisible(false)
    setTimeout(() => {
      setIsEntered(true)
      // Slight delay for the content fade-in effect
      setTimeout(() => setContentVisible(true), 100)
    }, 600)
  }
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
      {/* 1. Background Animation (The hypnotic spiral) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isEntered ? 'opacity-40' : 'opacity-100'}`}>
        <SpiralAnimation />
      </div>

      {/* 2. Landing State: The "Enter" Overlay */}
      {!isEntered && (
        <div className={`
          absolute inset-0 z-50 flex flex-col items-center justify-center
          transition-all duration-1000 ease-in-out
          ${buttonVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}>
          <button 
            onClick={handleEnter}
            className="
              text-white text-3xl md:text-4xl tracking-[0.4em] uppercase font-extralight
              transition-all duration-700 p-12 group
            "
          >
            <span className="relative inline-block hover:tracking-[0.6em] transition-all duration-500">
              开始
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500"></span>
            </span>
            <div className="mt-4 text-[10px] tracking-[0.8em] text-white/30 animate-pulse">ENTER</div>
          </button>
        </div>
      )}

      {/* 3. Main Content: The "Discovery" Page (Visible after Enter) */}
      {isEntered && (
        <div className={`
          relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide
          transition-all duration-[1500ms] ease-out flex flex-col items-center
          ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}>
          
          <main className="max-w-[800px] w-full px-8 py-24 md:py-32 flex flex-col items-start gap-16 md:gap-24">
            
            {/* Header: Name and Intro */}
            <header className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                {BRANDING.name} 👋
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-medium tracking-tight">
                {BRANDING.role}
              </p>
            </header>

            {/* Bio Section with Emojis (Xubh-style) */}
            <section className="space-y-8 text-xl md:text-2xl leading-[1.6] font-normal text-white/80">
              <p>
                Working as a <span className="text-white font-medium border-b border-white/20 pb-1">Software Engineer</span> at 
                <span className="text-apple-blue font-semibold mx-1 italic underline decoration-apple-blue/30 underline-offset-4">EUROASIANN</span> (🦘).
              </p>
              
              <p>
                Previously built high-performance platforms as a developer (📱) and architect (📕).
              </p>

              <p>
                Leading the Web Tech team to craft polished components as a partner at 
                <span className="text-white font-medium italic underline decoration-white/30 underline-offset-4 mx-1">ASSolution</span> (🧪).
              </p>

              <p>
                I love bringing complex ideas to life through code and taking on technical challenges with 🐈 and 🐕 vibes.
              </p>
            </section>

            {/* Links / Socials Section */}
            <section className="w-full flex flex-wrap items-center gap-x-12 gap-y-6 pt-8">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-white/40 hover:text-white transition-all duration-300"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium tracking-widest uppercase">{link.label}</span>
                    <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                )
              })}
            </section>

            {/* Highlights Grid (Experience/Education) */}
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
              {HIGHLIGHTS.slice(0, 4).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="text-apple-blue" size={20} />
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white/50 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-base text-white/70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </section>

            {/* Footer */}
            <footer className="w-full pt-24 pb-12 opacity-20 text-xs tracking-[0.3em] uppercase">
              &copy; 2026 {BRANDING.name} &middot; Inspired by Excellence
            </footer>

          </main>
        </div>
      )}

      {/* 4. Navigation Icons (Top Right) */}
      <nav className="absolute top-8 right-8 z-50 flex gap-6">
        <button className="text-white/40 hover:text-white transition-colors" title="Projects">
          <Github size={22} />
        </button>
        <button className="text-white/40 hover:text-white transition-colors" title="LinkedIn">
          <Linkedin size={22} />
        </button>
      </nav>

      {/* Decorative Gradients */}
      <div className="fixed inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
      <div className="fixed inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </div>
  )
}

export {SpiralDemo}
