export default function ProjectsRetro() {
  const projectFiles = [
    {
      name: "NovusAI.exe",
      description: "Agentic RAG platform for biomedical research. Orchestrates multiple autonomous agents for parallel retrieval and synthesis.",
      size: "4.2 MB",
      type: "Application",
      tech: "FastAPI, React, Groq",
      link: "https://novusai.netlify.app/"
    },
    {
      name: "Pawdentify.exe",
      description: "End-to-end dog breed classification system using EfficientNet. Features real-time inference and AWS EC2 deployment.",
      size: "12.8 MB",
      type: "Application",
      tech: "TensorFlow, FastAPI, AWS",
      link: "https://pawdentify-frontend.vercel.app/"
    },
    {
      name: "JobSync.bat",
      description: "Resume–JD matching platform with structured scoring. Optimized NLP pipelines for rapid evaluation.",
      size: "1.1 MB",
      type: "MS-DOS Batch",
      tech: "Python, NLP, Streamlit",
      link: "https://jobsync-horizon.streamlit.app/"
    },
    {
      name: "10_Seconds_Ahead.cpp",
      description: "Strategy-based game simulation built in C++. Focuses on deterministic logic and performance-safe state updates.",
      size: "856 KB",
      type: "C++ Source",
      tech: "C++, SFML, Simulation",
      link: "https://github.com/Devashish-Mishra-2003/10_Seconds_Ahead"
    }
  ];

  return (
    <div className="font-sans text-[11px] text-black">
      {/* EXPLORER SUB-NAV */}
      <div className="flex items-center gap-4 mb-4 border-b border-gray-300 pb-2">
        <div className="flex items-center gap-1 opacity-60">
          <span>📁</span>
          <span className="font-bold">Folders</span>
        </div>
        <div className="h-4 w-[1px] bg-gray-300" />
        <div className="flex gap-2">
          <button className="px-2 py-0.5 hover:bg-[#316AC5] hover:text-white border border-transparent hover:border-[#002B7A]">Back</button>
          <button className="px-2 py-0.5 hover:bg-[#316AC5] hover:text-white border border-transparent hover:border-[#002B7A]">Search</button>
        </div>
      </div>

      {/* FILE TABLE */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#F1F1F1] border-b border-gray-300">
            <th className="px-2 py-1 font-normal border-r border-gray-300 hover:bg-gray-200 cursor-default">Name</th>
            <th className="px-2 py-1 font-normal border-r border-gray-300 hover:bg-gray-200 cursor-default">Description</th>
            <th className="px-2 py-1 font-normal border-r border-gray-300 hover:bg-gray-200 cursor-default">Size</th>
            <th className="px-2 py-1 font-normal hover:bg-gray-200 cursor-default">Type</th>
          </tr>
        </thead>
        <tbody>
          {projectFiles.map((file, idx) => (
            <tr 
              key={idx} 
              className="hover:bg-[#316AC5] hover:text-white group cursor-pointer"
              onDoubleClick={() => window.open(file.link, "_blank")}
            >
              <td className="px-2 py-1 flex items-center gap-2 whitespace-nowrap">
                <span>{file.type.includes('App') ? '⚙️' : '📄'}</span>
                <span className="font-medium">{file.name}</span>
              </td>
              <td className="px-2 py-1 max-w-[200px] truncate group-hover:text-white text-gray-600 italic">
                {file.description}
              </td>
              <td className="px-2 py-1 whitespace-nowrap">{file.size}</td>
              <td className="px-2 py-1 whitespace-nowrap">{file.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PREVIEW PANE (Classic XP feature) */}
      <div className="mt-8 p-4 bg-[#F9F9F9] border border-gray-300">
        <p className="font-bold text-[#003399] mb-2 uppercase text-[10px]">File Details</p>
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-gray-200 border border-gray-400 flex items-center justify-center text-2xl shadow-inner">
            🚀
          </div>
          <div>
            <p className="font-bold underline decoration-blue-500 text-sm">System_Deployment_Info</p>
            <p className="mt-1">Double-click any file above to execute 
               <span className="font-bold"> LIVE_DEMO.sh</span>
            </p>
            <p className="mt-2 text-[10px] text-gray-500 font-mono italic">
              Stack: {projectFiles[0].tech} ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}