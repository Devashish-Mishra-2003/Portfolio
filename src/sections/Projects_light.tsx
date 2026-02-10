import ProjectCardLight from "../components/ProjectCard_light";
import { useTypewriter } from "../hooks/useTypewriter";

export default function ProjectsLight() {
  const { displayed } = useTypewriter(
    "Showcasing high-impact systems built with precision. These projects represent my journey through AI, Cloud, and Engineering."
  );

  const projectData = [
    {
      title: "NovusAI",
      description: "Agentic RAG platform for biomedical research, orchestrating multiple autonomous agents for parallel retrieval and synthesis. Built async pipelines to reduce response latency.",
      tech: "FastAPI · React · Groq API · Supabase · Agentic RAG",
      github: "https://github.com/Devashish-Mishra-2003/NovusAI",
      live: "https://novusai.netlify.app/"
    },
    {
      title: "Pawdentify",
      description: "End-to-end dog breed classification system using EfficientNet with real-time inference. Deployed FastAPI backend on AWS EC2, integrated S3 for model storage.",
      tech: "TensorFlow · FastAPI · React · AWS EC2 · S3 · Nginx",
      github: "https://github.com/Devashish-Mishra-2003/Pawdentify",
      live: "https://pawdentify-frontend.vercel.app/"
    },
    {
      title: "JobSync",
      description: "Resume–JD matching platform with structured scoring and actionable feedback. Optimized NLP pipelines to reduce evaluation time from minutes to seconds.",
      tech: "Python · NLP · FastAPI · Streamlit",
      github: "https://github.com/Devashish-Mishra-2003/JobSync",
      live: "https://jobsync-horizon.streamlit.app/"
    },
    {
      title: "10 Seconds Ahead",
      description: "A strategy-based game built around time-constrained decision making, where players must predict and act 10 seconds into the future. Focused on performance-safe updates.",
      tech: "C++ · Game Logic · Simulation · Deterministic Systems",
      github: "https://github.com/Devashish-Mishra-2003/10_Seconds_Ahead"
    }
  ];

  return (
    <section id="projects" className="bg-[#fcfcfc] border-t-4 border-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24">

        {/* Section Header */}
        <div className="inline-block bg-violet-600 px-4 py-2 border-4 border-black mb-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
              Works
            </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl font-bold text-black/60 max-w-2xl min-h-[4rem] leading-tight">
          {displayed}
          <span className="animate-pulse ml-1 text-violet-600 font-black">|</span>
        </p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          {projectData.map((project, idx) => (
            <ProjectCardLight key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}