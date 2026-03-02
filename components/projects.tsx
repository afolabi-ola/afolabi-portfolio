"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: 'CBT Exam Management System',
    description:
      'A scalable Computer-Based Testing (CBT) platform designed for schools and institutions to conduct secure online examinations. Built with Next.js 16 App Router, featuring separate student, admin, and teacher portals, real-time exam timers, auto-save functionality, role-based dashboards, and performance analytics.',
    image: '/cbt-app.png',
    tech: [
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'Node.js',
      'MongoDB',
    ],
    category: 'Full Stack',
    links: {
      github: 'https://github.com/olatunde-sleek/cbt-exam-app',
      live: 'https://cbt-frontend-gamma.vercel.app/',
    },
  },
  {
    id: 2,
    title: 'Secure Escrow Platform',
    description:
      'A full-stack escrow transaction platform that enables buyers and sellers to transact securely with fund protection, dispute resolution, wallet management, and KYC verification. Built with Next.js for a modern dashboard experience and powered by a scalable Node.js/Express API with MongoDB for secure transaction handling.',
    image: '/escrow-app.png',
    tech: [
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'TypeScript',
      'Tailwind',
      'JWT',
      'WebSockets',
    ],
    category: 'Full Stack',
    links: {
      github: 'https://github.com/your-username/escrow-app',
      live: 'https://your-escrow-app.vercel.app/',
    },
  },
  {
    id: 3,
    title: 'Hotel Cabins',
    description:
      'The Hotel Cabins is a React application built with Vite. It provides a dashboard with various charts and statistics, including a sales chart and a duration chart. The application also includes protected routes and supports dark mode.',
    image: '/hotel-cabins.png',
    tech: ['React', 'Tanstack/query', 'Tailwind CSS', 'Vite'],
    category: 'Frontend',
    links: {
      github: 'https://github.com/afolabi-ola/hotel-cabin-react',
      live: 'https://afolabi-suites.vercel.app/',
    },
  },
  {
    id: 4,
    title: 'Natours (TypeScript / Express)',
    description:
      'Travel booking and reviews platform built with Express 5, MongoDB, Stripe Checkout, and Pug-rendered views. The app exposes a REST API for tours, users, bookings, and reviews, plus a server-rendered client for browsing and purchasing tours. It features secure authentication, role-based access control, and integration with Stripe for seamless payments.',
    image: '/natours.png',
    tech: [
      'Node.js',
      'Express',
      'MongoDB',
      'Stripe',
      'Pug',
      'TypeScript',
      'JWT',
    ],
    category: 'Full Stack',
    links: {
      github: 'https://github.com/afolabi-ola/natours',
      live: 'https://afo-natours.onrender.com/',
    },
  },
  {
    id: 5,
    title: 'Super Pizza',
    description:
      'A responsive pizza ordering application built with React. It includes add-to-cart functionality, state management with Redux, styling with Tailwind CSS, and data fetching using React Router.',
    image: '/super-pizza.png',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Redux', 'React Router'],
    category: 'Frontend',
    links: {
      github: 'https://github.com/afolabi-ola/Super-Pizza-React',
      live: 'https://super-pizza-react-pearl.vercel.app/',
    },
  },
  {
    id: 6,
    title: 'My Portfolio Website',
    description:
      'A personal portfolio website showcasing my projects, skills, and experience as a developer. Built with Next.js and TypeScript, it features a modern design, responsive layout, and integration with the VERCEL SDK API for enhanced performance and deployment.',
    image: '/portfolio.png',
    tech: ['Next.js', 'TypeScript', 'VERCEL SDK API', 'tailwindcss'],
    category: 'Frontend/AI',
    links: {
      github: 'https://github.com/afolabi-ola/afolabi-portfolio',
      live: 'https://afolabi-portfolio.vercel.app/',
    },
  },
];

export function Projects() {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  return (
    <section id='projects' className='relative py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Featured Projects
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            A curated selection of real-world projects that showcase my work in
            full-stack development, scalable backend systems, and product-focused
            engineering across platforms like CBT and secure Escrow solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10'>
          {projects.map((project) => (
            <Card
              key={project.id}
              className='group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm'
            >
              {/* Project Image */}
              <div className='relative h-48 overflow-hidden bg-secondary/10'>
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>

              {/* Project Content */}
              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <h3 className='text-xl font-bold text-foreground'>
                    {project.title}
                  </h3>
                  <Badge variant='outline' className='text-xs'>
                    {project.category}
                  </Badge>
                </div>

                <p className='text-muted-foreground text-sm mb-4 line-clamp-2'>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant='secondary' className='text-xs'>
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant='secondary' className='text-xs'>
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Links */}
                <div className='flex gap-3'>
                  <a
                    href={project.links.github}
                    className='flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary'
                    aria-label='GitHub repository'
                  >
                    <Github className='w-4 h-4' />
                    <span className='hidden sm:inline'>Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    className='flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all text-primary'
                    aria-label='Live demo'
                  >
                    <ExternalLink className='w-4 h-4' />
                    <span className='hidden sm:inline'>Demo</span>
                  </a>
                </div>
              </div>

              <div className='pointer-events-none absolute inset-0 z-20 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6'>
                <div className='h-full overflow-y-auto'>
                  <h4 className='text-lg font-semibold text-foreground mb-3'>
                    Project Overview
                  </h4>
                  <p className='text-sm text-muted-foreground leading-relaxed mb-4'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech) => (
                      <Badge
                        key={`${project.id}-${tech}`}
                        variant='secondary'
                        className='text-xs'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
