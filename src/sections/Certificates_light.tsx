import { useTypewriter } from "../hooks/useTypewriter";

export default function CertificatesLight() {
  const { displayed } = useTypewriter(
    "Verified credentials and professional certifications. These validate my expertise across AI, Cloud, and Database systems."
  );

  const certs = [
    { title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", date: "Jan 2026", link: "https://www.credly.com/badges/9309aea4-5604-4c0d-b2e3-2d4ca5650b42/public_url" },
    { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Jan 2026", link: "https://www.credly.com/badges/c1adfcb5-c7cd-43ec-b338-d7ce2b6fa1d0/public_url" },
    { title: "Database Programming with SQL", issuer: "Oracle Academy", date: "Dec 2025", link: "https://drive.google.com/file/d/1KV2eHQgDGsp83hAy67stXR6fjYX4pJRZ/view" },
    { title: "Palo Alto Cybersecurity Academy", issuer: "Palo Alto Academy", date: "Jun 2025", link: "#" },
  ];

  return (
    <section id="certificates" className="bg-[#fcfcfc] py-24 font-sans border-t-4 border-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="inline-block bg-cyan-400 px-4 py-2 border-4 border-black mb-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
              Credentials
            </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl font-bold text-black/60 max-w-2xl min-h-[4rem] leading-tight mb-16">
          {displayed}
          <span className="animate-pulse ml-1 text-cyan-600 font-black">|</span>
        </p>

        {/* Grid of Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <div key={index} className="relative group">
              {/* Shadow */}
              <div className="absolute inset-0 bg-black translate-x-[4px] translate-y-[4px] group-hover:translate-x-[6px] group-hover:translate-y-[6px] transition-all" />
              
              {/* Card Body */}
              <div className="relative z-10 bg-white border-2 border-black p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                
                <div className="flex items-center gap-5">
                  {/* Decorative "Seal" Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-50 border-2 border-cyan-400 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-black leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mt-1">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>

                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-colors"
                >
                  Verify →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}