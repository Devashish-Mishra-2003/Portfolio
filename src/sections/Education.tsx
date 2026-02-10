import { useTypewriter } from "../hooks/useTypewriter";

export default function Education() {
  const { displayed } = useTypewriter(
    "My academic journey and additional achievements I bagged along the way. < > System logs are here to stay :)"
  );

  return (
    <section id="education" className="bg-[var(--bg)]">
      {/* Changed pb-15 to pb-0 to eliminate the bottom gap */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-15 pb-10">
        
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
          Education & Achievements
        </h2>

        <p className="mt-4 text-sm text-white/70 max-w-xl min-h-[3rem]">
          {displayed}
          <span className="animate-pulse ml-1 text-white">_</span>
        </p>

        {/* REMOVED 'mb-20' - The grid now flows directly into the footer space */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 -translate-x-1/2" />

          {/* LEFT COLUMN: Education */}
          <div className="space-y-8 pb-12">
            <h3 className="text-xl font-black uppercase tracking-tighter text-white inline-block border-b-2 border-white pb-1">
              Academic Path
            </h3>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-white translate-x-[4px] translate-y-[4px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 border-2 border-white bg-black p-6 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                <p className="text-xs font-black text-gray-500 uppercase tracking-widest">2023 — 2027</p>
                <h4 className="text-xl font-black uppercase mt-2">KIET Group of Institutions</h4>
                <p className="text-sm font-bold text-white/70 mt-1 italic">B.Tech in Computer Science</p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="px-3 py-1 bg-[#FFBD2E] text-black text-[10px] font-black uppercase">
                    CGPA: 8.1/10
                  </span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Ghaziabad, UP</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Co-Curriculars */}
          <div className="space-y-8 pb-12">
            <h3 className="text-xl font-black uppercase tracking-tighter text-white inline-block border-b-2 border-white pb-1">
              System Logs
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 border-2 border-white flex items-center justify-center font-black text-sm bg-black group-hover:bg-white group-hover:text-black transition-colors">
                  EY
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">EY Techathon 6.0 — Round 2</h4>
                  <p className="text-xs font-bold text-gray-500 mt-1 uppercase">Top 4k out of 160k submissions</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 border-2 border-white flex items-center justify-center font-black text-sm bg-black group-hover:bg-white group-hover:text-black transition-colors">
                  LD
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">Student Placement Coordinator</h4>
                  <p className="text-xs font-bold text-gray-500 mt-1 uppercase">Organized mock interviews for 100+ students</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 border-2 border-white flex items-center justify-center font-black text-sm bg-black group-hover:bg-white group-hover:text-black transition-colors">
                  PAR
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">Participations</h4>
                  <p className="text-xs font-bold text-gray-500 mt-1 uppercase">Participated in Tata Imagination Cup & SIH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}