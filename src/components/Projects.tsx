import { Github, Sparkles, ScanSearch, ShieldAlert, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      icon: Sparkles,
      title: 'Project Life ("Lia") — AI Emotional Companion',
      description:
        "Cross-platform AI companion that talks, listens & reads user emotion in real time — combining conversational AI, vision-based emotion detection, a voice assistant, and a floating overlay UX. Authored the complete architecture and product spec end-to-end.",
      tech: ["Flutter", "Electron/Tauri", "OpenAI/Groq", "Whisper", "TTS"],
    },
    {
      icon: ScanSearch,
      title: "Cyber Guardian 360 — Web-Based Security Toolkit",
      description:
        "Published, browser-based toolkit executing 21 real (non-simulated) security tools via secure APIs — Nmap, Subfinder, Amass, RustScan, OSINT scanners. Three-interface system (Tool Cards, Terminal Emulator, File Viewer).",
      tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Deno Edge Functions"],
    },
    {
      icon: ShieldAlert,
      title: "Fraud Detection System / JS Online Guardian",
      description:
        "Real-time fraud detection for digital payments using behavioral analysis, anomaly detection & ML; extended into an Android app with geolocation monitoring, OTP verification, and real-time alerts across AP, Telangana, Tamil Nadu & Karnataka.",
      tech: ["Android Studio", "Python", "ML", "Transaction APIs"],
    },
    {
      icon: Terminal,
      title: "Automated Bug Bounty Toolkit",
      description:
        "Python-based recon automation toolkit covering subdomain discovery, directory brute-forcing, API endpoint testing & vulnerability scanning. Released as an open-source project on GitHub.",
      tech: ["Python", "Recon", "API Testing", "Open Source"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12">
          <p className="text-primary terminal-text text-sm tracking-wider">&gt; projects.list()</p>
          <h2 className="text-4xl lg:text-5xl font-bold glow-text">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-xl card-neon hologram-border transform transition-all hover:-translate-y-3"
            >
              <p.icon className="h-10 w-10 text-primary mb-4" />

              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-muted-foreground my-3 text-sm leading-relaxed">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/20 text-primary border border-primary/40 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
            <a href="https://github.com/jaswanthsai1" target="_blank">
              <Github className="mr-2 h-5 w-5" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
