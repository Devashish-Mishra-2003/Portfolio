import { useTypewriter } from "../hooks/useTypewriter";

export default function CertificatesTerminal() {
  const { displayed } = useTypewriter(
    "Authorized credentials found. Accessing encrypted license vault... verification successful. You may proceed to view the digital signatures."
  );

  const certs = [
    { id: "A1-026", title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", date: "Jan 2026", link: "https://www.credly.com/badges/9309aea4-5604-4c0d-b2e3-2d4ca5650b42/public_url" },
    { id: "C3-921", title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Jan 2026", link: "https://www.credly.com/badges/c1adfcb5-c7cd-43ec-b338-d7ce2b6fa1d0/public_url" },
    { id: "O2-554", title: "Database Programming with SQL", issuer: "Oracle Academy", date: "Dec 2025", link: "https://drive.google.com/file/d/1KV2eHQgDGsp83hAy67stXR6fjYX4pJRZ/view" },
    { id: "P9-110", title: "Palo Alto Cybersecurity Academy", issuer: "Palo Alto Academy", date: "Jun 2025", link: "#" },
  ];

  return (
    <section id="certificates" className="bg-black py-20 font-mono border-b border-green-900/20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
            <span className="text-green-500 font-bold text-xl md:text-2xl animate-pulse">#</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
              cat /etc/credentials
            </h2>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-green-500/60 max-w-2xl min-h-[3rem] leading-relaxed">
          {displayed}
          <span className="animate-pulse ml-1 text-green-500 font-black">█</span>
        </p>

        {/* Registry Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-green-500/30 text-[10px] uppercase tracking-[0.2em] text-green-500/40">
                <th className="py-4 font-black">ID_REF</th>
                <th className="py-4 font-black">CERTIFICATE_TITLE</th>
                <th className="py-4 font-black hidden md:table-cell">ISSUER</th>
                <th className="py-4 font-black">DATE</th>
                <th className="py-4 font-black text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-500/10">
              {certs.map((cert, index) => (
                <tr key={index} className="group hover:bg-green-500/5 transition-colors">
                  <td className="py-6 text-xs text-green-500/40 font-bold">{cert.id}</td>
                  <td className="py-6">
                    <div className="text-sm md:text-base font-bold text-white uppercase group-hover:text-green-400 transition-colors">
                      {cert.title}
                    </div>
                    <div className="text-[10px] text-gray-500 md:hidden mt-1">{cert.issuer}</div>
                  </td>
                  <td className="py-6 text-xs text-gray-400 font-bold hidden md:table-cell uppercase">
                    {cert.issuer}
                  </td>
                  <td className="py-6 text-xs text-gray-500 font-bold tabular-nums">
                    {cert.date}
                  </td>
                  <td className="py-6 text-right">
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[10px] font-black uppercase text-white border border-white/20 px-3 py-1 hover:border-green-500 hover:text-green-500 transition-all active:scale-95"
                    >
                      ./verify_key
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="mt-8 flex items-center gap-2 opacity-20">
          <div className="h-[1px] flex-grow bg-green-500/50" />
          <span className="text-[10px] uppercase font-bold text-green-500">End of Registry</span>
          <div className="h-[1px] flex-grow bg-green-500/50" />
        </div>
      </div>
    </section>
  );
}