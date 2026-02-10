import { useTypewriter } from "../hooks/useTypewriter";

export default function EducationLight() {
  const { displayed } = useTypewriter(
    "A summary of my academic background and key milestones. Built on a foundation of continuous learning and leadership."
  );

  return (
    <section id="education" className="bg-[#fcfcfc] py-24 font-sans border-t-4 border-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="inline-block bg-black px-4 py-2 border-4 border-black mb-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
              Academic
            </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl font-bold text-black/60 max-w-2xl min-h-[4rem] leading-tight mb-20">
          {displayed}
          <span className="animate-pulse ml-1 text-violet-600 font-black">|</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          {/* Vertical Divider for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-black/10 -translate-x-1/2" />

          {/* LEFT COLUMN: Education */}
          <div className="space-y-10">
            <h3 className="text-xl font-black uppercase tracking-tighter text-black border-b-4 border-yellow-400 inline-block">
              Degree & Path
            </h3>
            
            <div className="relative group">
              {/* Offset Shadow - Yellow */}
              <div className="absolute inset-0 bg-yellow-400 translate-x-[6px] translate-y-[6px] group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-all" />
              
              <div className="relative z-10 border-4 border-black bg-white p-8 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                <span className="text-xs font-black text-violet-600 uppercase tracking-widest">Class of 2023 — 2027</span>
                <h4 className="text-2xl md:text-3xl font-black uppercase mt-2 text-black leading-tight">KIET Group of Institutions</h4>
                <p className="text-lg font-bold text-gray-600 mt-1 italic">Bachelor of Technology in Computer Science</p>
                
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="px-4 py-2 bg-black text-white text-sm font-black uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(124,58,237,1)]">
                    CGPA: 8.1 / 10.0
                  </div>
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Ghaziabad, Uttar Pradesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Achievements */}
          <div className="space-y-10">
            <h3 className="text-xl font-black uppercase tracking-tighter text-black border-b-4 border-violet-600 inline-block">
              Milestones
            </h3>

            <div className="space-y-8">
              {/* Achievement 1 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 border-4 border-black flex items-center justify-center font-black text-lg bg-white group-hover:bg-black group-hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none">
                  EY
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase text-black leading-tight">EY Techathon 6.0 — Round 2</h4>
                  <p className="text-sm font-bold text-gray-500 mt-1 uppercase tracking-wide">Top 4,000 / 160,000+ GLOBAL PARTICIPANTS</p>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 border-4 border-black flex items-center justify-center font-black text-lg bg-white group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all shadow-[4px_4px_0px_0px_rgba(124,58,237,1)] group-hover:shadow-none">
                  LD
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase text-black leading-tight">Student Placement Coordinator</h4>
                  <p className="text-sm font-bold text-gray-500 mt-1 uppercase tracking-wide">Led mock interview sessions for 100+ peers</p>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 border-4 border-black flex items-center justify-center font-black text-lg bg-white group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] group-hover:shadow-none">
                  SI
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase text-black leading-tight">National Level Hackathons</h4>
                  <p className="text-sm font-bold text-gray-500 mt-1 uppercase tracking-wide">Participated in SIH & TATA Imagination Cup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}