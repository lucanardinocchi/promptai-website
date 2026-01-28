'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView, motion } from 'framer-motion';

interface StatCardProps {
  before: string;
  after: string;
  label: string;
  reduction: string;
  role: string;
}

function useCountUp(end: number, duration: number = 1200, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return count;
}

export default function StatCard({ before, after, label, reduction, role }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  
  const reductionNumber = parseInt(reduction.replace(/[^0-9]/g, '')) || 0;
  const animatedReduction = useCountUp(reductionNumber, 1000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl p-6 md:p-8 border border-charcoal-100 hover:border-charcoal-200 transition-all duration-300 hover:shadow-lg"
    >
      {/* Role label */}
      <p className="text-xs text-charcoal-500 mb-4 font-medium uppercase tracking-wider">
        {role}
      </p>
      
      {/* Before → After */}
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-xl md:text-2xl font-display text-charcoal-300 line-through decoration-1">
          {before}
        </span>
        <svg
          className="w-4 h-4 text-charcoal-300 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        <span className="text-2xl md:text-3xl font-display text-charcoal-900">
          {after}
        </span>
      </div>

      {/* Label */}
      <p className="text-charcoal-600 text-sm mb-6">{label}</p>

      {/* Reduction indicator */}
      <div className="flex items-center justify-between pt-4 border-t border-charcoal-100">
        <span className="text-2xl font-display text-orange-500">
          {isInView ? animatedReduction : 0}%
        </span>
        <span className="text-xs text-charcoal-400 uppercase tracking-wider">
          reduction
        </span>
      </div>
    </motion.div>
  );
}
