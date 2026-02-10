import { useState, useEffect } from "react";

// --- ORIGINAL COMPONENTS ---
import NavbarOriginal from "./components/Navbar";
import HeroOriginal from "./sections/Hero";
import ProjectsOriginal from "./sections/Projects";
import ExperienceOriginal from "./sections/Experience";
import CertificatesOriginal from "./sections/Certificates";
import SkillsOriginal from "./sections/Skills";
import EducationOriginal from "./sections/Education";
import FooterOriginal from "./sections/Footer";

// --- TERMINAL COMPONENTS ---
import NavbarTerminal from "./components/Navbar_terminal";
import HeroTerminal from "./sections/Hero_terminal";
import ProjectsTerminal from "./sections/Projects_terminal";
import ExperienceTerminal from "./sections/Experience_terminal";
import CertificatesTerminal from "./sections/Certificates_terminal";
import SkillsTerminal from "./sections/Skills_terminal";
import EducationTerminal from "./sections/Education_terminal";
import FooterTerminal from "./sections/Footer_terminal";

// --- LIGHT COMPONENTS ---
import NavbarLight from "./components/Navbar_light";
import HeroLight from "./sections/Hero_light";
import ProjectsLight from "./sections/Projects_light";
import ExperienceLight from "./sections/Experience_light";
import CertificatesLight from "./sections/Certificates_light";
import SkillsLight from "./sections/Skills_light";
import EducationLight from "./sections/Education_light";
import FooterLight from "./sections/Footer_light";

// --- RETRO (XP) COMPONENTS ---
import HeroRetro from "./sections/Hero_retro"; 

// 1. Update the Type
type ThemeType = 'original' | 'terminal' | 'light' | 'retro';

function App() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return (saved as ThemeType) || "original";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);

  // 2. Mapping object - Note: Retro mode handles everything in HeroRetro
  const components = {
    original: {
      Nav: NavbarOriginal,
      Hero: HeroOriginal,
      Projects: ProjectsOriginal,
      Exp: ExperienceOriginal,
      Certs: CertificatesOriginal,
      Skills: SkillsOriginal,
      Edu: EducationOriginal,
      Foot: FooterOriginal,
    },
    terminal: {
      Nav: NavbarTerminal,
      Hero: HeroTerminal,
      Projects: ProjectsTerminal,
      Exp: ExperienceTerminal,
      Certs: CertificatesTerminal,
      Skills: SkillsTerminal,
      Edu: EducationTerminal,
      Foot: FooterTerminal,
    },
    light: {
      Nav: NavbarLight,
      Hero: HeroLight,
      Projects: ProjectsLight,
      Exp: ExperienceLight,
      Certs: CertificatesLight,
      Skills: SkillsLight,
      Edu: EducationLight,
      Foot: FooterLight,
    },
    retro: {
      Nav: () => null, // No Navbar in Retro (Taskbar is inside Hero)
      Hero: HeroRetro,
      Projects: () => null, // Contained inside HeroRetro windows
      Exp: () => null,
      Certs: () => null,
      Skills: () => null,
      Edu: () => null,
      Foot: () => null,
    },
  };

  const Active = components[theme];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#fcfcfc]' : theme === 'retro' ? 'bg-[#3a6ea5]' : 'bg-black'
    }`}>
      
      <Active.Nav />
      <Active.Hero />
      <Active.Projects />
      <Active.Exp />
      <Active.Certs />
      <Active.Skills />
      <Active.Edu />
      <Active.Foot />

      {/* --- THEME SWITCHER DOCK --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[2000] flex items-center gap-3 bg-black border-2 border-white p-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:bottom-10">
        
        <button 
          onClick={() => setTheme('original')}
          className={`px-3 py-1 text-[10px] font-black uppercase transition-all ${theme === 'original' ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
        >
          Classic
        </button>

        <button 
          onClick={() => setTheme('terminal')}
          className={`px-3 py-1 text-[10px] font-black uppercase transition-all border-x-2 border-white/20 ${theme === 'terminal' ? 'bg-green-500 text-black border-green-500' : 'text-green-500 hover:bg-green-500/10'}`}
        >
          Terminal
        </button>

        <button 
          onClick={() => setTheme('light')}
          className={`px-3 py-1 text-[10px] font-black uppercase transition-all ${theme === 'light' ? 'bg-violet-600 text-white' : 'text-violet-400 hover:bg-violet-600/10'}`}
        >
          Modern
        </button>

        {/* Retro Toggle */}
        <button 
          onClick={() => setTheme('retro')}
          className={`px-3 py-1 text-[10px] font-black uppercase transition-all border-l-2 border-white/20 ${theme === 'retro' ? 'bg-[#245EDC] text-white' : 'text-blue-400 hover:bg-blue-600/10'}`}
        >
          Retro
        </button>
      </div>

      {theme === 'terminal' && (
        <div className="pointer-events-none fixed inset-0 z-[99] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] opacity-20" />
      )}
    </div>
  );
}

export default App;