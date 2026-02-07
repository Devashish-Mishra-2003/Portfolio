type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
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
    <div className="relative group h-full transition-transform duration-200 hover:-translate-y-1">
      {/* CARD OFFSET - Solid White */}
      <div className="absolute inset-0 bg-white translate-x-[8px] translate-y-[8px]" />

      {/* MAIN CARD BODY */}
      <div className="relative z-10 border-2 border-white bg-black h-full flex flex-col transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1">
        
        {/* Terminal Header - Aligned with Experience style */}
        <div className="border-b-2 border-white bg-gray-900 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
              {title.toLowerCase()}_v1.0.sh
            </span>
          </div>
          {/* Subtle "Active" pulse for projects */}
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-black uppercase text-gray-500">Live_Build</span>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
              {title}
            </h3>

            <p className="mt-4 text-base text-gray-300 leading-tight font-bold">
              {description}
            </p>

            <p className="mt-6 text-xs font-black uppercase tracking-widest text-gray-500">
              {tech}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap gap-6">
            {/* GitHub Button */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn inline-block"
            >
              <span className="absolute inset-0 bg-gray-400 translate-x-[4px] translate-y-[4px] group-active/btn:opacity-0 transition-all duration-75" />
              <span className="relative z-10 block border-2 border-white bg-black px-4 py-2 text-xs font-black uppercase group-active/btn:translate-x-[4px] group-active/btn:translate-y-[4px] transition-all duration-75">
                GitHub →
              </span>
            </a>

            {/* Live Button */}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/btn inline-block"
              >
                <span className="absolute inset-0 bg-gray-400 translate-x-[4px] translate-y-[4px] group-active/btn:opacity-0 transition-all duration-75" />
                <span className="relative z-10 block border-2 border-white bg-black px-4 py-2 text-xs font-black uppercase group-active/btn:translate-x-[4px] group-active/btn:translate-y-[4px] transition-all duration-75">
                  Live →
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}