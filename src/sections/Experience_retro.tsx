export default function ExperienceRetro() {
  const experiences = [
    {
      id: "IBM-2025-01",
      company: "IBM SkillsBuild",
      role: "AI & Cloud Intern",
      period: "Jul 2025 – Aug 2025",
      location: "Remote / Virtual",
      points: [
        "Constructed production-grade data pipelines and REST APIs for training/inference.",
        "Orchestrated cloud-hosted services via IBM Watson APIs for real-time integration.",
        "Engineered an XGBoost classifier yielding a 0.94 F1-score performance.",
        "Optimized system reliability through structured logging and performance tuning."
      ]
    },
    {
      id: "INF-2025-02",
      company: "Infosys Springboard",
      role: "AI / ML Intern",
      period: "Aug 2025 – Oct 2025",
      location: "Remote / Virtual",
      points: [
        "Developed end-to-end application pipelines for data preprocessing and model training.",
        "Reduced experimentation iteration time by approximately 30%.",
        "Achieved ~89% validation accuracy with custom-trained CNN models.",
        "Delivered production-ready system selected for official cohort submission."
      ]
    }
  ];

  return (
    <div className="font-serif text-black leading-tight">
      {/* DOCUMENT HEADER */}
      <div className="border-b-4 border-black pb-4 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-tighter">Activity Report</h1>
            <p className="text-xs font-bold uppercase tracking-widest mt-1">Personnel Record: Devashish Mishra</p>
          </div>
          <div className="text-right border-2 border-black p-2 bg-gray-50">
            <p className="text-[10px] font-bold uppercase">Classification</p>
            <p className="text-xs font-black text-red-600 uppercase">Top Secret / Engineering</p>
          </div>
        </div>
      </div>

      {/* REPORT CONTENT */}
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative">
            {/* Header with "Staple" effect */}
            <div className="flex justify-between items-baseline border-b border-dotted border-gray-400 pb-1 mb-4">
              <h2 className="text-xl font-black uppercase tracking-tight italic">
                {exp.company} // {exp.role}
              </h2>
              <span className="text-xs font-bold font-mono">{exp.period}</span>
            </div>

            <div className="pl-4">
              <p className="text-[10px] font-bold text-gray-500 uppercase mb-4 tracking-widest">
                Location: {exp.location} | Entry_ID: {exp.id}
              </p>

              <ul className="list-none space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-4 text-sm md:text-base">
                    <span className="font-bold text-gray-400">{i + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* "Approved" Stamp for Retro feel */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform rotate-12">
               <div className="border-4 border-green-700 p-2 text-green-700 font-black text-2xl uppercase">
                 Verified
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER OF DOCUMENT */}
      <div className="mt-16 pt-8 border-t-2 border-black flex justify-between items-end">
        <div>
          <p className="text-[10px] font-bold italic">Generated via System_Portfolio_v2.0</p>
          <p className="text-[10px] font-bold tracking-widest uppercase mt-1">© 2026 Internal Records</p>
        </div>
        <div className="w-32 h-12 border-b-2 border-black relative">
          <span className="absolute bottom-1 right-0 text-[10px] font-bold uppercase text-gray-400 underline">Authorized Signature</span>
          <span className="font-serif italic text-lg absolute -top-2 left-0">Devashish</span>
        </div>
      </div>
    </div>
  );
}