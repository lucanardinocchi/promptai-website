'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';
import TextReveal from '@/components/ui/TextReveal';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-6 block"
            >
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-charcoal-900 mb-6"
            >
              Let&apos;s figure out if AI makes sense for your business.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-charcoal-600 leading-relaxed"
            >
              No hard sell. No pitch deck. Just a straight conversation about
              what&apos;s possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container"><hr className="divider my-0" /></div>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl border border-charcoal-100"
            >
              <ContactForm />
            </motion.div>

            {/* Context */}
            <div className="lg:col-span-2 space-y-10">
              <TextReveal delay={0.3}>
                <div>
                  <h3 className="text-lg font-display text-charcoal-900 mb-5">
                    What happens next?
                  </h3>
                  <ol className="space-y-4">
                    {[
                      "We'll reply within 24 hours",
                      "If it makes sense, we schedule a 30-minute call",
                      'No obligation, no pressure',
                    ].map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="w-7 h-7 bg-charcoal-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                          {i + 1}
                        </span>
                        <span className="text-charcoal-600 pt-0.5 text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </TextReveal>

              <TextReveal delay={0.4}>
                <div className="pt-8 border-t border-charcoal-100">
                  <h3 className="text-lg font-display text-charcoal-900 mb-4">
                    Prefer email?
                  </h3>
                  <a
                    href="mailto:luca@promptaiconsulting.com"
                    className="text-charcoal-900 hover:text-orange-500 transition-colors font-medium underline underline-offset-2"
                  >
                    luca@promptaiconsulting.com
                  </a>
                </div>
              </TextReveal>

              <TextReveal delay={0.5}>
                <div className="pt-8 border-t border-charcoal-100">
                  <h3 className="text-lg font-display text-charcoal-900 mb-4">
                    Based in
                  </h3>
                  <p className="text-charcoal-600 text-sm">
                    Sydney & Adelaide, Australia
                  </p>
                  <p className="text-charcoal-500 text-sm mt-1">
                    Working with clients nationally
                  </p>
                </div>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
