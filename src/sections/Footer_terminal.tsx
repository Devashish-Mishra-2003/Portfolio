export default function FooterTerminal() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black font-mono">
      {/* TERMINAL SEPARATOR */}
      <div className="w-full h-[1px] bg-green-900/30" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* LEFT SIDE: Identity & Contact */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tighter text-white">
                <span className="text-green-500 mr-2">❯</span>Devashish Mishra
              </h2>
              <p className="text-[10px] font-bold text-green-500/50 uppercase tracking-[0.3em] mt-2">
                Engineering specialized intelligent systems
              </p>
            </div>
            
            {/* TERMINAL MAIL BUTTON */}
            <div className="relative group inline-block">
              <span className="absolute inset-0 bg-green-500 translate-x-[3px] translate-y-[3px] group-active:opacity-0 transition-all duration-75" />
              <a 
                href="mailto:devashishmishra2003@gmail.com"
                className="relative z-10 block border-2 border-green-500 bg-black px-6 py-2 text-xs font-black uppercase text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all group-active:translate-x-[3px] group-active:translate-y-[3px]"
              >
                sudo send_mail --to="dev"
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Connection Stats & Socials */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-8">
              <a 
                href="https://github.com/Devashish-Mishra-2003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-green-500 transition-colors"
              >
                git://github
              </a>
              <a 
                href="https://www.linkedin.com/in/devashish-mishra-b09157295/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-green-500 transition-colors"
              >
                ln://linkedin
              </a>
            </div>
            
            <div className="text-right">
              <p className="text-[10px] font-bold text-green-900 uppercase tracking-widest">
                STATUS: SESSION_COMPLETE
              </p>
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mt-1">
                © {currentYear} PORTFOLIO_V2.0.0_STABLE
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}