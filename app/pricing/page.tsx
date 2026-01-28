'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function PricingPage() {
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
              Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-charcoal-600 leading-relaxed"
            >
              Transparent pricing. You control the pace and investment.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><hr className="divider my-0" /></div>

      {/* Pricing Sections */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl space-y-20">
            
            {/* Monthly Retainer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-4">
                Monthly Retainer
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Covers skills library development and maintenance, monthly reporting, review forums, and ongoing support between sessions.
              </p>
              <div className="p-6 bg-charcoal-50 rounded-xl border border-charcoal-100">
                <p className="text-charcoal-900">
                  <span className="font-medium">Custom-quoted</span> based on your company size and scope of engagement.
                </p>
              </div>
            </motion.div>

            {/* Tutoring Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-4">
                Tutoring Sessions
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                1-on-1 sessions solving real tasks, tailored to each team member&apos;s role. Session length varies based on the complexity of tasks being addressed.
              </p>
              <div className="p-6 bg-charcoal-50 rounded-xl border border-charcoal-100">
                <p className="text-charcoal-900">
                  <span className="text-3xl font-display">$250</span>
                  <span className="text-charcoal-500 ml-2">per session</span>
                </p>
                <p className="text-sm text-charcoal-500 mt-3">
                  Schedule more during intensive rollout, fewer once your team is up to speed.
                </p>
              </div>
            </motion.div>

            {/* AI Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-display text-charcoal-900 mb-4">
                AI Platform
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Claude Enterprise is billed directly by Anthropic. We help you get set up with proper administration, usage tracking, and security controls.
              </p>
              <div className="p-6 bg-charcoal-50 rounded-xl border border-charcoal-100">
                <p className="text-charcoal-900 mb-2">
                  <span className="font-medium">~$30–50 per seat/month</span>
                </p>
                <p className="text-sm text-charcoal-500">
                  $10/seat base + usage costs (typically $20–40/seat depending on usage)
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Engagement Terms */}
      <section className="py-20 md:py-28 bg-charcoal-50/50">
        <div className="container">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display text-charcoal-900 mb-8"
            >
              Engagement Terms
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="space-y-4 text-charcoal-600"
            >
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2.5 bg-orange-500 rounded-full flex-shrink-0" />
                <span><strong className="text-charcoal-900">Minimum commitment:</strong> 3 months</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2.5 bg-orange-500 rounded-full flex-shrink-0" />
                <span><strong className="text-charcoal-900">Billing:</strong> Monthly retainer invoiced at the start of each month; sessions invoiced as completed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2.5 bg-orange-500 rounded-full flex-shrink-0" />
                <span><strong className="text-charcoal-900">AI platform:</strong> Billed separately by Anthropic (annual commitment required)</span>
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
              Get a custom quote
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-charcoal-600 mb-10"
            >
              We&apos;ll discuss your team structure and provide a detailed proposal.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Button href="/contact" variant="dark" magnetic>
                Start a conversation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
