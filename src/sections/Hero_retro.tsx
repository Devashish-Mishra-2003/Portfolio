import { useState } from "react";
import WindowRetro from "../components/Window_retro";
import ProjectsRetro from "./Projects_retro";
import ExperienceRetro from "./Experience_retro";
import EducationRetro from "./Education_retro";
import CredentialsRetro from "./Credentials_retro";
import SkillsRetro from "./Skills_retro";

// Define the shape of our window state for TS
type WindowState = {
  projects: boolean;
  experience: boolean;
  education: boolean;
  credentials: boolean;
  skills: boolean;
};

export default function HeroRetro() {
  // 1. State to track which "Applications" are open
  const [openWindows, setOpenWindows] = useState<WindowState>({
    projects: false,
    experience: false,
    education: true, // Default open
    credentials: false,
    skills: false,
  });

  // 2. Track which window is on top (Z-Index Management)
  const [activeWindow, setActiveWindow] = useState<keyof WindowState>("education");

  const toggleWindow = (name: keyof WindowState) => {
    setOpenWindows((prev) => ({ ...prev, [name]: !prev[name] }));
    if (!openWindows[name]) setActiveWindow(name);
  };

  const bringToFront = (name: keyof WindowState) => {
    setActiveWindow(name);
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden font-sans select-none cursor-default"
      style={{ 
        backgroundColor: "#3a6ea5",
        backgroundImage: "url('https://wallpapercave.com/wp/wp6511659.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* 1. DESKTOP ICONS */}
      <div className="p-6 grid grid-cols-1 gap-6 w-fit">
        <DesktopIcon 
          label="My Projects" 
          icon="📂" 
          onClick={() => toggleWindow('projects')} 
        />
        <DesktopIcon 
          label="Work Experience" 
          icon="💼" 
          onClick={() => toggleWindow('experience')} 
        />
        <DesktopIcon 
          label="Education.doc" 
          icon="📝" 
          onClick={() => toggleWindow('education')} 
        />
        <DesktopIcon 
          label="Skills.sys" 
          icon="🛠️" 
          onClick={() => toggleWindow('skills')} 
        />
        <DesktopIcon 
          label="Credentials.lnk" 
          icon="🎖️" 
          onClick={() => toggleWindow('credentials')} 
        />
      </div>

      {/* 2. PROGRAM WINDOWS */}
      
      {/* Projects Window */}
      <WindowRetro 
        title="C:\Users\Devashish\Documents\Projects" 
        isOpen={openWindows.projects} 
        onClose={() => toggleWindow('projects')}
        isActive={activeWindow === 'projects'}
        onFocus={() => bringToFront('projects')}
      >
        <ProjectsRetro />
      </WindowRetro>

      {/* Experience Window */}
      <WindowRetro 
        title="System_Logs:\Work_History" 
        isOpen={openWindows.experience} 
        onClose={() => toggleWindow('experience')}
        isActive={activeWindow === 'experience'}
        onFocus={() => bringToFront('experience')}
      >
        <ExperienceRetro />
      </WindowRetro>

      {/* Education Window */}
      <WindowRetro 
        title="Academic_Transcript_v2.doc" 
        isOpen={openWindows.education} 
        onClose={() => toggleWindow('education')}
        isActive={activeWindow === 'education'}
        onFocus={() => bringToFront('education')}
      >
        <EducationRetro />
      </WindowRetro>

      {/* Skills Window */}
      <WindowRetro 
        title="Control_Panel:\System_Properties" 
        isOpen={openWindows.skills} 
        onClose={() => toggleWindow('skills')}
        isActive={activeWindow === 'skills'}
        onFocus={() => bringToFront('skills')}
      >
        <SkillsRetro />
      </WindowRetro>

      {/* Credentials Window */}
      <WindowRetro 
        title="Verified_Credentials.auth" 
        isOpen={openWindows.credentials} 
        onClose={() => toggleWindow('credentials')}
        isActive={activeWindow === 'credentials'}
        onFocus={() => bringToFront('credentials')}
      >
        <CredentialsRetro />
      </WindowRetro>

      {/* 3. TASKBAR */}
      <div className="absolute bottom-0 w-full h-10 bg-[#245EDC] border-t-2 border-[#3E88E5] flex items-center justify-between z-[1000] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
        <div className="flex items-center h-full">
          {/* Start Button */}
          <div className="bg-gradient-to-b from-[#42B12F] to-[#2B861B] px-4 h-full flex items-center rounded-r-2xl italic font-black text-white shadow-[inset_-2px_0px_5px_rgba(0,0,0,0.3)] cursor-pointer hover:brightness-110 active:brightness-90 border-r-2 border-[#1e5a12]">
            <span className="drop-shadow-md text-lg mr-1">⊞</span> start
          </div>

          {/* Taskbar Active Apps */}
          <div className="ml-3 flex gap-1 h-full items-center">
            {openWindows.projects && <TaskbarItem label="Projects" isActive={activeWindow === 'projects'} />}
            {openWindows.experience && <TaskbarItem label="Experience" isActive={activeWindow === 'experience'} />}
            {openWindows.education && <TaskbarItem label="Education" isActive={activeWindow === 'education'} />}
            {openWindows.skills && <TaskbarItem label="Skills" isActive={activeWindow === 'skills'} />}
            {openWindows.credentials && <TaskbarItem label="Credentials" isActive={activeWindow === 'credentials'} />}
          </div>
        </div>

        {/* System Clock */}
        <div className="bg-[#0997FF] h-full px-4 flex items-center border-l-2 border-[#0855DD] text-white text-xs font-medium shadow-[inset_2px_0_4px_rgba(0,0,0,0.2)]">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS WITH TYPES ---

interface DesktopIconProps {
  label: string;
  icon: string;
  onClick: () => void;
}

function DesktopIcon({ label, icon, onClick }: DesktopIconProps) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-1 group w-24 p-2 rounded-sm hover:bg-white/10 outline-none"
    >
      <div className="text-4xl drop-shadow-md group-active:scale-95 transition-transform select-none">
        {icon}
      </div>
      <span className="text-white text-[11px] font-medium drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] bg-transparent group-hover:bg-[#0050E6] px-1 text-center leading-tight">
        {label}
      </span>
    </button>
  );
}

interface TaskbarItemProps {
  label: string;
  isActive: boolean;
}

function TaskbarItem({ label, isActive }: TaskbarItemProps) {
  return (
    <div className={`
      px-3 h-[80%] flex items-center text-white text-[10px] font-bold rounded-sm min-w-[80px] max-w-[120px] border shadow-[inset_1px_1px_1px_rgba(255,255,255,0.2)]
      ${isActive ? 'bg-[#1E52B7] border-[#002B7A]' : 'bg-[#3E88E5] border-[#002B7A]'}
    `}>
      <span className="truncate">{label}</span>
    </div>
  );
}