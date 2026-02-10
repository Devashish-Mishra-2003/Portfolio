export default function FooterLight() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fcfcfc] border-t-8 border-black font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          
          {/* LEFT SIDE: Identity */}
          <div className="space-y-8">
            <div className="relative group inline-block">
               <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none">
                Devashish<br />Mishra
              </h2>
              {/* Decorative underline */}
              <div className="h-2 w-1/2 bg-yellow-400 mt-2 border-2 border-black" />
            </div>

            <div className="space-y-2">
               <p className="text-sm font-black text-violet-600 uppercase tracking-widest">
                AI/ML · Backend · Fullstack
              </p>
              
              {/* CONTACT BUTTON - High Saliency */}
              <div className="relative group/btn inline-block pt-2">
                <span className="absolute inset-0 bg-black translate-x-[4px] translate-y-[4px] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-all" />
                <a 
                  href="mailto:devashishmishra2003@gmail.com"
                  className="relative z-10 block border-2 border-black bg-white px-8 py-3 text-sm font-black uppercase text-black hover:bg-violet-600 hover:text-white transition-colors"
                >
                  Let's Talk →
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Navigation & Socials */}
          <div className="flex flex-col items-start md:items-end gap-10 w-full md:w-auto">
            <div className="flex flex-wrap gap-8">
              <a 
                href="https://github.com/Devashish-Mishra-2003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-black uppercase tracking-widest text-black hover:text-violet-600 border-b-2 border-transparent hover:border-violet-600 transition-all"
              >
                GitHub ↗
              </a>
              <a 
                href="https://www.linkedin.com/in/devashish-mishra-b09157295/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-black uppercase tracking-widest text-black hover:text-violet-600 border-b-2 border-transparent hover:border-violet-600 transition-all"
              >
                LinkedIn ↗
              </a>
            </div>
            
            <div className="flex flex-col md:items-end gap-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                EST. 2026 // MURADNAGAR, INDIA
              </p>
              <p className="text-[11px] font-black text-black uppercase tracking-[0.2em] bg-yellow-400 px-2 border-2 border-black">
                © {currentYear} ALL_RIGHTS_RESERVED
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}