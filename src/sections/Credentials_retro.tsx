export default function CredentialsRetro() {
  const certs = [
    { 
      title: "AWS Certified AI Practitioner", 
      issuer: "Amazon Web Services", 
      date: "Jan 2026", 
      id: "AWS-AI-9309", 
      status: "AUTHENTICATED",
      link: "https://www.credly.com/badges/9309aea4-5604-4c0d-b2e3-2d4ca5650b42/public_url" 
    },
    { 
      title: "AWS Certified Cloud Practitioner", 
      issuer: "Amazon Web Services", 
      date: "Jan 2026", 
      id: "AWS-CL-C1AD", 
      status: "AUTHENTICATED",
      link: "https://www.credly.com/badges/c1adfcb5-c7cd-43ec-b338-d7ce2b6fa1d0/public_url" 
    },
    { 
      title: "Database Programming with SQL", 
      issuer: "Oracle Academy", 
      date: "Dec 2025", 
      id: "ORCL-SQL-KV2E", 
      status: "VERIFIED",
      link: "https://drive.google.com/file/d/1KV2eHQgDGsp83hAy67stXR6fjYX4pJRZ/view" 
    },
    { 
      title: "Palo Alto Cybersecurity Academy", 
      issuer: "Palo Alto", 
      date: "Jun 2025", 
      id: "PALO-CYBER-01", 
      status: "VERIFIED",
      link: "#" 
    },
  ];

  return (
    <div className="font-mono text-[11px] text-black">
      {/* HEADER: Security Info */}
      <div className="bg-[#FFFFCC] border border-[#E6DB55] p-3 mb-6 flex gap-3 items-start">
        <span className="text-xl">🔑</span>
        <div>
          <p className="font-bold text-[#808000]">Certificate Manager Information</p>
          <p className="text-[10px]">These credentials are cryptographically linked to the official issuers. Double-click any record to open the validation link in your browser.</p>
        </div>
      </div>

      {/* CREDENTIAL LIST */}
      <div className="space-y-2">
        {certs.map((cert, index) => (
          <div 
            key={index}
            onClick={() => window.open(cert.link, "_blank")}
            className="flex items-center justify-between p-2 border border-transparent hover:border-[#0050E6] hover:bg-[#316AC5] hover:text-white cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">🛡️</span>
              <div>
                <p className="font-bold uppercase tracking-tight">{cert.title}</p>
                <p className="text-[9px] opacity-70 uppercase">
                  {cert.issuer} // Issued: {cert.date} // ID: {cert.id}
                </p>
              </div>
            </div>
            
            <div className={`
              px-2 py-0.5 border text-[9px] font-black
              ${cert.status === 'AUTHENTICATED' 
                ? 'border-green-600 text-green-700 bg-green-50 group-hover:bg-white/20 group-hover:text-white group-hover:border-white' 
                : 'border-blue-600 text-blue-700 bg-blue-50 group-hover:bg-white/20 group-hover:text-white group-hover:border-white'}
            `}>
              {cert.status}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER: System Tray Style */}
      <div className="mt-10 pt-4 border-t border-gray-300 flex justify-between opacity-50 italic">
        <p>Total: 4 Licenses Found</p>
        <p>Security Level: Maximum</p>
      </div>
    </div>
  );
}