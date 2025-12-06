"use client"

import { Card } from "@/components/ui/card"

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
            <h3 className="text-2xl font-bold mb-4 text-primary">Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Full Stack Engineer passionate about creating exceptional digital experiences that merge technical
                excellence with real-world impact. My unique background combines software development expertise with
                construction studies, positioning me at the intersection of tech and building innovation.
              </p>
              <p>
                Starting with a curiosity for how things work—both in code and in physical structures—I've spent years
                honing my craft in web development while exploring the vast potential of construction technology.
              </p>
              <p>
                My mission is to influence both the tech and construction communities by building smart, innovative
                solutions that solve real problems and create lasting value.
              </p>
            </div>
          </Card>

          {/* Vision & Focus */}
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-primary">Vision & Focus</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Current Focus</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building full-stack applications with modern technology stacks, focusing on performance, scalability,
                  and user experience.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Construction Tech Vision</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leveraging web technologies to revolutionize construction planning, visualization, and management
                  through innovative digital solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Innovation Areas</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  3D visualization, AI-assisted planning, real-time collaboration tools, and data-driven decision making
                  in construction.
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
                <span className="text-2xl font-bold text-primary">50+</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Projects Completed</h4>
              <p className="text-sm text-muted-foreground">Full-stack applications and interactive experiences</p>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-4">
                <span className="text-2xl font-bold text-primary">5+</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Years Experience</h4>
              <p className="text-sm text-muted-foreground">In web development and software engineering</p>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-4">
                <span className="text-2xl font-bold text-primary">100%</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Dedicated</h4>
              <p className="text-sm text-muted-foreground">To creating quality solutions and continuous learning</p>
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
  )
}
