export default function EducationRetro() {
  return (
    <div className="bg-white p-8 shadow-inner border border-gray-300 min-h-[500px] font-serif text-black cursor-text">
      {/* WORDPAD HEADER */}
      <div className="border-b border-gray-200 mb-6 pb-2">
        <p className="text-[10px] text-gray-400 font-sans uppercase tracking-[0.2em]">Document View: Academic_Transcript.rtf</p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold underline uppercase">Academic Record & Achievements</h1>
          <p className="text-xs mt-1 italic">Last Modified: February 2026</p>
        </div>

        {/* SECTION: ACADEMIC PATH */}
        <div className="mb-10">
          <h2 className="text-lg font-bold border-b-2 border-black mb-4 flex items-center gap-2">
            <span>📁</span> I. ACADEMIC_PATH
          </h2>
          <div className="pl-6 space-y-4">
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-md">KIET Group of Institutions (AKTU Lucknow)</h3>
                <span className="text-xs font-mono">2023 -- 2027</span>
              </div>
              <p className="text-sm italic">Bachelor of Technology in Computer Science</p>
              <div className="mt-2 inline-block bg-yellow-100 border border-yellow-400 px-2 py-1">
                <p className="text-xs font-bold text-yellow-800">STATUS: ENROLLED | CGPA: 8.1 / 10.0</p>
              </div>
              <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Location: Ghaziabad, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* SECTION: SYSTEM LOGS (Achievements) */}
        <div>
          <h2 className="text-lg font-bold border-b-2 border-black mb-4 flex items-center gap-2">
            <span>📋</span> II. SYSTEM_LOGS_ACHIEVEMENTS
          </h2>
          <div className="pl-6 space-y-6">
            {/* Achievement 1 */}
            <div className="flex gap-4">
              <span className="font-bold">[PASS]</span>
              <div>
                <p className="text-sm font-bold uppercase">EY Techathon 6.0 — Round 2</p>
                <p className="text-xs text-gray-600">Metric: Top 4,000 ranking out of 160,000+ total submissions.</p>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="flex gap-4">
              <span className="font-bold">[INFO]</span>
              <div>
                <p className="text-sm font-bold uppercase">Student Placement Coordinator</p>
                <p className="text-xs text-gray-600">Action: Facilitated mock interview sessions for 100+ students.</p>
              </div>
            </div>

            {/* Achievement 3 */}
            <div className="flex gap-4">
              <span className="font-bold">[INFO]</span>
              <div>
                <p className="text-sm font-bold uppercase">Competitive Programming / Participation</p>
                <p className="text-xs text-gray-600 italic">Logs: TATA Imagination Cup, SIH, and LeetCode Contest Prep.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE FOOTER */}
        <div className="mt-20 text-center opacity-30 select-none">
          <p className="text-[10px]">--- End of Transcript ---</p>
          <p className="text-[10px]">Printed from Portfolio-OS // User: Devashish</p>
        </div>
      </div>
    </div>
  );
}