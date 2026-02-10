import { useTypewriter } from "../hooks/useTypewriter";
import SkillChipTerminal from "../components/SkillChip_terminal";

export default function SkillsTerminal() {
  const { displayed } = useTypewriter(
    "Querying local_capabilities... Found 7 categories. System performance optimized for high-intensity engineering tasks."
  );

  const skillGroups = [
    { title: "languages", skills: ["C++", "Python", "JavaScript", "SQL"] },
    { title: "frameworks", skills: ["React", "FastAPI", "TensorFlow", "PyTorch", "Tailwind CSS", "Mantine", "Clerk"] },
    { title: "cloud_devops", skills: ["AWS EC2", "AWS S3", "Cron", "Nginx", "Linux"] },
    { title: "databases", skills: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "SQLite", "Atlas"] },
    { title: "ai_ml", skills: ["CNNs", "XGBoost", "NLP", "Agentic RAG", "GenAI", "LLM", "RAG"] },
    { title: "core_cs", skills: ["DSA", "OOP", "System Design", "DBMS", "Networking"] },
    { title: "tools", skills: ["Git", "GitHub", "Jupyter", "VS Code", "Kaggle", "Figma"] }
  ];

  return (
    <section id="skills" className="bg-black py-24 font-mono border-b border-green-900/20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-500 font-bold text-xl md:text-2xl animate-pulse">#</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
            tree ./skills -L 1
          </h2>
        </div>

        {/* Typewriter Description */}
        <p className="text-sm md:text-base text-green-500/60 max-w-2xl min-h-[3rem] leading-relaxed mb-16">
          {displayed}
          <span className="animate-pulse ml-1 text-green-500 font-black">█</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-green-500/20 pb-2">
                <span className="text-lg font-black text-green-500 inline-block animate-terminal-spin">
                  &gt;
                </span>
                <h3 className="text-lg font-bold uppercase tracking-widest text-white">
                  ~/skills/{group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <SkillChipTerminal key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for the rotation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes terminal-spin {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(90deg); }
          50% { transform: rotate(180deg); }
          75% { transform: rotate(270deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-terminal-spin {
          animation: terminal-spin 0.1s steps(4) infinite;
        }
      `}} />
    </section>
  );
}