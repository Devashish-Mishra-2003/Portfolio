import { useTypewriter } from "../hooks/useTypewriter";

export default function Certificates() {
  const { displayed } = useTypewriter(
    "These are the ways you can verify my skills. Take a look there are some cool certificates that I have earned recently. Explore them to your heart's content :)"
  );

  const certs = [
    { title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", date: "Jan 2026", link: "https://www.credly.com/badges/9309aea4-5604-4c0d-b2e3-2d4ca5650b42/public_url" },
    { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Jan 2026", link: "https://www.credly.com/badges/c1adfcb5-c7cd-43ec-b338-d7ce2b6fa1d0/public_url" },
    { title: "Database Programming with SQL", issuer: "Oracle Academy", date: "Dec 2025", link: "https://drive.google.com/file/d/1KV2eHQgDGsp83hAy67stXR6fjYX4pJRZ/view" },
    { title: "Palo Alto Cybersecurity Academy", issuer: "Palo Alto Academy", date: "Jun 2025", link: "#" },
  ];

  return (
    <section id="certificates" className="bg-[var(--bg)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-15">

        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
          Certificates
        </h2>

        <p className="mt-4 text-sm text-white/70 max-w-xl min-h-[3rem]">
          {displayed}
          <span className="animate-pulse ml-1 text-white">_</span>
        </p>

        <div className="mt-10 border-t border-white/20">
          {certs.map((cert, index) => (
            <div 
              key={index} 
              className="group border-b border-white/20 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-tight">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <span>{cert.issuer}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-700" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <div className="relative group/btn inline-block self-start md:self-center">
                <span className="absolute inset-0 bg-white translate-x-[3px] translate-y-[3px] group-active/btn:opacity-0 transition-all duration-75" />
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 block border-2 border-white bg-black px-6 py-2 text-[11px] font-black uppercase group-active/btn:translate-x-[3px] group-active/btn:translate-y-[3px] transition-all duration-75"
                >
                  Verify License →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}