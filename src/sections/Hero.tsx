import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const headline =
    "I build intelligent systems\nand production-ready software.";

  const { displayed, done } = useTypewriter(headline, 30);

  return (
    <section className="bg-[var(--bg)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="py-20 md:py-25 max-w-3xl">

          {/* Headline with typing animation */}
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight whitespace-pre-line">
            {displayed}
            <span
              className={`
                inline-block align-baseline ml-1
                w-[0.4ch] h-[0.8em] bg-white
                ${done ? "animate-blink" : ""}
              `}
            />
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg md:text-xl font-medium text-white/80">
            AI / ML · Backend · Full-Stack
            <br />
            Focused on scalable systems and clean engineering.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6">

            {/* GitHub */}
            <a
              href="https://github.com/Devashish-Mishra-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block w-fit"
            >
              {/* offset block */}
              <span
                className="
                  absolute inset-0 bg-white
                  translate-x-[4px] translate-y-[4px]
                  group-active:opacity-0
                  transition-all duration-75
                "
              />
              {/* main button */}
              <span
                className="
                  relative z-10 block
                  border-2 border-white bg-black
                  px-6 py-2
                  text-base font-black uppercase
                  group-active:translate-x-[4px]
                  group-active:translate-y-[4px]
                  transition-all duration-75
                "
              >
                GitHub →
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/devashish-mishra-b09157295"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block w-fit"
            >
              <span
                className="
                  absolute inset-0 bg-white
                  translate-x-[4px] translate-y-[4px]
                  group-active:opacity-0
                  transition-all duration-75
                "
              />
              <span
                className="
                  relative z-10 block
                  border-2 border-white bg-black
                  px-6 py-2
                  text-base font-black uppercase
                  group-active:translate-x-[4px]
                  group-active:translate-y-[4px]
                  transition-all duration-75
                "
              >
                LinkedIn →
              </span>
            </a>
          </div>

          {/* Meta */}
          <p className="mt-10 text-sm text-white/60 font-medium">
            Based in India · Open to internships
          </p>

        </div>
      </div>
    </section>
  );
}
