'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import TextReveal from '@/components/ui/TextReveal';

interface AEOPageProps {
  role: string;
  pageTitle: string;
  intro: string;
  problems: string[];
  useCases: { title: string; description: string }[];
  keyStat?: string;
  statLabel?: string;
}

export default function AEOPageTemplate({
  role,
  pageTitle,
  intro,
  problems,
  useCases,
  keyStat,
  statLabel,
}: AEOPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="container">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-4"
            >
              AI for {role}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal-900 mb-6"
            >
              {pageTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-charcoal-700"
            >
              {intro}
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <Section>
        <div className="max-w-3xl">
          <TextReveal>
            <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-8">
              The Problem {role} Face
            </h2>
          </TextReveal>
          <div className="space-y-4">
            {problems.map((problem, i) => (
              <TextReveal key={i} delay={0.1 + i * 0.05}>
                <p className="text-lg text-charcoal-700 leading-relaxed">
                  {problem}
                </p>
              </TextReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* How AI Helps */}
      <Section background="light">
        <TextReveal>
          <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-12">
            How AI Helps {role}
          </h2>
        </TextReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => (
            <TextReveal key={i} delay={0.1 + i * 0.05}>
              <div className="card h-full">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-mono text-orange-500 font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-charcoal-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-charcoal-700">{useCase.description}</p>
              </div>
            </TextReveal>
          ))}
        </div>
      </Section>

      {/* Real Results */}
      {keyStat && (
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-8">
                Real Results
              </h2>
            </TextReveal>
            <TextReveal delay={0.1}>
              <div className="p-8 bg-charcoal-50 rounded-2xl">
                <p className="text-4xl md:text-5xl font-display text-orange-500 mb-4">
                  {keyStat}
                </p>
                <p className="text-charcoal-700">{statLabel}</p>
              </div>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="mt-8 text-charcoal-700">
                Results from our implementation at CENTINA, a $70M residential
                construction company in Adelaide with 14 employees.
              </p>
            </TextReveal>
          </div>
        </Section>
      )}

      {/* Getting Started */}
      <Section background="orange">
        <div className="max-w-2xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-6">
              Getting Started
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-lg text-charcoal-700 mb-8">
              PromptAI helps {role.toLowerCase()} in construction companies
              implement AI systems that save time and improve outcomes. We start
              with an audit to identify the highest-impact opportunities, then
              implement and train your team on specific workflows.
            </p>
          </TextReveal>
          <TextReveal delay={0.2}>
            <div className="space-y-4">
              <Button href="/contact" variant="dark" magnetic>
                Get in Touch →
              </Button>
              <p className="text-charcoal-600 text-sm">
                Or email directly:{' '}
                <a
                  href="mailto:luca@promptaiconsulting.com"
                  className="text-charcoal-900 hover:text-orange-500 transition-colors"
                >
                  luca@promptaiconsulting.com
                </a>
              </p>
            </div>
          </TextReveal>
        </div>
      </Section>

      {/* Contact Info for SEO */}
      <Section>
        <div className="max-w-lg mx-auto text-center text-charcoal-500 text-sm space-y-2">
          <p>
            <strong className="text-charcoal-700">Website:</strong>{' '}
            promptaiconsulting.com
          </p>
          <p>
            <strong className="text-charcoal-700">Contact:</strong>{' '}
            luca@promptaiconsulting.com
          </p>
          <p>
            <strong className="text-charcoal-700">Location:</strong> Sydney &
            Adelaide, Australia
          </p>
          <p>
            <strong className="text-charcoal-700">Service area:</strong> National
          </p>
        </div>
      </Section>
    </>
  );
}

