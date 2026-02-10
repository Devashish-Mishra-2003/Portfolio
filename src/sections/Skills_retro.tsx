export default function SkillsRetro() {
  const skillCategories = [
    { title: "Languages", skills: ["C++", "Python", "JavaScript", "SQL"] },
    { title: "AI & ML", skills: ["CNNs", "XGBoost", "NLP", "Agentic RAG", "GenAI", "LLM", "RAG"] },
    { title: "Cloud", skills: ["AWS EC2", "AWS S3", "Nginx", "Linux", "Terraform"] },
    { title: "Databases", skills: ["PostgreSQL", "Supabase", "MongoDB", "MySQL"] },
  ];

  return (
    <div className="bg-[#ECE9D8] text-black font-sans">
      {/* TAB HEADER */}
      <div className="flex items-end gap-[2px] px-2 border-b border-[#919B9C]">
        <div className="bg-white border-t-2 border-x-2 border-[#0050E6] px-4 py-1.5 text-xs font-bold -mb-[1px] z-10 rounded-t-sm">
          General
        </div>
        <div className="bg-[#D6D3CE] border-x border-t border-gray-400 px-4 py-1 text-xs text-gray-600 rounded-t-sm">
          Hardware
        </div>
        <div className="bg-[#D6D3CE] border-x border-t border-gray-400 px-4 py-1 text-xs text-gray-600 rounded-t-sm">
          Advanced
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="p-4 bg-white border-x border-b border-[#919B9C] shadow-sm">
        <div className="flex gap-4 mb-6">
          <div className="w-12 h-12 flex-shrink-0 bg-blue-100 flex items-center justify-center text-2xl border border-blue-300">
            💻
          </div>
          <div>
            <p className="text-xs font-bold italic">System: Devashish_Mishra_OS</p>
            <p className="text-[11px]">Computer Science Engineering Unit</p>
            <p className="text-[11px]">CGPA: 8.1 / 10.0</p>
          </div>
        </div>

        <div className="space-y-6">
          {skillCategories.map((group, idx) => (
            <div key={idx} className="border border-gray-300 p-3 relative pt-4">
              <span className="absolute -top-2 left-3 bg-white px-2 text-[10px] font-bold text-gray-600">
                {group.title}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="bg-gray-100 border border-gray-400 px-2 py-0.5 text-[10px] font-mono shadow-[1px_1px_0_white_inset]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mt-4 flex justify-end gap-2">
        <button className="px-6 py-1 bg-[#ECE9D8] border border-gray-600 shadow-[1px_1px_0_white_inset] text-xs hover:bg-gray-200">OK</button>
        <button className="px-6 py-1 bg-[#ECE9D8] border border-gray-600 shadow-[1px_1px_0_white_inset] text-xs hover:bg-gray-200">Cancel</button>
      </div>
    </div>
  );
}