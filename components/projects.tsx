"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Construction Bible",
    description:
      "A comprehensive construction encyclopedia providing easy access to construction terms, definitions, and industry knowledge. Built with Next.js 16 and powered by a dedicated construction dictionary API.",
    image: "/construction.png",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind"],
    category: "Full Stack",
    links: {
      github: "https://github.com/BOL-DEV/Construction-Bible",
      live: "https://construction-bible.vercel.app/",
    },
  },
  {
    id: 2,
    title: "Hostify Lounge App",
    description:
      "This project is a restaurant web app where users can browse the menu, filter items, add them to a cart, and place orders. It also includes a booking form for table reservations. All data (cart, orders, bookings, and theme mode) is stored in localStorage, so the app runs fully on the frontend. A fake API is used to simulate order submission.",
    image: "/hostify.png",
    tech: ["HTML5", "CSS3", "JS"],
    category: "Frontend",
    links: {
      github: "https://github.com/BOL-DEV/Hostify",
      live: "https://hostify-xi.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Multi Step Form",
    description:
      "This project is a fully interactive multi-step subscription form built with React and TypeScript. Users can choose a plan, toggle between monthly and yearly billing, select add-ons, and view a real-time summary before confirmation. The UI is clean, responsive, and modeled to reflect modern onboarding flows used by SaaS platforms.",
    image: "/multi-step-form.png",
    tech: ["React", "TypeScript", "CSS Modules"],
    category: "Frontend",
    links: {
      github: "https://github.com/BOL-DEV/Multi-step-form",
      live: "https://multi-step-form-five-chi.vercel.app/home",
    },
  },
  {
    id: 4,
    title: "UsePopcorn Movie Search App",
    description:
      "UsePopcorn is a fast and responsive movie search app built with React. It lets users search any movie, view detailed information, and manage a personal watched list — all inside a clean, modern UI. The app uses the OMDB API, React hooks, and a fully responsive layout to deliver a smooth movie-exploration experience.",
    image: "/usePopcorn.png",
    tech: ["React", "JavaScript", "CSS"],
    category: "Frontend",
    links: {
      github: "https://github.com/BOL-DEV/Usepopcorn",
      live: "https://usepopcorn-olive.vercel.app/",
    },
  },
  {
    id: 5,
    title: "Rest Country",
    description:
      "Rest Country is a web application that provides detailed information about countries around the world. Users can search for countries, view their flags, capitals, populations, and other relevant data. The app is built using React.js and styled with CSS to ensure a responsive and user-friendly experience.",
    image: "/rest-country.png",
    tech: ["React.js", "JavaScript", "CSS"],
    category: "Frontend",
    links: {
      github: "https://github.com/BOL-DEV/Rest-Country",
      live: "https://rest-country-orpin.vercel.app/",
    },
  },
  {
    id: 6,
    title: "My Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience as a developer. Built with Next.js and TypeScript, it features a modern design, responsive layout, and integration with the VERCEL SDK API for enhanced performance and deployment.",
    image: "/image.png",
    tech: ["Next.js", "TypeScript", "VERCEL SDK API", "tailwindcss"],
    category: "Frontend/AI",
    links: {
      github: "https://github.com/BOL-DEV/BOL-PORTFOLIO",
      live: "https://bol-portfolio.vercel.app/",
    },
  },
];

export function Projects() {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack
            development, 3D visualization, and AI integration.
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
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

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
  );
}
