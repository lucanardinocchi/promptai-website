'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';
import TextReveal, { WordReveal, ScrollReveal } from '@/components/ui/TextReveal';
import OrgChart from '@/components/visuals/OrgChart';

// Reusable fade section wrapper
function FadeSection({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  });
  
  const { scrollYProgress: exitProgress } = useScroll({
    target: ref,
    offset: ['end center', 'end start'],
  });

  const enterOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const exitOpacity = useTransform(exitProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity: enterOpacity,
      }}
      className={className}
    >
      <motion.div style={{ opacity: exitOpacity }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 0.7], [0, -100]);

  const processSteps = [
    {
      number: '01',
      title: 'Deploy AI Platform',
      description: 'We set up Claude Enterprise across your team with proper accounts, security, and usage tracking.',
    },
    {
      number: '02',
      title: '1-on-1 Tutoring',
      description: 'Individual sessions to identify how each person can use AI for their specific role and tasks.',
    },
    {
      number: '03',
      title: 'Skills Library',
      description: 'We build and maintain a Claude skills library tailored to your team\'s workflows.',
    },
    {
      number: '04',
      title: 'Monthly Adoption Report',
      description: 'Wins, challenges, usage stats, and next steps—delivered monthly to track progress.',
    },
  ];

  return (
    <div className="relative">
      {/* Hero - The Vision */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        <motion.div 
          className="container py-32"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-8"
            >
              PromptAI Consulting
            </motion.p>
            
            <h1 className="text-charcoal-900 mb-8">
              <WordReveal text="Work feels different" delay={0.5} />
              <br />
              <WordReveal text="when AI just works." delay={0.7} />
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl text-charcoal-500 leading-relaxed max-w-xl mb-12"
            >
              Imagine your whole team—every role, every desk—fluent in AI. 
              Getting more done before lunch than they used to in a week. 
              It&apos;s not a fantasy. We make it happen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <a 
                href="#contact" 
                className="btn-orange inline-flex items-center gap-2"
              >
                Start the conversation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-charcoal-300 to-transparent"
          />
        </motion.div>
      </section>

      {/* The Vision - What it looks like */}
      <FadeSection className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-6">
                The Vision
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <h2 className="text-charcoal-900 mb-8">
                Picture this.
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-12 mt-16">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ),
                  title: 'Natural conversation',
                  description: 'Your team chats with Claude like a brilliant colleague who never sleeps, never forgets, and is always ready to help.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Effortless output',
                  description: 'Reports that used to take hours take minutes. Proposals, emails, analysis—all flowing without breaking a sweat.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Addictive productivity',
                  description: 'Once your team feels the flow, they won\'t want to go back. AI becomes second nature, not an afterthought.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-left"
                >
                  <div className="w-14 h-14 rounded-2xl bg-charcoal-100 flex items-center justify-center text-orange-500 mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-charcoal-900 text-xl font-display mb-3">{item.title}</h3>
                  <p className="text-charcoal-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeSection>

      {/* The Problem */}
      <FadeSection className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-8">
                The Problem
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <h2 className="text-charcoal-900 mb-16">
                But here&apos;s what usually happens.
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-charcoal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-charcoal-400 font-mono text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-display text-charcoal-900 leading-snug">
                      Someone on your team signs up for ChatGPT.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-charcoal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-charcoal-400 font-mono text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-display text-charcoal-400 leading-snug">
                      They try it for a week.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-charcoal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-charcoal-300 font-mono text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-display text-charcoal-300 leading-snug">
                      It sits unused.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="mt-16 pt-16 border-t border-charcoal-200">
              <ScrollReveal>
                <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed mb-8">
                  Or maybe one person figures it out. They use it every day. They get faster. 
                  But when they leave, that knowledge walks out the door.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <p className="text-2xl md:text-3xl font-display text-charcoal-900 leading-snug">
                  The technology isn&apos;t the problem.
                  <span className="text-orange-500"> Implementation is.</span>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* The Solution */}
      <FadeSection className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-8">
                The Solution
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <h2 className="text-charcoal-900 mb-8">
                We don&apos;t sell software and walk away.
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xl md:text-2xl text-charcoal-600 leading-relaxed">
                We sit with your team, learn your workflows, and train each person on their actual job. 
                Every role. Every task. Hands-on until AI becomes second nature.
              </p>
            </ScrollReveal>
          </div>

          {/* Org Chart */}
          <OrgChart />

          <div className="max-w-3xl mx-auto mt-16">
            <ScrollReveal>
              <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed">
                When something works, we document it. When someone leaves, the knowledge stays. 
                And every month, we show you exactly what&apos;s working and what isn&apos;t.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </FadeSection>

      {/* The Process */}
      <FadeSection className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <ScrollReveal>
                <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-6">
                  The Process
                </p>
              </ScrollReveal>
              
              <ScrollReveal>
                <h2 className="text-charcoal-900 mb-6">
                  From zero to AI-native in months.
                </h2>
              </ScrollReveal>

              <ScrollReveal>
                <p className="text-charcoal-500 text-lg max-w-2xl mx-auto">
                  A proven path that transforms how your entire team works. 
                  No vague promises—just a clear roadmap with measurable results.
                </p>
              </ScrollReveal>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-2 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-charcoal-100 shadow-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl font-display text-orange-500">{step.number}</span>
                    <h3 className="text-charcoal-900 text-xl font-display pt-2">{step.title}</h3>
                  </div>
                  <p className="text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeSection>

      {/* Case Study */}
      <FadeSection className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-8 text-center">
                Case Study
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <h2 className="text-charcoal-900 mb-16 text-center">
                Real results, real teams.
              </h2>
            </ScrollReveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-charcoal-100 shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-charcoal-500 text-sm uppercase tracking-wider mb-4">
                    Commercial Construction
                  </p>
                  <h3 className="text-charcoal-900 text-2xl md:text-3xl font-display mb-6">
                    An 18-person GC cut their admin time in half.
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed mb-8">
                    Their office team was drowning in RFIs, variation letters, and progress claims. 
                    After training, they&apos;re getting through the same workload in half the time—and 
                    the quality has actually improved.
                  </p>
                  <blockquote className="border-l-2 border-orange-500 pl-6">
                    <p className="text-charcoal-700 italic mb-4">
                      &ldquo;The team actually looks forward to documentation now. Never thought I&apos;d say that.&rdquo;
                    </p>
                    <cite className="text-charcoal-500 text-sm not-italic">
                      — Director
                    </cite>
                  </blockquote>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '50%', label: 'Less time on admin' },
                    { value: '4 weeks', label: 'To see results' },
                    { value: '12', label: 'Team members trained' },
                    { value: '85%', label: 'Using AI daily after 3 months' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="bg-charcoal-50 rounded-2xl p-6 text-center"
                    >
                      <p className="text-3xl md:text-4xl font-display text-orange-500 mb-2">
                        {stat.value}
                      </p>
                      <p className="text-charcoal-500 text-sm">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </FadeSection>

      {/* Pricing */}
      <FadeSection className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-8 text-center">
                Investment
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <h2 className="text-charcoal-900 text-center mb-6">
                Simple, transparent pricing.
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-charcoal-500 text-center text-lg mb-16 max-w-xl mx-auto">
                Every team is different, so we tailor our approach to your specific needs. 
                Here&apos;s what to expect.
              </p>
            </ScrollReveal>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-charcoal-100 overflow-hidden shadow-sm">
              <div className="divide-y divide-charcoal-100">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 md:p-8"
                >
                  <div>
                    <p className="text-charcoal-900 font-medium text-lg mb-1">Monthly retainer</p>
                    <p className="text-charcoal-500 text-sm">Ongoing support, skills library, reporting</p>
                  </div>
                  <p className="text-charcoal-600 text-lg">
                    <span className="text-charcoal-700 font-display text-xl">Business-specific quote</span>
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 md:p-8"
                >
                  <div>
                    <p className="text-charcoal-900 font-medium text-lg mb-1">Training sessions</p>
                    <p className="text-charcoal-500 text-sm">1-on-1 with each team member</p>
                  </div>
                  <p className="text-charcoal-600 text-lg">
                    <span className="text-orange-500 font-display text-2xl">$250</span>
                    <span className="text-charcoal-400 text-sm">/session</span>
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 md:p-8"
                >
                  <div>
                    <p className="text-charcoal-900 font-medium text-lg mb-1">AI platform</p>
                    <p className="text-charcoal-500 text-sm">Claude Enterprise, billed directly by Anthropic</p>
                  </div>
                  <p className="text-charcoal-600 text-lg">
                    <span className="text-charcoal-700 font-display text-2xl">~$30–50</span>
                    <span className="text-charcoal-400 text-sm">/person/month</span>
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-charcoal-500 text-sm mt-8 text-center"
            >
              Three month minimum. Retainer quoted based on team size and scope.
            </motion.p>
          </div>
        </div>
      </FadeSection>

      {/* Contact */}
      <FadeSection className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-8 text-center">
                Get Started
              </p>
            </ScrollReveal>
            
            <TextReveal delay={0.1}>
              <h2 className="text-charcoal-900 mb-4 text-center">
                Let&apos;s talk.
              </h2>
            </TextReveal>

            <TextReveal delay={0.15}>
              <p className="text-charcoal-500 text-center mb-12 text-lg">
                Tell us about your team and your goals. 
                We&apos;ll tell you honestly if we can help.
              </p>
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="contact"
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-charcoal-100 shadow-sm"
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
                href="mailto:luca@promptaiconsulting.com.au"
                className="text-charcoal-900 hover:text-orange-500 transition-colors underline underline-offset-2"
              >
                luca@promptaiconsulting.com.au
              </a>
            </motion.p>
          </div>
        </div>
      </FadeSection>
    </div>
  );
}
