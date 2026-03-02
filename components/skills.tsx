'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillsData = [
  {
    category: 'Frontend Engineering',
    skills: [
      { name: 'Next.js', level: 95 },
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'UI Architecture & Component Systems', level: 90 },
      { name: 'Data Fetching & State Management', level: 88 },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'REST API Design', level: 82 },
      { name: 'Authentication & Protected Routes', level: 85 },
      { name: 'MongoDB & Data Modeling', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Prisma ORM', level: 70 },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git & Version Control', level: 90 },
      { name: 'shadcn/ui', level: 90 },
      { name: 'Linux (Ubuntu)', level: 80 },
      { name: 'API Testing (Postman/Bruno)', level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section id='skills' className='relative py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Skills & Expertise
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Frontend-focused full-stack engineer experienced in building
            production-ready dashboards, secure workflows, and scalable user
            interfaces with growing expertise in backend systems and relational
            database design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10'>
          {skillsData.map((category) => (
            <Card
              key={category.category}
              className='p-8 border-border/50 hover:border-primary/50 transition-all bg-card/50 backdrop-blur-sm'
            >
              <h3 className='text-2xl font-bold mb-6 text-primary'>
                {category.category}
              </h3>

              <div className='space-y-5'>
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='font-medium text-foreground'>
                        {skill.name}
                      </span>
                      <span className='text-sm text-muted-foreground'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='w-full h-2 bg-secondary/30 rounded-full overflow-hidden'>
                      <div
                        className='h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000'
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
        <div className='mt-12 relative z-10'>
          <Card className='p-8 border-border/50 bg-card/50 backdrop-blur-sm'>
            <h3 className='text-2xl font-bold mb-6 text-primary'>
              Product & Engineering Strengths
            </h3>
            <div className='flex flex-wrap gap-3'>
              {[
                'Dashboard Development',
                'Escrow Transaction Workflows',
                'CBT Examination Platforms',
                'Protected Routes & Middleware',
                'Real-time UI Updates',
                'Performance Optimization',
                'Responsive & Accessible UI',
                'Agile Collaboration',
                'Problem Solving',
                'Technical Documentation',
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant='secondary'
                  className='text-sm px-4 py-2'
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
