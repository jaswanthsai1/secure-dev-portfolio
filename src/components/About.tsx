import { Shield, Code, Bug, FileText } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Web, API & infrastructure vulnerability assessment",
    },
    {
      icon: Bug,
      title: "Bug Bounty Researcher",
      description: "Active on HackerOne, Bugcrowd & direct vendor disclosure",
    },
    {
      icon: FileText,
      title: "Published Author",
      description: "IJIRT paper (Impact Factor 8.412) on a 21-tool security toolkit",
    },
    {
      icon: Code,
      title: "Security Tool Developer",
      description: "Building secure, scalable full-stack applications",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="space-y-4 mb-12">
            <p className="text-primary terminal-text text-sm tracking-wider">
              &gt; about.exe
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">
              Who I Am
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT SIDE — ABOUT DESCRIPTION */}
            <div className="space-y-6">
              <div className="card-glitch bg-card border p-6 rounded-lg shadow-lg transition-all">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I'm{" "}
                  <span className="text-primary font-semibold">
                    Maturi Jaswanth Sai Madhu Mohan
                  </span>
                  , a recently graduated cybersecurity professional from Guntur,
                  Andhra Pradesh, with a B.Tech in Cyber Security from
                  Dhanalakshmi Srinivasan University.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  My hands-on experience spans{" "}
                  <span className="text-primary font-semibold">
                    penetration testing
                  </span>
                  ,{" "}
                  <span className="text-primary font-semibold">
                    bug bounty research
                  </span>
                  , and security tool development. I'm an active researcher on
                  HackerOne, Bugcrowd, and direct vendor disclosure programs,
                  and I'm currently pursuing EC-Council's CPENT certification —
                  selected for the "Hack for Humanity" program toward LPT.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I co-authored{" "}
                  <span className="text-primary font-semibold">
                    Cyber Guardian 360
                  </span>
                  , a peer-reviewed, published web-based cybersecurity toolkit
                  (IJIRT, Impact Factor 8.412) running 21 real security tools,
                  and I authored a detailed infrastructure security report on
                  sandbox/container architecture for a major AI provider's
                  HackerOne program.
                </p>
              </div>

              {/* EDUCATION SECTION */}
              <div className="card-glitch bg-card border p-6 rounded-lg shadow-lg transition-all terminal-text">
                <p className="text-sm text-muted-foreground mb-2">
                  &gt; education --list
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-primary font-semibold">
                      B.Tech in Cyber Security
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Dhanalakshmi Srinivasan University
                    </p>
                    <p className="text-xs text-muted-foreground">2022 - 2026</p>
                  </div>

                  <div className="border-t border-border/50 pt-3">
                    <p className="text-foreground font-semibold">
                      Intermediate (12th)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Narayana Junior College
                    </p>
                    <p className="text-xs text-muted-foreground">2020 - 2022</p>
                  </div>

                  <div className="border-t border-border/50 pt-3">
                    <p className="text-foreground font-semibold">
                      Schooling (10th)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Bhashyam Public School
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Completed 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — HIGHLIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="card-glitch bg-card border p-6 rounded-lg shadow-lg transition-all"
                >
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
