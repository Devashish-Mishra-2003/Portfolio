export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // 'bg-black' to match your Navbar
    <footer className="bg-black">
      {/* SOLID WHITE DIVIDER 
          This creates the separation from the Education section
      */}
      <div className="w-full h-[2px] bg-white opacity-100" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* LEFT SIDE: Identity */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                Devashish Mishra
              </h2>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
                AI/ML Developer & Fullstack Engineer
              </p>
            </div>
            
            {/* SAY HELLO BUTTON */}
            <div className="relative group/btn inline-block">
              <span className="absolute inset-0 bg-white translate-x-[3px] translate-y-[3px] group-active/btn:opacity-0 transition-all duration-75" />
              <a 
                href="mailto:devashishmishra2003@gmail.com"
                className="relative z-10 block border-2 border-white bg-black px-6 py-2 text-xs font-black uppercase group-active/btn:translate-x-[3px] group-active/btn:translate-y-[3px] transition-all duration-75"
              >
                Say Hello →
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Links & Copyright */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-8">
              <a 
                href="https://github.com/Devashish-Mishra-2003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/devashish-mishra-b09157295/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">
              © {currentYear} ALL_RIGHTS_RESERVED
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}