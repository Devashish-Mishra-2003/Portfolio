type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[]; // Changed to array for better styling
  github: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="relative group h-full transition-transform duration-200 font-mono">
      {/* CARD OFFSET - Changed to Green for Terminal Vibe */}
      <div className="absolute inset-0 bg-green-500/20 translate-x-[6px] translate-y-[6px] group-hover:bg-green-500/40 transition-colors" />

      {/* MAIN CARD BODY */}
      <div className="relative z-10 border border-green-500/50 bg-black h-full flex flex-col group-hover:border-green-400 transition-colors">
        
        {/* Terminal Header */}
        <div className="border-b border-green-500/30 bg-green-950/20 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-green-500/70">
              {title.toLowerCase()}.py
            </span>
          </div>
          {live && (
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-bold text-green-500">PROD_READY</span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-xl font-bold uppercase text-white group-hover:text-green-400 transition-colors">
              {title}
            </h3>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack - Pills Style */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span key={item} className="text-[10px] px-2 py-1 border border-green-500/30 text-green-500/80 bg-green-500/5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase text-white hover:text-green-500 transition-colors flex items-center gap-1"
            >
              <span className="text-green-500 font-black px-1">&gt;</span> source_code
            </a>

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase text-white hover:text-green-500 transition-colors flex items-center gap-1"
              >
                <span className="text-green-500 font-black px-1">&gt;</span> live_demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}