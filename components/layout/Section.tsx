'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'orange';
  id?: string;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  id,
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const bgClasses = {
    white: 'bg-cream',
    light: 'bg-orange-50/50',
    dark: 'bg-charcoal-900',
    orange: 'bg-gradient-to-br from-orange-100 via-orange-50 to-cream',
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`${bgClasses[background]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="container"
      >
        {children}
      </motion.div>
    </section>
  );
}
