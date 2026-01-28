'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import StatCard from '@/components/ui/StatCard';
import TextReveal from '@/components/ui/TextReveal';

const challenges = [
  'Operations manager spending 15+ hours weekly on reporting',
  'Estimators losing 3+ hours daily to manual data entry',
  'Project managers searching through documents for basic information',
  'Contract administrators preparing for negotiations manually',
];

const solutions = [
  {
    role: 'Operations',
    description:
      'Automated report generation using AI to pull data, format outputs, and generate narrative summaries.',
  },
  {
    role: 'Estimating',
    description:
      'AI-assisted data extraction and entry, reducing manual transcription and eliminating repetitive work.',
  },
  {
    role: 'Project Management',
    description:
      'Intelligent document search and summarisation for instant information retrieval.',
  },
  {
    role: 'Contract Administration',
    description:
      'AI-powered preparation tools for negotiation strategy and documentation review.',
  },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="eyebrow mb-6 block"
            >
              Case Study
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-charcoal-900 mb-6"
            >
              How CENTINA cut 65+ hours of weekly admin work.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-charcoal-600 leading-relaxed"
            >
              A $70M Adelaide construction company transformed their
              operations with AI. Here&apos;s exactly what happened.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="pb-16 md:pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl"
          >
            {[
              { label: 'Revenue', value: '$70M' },
              { label: 'Team Size', value: '14' },
              { label: 'Location', value: 'Adelaide' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 md:p-6 bg-charcoal-50 rounded-xl text-center"
              >
                <p className="text-2xl md:text-3xl font-display text-charcoal-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-charcoal-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><hr className="divider my-0" /></div>

      {/* The Challenge */}
      <Section className="py-20 md:py-28">
        <div className="max-w-3xl">
          <TextReveal>
            <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-8">
              The Challenge
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-lg text-charcoal-600 mb-10 leading-relaxed">
              Like most construction companies, CENTINA&apos;s team was buried in
              administrative work that consumed enormous amounts of time:
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <ul className="space-y-4">
              {challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 mt-0.5 bg-charcoal-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-charcoal-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span className="text-charcoal-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </TextReveal>
        </div>
      </Section>

      {/* The Solution */}
      <Section background="light" className="py-20 md:py-28">
        <div className="max-w-3xl">
          <TextReveal>
            <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-8">
              The Solution
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-lg text-charcoal-600 mb-12 leading-relaxed">
              We implemented AI systems across four key roles, focusing on the
              highest-impact workflows:
            </p>
          </TextReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((solution, i) => (
              <TextReveal key={i} delay={0.15 + i * 0.05}>
                <div className="bg-white rounded-xl p-6 border border-charcoal-100">
                  <h3 className="text-orange-500 font-medium text-sm mb-3">
                    {solution.role}
                  </h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">{solution.description}</p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* The Results */}
      <Section className="py-20 md:py-28">
        <TextReveal>
          <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-12">
            The Results
          </h2>
        </TextReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StatCard
            before="15hrs"
            after="2hrs"
            label="Weekly reporting"
            reduction="87"
            role="Operations Manager"
          />
          <StatCard
            before="3hrs"
            after="20min"
            label="Daily data entry"
            reduction="89"
            role="Estimator"
          />
          <StatCard
            before="30min"
            after="3min"
            label="Per document lookup"
            reduction="90"
            role="Project Manager"
          />
        </div>

        <TextReveal delay={0.2}>
          <div className="max-w-lg mx-auto text-center p-8 md:p-10 bg-charcoal-900 rounded-2xl">
            <p className="text-3xl md:text-4xl font-display text-white mb-3">
              65+ hours
            </p>
            <p className="text-charcoal-400">
              of productive time recovered every single week
            </p>
          </div>
        </TextReveal>
      </Section>

      {/* Testimonials */}
      <Section background="light" className="py-20 md:py-28">
        <TextReveal>
          <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-10">
            What They Said
          </h2>
        </TextReveal>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <TextReveal delay={0.1}>
            <div className="bg-white rounded-xl p-6 md:p-8 border border-charcoal-100">
              <svg
                className="w-6 h-6 text-orange-400 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-charcoal-700 mb-5 leading-relaxed">
                &ldquo;The AI systems have completely transformed how I approach
                weekly reporting. What used to take most of Monday is now done
                before my first coffee.&rdquo;
              </p>
              <p className="text-charcoal-500 text-sm">— Operations Team</p>
            </div>
          </TextReveal>
          <TextReveal delay={0.15}>
            <div className="bg-white rounded-xl p-6 md:p-8 border border-charcoal-100">
              <svg
                className="w-6 h-6 text-orange-400 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-charcoal-700 mb-5 leading-relaxed">
                &ldquo;Finding project documents used to be a nightmare. Now I can
                locate anything in seconds. It&apos;s changed my entire workflow.&rdquo;
              </p>
              <p className="text-charcoal-500 text-sm">— Project Management Team</p>
            </div>
          </TextReveal>
        </div>
      </Section>

      {/* CTA */}
      <Section background="orange" className="py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-display text-charcoal-900 mb-6">
              Want results like this?
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-charcoal-700 mb-10">
              Let&apos;s talk about what&apos;s possible for your team.
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <Button href="/contact" variant="dark" magnetic>
              Get in touch
            </Button>
          </TextReveal>
        </div>
      </Section>
    </>
  );
}
