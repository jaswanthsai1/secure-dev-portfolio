import { Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CertificateGallery from "./CertificateGallery";

const Certifications = () => {
  const certifications = [
    {
      title: "CPENT",
      issuer: "EC-Council · Expected 2026",
      description: "Certified Penetration Testing Professional — advanced hands-on certification covering enterprise network pentesting, exploit development, and evasion techniques.",
      areas: ["Advanced Pentesting", "Exploit Development", "Network Security"]
    },
    {
      title: "LPT",
      issuer: "EC-Council \"Hack for Humanity\" Program · Expected 2026",
      description: "Licensed Penetration Tester pathway — selected for EC-Council's Hack for Humanity program toward the LPT credential.",
      areas: ["Penetration Testing", "Professional Certification"]
    },
    {
      title: "Active Bug Bounty Researcher",
      issuer: "HackerOne · Bugcrowd · Direct Vendor Disclosure",
      description: "6–12 months as an active security researcher, reporting vulnerabilities across web, API, and infrastructure targets using a structured recon → analysis → PoC → severity → report methodology.",
      areas: ["Vulnerability Research", "Responsible Disclosure", "Web & API Security"]
    },
    {
      title: "Published Security Researcher",
      issuer: "IJIRT · ISSN 2349-6002 · Impact Factor 8.412",
      description: "Co-authored \"Cyber Guardian 360: A Web-Based Cybersecurity Toolkit for Real-Time Security Analysis,\" Vol. 12, Issue 12, May 2026.",
      areas: ["Published Research", "Security Tooling", "Peer-Reviewed"]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-primary terminal-text text-sm tracking-wider">&gt; certifications.verify()</p>
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">Certifications & Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Professional credentials and recognition in cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                    <p className="text-sm text-primary terminal-text">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.areas.map((area, aIdx) => (
                    <Badge
                      key={aIdx}
                      variant="outline"
                      className="bg-muted/50 border-primary/30 text-xs"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Internships Section */}
          <div className="mt-12 bg-card border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Internship Experience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Ethical Hacking",
                  focus: "Penetration testing and vulnerability assessment"
                },
                {
                  title: "Network Security",
                  focus: "Protocol analysis and network defense"
                },
                {
                  title: "Security Policy Auditing",
                  focus: "Compliance and security framework evaluation"
                },
                {
                  title: "Incident Handling & Response",
                  focus: "Security incident detection and mitigation"
                }
              ].map((internship, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-semibold text-foreground">{internship.title}</h4>
                  <p className="text-sm text-muted-foreground">{internship.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Gallery */}
          <CertificateGallery />
        </div>
      </div>
    </section>
  );
};

export default Certifications;