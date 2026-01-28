'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'AI Platform Setup',
    description: 'We recommend Claude Enterprise as the core AI platform for construction companies. It excels at the tasks that matter most: drafting correspondence, analysing documents, extracting data, generating reports, and reasoning through complex problems.',
    details: [
      'Enterprise-grade access with proper administration',
      'Usage tracking and security controls',
      'Team onboarding and account setup',
    ],
  },
  {
    number: '02',
    title: '1-on-1 Tutoring Sessions',
    description: 'Each team member receives hands-on sessions focused on their actual work. This isn\'t generic training—it\'s practical problem-solving tailored to each person\'s role.',
    details: [
      'Estimators learn to accelerate takeoffs',
      'Project managers streamline reporting',
      'Admins automate correspondence',
      'Sessions scheduled flexibly and billed individually',
    ],
  },
  {
    number: '03',
    title: 'Skills Library',
    description: 'As we work across your team, we document every successful workflow in a shared Skills Library. This becomes your company\'s internal knowledge base for AI.',
    details: [
      'Proven prompts, templates, and processes',
      'Organised by role and task type',
      'New hires get up to speed quickly',
      'Knowledge stays with your company',
    ],
  },
  {
    number: '04',
    title: 'Monthly Reporting & Review',
    description: 'Each month, you receive a detailed AI Usage Report and we present it in a team forum where everyone can ask questions, share experiences, and align on direction.',
    details: [
      'Usage analysis: who\'s using AI, how often, for what',
      'Individual progress and ROI assessment',
      'Skills library updates and most-used resources',
      'Priorities for the coming month',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-charcoal-900 mb-6"
            >
              AI Implementation Program
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-charcoal-600 leading-relaxed"
            >
              A hands-on program that trains your team to use AI on real work, builds a library of proven workflows, and tracks results monthly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><hr className="divider my-0" /></div>

      {/* Steps Detail */}
      {steps.map((step, index) => (
        <section
          key={step.number}
          className={`py-20 md:py-28 ${index % 2 === 1 ? 'bg-charcoal-50/50' : ''}`}
        >
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left column */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="lg:sticky lg:top-32"
                >
                  <span className="text-orange-500 font-mono text-sm mb-4 block">
                    {step.number}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display text-charcoal-900">
                    {step.title}
                  </h2>
                </motion.div>
              </div>

              {/* Right column */}
              <div className="lg:col-span-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="text-lg text-charcoal-600 mb-8 leading-relaxed"
                >
                  {step.description}
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-3"
                >
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2.5 bg-orange-500 rounded-full flex-shrink-0" />
                      <span className="text-charcoal-700">{detail}</span>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Who This Is For */}
      <section className="py-20 md:py-28 bg-charcoal-900">
        <div className="container">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white mb-8"
            >
              Who this is for
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-lg text-charcoal-300 mb-8 leading-relaxed"
            >
              This program is designed for construction companies—general contractors and subcontractors—who want to systematically adopt AI across their operations.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 text-charcoal-300"
            >
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2.5 bg-orange-400 rounded-full flex-shrink-0" />
                <span>Multiple team members who could benefit (estimators, PMs, admin, accounts)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2.5 bg-orange-400 rounded-full flex-shrink-0" />
                <span>Want structured implementation, not just tool access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2.5 bg-orange-400 rounded-full flex-shrink-0" />
                <span>Willing to invest time in training alongside the subscription cost</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2.5 bg-orange-400 rounded-full flex-shrink-0" />
                <span>Value accountability and measurable results</span>
              </li>
            </motion.ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-orange-100 via-orange-50 to-cream">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display text-charcoal-900 mb-6"
            >
              Ready to get started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-charcoal-600 mb-8"
            >
              We&apos;ll schedule a call to understand your team and provide a custom quote.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href="/contact" variant="dark" magnetic>
                Start a conversation
              </Button>
              <Link
                href="/pricing"
                className="link-animated text-charcoal-900 inline-flex items-center gap-2 text-sm py-3"
              >
                View pricing
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
        </div>
      </section>
    </>
  );
}
