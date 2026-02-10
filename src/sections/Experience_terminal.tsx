import { useTypewriter } from "../hooks/useTypewriter";

export default function ExperienceTerminal() {
  const { displayed } = useTypewriter(
    "Fetching internship_history... success. These roles define my professional growth in AI, Cloud, and software engineering."
  );

  const experiences = [
    {
      id: "01",
      company: "IBM SkillsBuild",
      role: "AI & Cloud Intern",
      period: "Jul 2025 – Aug 2025",
      points: [
        "Built production-grade data pipelines and REST APIs for inference workflows.",
        "Deployed services using IBM Watson APIs for real-time integration.",
        <>Developed an XGBoost classifier [ <span className="text-green-400">0.94 F1-score</span> ]</>,
        "Improved reliability through structured logging and monitoring."
      ]
    },
    {
      id: "02",
      company: "Infosys Springboard",
      role: "AI / ML Intern",
      period: "Aug 2025 – Oct 2025",
      points: [
        "Built end-to-end pipelines for data preprocessing and model training.",
        "Reduced experimentation iteration time by approximately 30%.",
        <>CNN models achieving [ <span className="text-green-400">~89% accuracy</span> ]</>,
        "Delivered official cohort submission for production-ready system."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-black py-24 font-mono border-b border-green-900/20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="flex items-center gap-2 mb-4">
            <span className="text-green-500 font-bold text-xl md:text-2xl animate-pulse">#</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
              cd ./work_experience
            </h2>
        </div>

        <p className="text-sm md:text-base text-green-500/60 max-w-2xl min-h-[3rem]">
          {displayed}
          <span className="animate-pulse ml-1 text-green-500 font-black">█</span>
        </p>

        {/* Terminal Timeline Axis - Dashed Green */}
        <div className="mt-20 relative border-l-2 border-dashed border-green-500/30 ml-2 md:ml-10 space-y-20">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-16">
              
              {/* Terminal Node - Glowing Green */}
              <div className="absolute -left-[7px] top-0 w-3 h-3 bg-black border border-green-500 rounded-sm z-20 group-hover:shadow-[0_0_10px_#22c55e] transition-all" />

              <div className="relative group">
                <div className="absolute inset-0 bg-green-500/5 translate-x-[4px] translate-y-[4px] border border-green-500/10" />
                
                <div className="relative z-10 border border-green-500/30 bg-[#050505] p-8 group-hover:border-green-400/50 transition-colors">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold text-green-500/40 uppercase">
                      PID: {1024 + parseInt(exp.id)} // STABLE_BUILD
                    </span>
                    <span className="text-[10px] font-bold text-white/30 px-2 py-1 border border-white/10 uppercase">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold uppercase text-white">
                    {exp.company} <span className="text-green-500">::</span> {exp.role}
                  </h3>

                  <ul className="mt-8 space-y-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-4 text-sm md:text-base text-gray-400 group/li">
                        <span className="text-green-500 font-black opacity-40 group-hover/li:opacity-100">❯</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}