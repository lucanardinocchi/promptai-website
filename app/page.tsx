'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const steps = [
  {
    number: '01',
    title: 'AI Platform Setup',
    description: 'We set you up with Claude Enterprise—the AI platform built for complex reasoning, document analysis, and professional correspondence.',
  },
  {
    number: '02',
    title: '1-on-1 Tutoring Sessions',
    description: 'Each team member gets hands-on sessions solving their actual work tasks with AI. Estimators, PMs, admins—everyone learns by doing.',
  },
  {
    number: '03',
    title: 'Skills Library',
    description: 'Every successful workflow gets documented in your company\'s shared knowledge base. The expertise stays with your business, not in individual heads.',
  },
  {
    number: '04',
    title: 'Monthly Reporting & Review',
    description: 'You get a detailed report on usage, ROI, and progress—plus a team forum to align on priorities and maintain momentum.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-charcoal-900 mb-8"
            >
              AI implementation
              <br />
              <span className="text-orange-500">for construction.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-charcoal-600 mb-12 max-w-xl leading-relaxed"
            >
              We train your team to use AI on real work, build a library of proven workflows, and track results monthly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button href="/contact" variant="primary" magnetic>
                Start a conversation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 md:py-32 bg-charcoal-900">
        <div className="container">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-400 text-sm font-medium uppercase tracking-wider mb-6"
            >
              The Problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-white mb-8"
            >
              AI tools are everywhere. Most companies aren&apos;t using them well.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg text-charcoal-300 leading-relaxed"
            >
              <p>
                Someone buys a subscription, plays with it for a week, gets inconsistent results, and it sits unused. Or a few people figure it out on their own, but the knowledge stays in their heads.
              </p>
              <p>
                The problem isn&apos;t the technology. It&apos;s implementation. Without structured training, ongoing support, and accountability, AI adoption doesn&apos;t stick.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-6"
            >
              The Solution
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-charcoal-900 mb-8"
            >
              Hands-on AI implementation that actually sticks.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-charcoal-600 leading-relaxed"
            >
              We don&apos;t just give you access to tools—we train your team to use them on real work, build a library of proven workflows, and track results monthly. The goal is simple: make AI a normal part of how your team works, delivering measurable productivity gains without compromising quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-charcoal-50/50">
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-6"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-charcoal-900 mb-16 max-w-xl"
          >
            Four steps to AI-enabled operations.
          </motion.h2>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid md:grid-cols-12 gap-6 md:gap-12 items-start"
              >
                <div className="md:col-span-1">
                  <span className="text-orange-500 font-mono text-sm">{step.number}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl md:text-2xl font-display text-charcoal-900">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16"
          >
            <Link
              href="/services"
              className="link-animated text-charcoal-900 inline-flex items-center gap-2 text-sm"
            >
              Learn more about our process
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-orange-100 via-orange-50 to-cream">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-charcoal-900 mb-6"
            >
              Ready to get started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-lg text-charcoal-600 mb-10"
            >
              We&apos;ll schedule a call to understand your team and provide a custom quote.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <Button href="/contact" variant="dark" magnetic>
                Start a conversation
              </Button>
              <p className="text-charcoal-500 text-sm">
                Or email{' '}
                <a
                  href="mailto:luca@promptaiconsulting.com"
                  className="text-charcoal-700 hover:text-orange-600 transition-colors underline underline-offset-2"
                >
                  luca@promptaiconsulting.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
