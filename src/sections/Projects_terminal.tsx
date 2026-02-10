import { useTypewriter } from "../hooks/useTypewriter";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="relative group h-full transition-transform duration-200 font-mono">
      {/* CARD OFFSET - Terminal Green Glow */}
      <div className="absolute inset-0 bg-green-500/10 translate-x-[6px] translate-y-[6px] group-hover:bg-green-500/20 transition-all duration-300" />

      {/* MAIN CARD BODY */}
      <div className="relative z-10 border border-green-500/30 bg-[#050505] h-full flex flex-col group-hover:border-green-400/60 transition-colors duration-300">
        
        {/* Terminal Header */}
        <div className="border-b border-green-500/20 bg-green-950/10 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
            <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-green-500/50">
              {title.toLowerCase().replace(/\s+/g, '_')}_v1.0.sh
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${live ? 'bg-green-500 animate-pulse' : 'bg-yellow-500/50'}`} />
            <span className="text-[9px] font-bold text-green-500/60 uppercase">
              {live ? 'Live_Build' : 'Local_Dev'}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-xl md:text-2xl font-bold uppercase text-white group-hover:text-green-400 transition-colors">
              {title}
            </h3>

            <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span 
                  key={item} 
                  className="text-[10px] px-2 py-0.5 border border-green-500/20 text-green-500/70 bg-green-500/5 hover:bg-green-500/10 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase text-white hover:text-green-500 transition-colors flex items-center gap-1 group/link"
            >
              <span className="text-green-500 font-black group-hover:translate-x-1 transition-transform">❯</span> view_source
            </a>

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase text-white hover:text-green-500 transition-colors flex items-center gap-1 group/link"
              >
                <span className="text-green-500 font-black group-hover:translate-x-1 transition-transform">❯</span> deploy_live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { displayed } = useTypewriter(
    "My works that I am proud of. These were built with a lot of passion and dedication. Proud Pikachu face :)"
  );

  const projects = [
    {
      title: "NovusAI",
      description: "Agentic RAG platform for biomedical research, orchestrating multiple autonomous agents for parallel retrieval and synthesis. Built async pipelines to reduce response latency and deployed as a cloud-ready FastAPI service.",
      tech: ["FastAPI", "React", "Groq API", "Supabase", "Agentic RAG"],
      github: "https://github.com/Devashish-Mishra-2003/NovusAI",
      live: "https://novusai.netlify.app/"
    },
    {
      title: "Pawdentify",
      description: "End-to-end dog breed classification system using EfficientNet with real-time inference. Deployed FastAPI backend on AWS EC2, integrated S3 for model storage, Cloudinary for image storage, and implemented cron-based cleanup.",
      tech: ["TensorFlow", "FastAPI", "React", "AWS EC2", "S3", "Nginx"],
      github: "https://github.com/Devashish-Mishra-2003/Pawdentify",
      live: "https://pawdentify-frontend.vercel.app/"
    },
    {
      title: "JobSync",
      description: "Resume–JD matching platform with structured scoring and actionable feedback. Optimized NLP pipelines to reduce evaluation time from minutes to seconds and deployed modular backend services for independent scaling.",
      tech: ["Python", "NLP", "FastAPI", "Streamlit"],
      github: "https://github.com/Devashish-Mishra-2003/JobSync",
      live: "https://jobsync-horizon.streamlit.app/"
    },
    {
      title: "10 Seconds Ahead",
      description: "A strategy-based game built around time-constrained decision making, where players must predict and act 10 seconds into the future. Focused on game-state simulation, deterministic logic, and performance-safe updates.",
      tech: ["C++", "Game Logic", "Simulation", "Deterministic Systems"],
      github: "https://github.com/Devashish-Mishra-2003/10_Seconds_Ahead"
    }
  ];

  return (
    <section id="projects" className="bg-black py-20 font-mono border-b border-green-900/20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
            <span className="text-green-500 font-bold text-xl md:text-2xl animate-pulse">#</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
              ls ./projects --featured
            </h2>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-green-500/60 max-w-2xl min-h-[3rem] leading-relaxed">
          {displayed}
          <span className="animate-pulse ml-1 text-green-500 font-black">█</span>
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}