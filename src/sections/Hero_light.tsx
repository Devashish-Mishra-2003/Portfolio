import { useTypewriter } from "../hooks/useTypewriter";

export default function HeroLight() {
  const headline = "I build intelligent systems\nand production-ready software.";
  const { displayed, done } = useTypewriter(headline, 30);

  return (
    <section className="bg-[#f8f9fa] text-black font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="py-24 md:py-32 max-w-4xl">

          {/* Tagline */}
          <div className="mb-6">
            <span className="px-3 py-1 border-2 border-black text-xs font-black uppercase tracking-widest bg-yellow-400">
              Available for Internships 2026
            </span>
          </div>

          {/* Headline with typing animation */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] whitespace-pre-line">
            {displayed}
            <span
              className={`
                inline-block align-baseline ml-1
                w-[0.3ch] h-[0.9em] bg-violet-600
                ${done ? "animate-pulse" : ""}
              `}
            />
          </h1>

          {/* Subtext - Clean and Bold */}
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-lg md:text-xl font-bold uppercase tracking-wide">
            <span className="text-violet-600">AI / ML</span>
            <span className="text-gray-300">•</span>
            <span className="text-black">Backend</span>
            <span className="text-gray-300">•</span>
            <span className="text-black">Full-Stack</span>
          </div>
          
          <p className="mt-4 text-lg text-gray-600 max-w-2xl font-medium">
            Building scalable infrastructure and intelligent models with clean, production-grade engineering.
          </p>

          {/* Action Buttons with Neo-Brutalist Shadow */}
          <div className="mt-12 flex flex-col sm:flex-row gap-8">
            <a
              href="https://github.com/Devashish-Mishra-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block w-fit"
            >
              <span className="absolute inset-0 bg-black translate-x-[5px] translate-y-[5px] group-active:translate-x-0 group-active:translate-y-0 transition-all duration-75" />
              <span className="relative z-10 block border-2 border-black bg-white px-8 py-3 text-sm font-black uppercase group-hover:bg-violet-600 group-hover:text-white transition-all">
                View My Code →
              </span>
            </a>

            <a
              href="https://linkedin.com/in/devashish-mishra-b09157295"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block w-fit"
            >
              <span className="absolute inset-0 bg-violet-600 translate-x-[5px] translate-y-[5px] group-active:translate-x-0 group-active:translate-y-0 transition-all duration-75" />
              <span className="relative z-10 block border-2 border-black bg-black text-white px-8 py-3 text-sm font-black uppercase group-hover:bg-white group-hover:text-black transition-all">
                Let's Connect →
              </span>
            </a>
          </div>

          {/* Location Meta */}
          <div className="mt-16 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Muradnagar, Uttar Pradesh, India
          </div>

        </div>
      </div>
    </section>
  );
}