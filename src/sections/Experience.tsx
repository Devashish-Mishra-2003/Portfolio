import { useTypewriter } from "../hooks/useTypewriter";

export default function Experience() {
  const { displayed } = useTypewriter(
    "These are the organisations where I have worked as an intern. I did my best and were able to contribute meaningfully. Experience is the best teacher as we know isn't it ? "
  );

  return (
    <section id="experience" className="bg-[var(--bg)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24">
        
        {/* Section Header - Matches Projects exactly */}
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
          Experience
        </h2>

        {/* Description - Matches Projects exactly */}
        <p className="mt-4 text-sm text-white/70 max-w-xl min-h-[3rem]">
          {displayed}
          <span className="animate-pulse ml-1 text-white">_</span>
        </p>

        <div className="mt-16 space-y-20">
          
          {/* IBM - Terminal Style Card with Hover Effect */}
          <div className="relative group transition-transform duration-200 hover:-translate-y-1">
            {/* CARD OFFSET - Solid White Shadow */}
            <div className="absolute inset-0 bg-white translate-x-[6px] translate-y-[6px]" />
            
            {/* MAIN CARD BODY - Lifts on Hover */}
            <div className="relative z-10 border-2 border-white bg-black transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1">
              {/* Terminal Header Bar */}
              <div className="border-b-2 border-white bg-gray-900 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                  Internship_Record_01.exe
                </span>
              </div>

              <div className="p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-black uppercase">
                  IBM SkillsBuild — AI & Cloud Intern
                </h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/50 font-bold">
                  Jul 2025 – Aug 2025
                </p>

                <ul className="mt-8 space-y-4 text-sm md:text-base text-white/85 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-white font-black">›</span>
                    <span>Built production-grade data pipelines and REST APIs to support model training, evaluation, and inference workflows.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-black">›</span>
                    <span>Deployed cloud-hosted services using IBM Watson APIs for real-time inference and system integration.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-black">›</span>
                    <span>Developed an XGBoost classifier achieving a <span className="text-white font-black">0.94 F1-score</span> with balanced class performance.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-black">›</span>
                    <span>Improved system reliability through structured logging, monitoring, and performance tuning practices.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Infosys - Terminal Style Card with Hover Effect */}
          <div className="relative group transition-transform duration-200 hover:-translate-y-1">
            {/* CARD OFFSET - Solid White Shadow */}
            <div className="absolute inset-0 bg-white translate-x-[6px] translate-y-[6px]" />
            
            {/* MAIN CARD BODY - Lifts on Hover */}
            <div className="relative z-10 border-2 border-white bg-black transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div className="border-b-2 border-white bg-gray-900 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                  Internship_Record_02.exe
                </span>
              </div>

              <div className="p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-black uppercase">
                  Infosys Springboard — AI / ML Intern
                </h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/50 font-bold">
                  Aug 2025 – Oct 2025
                </p>

                <ul className="mt-8 space-y-4 text-sm md:text-base text-white/85 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-white font-black">›</span>
                    <span>Built an end-to-end application pipeline spanning data preprocessing, model training, and backend integration.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-black">›</span>
                    <span>Streamlined experimentation workflows, reducing iteration time by approximately <span className="text-white font-black">30%</span>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-black">›</span>
                    <span>Trained and evaluated CNN models achieving <span className="text-white font-black">~89% validation accuracy</span>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-black">›</span>
                    <span>Delivered a production-ready system selected as the official cohort submission.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}