'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';

export default function HomePage() {
  return (
    <>
      {/* Opening */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-charcoal-900 mb-8"
            >
              AI tools are everywhere.
              <br />
              <span className="text-charcoal-400">Most construction companies aren&apos;t using them.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-charcoal-600 leading-relaxed"
            >
              We help you change that.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 md:py-32 bg-charcoal-900">
        <div className="container">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-orange-400 text-sm font-medium uppercase tracking-wider mb-8"
            >
              The Problem
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl font-display text-white leading-snug">
                Someone buys a ChatGPT subscription. They play with it for a week. They get inconsistent results. It sits unused.
              </p>
              <p className="text-lg text-charcoal-300 leading-relaxed">
                Or a few people figure it out on their own, but the knowledge stays in their heads. When they leave, it leaves with them.
              </p>
              <p className="text-lg text-charcoal-300 leading-relaxed">
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-8"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-charcoal-900 mb-8"
            >
              We run hands-on AI implementation programs for construction companies.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg text-charcoal-600 leading-relaxed"
            >
              <p>
                We don&apos;t just give you access to tools. We train your team to use them on real work. We build a library of proven workflows. We track results monthly.
              </p>
              <p>
                The goal is simple: make AI a normal part of how your team works, delivering measurable productivity gains without compromising quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-charcoal-50/50">
        <div className="container">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-8"
          >
            How It Works
          </motion.p>

          <div className="max-w-3xl space-y-16 md:space-y-20">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="text-orange-500 font-mono text-sm">01</span>
              <h3 className="text-2xl md:text-3xl font-display text-charcoal-900 mt-3 mb-4">
                AI Platform Setup
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                We set you up with Claude Enterprise—the AI platform built for complex reasoning, document analysis, and professional correspondence. Your team gets enterprise-grade access with proper administration, usage tracking, and security controls.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="text-orange-500 font-mono text-sm">02</span>
              <h3 className="text-2xl md:text-3xl font-display text-charcoal-900 mt-3 mb-4">
                1-on-1 Tutoring Sessions
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Each team member gets hands-on sessions focused on their actual work. This isn&apos;t generic training—it&apos;s practical problem-solving. Estimators learn to accelerate takeoffs. Project managers streamline reporting. Admins automate correspondence. Everyone learns by doing.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="text-orange-500 font-mono text-sm">03</span>
              <h3 className="text-2xl md:text-3xl font-display text-charcoal-900 mt-3 mb-4">
                Skills Library
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Every successful workflow gets documented in a shared knowledge base. Proven prompts, templates, and processes—organised by role and task type. New hires get up to speed quickly. The expertise stays with your company, not in individual heads.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="text-orange-500 font-mono text-sm">04</span>
              <h3 className="text-2xl md:text-3xl font-display text-charcoal-900 mt-3 mb-4">
                Monthly Reporting & Review
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Each month, you get a detailed report: who&apos;s using AI, how often, what&apos;s working, what the ROI looks like. We present it in a team forum where everyone can ask questions, share wins, and align on next steps. This creates accountability and maintains momentum.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-8"
            >
              Pricing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-charcoal-900 mb-12"
            >
              Transparent and flexible.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-10"
            >
              {/* Monthly Retainer */}
              <div>
                <h3 className="text-xl font-display text-charcoal-900 mb-2">Monthly Retainer</h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Covers skills library development, monthly reporting, review forums, and ongoing support. Custom-quoted based on your company size.
                </p>
              </div>

              {/* Tutoring Sessions */}
              <div>
                <h3 className="text-xl font-display text-charcoal-900 mb-2">
                  Tutoring Sessions
                  <span className="ml-3 text-orange-500">$250/session</span>
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Billed separately so you control the pace. Schedule more during intensive rollout, fewer once your team is up to speed.
                </p>
              </div>

              {/* AI Platform */}
              <div>
                <h3 className="text-xl font-display text-charcoal-900 mb-2">
                  AI Platform
                  <span className="ml-3 text-orange-500">~$30–50/seat/month</span>
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Claude Enterprise is billed directly by Anthropic. We help you get set up.
                </p>
              </div>

              {/* Terms */}
              <div className="pt-6 border-t border-charcoal-200">
                <p className="text-charcoal-500 text-sm">
                  Minimum commitment: 3 months. Monthly retainer invoiced at the start of each month; sessions invoiced as completed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 md:py-32 bg-charcoal-900">
        <div className="container">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-white mb-4">Let&apos;s talk.</h2>
              <p className="text-charcoal-400">
                We&apos;ll schedule a call to understand your team and see if this is a fit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8"
            >
              <ContactForm />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mt-8 text-charcoal-500 text-sm"
            >
              Or email{' '}
              <a
                href="mailto:luca@promptaiconsulting.com"
                className="text-orange-400 hover:text-orange-300 transition-colors"
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
