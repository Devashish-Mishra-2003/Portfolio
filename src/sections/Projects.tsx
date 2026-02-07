import ProjectCard from "../components/ProjectCard";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Projects() {
  // Integrated the typewriter hook with the project section description
  const { displayed } = useTypewriter(
    "My works that I am proud of. These were build with a lot of passion and dedication. Proud Pickachu face :)"
  );

  return (
    <section id="projects" className="bg-[var(--bg)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-15">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
          Projects
        </h2>

        {/* Updated Description with Typing Animation */}
        <p className="mt-4 text-sm text-white/70 max-w-xl min-h-[3rem]">
          {displayed}
          <span className="animate-pulse ml-1 text-white">_</span>
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

          <ProjectCard
            title="NovusAI"
            description="Agentic RAG platform for biomedical research, orchestrating multiple autonomous agents for parallel retrieval and synthesis. Built async pipelines to reduce response latency and deployed as a cloud-ready FastAPI service."
            tech="FastAPI · React · Groq API · Supabase · Agentic RAG"
            github="https://github.com/Devashish-Mishra-2003/NovusAI"
            live="https://novusai.netlify.app/"
          />

          <ProjectCard
            title="Pawdentify"
            description="End-to-end dog breed classification system using EfficientNet with real-time inference. Deployed FastAPI backend on AWS EC2, integrated S3 for model storage, cloudinary for image storage and implemented cron-based cleanup for storage management."
            tech="TensorFlow · FastAPI · React · AWS EC2 · S3 · Nginx"
            github="https://github.com/Devashish-Mishra-2003/Pawdentify"
            live="https://pawdentify-frontend.vercel.app/"
          />

          <ProjectCard
            title="JobSync"
            description="Resume–JD matching platform with structured scoring and actionable feedback. Optimized NLP pipelines to reduce evaluation time from minutes to seconds and deployed modular backend services for independent scaling."
            tech="Python · NLP · FastAPI · Streamlit"
            github="https://github.com/Devashish-Mishra-2003/JobSync"
            live="https://jobsync-horizon.streamlit.app/"
          />

          <ProjectCard
            title="10 Seconds Ahead"
            description="A strategy-based game built around time-constrained decision making, where players must predict and act 10 seconds into the future. Focused on game-state simulation, deterministic logic, and performance-safe updates."
            tech="C++ · Game Logic · Simulation · Deterministic Systems"
            github="https://github.com/Devashish-Mishra-2003/10_Seconds_Ahead"
          />

        </div>
      </div>
    </section>
  );
}