import { useState } from "react";

export default function NavbarLight() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#fcfcfc] text-black border-b-4 border-black sticky top-0 z-50 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <nav className="h-20 flex items-center justify-between">
          
          {/* LEFT: Name - Bold Serif-style impact */}
          <div className="flex-shrink-0 text-xl md:text-2xl font-black uppercase tracking-tighter italic">
            Devashish<span className="text-violet-600 not-italic">.</span>Mishra
          </div>

          {/* RIGHT GROUP: Links + Button + Toggle */}
          <div className="flex items-center gap-6">
            
            {/* Desktop Links - Clean and Spacious */}
            <div className="hidden xl:flex items-center gap-8 text-xs font-black uppercase tracking-[0.15em]">
              <a href="#projects" className="hover:text-violet-600 transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-violet-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#experience" className="hover:text-violet-600 transition-colors relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-violet-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#certificates" className="hover:text-violet-600 transition-colors relative group">
                Certificates
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-violet-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#skills" className="hover:text-violet-600 transition-colors relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-violet-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#education" className="hover:text-violet-600 transition-colors relative group">
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-violet-600 transition-all group-hover:w-full"></span>
              </a>
            </div>

            {/* THE BUTTON: Saturated Purple Offset */}
            <div className="hidden lg:block">
               <a href="/resume.pdf" download className="relative group inline-block">
                {/* Shadow/Offset layer - Solid Black */}
                <span className="absolute inset-0 bg-black translate-x-[3px] translate-y-[3px] group-active:translate-x-0 group-active:translate-y-0 transition-all duration-75" />
                
                {/* Top layer - Purple */}
                <span className="relative z-10 block border-2 border-black bg-violet-600 px-5 py-2 text-xs font-black uppercase flex items-center gap-2 text-white group-hover:bg-white group-hover:text-black transition-all duration-75">
                  Get Resume <span>→</span>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="xl:hidden text-3xl font-black p-2 text-black" 
                onClick={() => setOpen(!open)}
              >
                {open ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Vibrant Overlay */}
        {open && (
          <div className="xl:hidden pb-10 pt-4 space-y-6 text-center border-t-4 border-black bg-[#fcfcfc]">
            <a href="#about" onClick={() => setOpen(false)} className="block text-2xl font-black uppercase hover:text-violet-600 transition-colors">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block text-2xl font-black uppercase hover:text-violet-600 transition-colors">Projects</a>
            <a href="#experience" onClick={() => setOpen(false)} className="block text-2xl font-black uppercase hover:text-violet-600 transition-colors">Experience</a>
            <a href="#certificates" onClick={() => setOpen(false)} className="block text-2xl font-black uppercase hover:text-violet-600 transition-colors">Certificates</a>
            
            <div className="pt-4 lg:hidden flex justify-center">
              <a href="/resume.pdf" download className="relative group inline-block">
                <span className="absolute inset-0 bg-black translate-x-[5px] translate-y-[5px] transition-all duration-75" />
                <span className="relative z-10 block border-2 border-black bg-violet-600 px-10 py-3 text-lg font-black uppercase text-white">
                  Resume →
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}