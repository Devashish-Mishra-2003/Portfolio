import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <header className="bg-black text-white border-b-2 border-white sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <nav className="h-20 flex items-center justify-between">
          
          {/* LEFT: Name - Bold and Heavy, but not italic */}
          <div className="flex-shrink-0 text-xl md:text-2xl font-black uppercase tracking-tighter">
            Devashish Mishra
          </div>

          {/* RIGHT GROUP: Links + Button + Toggle */}
          <div className="flex items-center gap-6">
            
            {/* Desktop Links - Proportional weight */}
            <div className="hidden xl:flex items-center gap-8 text-base font-black uppercase tracking-widest">
              <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
              <a href="#experience" className="hover:opacity-70 transition-opacity">Experience</a>
              <a href="#certificates" className="hover:opacity-70 transition-opacity">Certificates</a>
              <a href="#skills" className="hover:opacity-70 transition-opacity">Skills</a>
              <a href="#education" className="hover:opacity-70 transition-opacity">Education</a>
            </div>

            {/* THE BUTTON: Hidden when mobile menu is active to avoid double-buttons */}
            <div className="hidden lg:block">
               <a href="/resume_sde.pdf" download className="relative group inline-block">
                <span className="absolute inset-0 bg-white translate-x-[4px] translate-y-[4px] group-active:opacity-0 transition-all duration-75" />
                <span className="relative z-10 block border-2 border-white bg-black px-5 py-1.5 text-sm font-black uppercase flex items-center gap-2 group-active:translate-x-[4px] group-active:translate-y-[4px] transition-all duration-75">
                  Resume <span>→</span>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="xl:hidden text-3xl font-black p-2" 
                onClick={() => setOpen(!open)}
              >
                {open ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="xl:hidden pb-10 pt-4 space-y-6 text-center border-t-2 border-white bg-black">
            <a href="#about" onClick={() => setOpen(false)} className="block text-xl font-black uppercase">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block text-xl font-black uppercase">Projects</a>
            <a href="#experience" onClick={() => setOpen(false)} className="block text-xl font-black uppercase">Experience</a>
            <a href="#certificates" onClick={() => setOpen(false)} className="block text-xl font-black uppercase">Certificates</a>
            
            {/* Resume button only shows here on screens where the desktop version is hidden */}
            <div className="pt-4 lg:hidden flex justify-center">
              <a href="/resume_sde.pdf" download className="relative group inline-block">
                <span className="absolute inset-0 bg-white translate-x-[5px] translate-y-[5px] group-active:opacity-0 transition-all duration-75" />
                <span className="relative z-10 block border-2 border-white bg-black px-10 py-3 text-lg font-black uppercase group-active:translate-x-[5px] group-active:translate-y-[5px] transition-all duration-75">
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