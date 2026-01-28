'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import TextReveal from '@/components/ui/TextReveal';

const team = [
  {
    name: 'Luca',
    role: 'Founder',
    bio: 'Residential Estimator at CENTINA. Double degree in aerospace engineering and philosophy. Built the AI systems that transformed CENTINA\'s operations.',
  },
  {
    name: 'Dzung',
    role: 'AI Agent Builder',
    bio: 'Specialist in building custom AI agents and automations. Designs the technical architecture behind our implementations.',
  },
  {
    name: 'Zoe',
    role: 'Implementation Specialist',
    bio: 'Leads client training and workflow integration. Ensures every team member can actually use what we build.',
  },
];

const tools = ['Claude', 'ChatGPT', 'Gemini', 'Microsoft Copilot'];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-6 block"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-charcoal-900 mb-8"
            >
              We&apos;re builders who know AI—not AI people who read about construction.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-charcoal-600 leading-relaxed"
            >
              PromptAI was built from the inside out. We started by transforming
              our own work, then built systems to help others.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><hr className="divider my-0" /></div>

      {/* Origin Story */}
      <Section className="py-20 md:py-28">
        <div className="max-w-2xl">
          <TextReveal>
            <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-10">
              How We Started
            </h2>
          </TextReveal>
          <div className="space-y-6 text-charcoal-600 leading-relaxed">
            <TextReveal delay={0.05}>
              <p>
                PromptAI didn&apos;t start as a consulting company. It started with a
                simple question: why am I spending three hours on something AI
                could do in ten minutes?
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <p>
                Our founder, Luca, works as a Residential Estimator at CENTINA—a
                $70M construction company in Adelaide. While studying aerospace
                engineering and philosophy, he started experimenting with AI tools.
              </p>
            </TextReveal>
            <TextReveal delay={0.15}>
              <p>
                The results were dramatic. Tasks that took hours became minutes.
                Productivity increased by 50-400% depending on the task.
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p>
                Word spread. Colleagues asked for help. Then other companies heard
                about what CENTINA was doing.
              </p>
            </TextReveal>
            <TextReveal delay={0.25}>
              <p className="text-charcoal-900 font-medium pt-2">
                PromptAI is the answer to a question we kept hearing: &ldquo;Can you 
                help us do what you did?&rdquo;
              </p>
            </TextReveal>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section background="light" className="py-20 md:py-28">
        <TextReveal>
          <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-12">
            The Team
          </h2>
        </TextReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <TextReveal key={member.name} delay={0.05 + i * 0.05}>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-charcoal-100">
                <div className="w-12 h-12 bg-charcoal-900 rounded-full flex items-center justify-center mb-5">
                  <span className="text-white font-medium">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-display text-charcoal-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-charcoal-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </TextReveal>
          ))}
        </div>
      </Section>

      {/* Expertise */}
      <Section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-6">
              Our Expertise
            </h2>
          </TextReveal>
          <TextReveal delay={0.05}>
            <p className="text-charcoal-600 mb-10">
              We work with modern AI tools and integrate them with construction
              industry software.
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-charcoal-50 border border-charcoal-100 rounded-full text-charcoal-700 text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </TextReveal>
        </div>
      </Section>

      {/* CTA */}
      <Section background="orange" className="py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-display text-charcoal-900 mb-8">
              Want to work with us?
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <Button href="/contact" variant="dark" magnetic>
              Get in touch
            </Button>
          </TextReveal>
        </div>
      </Section>
    </>
  );
}
