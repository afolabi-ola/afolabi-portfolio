"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "SmartHome Dashboard",
    description:
      "Modern dashboard for controlling smart home devices with real-time data visualization and intuitive controls.",
    image: "/smart-home-dashboard.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "React-Three-Fiber"],
    category: "Full Stack",
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 2,
    title: "Portfolio AI Assistant",
    description:
      "Interactive AI-powered assistant integrated with Vercel AI SDK for natural conversation about projects and experience.",
    image: "/ai-chatbot-interface.png",
    tech: ["Next.js", "TypeScript", "Vercel AI SDK", "Tailwind"],
    category: "AI/ML",
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 3,
    title: "Construction Planner Tool",
    description:
      "Advanced planning tool with D3.js visualizations for construction project management and timeline tracking.",
    image: "/construction-project-planning-tool.jpg",
    tech: ["React", "TypeScript", "D3.js", "Tailwind"],
    category: "Full Stack",
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 4,
    title: "Interactive Roof Plan Viewer",
    description:
      "3D roof plan visualization using React-Three-Fiber with interactive controls for architectural viewing.",
    image: "/3d-roof-plan-viewer-architecture.jpg",
    tech: ["React-Three-Fiber", "TypeScript", "Tailwind", "Babylon.js"],
    category: "3D/Visualization",
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 5,
    title: "Frontend Portfolio Revamp",
    description: "Complete portfolio redesign with smooth animations, modern aesthetics, and optimized performance.",
    image: "/portfolio-website-design.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    category: "Design/Frontend",
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 6,
    title: "Real Estate Analytics Platform",
    description:
      "Comprehensive analytics dashboard for real estate data with interactive charts and filtering capabilities.",
    image: "/analytics-dashboard-real-estate.jpg",
    tech: ["Next.js", "TypeScript", "Recharts", "Supabase"],
    category: "Data",
    links: {
      github: "#",
      live: "#",
    },
  },
]

export function Projects() {
  const categories = ["All", ...new Set(projects.map((p) => p.category))]

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development, 3D visualization, and AI
            integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-secondary/10">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.links.github}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all text-primary"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Demo</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
