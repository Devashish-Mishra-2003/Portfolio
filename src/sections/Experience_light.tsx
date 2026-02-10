import { useTypewriter } from "../hooks/useTypewriter";

export default function ExperienceLight() {
  const { displayed } = useTypewriter(
    "A timeline of my professional growth. I've focused on delivering measurable impact through AI and Cloud infrastructure."
  );

  const experiences = [
    {
      company: "IBM SkillsBuild",
      role: "AI & Cloud Intern",
      period: "Jul 2025 – Aug 2025",
      points: [
        "Built production-grade data pipelines and REST APIs for model training and inference.",
        "Deployed cloud services using IBM Watson APIs for real-time system integration.",
        "Developed an XGBoost classifier achieving a 0.94 F1-score with balanced performance.",
        "Improved reliability through structured logging and performance tuning."
      ]
    },
    {
      company: "Infosys Springboard",
      role: "AI / ML Intern",
      period: "Aug 2025 – Oct 2025",
      points: [
        "Built end-to-end pipelines for data preprocessing and model training.",
        "Reduced experimentation iteration time by approximately 30%.",
        "Trained CNN models achieving ~89% validation accuracy.",
        "Delivered a production-ready system selected as the official cohort submission."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-[#f8f9fa] py-24 font-sans border-t-4 border-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="inline-block bg-yellow-400 px-4 py-2 border-4 border-black mb-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
              Experience
            </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl font-bold text-black/60 max-w-2xl min-h-[4rem] leading-tight mb-20">
          {displayed}
          <span className="animate-pulse ml-1 text-violet-600 font-black">|</span>
        </p>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-black ml-4 md:ml-12 space-y-20 pb-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-16">
              
              {/* Timeline Node (The Circle) */}
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-violet-600 border-4 border-black rounded-full z-20" />

              {/* Date Badge */}
              <div className="absolute -top-10 left-8 md:left-16">
                <span className="bg-black text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-black">
                  {exp.period}
                </span>
              </div>

              {/* Experience Card */}
              <div className="relative group max-w-4xl">
                {/* Shadow */}
                <div className="absolute inset-0 bg-black translate-x-[6px] translate-y-[6px] group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-all" />
                
                {/* Main Card */}
                <div className="relative z-10 bg-white border-4 border-black p-6 md:p-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black">
                    {exp.company}
                  </h3>
                  <p className="text-lg font-bold text-violet-600 uppercase tracking-wide mt-1">
                    {exp.role}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-4 items-start text-gray-700 font-medium">
                        <span className="text-violet-600 font-black mt-1">→</span>
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