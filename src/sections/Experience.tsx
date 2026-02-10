import { useTypewriter } from "../hooks/useTypewriter";

export default function ExperienceOriginal() {
  const { displayed } = useTypewriter(
    "These are the organisations where I have worked as an intern. I did my best and was able to contribute meaningfully. Experience is the best teacher, isn't it? "
  );

  const experiences = [
    {
      id: "01",
      company: "IBM SkillsBuild",
      role: "AI & Cloud Intern",
      period: "Jul 2025 – Aug 2025",
      points: [
        "Built production-grade data pipelines and REST APIs to support model training and inference.",
        "Deployed cloud-hosted services using IBM Watson APIs for real-time inference.",
        "Developed an XGBoost classifier achieving a 0.94 F1-score with balanced performance.",
        "Improved system reliability through structured logging and monitoring."
      ]
    },
    {
      id: "02",
      company: "Infosys Springboard",
      role: "AI / ML Intern",
      period: "Aug 2025 – Oct 2025",
      points: [
        "Built an end-to-end application pipeline spanning data preprocessing and model training.",
        "Streamlined experimentation workflows, reducing iteration time by approximately 30%.",
        "Trained and evaluated CNN models achieving ~89% validation accuracy.",
        "Delivered a production-ready system selected as the official cohort submission."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-[var(--bg)] text-white py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
          Experience
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm text-white/70 max-w-xl min-h-[3rem]">
          {displayed}
          <span className="animate-pulse ml-1 text-white">_</span>
        </p>

        {/* Timeline Axis */}
        <div className="mt-20 relative border-l-2 border-white ml-2 md:ml-10 space-y-24">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-16">
              
              {/* Timeline Dot - Solid White */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-white rounded-full z-20 group-hover:bg-white transition-colors" />

              <div className="relative group transition-transform duration-200">
                {/* CARD OFFSET */}
                <div className="absolute inset-0 bg-white translate-x-[6px] translate-y-[6px]" />
                
                {/* MAIN CARD BODY */}
                <div className="relative z-10 border-2 border-white bg-black p-6 md:p-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                  
                  {/* Terminal Header Decoration - Integrated into Original */}
                  <div className="flex items-center gap-2 mb-6 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Record_{exp.id}.exe
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                    <h3 className="text-xl md:text-2xl font-black uppercase">
                      {exp.company} — {exp.role}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-white/50 font-bold whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-4 text-sm md:text-base text-white/85 leading-relaxed">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-white font-black">›</span>
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