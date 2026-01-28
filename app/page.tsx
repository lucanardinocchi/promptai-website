'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';
import TextReveal, { WordReveal, ScrollReveal } from '@/components/ui/TextReveal';
import OrgChart from '@/components/visuals/OrgChart';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 0.5], [0, -50]);

  // Section refs for scroll-linked backgrounds
  const problemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: problemScroll } = useScroll({
    target: problemRef,
    offset: ['start end', 'end start'],
  });
  const problemBg = useTransform(
    problemScroll,
    [0, 0.5, 1],
    ['rgb(254, 253, 251)', 'rgb(250, 250, 250)', 'rgb(254, 253, 251)']
  );

  return (
    <>
      {/* Hero */}
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
              <WordReveal text="Your competitors are" delay={0.5} />
              <br />
              <WordReveal text="already using AI." delay={0.7} />
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl text-charcoal-500 leading-relaxed max-w-xl"
            >
              The question is whether you&apos;ll catch up—or get left behind.
            </motion.p>
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

      {/* The Problem */}
      <motion.section 
        ref={problemRef}
        style={{ backgroundColor: problemBg }}
        className="py-32 md:py-48"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-charcoal-500 text-lg md:text-xl leading-relaxed mb-12">
                Here&apos;s what usually happens.
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-charcoal-900 leading-[1.2] mb-12">
                Someone on your team signs up for ChatGPT.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-charcoal-400 leading-[1.2] mb-12">
                They try it for a week.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-3xl md:text-4xl lg:text-5xl font-display text-charcoal-300 leading-[1.2] mb-16">
                It sits unused.
              </p>
            </ScrollReveal>

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
      </motion.section>

      {/* Divider */}
      <div className="relative h-32 md:h-48">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal-100/50 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* The Solution */}
      <section className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <p className="text-charcoal-500 text-lg md:text-xl leading-relaxed mb-8">
                That&apos;s where we come in.
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <p className="text-3xl md:text-4xl font-display text-charcoal-900 leading-snug mb-8">
                We don&apos;t sell software and walk away.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed">
                We sit with your team, learn your workflows, and train each person on their actual job. 
                Every role. Every task. Hands-on.
              </p>
            </ScrollReveal>
          </div>

          {/* Org Chart */}
          <OrgChart />

          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed">
                When something works, we document it. When someone leaves, the knowledge stays. 
                And every month, we show you exactly what&apos;s working and what isn&apos;t.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-32 md:py-48 bg-charcoal-900 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <TextReveal>
              <p className="text-orange-400 text-sm font-medium uppercase tracking-widest mb-6">
                The Process
              </p>
            </TextReveal>
            
            <TextReveal delay={0.1}>
              <h2 className="text-white mb-20">
                Here&apos;s how it works.
              </h2>
            </TextReveal>

            {/* Steps */}
            <div className="space-y-20">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-2">
                  <span className="text-5xl md:text-6xl font-display text-charcoal-700">01</span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-white text-xl md:text-2xl font-display mb-4">
                    We set up your AI platform.
                  </h3>
                  <p className="text-charcoal-400 leading-relaxed">
                    Claude Enterprise. Proper accounts for everyone. Usage tracking. Security controls. The foundation you need.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-2">
                  <span className="text-5xl md:text-6xl font-display text-charcoal-700">02</span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-white text-xl md:text-2xl font-display mb-4">
                    We train each person, one-on-one.
                  </h3>
                  <p className="text-charcoal-400 leading-relaxed">
                    Not generic workshops. We take real tasks off their desk and solve them together. 
                    Your estimator learns differently than your project manager. We teach accordingly.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-2">
                  <span className="text-5xl md:text-6xl font-display text-charcoal-700">03</span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-white text-xl md:text-2xl font-display mb-4">
                    We build your AI playbook.
                  </h3>
                  <p className="text-charcoal-400 leading-relaxed">
                    Every workflow that works gets documented. Prompts. Templates. Processes. 
                    When someone new joins, they can get up to speed in days, not months.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-2">
                  <span className="text-5xl md:text-6xl font-display text-charcoal-700">04</span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-white text-xl md:text-2xl font-display mb-4">
                    We measure what&apos;s working.
                  </h3>
                  <p className="text-charcoal-400 leading-relaxed">
                    Monthly reports. Who&apos;s using AI, how much, on what. Where you&apos;re saving time. 
                    Then we sit down together and plan the next month.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Investment */}
      <section className="py-32 md:py-48 bg-charcoal-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <p className="text-charcoal-500 text-lg md:text-xl leading-relaxed mb-8">
                What does it cost?
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <p className="text-3xl md:text-4xl font-display text-charcoal-900 leading-snug mb-16">
                We keep it simple.
              </p>
            </ScrollReveal>

            <div className="space-y-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-charcoal-200"
              >
                <div>
                  <p className="text-charcoal-900 font-medium text-lg mb-1">Monthly retainer</p>
                  <p className="text-charcoal-500 text-sm">Playbook, reporting, support</p>
                </div>
                <p className="text-charcoal-600 text-lg">Custom quote</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-charcoal-200"
              >
                <div>
                  <p className="text-charcoal-900 font-medium text-lg mb-1">Training sessions</p>
                  <p className="text-charcoal-500 text-sm">1-on-1, billed as you go</p>
                </div>
                <p className="text-2xl font-display">
                  <span className="text-orange-500">$250</span>
                  <span className="text-charcoal-400 text-base font-body">/session</span>
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-charcoal-200"
              >
                <div>
                  <p className="text-charcoal-900 font-medium text-lg mb-1">AI platform</p>
                  <p className="text-charcoal-500 text-sm">Claude Enterprise, billed by Anthropic</p>
                </div>
                <p className="text-charcoal-600 text-lg">~$30–50<span className="text-charcoal-400 text-sm">/person/month</span></p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-charcoal-500 text-sm mt-12"
            >
              Three month minimum. You can scale up or down from there.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <p className="text-charcoal-500 text-lg md:text-xl leading-relaxed mb-8 text-center">
                Ready to start?
              </p>
            </ScrollReveal>
            
            <TextReveal delay={0.1}>
              <h2 className="text-charcoal-900 mb-4 text-center">
                Let&apos;s talk.
              </h2>
            </TextReveal>

            <TextReveal delay={0.15}>
              <p className="text-charcoal-500 text-center mb-12">
                Tell us about your team. We&apos;ll tell you honestly if we can help.
              </p>
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-charcoal-50 rounded-2xl p-8 md:p-10"
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
                className="text-charcoal-900 hover:text-orange-500 transition-colors underline underline-offset-2"
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
