"use client";

import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Bridging the gap between web development and construction technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Bio */}
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm 19 years old and a Full Stack Developer with a passion for
                creating digital solutions. I'm currently studying Building
                Technology at LASU, which gives me a unique perspective on how
                technology can revolutionize the construction industry.
              </p>
              <p>
                My curiosity drives me to understand how things work—both in
                code and in physical structures. I'm honing my skills in web
                development while actively exploring the vast potential of
                construction technology.
              </p>
              <p>
                My mission is to bridge the gap between tech and construction,
                building smart, innovative solutions that solve real problems
                and create lasting value in the industry.
              </p>
            </div>
          </Card>

          {/* Vision & Focus */}
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Vision & Focus
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Current Focus
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building full-stack applications with modern technology
                  stacks, focusing on performance, scalability, and user
                  experience.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Construction Tech Vision
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leveraging web technologies to revolutionize construction
                  planning, visualization, and management through innovative
                  digital solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Innovation Areas
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  3D visualization, AI-assisted planning, real-time
                  collaboration tools, and data-driven decision making in
                  construction.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline/Highlights */}
        <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm mt-8 relative z-10">
          <h3 className="text-2xl font-bold mb-8 text-primary">Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-4">
                <span className="text-2xl font-bold text-primary">19</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Age</h4>
              <p className="text-sm text-muted-foreground">
                Bringing fresh perspective and energy to tech and construction
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-4">
                <span className="text-2xl font-bold text-primary">LASU</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Building Student
              </h4>
              <p className="text-sm text-muted-foreground">
                Studying Building Technology at Lagos State University
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-4">
                <span className="text-2xl font-bold text-primary">15+</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Projects Built</h4>
              <p className="text-sm text-muted-foreground">
                Full-stack applications merging web dev with construction tech
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 text-center relative z-10">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
