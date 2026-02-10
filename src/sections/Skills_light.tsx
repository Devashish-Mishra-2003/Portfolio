import { useTypewriter } from "../hooks/useTypewriter";
import SkillChipLight from "../components/SkillChip_light";

export default function SkillsLight() {
  const { displayed } = useTypewriter(
    "A comprehensive breakdown of my technical arsenal. I'm constantly iterating on this stack to stay at the forefront of AI and Cloud engineering."
  );

  const skillGroups = [
    { title: "Languages", color: "bg-red-400", skills: ["C++", "Python", "JavaScript", "SQL"] },
    { title: "Frameworks", color: "bg-violet-400", skills: ["React", "FastAPI", "TensorFlow", "PyTorch", "Tailwind CSS", "Mantine", "Clerk"] },
    { title: "Cloud & DevOps", color: "bg-cyan-400", skills: ["AWS EC2", "AWS S3", "Cron", "Nginx", "Linux"] },
    { title: "Databases", color: "bg-green-400", skills: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "SQLite", "Atlas"] },
    { title: "AI & ML", color: "bg-blue-400", skills: ["CNNs", "XGBoost", "NLP", "Agentic RAG", "GenAI", "LLM", "RAG"] },
    { title: "Core CS", color: "bg-yellow-400", skills: ["DSA", "OOP", "System Design", "DBMS", "Networking"] },
    { title: "Tools", color: "bg-orange-400", skills: ["Git", "GitHub", "Jupyter", "VS Code", "Kaggle", "Figma"] }
  ];

  return (
    <section id="skills" className="bg-[#fcfcfc] py-24 font-sans border-t-4 border-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="inline-block bg-black px-4 py-2 border-4 border-black mb-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
              Tech Stack
            </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl font-bold text-black/60 max-w-2xl min-h-[4rem] leading-tight mb-20">
          {displayed}
          <span className="animate-pulse ml-1 text-black font-black">|</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="space-y-6">
              {/* Category Header with Dynamic Color Block */}
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 border-2 border-black ${group.color} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`} />
                <h3 className="text-xl font-black uppercase tracking-tighter text-black">
                  {group.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <SkillChipLight key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}