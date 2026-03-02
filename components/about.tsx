'use client';

import { Card } from '@/components/ui/card';

export function About() {
  return (
    <section id='about' className='relative py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>About Me</h2>
          <p className='text-lg text-muted-foreground'>
            I design and build reliable digital products that solve meaningful
            business challenges.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10'>
          {/* Bio */}
          <Card className='p-8 border-border/50 bg-card/50 backdrop-blur-sm'>
            <h3 className='text-2xl font-bold mb-4 text-primary'>Who I Am</h3>
            <div className='space-y-4 text-muted-foreground leading-relaxed'>
              <p>
                I am a software engineer focused on building practical, scalable
                solutions with modern web technologies. My core strengths are
                full-stack development, backend architecture, and system design
                for production environments.
              </p>
              <p>
                I enjoy turning complex business ideas into working and
                dependable software. From secure financial workflows to
                real-time user dashboards, I focus on understanding the business
                context before writing code.
              </p>
              <p>
                In recent work, I led the development of production-grade
                platforms including an escrow transaction system and a
                computer-based testing platform. Both were built to support real
                users, secure data flows, and long-term scalability.
              </p>
            </div>
          </Card>

          {/* Vision & Focus */}
          <Card className='p-8 border-border/50 bg-card/50 backdrop-blur-sm'>
            <h3 className='text-2xl font-bold mb-4 text-primary'>
              Vision & Focus
            </h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Current Focus
                </h4>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  Building secure and scalable full-stack applications with
                  Next.js, Node.js, and modern backend patterns, including REST
                  APIs, real-time systems, and efficient data modeling.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Product Engineering
                </h4>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  Designing and engineering platforms that solve operational and
                  transactional challenges. This includes escrow workflows that
                  build trust in digital payments and CBT systems that support
                  large-scale examination processes.
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-foreground mb-2'>
                  Long-Term Direction
                </h4>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  To grow into a high-impact engineer who builds reliable
                  software infrastructure for businesses, with consistent focus
                  on performance, security, and long-term maintainability.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline/Highlights */}
        <Card className='p-8 border-border/50 bg-card/50 backdrop-blur-sm mt-8 relative z-10'>
          <h3 className='text-2xl font-bold mb-8 text-primary'>Highlights</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-4'>
                <span className='text-2xl font-bold text-primary'>
                  Full-Stack
                </span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>Engineer</h4>
              <p className='text-sm text-muted-foreground'>
                Building end-to-end applications with strong backend and system
                design focus
              </p>
            </div>
            <div className='text-center'>
              <div className='inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-4'>
                <span className='text-2xl font-bold text-primary'>Escrow</span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>
                Platform Lead
              </h4>
              <p className='text-sm text-muted-foreground'>
                Led development of a secure escrow transaction platform with
                real-time updates and protected workflows
              </p>
            </div>
            <div className='text-center'>
              <div className='inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-4'>
                <span className='text-2xl font-bold text-primary'>CBT</span>
              </div>
              <h4 className='font-semibold text-foreground mb-2'>
                Exam System
              </h4>
              <p className='text-sm text-muted-foreground'>
                Built a scalable computer-based testing system for managing
                exams, results, and candidate workflows
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className='mt-12 text-center relative z-10'>
          <p className='text-lg text-muted-foreground mb-6'>
            Interested in collaborating or exploring how I can help build your
            next product?
          </p>
          <a
            href='#contact'
            className='inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors'
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
