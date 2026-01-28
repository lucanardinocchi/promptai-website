'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  outcome: string;
}

export default function ServiceCard({ number, title, description, outcome }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      {/* Number */}
      <div className="w-10 h-10 bg-charcoal-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
        <span className="text-white font-mono text-sm">{number}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-display text-charcoal-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-charcoal-600 mb-6 leading-relaxed text-sm md:text-base">
        {description}
      </p>

      {/* Outcome */}
      <div className="pt-5 border-t border-charcoal-100">
        <p className="text-xs text-charcoal-500 uppercase tracking-wider mb-2">Outcome</p>
        <p className="text-charcoal-900 text-sm leading-relaxed">{outcome}</p>
      </div>
    </motion.div>
  );
}
