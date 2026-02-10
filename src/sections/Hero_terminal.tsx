import { useTypewriter } from "../hooks/useTypewriter";

export default function HeroTerminal() {
  const headline = "I build intelligent systems\nand production-ready software.";
  const { displayed, done } = useTypewriter(headline, 30);

  return (
    <section className="bg-black text-white font-mono border-b border-green-900/30">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="py-20 md:py-32 max-w-4xl">
          
          {/* Terminal Header Decoration */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>

          {/* Headline with Command Prompt */}
          <div className="mb-2 text-green-500 font-bold opacity-80">
            guest@devashish:~$ <span className="text-white">exec --main</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight whitespace-pre-line min-h-[6rem]">
            {displayed}
            <span
              className={`
                inline-block align-middle ml-1
                w-[12px] h-[1em] bg-green-500
                ${done ? "animate-pulse" : ""}
              `}
            />
          </h1>

          {/* Subtext as Environment Variables */}
          <div className="mt-8 space-y-2">
            <p className="text-base md:text-lg">
              <span className="text-green-500 font-bold">SET</span> <span className="text-blue-400">STACK</span> = [ <span className="text-white">AI/ML, Backend, Full-Stack</span> ]
            </p>
            <p className="text-base md:text-lg opacity-80 italic">
              "Focused on scalable systems and clean engineering."
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-wrap gap-6">
            {/* GitHub - Command Style */}
            <a
              href="https://github.com/Devashish-Mishra-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block w-fit"
            >
              <span className="absolute inset-0 bg-green-500 translate-x-[4px] translate-y-[4px] group-active:opacity-0 transition-all duration-75" />
              <span className="relative z-10 block border-2 border-green-500 bg-black px-6 py-2 text-sm font-black uppercase group-active:translate-x-[4px] group-active:translate-y-[4px] transition-all duration-75 text-green-500 group-hover:bg-green-500 group-hover:text-black">
                ./view_github.sh
              </span>
            </a>

            {/* LinkedIn - Command Style */}
            <a
              href="https://linkedin.com/in/devashish-mishra-b09157295"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block w-fit"
            >
              <span className="absolute inset-0 bg-white translate-x-[4px] translate-y-[4px] group-active:opacity-0 transition-all duration-75" />
              <span className="relative z-10 block border-2 border-white bg-black px-6 py-2 text-sm font-black uppercase group-active:translate-x-[4px] group-active:translate-y-[4px] transition-all duration-75 text-white group-hover:bg-white group-hover:text-black">
                connect --linkedin
              </span>
            </a>
          </div>

          {/* System Status Footer */}
          <div className="mt-16 flex items-center gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-500">AVAILABLE_FOR_INTERNSHIPS: TRUE</span>
            </div>
            <span className="text-white/30">|</span>
            <div className="text-white/60 font-medium">
              LOC: "INDIA"
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}