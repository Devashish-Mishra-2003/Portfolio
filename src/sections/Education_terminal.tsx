import { useTypewriter } from "../hooks/useTypewriter";

export default function EducationTerminal() {
  const { displayed } = useTypewriter(
    "Loading academic_records... success. Scanning system_logs for notable achievements... all entries verified."
  );

  return (
    <section id="education" className="bg-black py-24 font-mono">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-500 font-bold text-xl md:text-2xl animate-pulse">#</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
            system --info
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-green-500/60 max-w-2xl min-h-[3rem] leading-relaxed mb-16">
          {displayed}
          <span className="animate-pulse ml-1 text-green-500 font-black">█</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          {/* Vertical Divider for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-green-500/20 -translate-x-1/2" />

          {/* LEFT COLUMN: Hardware Specs (Education) */}
          <div className="space-y-10">
            <h3 className="text-lg font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <span className="text-green-500">/</span> ACADEMIC_PATH
            </h3>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-green-500/5 translate-x-[4px] translate-y-[4px] border border-green-500/10 group-hover:bg-green-500/10 transition-all" />
              <div className="relative z-10 border border-green-500/30 bg-[#050505] p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-green-500/50 uppercase tracking-tighter">REF_ID: 2023_2027_BTECH</span>
                  <span className="text-[10px] font-bold text-gray-500">GHAZIABAD, UP</span>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-white uppercase">KIET Group of Institutions</h4>
                <p className="text-sm font-bold text-green-500/80 mt-1 italic tracking-wide">Bachelor of Technology in Computer Science</p>
                
                {/* CGPA Progress Bar */}
                <div className="mt-8 space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/60">
                    <span>Performance_Index (CGPA)</span>
                    <span>8.1 / 10.0</span>
                  </div>
                  <div className="h-4 w-full bg-green-950/30 border border-green-500/20 p-[2px]">
                    <div className="h-full bg-green-500/60" style={{ width: '81%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: System Logs (Achievements) */}
          <div className="space-y-10">
            <h3 className="text-lg font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <span className="text-green-500">/</span> SYSTEM_LOGS
            </h3>

            <div className="space-y-8 font-mono">
              {/* Achievement 1 */}
              <div className="flex gap-4 group">
                <div className="text-green-500/40 text-xs font-bold pt-1 tabular-nums whitespace-nowrap">
                  [ 02.04 ]
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold uppercase text-white group-hover:text-green-400 transition-colors">
                    EY Techathon 6.0 <span className="text-green-500">::</span> Round 2
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed uppercase">
                    Status: <span className="text-blue-400">SUCCESS</span> | Top 4k out of 160k submissions
                  </p>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="flex gap-4 group">
                <div className="text-green-500/40 text-xs font-bold pt-1 tabular-nums">
                  [ 05.12 ]
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold uppercase text-white group-hover:text-green-400 transition-colors">
                    Student Placement Coordinator
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed uppercase">
                    Task: <span className="text-blue-400">LEADERSHIP</span> | Organized mock interviews for 100+ students
                  </p>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="flex gap-4 group">
                <div className="text-green-500/40 text-xs font-bold pt-1 tabular-nums">
                  [ 09.22 ]
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold uppercase text-white group-hover:text-green-400 transition-colors">
                    Global Participations
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed uppercase">
                    Event: <span className="text-blue-400">COMPETITION</span> | Tata Imagination Cup & SIH 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final Terminal Prompt */}
        <div className="mt-32 text-center opacity-30">
          <p className="text-xs font-bold uppercase tracking-widest text-green-500">
            -- end of transmission --
          </p>
        </div>
      </div>
    </section>
  );
}