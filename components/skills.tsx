"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "API Design", level: 88 },
      { name: "Database Design", level: 85 },
      { name: "Authentication", level: 85 },
    ],
  },
  {
    category: "3D & Visualization",
    skills: [
      { name: "React-Three-Fiber", level: 80 },
      { name: "Three.js", level: 80 },
      { name: "D3.js", level: 75 },
      { name: "Babylon.js", level: 70 },
      { name: "WebGL", level: 70 },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      { name: "Figma", level: 80 },
      { name: "shadcn/ui", level: 90 },
      { name: "Git", level: 90 },
      { name: "CAD Operations", level: 75 },
      { name: "Building Visualization", level: 80 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across frontend, backend, 3D visualization, and design
            domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {skillsData.map((category) => (
            <Card
              key={category.category}
              className="p-8 border-border/50 hover:border-primary/50 transition-all bg-card/50 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.category}</h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 relative z-10">
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-primary">Other Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "UI/UX Design",
                "Performance Optimization",
                "SEO",
                "Cloud Deployment",
                "Docker",
                "CI/CD",
                "Agile Development",
                "Technical Writing",
                "Problem Solving",
                "Team Collaboration",
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
