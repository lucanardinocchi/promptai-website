'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';
import TextReveal, { SplitText } from '@/components/ui/TextReveal';
import InteractiveCard from '@/components/ui/InteractiveCard';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const steps = [
  {
    number: '01',
    title: 'AI Platform Setup',
    description: 'We set you up with Claude Enterprise—the AI platform built for complex reasoning, document analysis, and professional correspondence.',
  },
  {
    number: '02',
    title: '1-on-1 Tutoring',
    description: 'Each team member gets hands-on sessions solving their actual work. Estimators, PMs, admins—everyone learns by doing.',
  },
  {
    number: '03',
    title: 'Skills Library',
    description: 'Every successful workflow gets documented. The expertise stays with your company, not in individual heads.',
  },
  {
    number: '04',
    title: 'Monthly Review',
    description: 'Detailed reporting on usage, ROI, and progress. Team forums to align on priorities and maintain momentum.',
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero - Full viewport with parallax */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center relative overflow-hidden animated-gradient"
      >
        <motion.div 
          className="container py-24 md:py-32 relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-charcoal-900 mb-6">
                <SplitText 
                  text="AI tools are everywhere." 
                  delay={0.3}
                />
                <br />
                <span className="text-charcoal-400">
                  <SplitText 
                    text="Most construction companies aren't using them." 
                    delay={0.6}
                  />
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl text-charcoal-600 mb-12 max-w-xl"
            >
              We help you change that.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <MagneticButton href="#contact" variant="primary">
                Start a conversation
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-charcoal-400"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="py-32 md:py-48 bg-charcoal-900 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <TextReveal>
              <p className="text-orange-400 text-sm font-medium uppercase tracking-widest mb-8">
                The Problem
              </p>
            </TextReveal>
            
            <TextReveal delay={0.1}>
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-white leading-tight mb-12">
                Someone buys a ChatGPT subscription. They play with it for a week. They get inconsistent results. 
                <span className="text-charcoal-500"> It sits unused.</span>
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="text-lg md:text-xl text-charcoal-300 leading-relaxed mb-8">
                Or a few people figure it out on their own, but the knowledge stays in their heads. When they leave, it leaves with them.
              </p>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="text-lg md:text-xl text-charcoal-300 leading-relaxed">
                The problem isn&apos;t the technology. 
                <span className="text-orange-400 font-medium"> It&apos;s implementation.</span> Without structured training, ongoing support, and accountability, AI adoption doesn&apos;t stick.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-32 md:py-48 relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <TextReveal>
                <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-8">
                  What We Do
                </p>
              </TextReveal>
              
              <TextReveal delay={0.1}>
                <h2 className="text-charcoal-900 mb-8">
                  Hands-on AI implementation that actually sticks.
                </h2>
              </TextReveal>

              <TextReveal delay={0.2}>
                <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                  We don&apos;t just give you access to tools. We train your team to use them on real work. We build a library of proven workflows. We track results monthly.
                </p>
              </TextReveal>

              <TextReveal delay={0.3}>
                <p className="text-lg text-charcoal-600 leading-relaxed">
                  The goal is simple: make AI a normal part of how your team works, delivering measurable productivity gains without compromising quality.
                </p>
              </TextReveal>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <InteractiveCard className="bg-white rounded-2xl p-6 border border-charcoal-100">
                <AnimatedCounter 
                  value={250} 
                  prefix="$" 
                  className="text-4xl md:text-5xl font-display text-charcoal-900 block"
                />
                <p className="text-charcoal-500 text-sm mt-2">per session</p>
              </InteractiveCard>
              
              <InteractiveCard className="bg-white rounded-2xl p-6 border border-charcoal-100">
                <AnimatedCounter 
                  value={3} 
                  className="text-4xl md:text-5xl font-display text-charcoal-900 block"
                />
                <p className="text-charcoal-500 text-sm mt-2">month minimum</p>
              </InteractiveCard>
              
              <InteractiveCard className="bg-charcoal-900 rounded-2xl p-6 col-span-2">
                <p className="text-white font-display text-xl mb-1">50–400%</p>
                <p className="text-charcoal-400 text-sm">productivity improvement on AI-assisted tasks</p>
              </InteractiveCard>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-48 bg-charcoal-50/50">
        <div className="container">
          <TextReveal>
            <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-8">
              How It Works
            </p>
          </TextReveal>
          
          <TextReveal delay={0.1}>
            <h2 className="text-charcoal-900 mb-20 max-w-2xl">
              Four steps to AI-enabled operations.
            </h2>
          </TextReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <InteractiveCard
                key={step.number}
                className="bg-white rounded-2xl p-8 border border-charcoal-100 group"
              >
                <motion.span
                  className="text-5xl md:text-6xl font-display text-charcoal-100 group-hover:text-orange-200 transition-colors duration-500 block mb-6"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {step.number}
                </motion.span>
                <h3 className="text-xl font-display text-charcoal-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <TextReveal>
              <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-8 text-center">
                Pricing
              </p>
            </TextReveal>
            
            <TextReveal delay={0.1}>
              <h2 className="text-charcoal-900 mb-16 text-center">
                Transparent and flexible.
              </h2>
            </TextReveal>

            <div className="space-y-6">
              <InteractiveCard className="bg-white rounded-2xl p-8 border border-charcoal-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-display text-charcoal-900 mb-2">Monthly Retainer</h3>
                    <p className="text-charcoal-600 text-sm">Skills library, monthly reporting, review forums, ongoing support</p>
                  </div>
                  <span className="text-charcoal-500 font-medium whitespace-nowrap">Custom quote</span>
                </div>
              </InteractiveCard>

              <InteractiveCard className="bg-white rounded-2xl p-8 border border-charcoal-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-display text-charcoal-900 mb-2">Tutoring Sessions</h3>
                    <p className="text-charcoal-600 text-sm">1-on-1 training, billed separately so you control the pace</p>
                  </div>
                  <span className="text-orange-500 font-display text-2xl whitespace-nowrap">$250<span className="text-charcoal-400 text-base font-body">/session</span></span>
                </div>
              </InteractiveCard>

              <InteractiveCard className="bg-white rounded-2xl p-8 border border-charcoal-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-display text-charcoal-900 mb-2">AI Platform</h3>
                    <p className="text-charcoal-600 text-sm">Claude Enterprise, billed directly by Anthropic</p>
                  </div>
                  <span className="text-orange-500 font-display text-2xl whitespace-nowrap">~$30–50<span className="text-charcoal-400 text-base font-body">/seat/mo</span></span>
                </div>
              </InteractiveCard>
            </div>

            <TextReveal delay={0.3}>
              <p className="text-center text-charcoal-500 text-sm mt-8">
                Minimum commitment: 3 months. Monthly retainer invoiced at the start of each month.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 md:py-48 bg-charcoal-900 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-md mx-auto">
            <TextReveal>
              <h2 className="text-white text-center mb-4">Let&apos;s talk.</h2>
            </TextReveal>
            
            <TextReveal delay={0.1}>
              <p className="text-charcoal-400 text-center mb-12">
                We&apos;ll schedule a call to understand your team and see if this is a fit.
              </p>
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 glow"
            >
              <ContactForm />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-8 text-charcoal-500 text-sm"
            >
              Or email{' '}
              <a
                href="mailto:luca@promptaiconsulting.com"
                className="text-orange-400 hover:text-orange-300 transition-colors"
                data-hover="true"
              >
                luca@promptaiconsulting.com
              </a>
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
