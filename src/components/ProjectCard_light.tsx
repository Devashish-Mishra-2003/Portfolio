type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  github: string;
  live?: string;
};

export default function ProjectCardLight({
  title,
  description,
  tech,
  github,
  live,
}: ProjectCardProps) {
  // Convert tech string to array for better pill styling
  const techStack = tech.split(' · ');

  return (
    <div className="relative group h-full font-sans">
      {/* CARD OFFSET - Solid Black for depth */}
      <div className="absolute inset-0 bg-black translate-x-[8px] translate-y-[8px] group-hover:translate-x-[10px] group-hover:translate-y-[10px] transition-all duration-200" />

      {/* MAIN CARD BODY */}
      <div className="relative z-10 border-4 border-black bg-white h-full flex flex-col group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
        
        {/* Top Accent Bar */}
        <div className="h-2 bg-violet-600 w-full border-b-2 border-black" />

        <div className="p-8 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex justify-between items-start mb-4">
               <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black leading-none">
                {title}
              </h3>
              {live && (
                <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 uppercase border-2 border-green-700">
                  Live
                </span>
              )}
            </div>

            <p className="text-base text-gray-700 leading-snug font-medium">
              {description}
            </p>

            {/* Tech Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span key={item} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-violet-50 text-violet-700 border border-violet-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-violet-600 transition-colors"
            >
              Source ↗
            </a>

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-black bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors"
              >
                Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}