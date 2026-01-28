'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';
import TextReveal from '@/components/ui/TextReveal';
import ProblemVisual from '@/components/visuals/ProblemVisual';
import OrgChart from '@/components/visuals/OrgChart';
import TimelineIcon from '@/components/visuals/TimelineIcon';
import BeforeAfter from '@/components/visuals/BeforeAfter';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 0.95]);

  return (
    <>
      {/* Chapter 1: The Opening */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center relative"
      >
        <motion.div 
          className="container py-32"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-8"
            >
              PromptAI Consulting
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-charcoal-900 mb-8"
            >
              Your competitors are already using AI.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl md:text-2xl text-charcoal-500 leading-relaxed"
            >
              The question is whether you&apos;ll catch up—or get left behind.
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-charcoal-300 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-charcoal-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Chapter 2: The Problem */}
      <section className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <TextReveal>
              <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed mb-8">
                Here&apos;s what usually happens.
              </p>
            </TextReveal>
            
            <TextReveal delay={0.1}>
              <p className="text-2xl md:text-3xl font-display text-charcoal-900 leading-snug mb-8">
                Someone on your team signs up for ChatGPT. They try it for a week. It&apos;s inconsistent. Frustrating. They give up.
              </p>
            </TextReveal>
          </div>

          {/* Problem Visual */}
          <div className="max-w-3xl mx-auto">
            <ProblemVisual />
          </div>

          <div className="max-w-2xl mx-auto">
            <TextReveal delay={0.2}>
              <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed mb-8">
                Or maybe one person figures it out. They use it every day. They get faster. But when they leave, that knowledge walks out the door.
              </p>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="text-2xl md:text-3xl font-display text-charcoal-900 leading-snug">
                The technology isn&apos;t the problem.
                <span className="text-orange-500"> Implementation is.</span>
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-charcoal-200 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Chapter 3: The Solution */}
      <section className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <TextReveal>
              <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed mb-8">
                That&apos;s where we come in.
              </p>
            </TextReveal>
            
            <TextReveal delay={0.1}>
              <p className="text-2xl md:text-3xl font-display text-charcoal-900 leading-snug mb-8">
                We don&apos;t sell you software and walk away. We sit with your team, learn your workflows, and train each person on their actual job.
              </p>
            </TextReveal>
          </div>

          {/* Org Chart */}
          <OrgChart />

          <div className="max-w-2xl mx-auto">
            <TextReveal delay={0.2}>
              <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed">
                When something works, we write it down. When someone leaves, the knowledge stays. And every month, we show you exactly what&apos;s working and what isn&apos;t.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Chapter 4: The Journey */}
      <section className="py-32 md:py-48 bg-charcoal-900 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <TextReveal>
              <p className="text-orange-400 text-sm font-medium uppercase tracking-widest mb-6">
                The Journey
              </p>
            </TextReveal>
            
            <TextReveal delay={0.1}>
              <h2 className="text-white mb-24">
                Here&apos;s how it works.
              </h2>
            </TextReveal>

            {/* Timeline */}
            <div className="relative">
              {/* Connecting line */}
              <motion.div 
                className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent"
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Step 1 */}
              <motion.div 
                className="relative pl-16 md:pl-20 pb-16 md:pb-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute left-0 top-0">
                  <TimelineIcon type="platform" delay={0} />
                </div>
                <p className="text-charcoal-500 text-sm uppercase tracking-wider mb-3">First</p>
                <h3 className="text-white text-xl md:text-2xl font-display mb-4">We set up your AI platform.</h3>
                <p className="text-charcoal-400 leading-relaxed">
                  Claude Enterprise. Proper accounts for everyone. Usage tracking. Security controls. The foundation.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="relative pl-16 md:pl-20 pb-16 md:pb-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute left-0 top-0">
                  <TimelineIcon type="training" delay={0.2} />
                </div>
                <p className="text-charcoal-500 text-sm uppercase tracking-wider mb-3">Then</p>
                <h3 className="text-white text-xl md:text-2xl font-display mb-4">We train each person, one-on-one.</h3>
                <p className="text-charcoal-400 leading-relaxed">
                  Not generic workshops. We take real tasks off their desk and solve them together. Your estimator learns differently than your project manager. We teach accordingly.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="relative pl-16 md:pl-20 pb-16 md:pb-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute left-0 top-0">
                  <TimelineIcon type="playbook" delay={0.4} />
                </div>
                <p className="text-charcoal-500 text-sm uppercase tracking-wider mb-3">As we go</p>
                <h3 className="text-white text-xl md:text-2xl font-display mb-4">We build your company&apos;s AI playbook.</h3>
                <p className="text-charcoal-400 leading-relaxed">
                  Every workflow that works gets documented. Prompts. Templates. Processes. Organized by role. When someone new joins, they can get up to speed in days, not months.
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                className="relative pl-16 md:pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="absolute left-0 top-0">
                  <TimelineIcon type="review" delay={0.6} />
                </div>
                <p className="text-charcoal-500 text-sm uppercase tracking-wider mb-3">Every month</p>
                <h3 className="text-white text-xl md:text-2xl font-display mb-4">We measure what&apos;s working.</h3>
                <p className="text-charcoal-400 leading-relaxed">
                  A detailed report. Who&apos;s using AI, how much, on what. Where you&apos;re saving time. Where you&apos;re not. Then we sit down together and plan the next month.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: The Transformation */}
      <BeforeAfter />

      {/* Chapter 6: The Investment */}
      <section className="py-32 md:py-48 bg-charcoal-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <TextReveal>
              <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed mb-8">
                What does it cost?
              </p>
            </TextReveal>
            
            <TextReveal delay={0.1}>
              <p className="text-2xl md:text-3xl font-display text-charcoal-900 leading-snug mb-12">
                We keep it simple.
              </p>
            </TextReveal>

            <div className="space-y-8">
              <TextReveal delay={0.2}>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 pb-6 border-b border-charcoal-200">
                  <div>
                    <p className="text-charcoal-900 font-medium mb-1">Monthly retainer</p>
                    <p className="text-charcoal-500 text-sm">Playbook, reporting, support</p>
                  </div>
                  <p className="text-charcoal-600">Custom quote</p>
                </div>
              </TextReveal>

              <TextReveal delay={0.25}>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 pb-6 border-b border-charcoal-200">
                  <div>
                    <p className="text-charcoal-900 font-medium mb-1">Training sessions</p>
                    <p className="text-charcoal-500 text-sm">1-on-1, billed as you go</p>
                  </div>
                  <p className="text-orange-500 font-display text-xl">$250<span className="text-charcoal-400 text-sm font-body">/session</span></p>
                </div>
              </TextReveal>

              <TextReveal delay={0.3}>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 pb-6 border-b border-charcoal-200">
                  <div>
                    <p className="text-charcoal-900 font-medium mb-1">AI platform</p>
                    <p className="text-charcoal-500 text-sm">Claude Enterprise, billed by Anthropic</p>
                  </div>
                  <p className="text-charcoal-600">~$30–50<span className="text-charcoal-400 text-sm">/person/month</span></p>
                </div>
              </TextReveal>
            </div>

            <TextReveal delay={0.35}>
              <p className="text-charcoal-500 text-sm mt-8">
                Three month minimum. You can scale up or down from there.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Chapter 7: The Next Step */}
      <section id="contact" className="py-32 md:py-48">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <TextReveal>
              <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed mb-8 text-center">
                Ready to start?
              </p>
            </TextReveal>
            
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
              initial={{ opacity: 0, y: 20 }}
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
              Or just email{' '}
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
