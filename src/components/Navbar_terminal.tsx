import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white border-b-2 border-white sticky top-0 z-50 font-mono">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <nav className="h-20 flex items-center justify-between">
          
          {/* LEFT: Name - Path Style */}
          <div className="flex-shrink-0 text-lg md:text-xl font-bold uppercase tracking-tighter">
            <span className="text-green-500 mr-2">~/</span>
            Devashish Mishra
            <span className="inline-block w-2 h-5 bg-green-500 ml-2 animate-pulse align-middle"></span>
          </div>

          {/* RIGHT GROUP: Links + Button + Toggle */}
          <div className="flex items-center gap-6">
            
            {/* Desktop Links - Terminal Menu Style */}
            <div className="hidden xl:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
              <a href="#projects" className="hover:text-green-500 transition-colors flex items-center gap-1">
                <span className="text-xs opacity-50">01.</span> Projects
              </a>
              <a href="#experience" className="hover:text-green-500 transition-colors flex items-center gap-1">
                <span className="text-xs opacity-50">02.</span> Experience
              </a>
              <a href="#certificates" className="hover:text-green-500 transition-colors flex items-center gap-1">
                <span className="text-xs opacity-50">03.</span> Certificates
              </a>
              <a href="#skills" className="hover:text-green-500 transition-colors flex items-center gap-1">
                <span className="text-xs opacity-50">04.</span> Skills
              </a>
              <a href="#education" className="hover:text-green-500 transition-colors flex items-center gap-1">
                <span className="text-xs opacity-50">05.</span> Education
              </a>
            </div>

            {/* THE BUTTON: Modified to be "Functional Green" */}
            <div className="hidden lg:block">
               <a href="/resume.pdf" download className="relative group inline-block">
                {/* Shadow/Offset layer - Green for high visibility */}
                <span className="absolute inset-0 bg-green-500 translate-x-[3px] translate-y-[3px] group-active:opacity-0 transition-all duration-75" />
                
                {/* Top layer */}
                <span className="relative z-10 block border-2 border-green-500 bg-black px-4 py-1.5 text-xs font-black uppercase flex items-center gap-2 group-active:translate-x-[3px] group-active:translate-y-[3px] transition-all duration-75 text-green-500 group-hover:bg-green-500 group-hover:text-black">
                  sudo fetch_resume <span>→</span>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="xl:hidden text-2xl font-black p-2 text-green-500" 
                onClick={() => setOpen(!open)}
              >
                {open ? "[X]" : "[=]"}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Terminal Overlay */}
        {open && (
          <div className="xl:hidden pb-10 pt-4 space-y-4 text-left px-4 border-t-2 border-green-500 bg-black">
            <a href="#about" onClick={() => setOpen(false)} className="block text-lg font-bold uppercase text-green-500 underline underline-offset-4">/root/about</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block text-lg font-bold uppercase hover:translate-x-2 transition-transform">/root/projects</a>
            <a href="#experience" onClick={() => setOpen(false)} className="block text-lg font-bold uppercase hover:translate-x-2 transition-transform">/root/experience</a>
            <a href="#certificates" onClick={() => setOpen(false)} className="block text-lg font-bold uppercase hover:translate-x-2 transition-transform">/root/certificates</a>
            
            <div className="pt-6 lg:hidden flex justify-start">
              <a href="/resume.pdf" download className="relative group inline-block w-full text-center">
                <span className="absolute inset-0 bg-green-500 translate-x-[4px] translate-y-[4px] transition-all duration-75" />
                <span className="relative z-10 block border-2 border-green-500 bg-black px-10 py-3 text-lg font-black uppercase text-green-500">
                  ./get_resume.sh
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}