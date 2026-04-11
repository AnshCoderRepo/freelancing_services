import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function StackedCircularFooter() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 max-w-[980px]">
        <div className="flex flex-col items-center">
          <div className="mb-12 opacity-40">
             <svg viewBox="0 0 17 48" className="h-10 w-4 fill-[#86868b]">
               <path d="M15.073 28.51c-.624.912-1.396 1.83-2.316 2.753-1.468 1.48-2.618 2.37-3.9 2.37-.423 0-.915-.123-1.48-.372-.563-.247-1.127-.373-1.685-.373-.557 0-1.12.126-1.68.373-.565.249-1.07.382-1.517.398-1.248.046-2.485-.89-3.715-2.808C.198 28.694-.52 25.106-.52 21.6c0-2.433.486-4.444 1.458-6.035.794-1.3 1.914-2.112 3.36-2.112.443 0 .973.125 1.588.374.616.248 1.134.372 1.556.372.392 0 .895-.12 1.51-.36.618-.24 1.138-.36 1.558-.36 1.343 0 2.454.76 3.333 1.88-1.465.882-2.198 2.215-2.198 3.997 0 1.518.57 2.784 1.71 3.798.54.484 1.144.823 1.808 1.018-.158.463-.352.93-.58 1.41zM11.693 8.1c0 1.258-.453 2.463-1.36 3.616-1.137 1.452-2.397 2.246-3.714 2.246-.11 0-.276-.015-.494-.047.07-2.324 1.075-4.42 2.518-5.632.744-.622 1.637-1.036 2.68-1.242.062.333.1.728.1 1.059z"></path>
             </svg>
          </div>
          
          <nav className="mb-12 flex flex-wrap justify-center gap-x-10 gap-y-4">
            <a href="#flagship" className="text-[12px] text-[#86868b] hover:text-white transition-colors tracking-tight">Home</a>
            <a href="#about" className="text-[12px] text-[#86868b] hover:text-white transition-colors tracking-tight">The Story</a>
            <a href="#projects" className="text-[12px] text-[#86868b] hover:text-white transition-colors tracking-tight">Selected Works</a>
            <a href="#details" className="text-[12px] text-[#86868b] hover:text-white transition-colors tracking-tight">Architectural Deep-Dive</a>
            <a href="#" className="text-[12px] text-[#86868b] hover:text-white transition-colors tracking-tight">Contact Engineer</a>
          </nav>

          <div className="mb-12 flex space-x-8">
             <a href="#" className="text-[#86868b] hover:text-white transition-colors"><Twitter size={18} /></a>
             <a href="#" className="text-[#86868b] hover:text-white transition-colors"><Linkedin size={18} /></a>
             <a href="#" className="text-[#86868b] hover:text-white transition-colors"><Instagram size={18} /></a>
          </div>

          <div className="text-center pt-8 border-t border-white/5 w-full">
            <p className="text-[12px] text-[#424245] tracking-tight">
              Copyright &copy; 2026 Ansh Adarsh. All rights reserved. Precise engineering for the modern web.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


export { StackedCircularFooter }
