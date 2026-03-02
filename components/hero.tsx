'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className='relative pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto text-center relative z-10'>
        <div className='mb-8 animate-fade-in'>
          <h1 className='text-5xl sm:text-7xl font-bold text-balance mb-4'>
            Afolabi Quadri
          </h1>
          <p className='text-xl sm:text-2xl text-muted-foreground text-balance mb-6'>
            Frontend-Focused Full Stack Engineer building real-world digital
            products
          </p>
          <p className='text-lg text-muted-foreground/80 text-balance max-w-2xl mx-auto'>
            I build scalable dashboards, secure escrow workflows, and CBT
            examination platforms using modern web technologies. Focused on
            turning complex business ideas into reliable, user-friendly
            software.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <Button asChild size='lg' className='gap-2'>
            <a href='#projects'>
              View My Work
              <ArrowRight className='w-4 h-4' />
            </a>
          </Button>
          <Button asChild size='lg' variant='outline'>
            <a href='#contact'>Get In Touch</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className='flex justify-center gap-4'>
          <a
            href='https://github.com/afolabi-ola'
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all'
            aria-label='GitHub'
          >
            <Github className='w-5 h-5' />
          </a>
          <a
            href='https://www.linkedin.com/in/quadri-afolabi-6238312a6/'
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all'
            aria-label='LinkedIn'
          >
            <Linkedin className='w-5 h-5' />
          </a>
          <a
            href='mailto:afolabiquadri28@gmail.com'
            className='p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all'
            aria-label='Email'
          >
            <Mail className='w-5 h-5' />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
        <svg
          className='w-6 h-6 text-primary'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </div>
    </section>
  );
}
