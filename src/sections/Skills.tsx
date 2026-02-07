import { useTypewriter } from "../hooks/useTypewriter";
import SkillChip from "../components/SkillChip";

export default function Skills() {
  const { displayed } = useTypewriter(
    "These are the things I know how to do and I am continously learning more to expand this list. That's > rotating very fast :)"
  );

  return (
    <section id="skills" className="bg-[var(--bg)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20">

        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
          Skills
        </h2>

        <p className="mt-4 text-sm text-white/70 max-w-xl min-h-[3rem]">
          {displayed}
          <span className="animate-pulse ml-1 text-white">_</span>
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

          {[
            { title: "Languages", skills: ["C++", "Python", "JavaScript", "SQL"] },
            { title: "Frameworks", skills: ["React", "FastAPI", "TensorFlow", "PyTorch","Tailwind CSS","Mantine","Clerk"] },
            { title: "Cloud & DevOps", skills: ["AWS EC2", "AWS S3", "Cron", "Nginx", "Linux"] },
            { title: "Databases", skills: ["PostgreSQL", "Supabase", "MongoDB", "MySQL","SQLite","Atlas"] },
            { title: "AI & ML", skills: ["CNNs", "XGBoost", "NLP", "Agentic RAG","GenAI","LLM","RAG"] },
            { title: "Core CS", skills: ["DSA", "OOP", "System Design","DBMS","Networking"] },
            { title: "Tools", skills: ["Git","GitHub", "Jupyter", "VS Code", "Kaggle", "Figma"] }
          ].map((group, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3 border-b-2 border-white pb-2">
                <span className="text-xl font-black text-white inline-block animate-terminal-spin">
                  &gt;
                </span>
                <h3 className="text-xl font-black uppercase tracking-tighter text-white">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <SkillChip key={skill} label={skill} />
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
          animation: terminal-spin 0.05s steps(4) infinite;
        }
      `}} />
    </section>
  );
}