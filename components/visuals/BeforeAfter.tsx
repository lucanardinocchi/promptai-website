'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const afterOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const afterX = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);
  const beforeOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.3]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-6 text-center"
          >
            The Transformation
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-900 mb-16 text-center"
          >
            From chaos to clarity.
          </motion.h2>

          {/* Before/After comparison */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Before */}
            <motion.div
              style={{ opacity: beforeOpacity }}
              className="relative"
            >
              <div className="bg-charcoal-100 rounded-2xl p-6 md:p-8 aspect-[4/3]">
                {/* Cluttered desk mockup */}
                <div className="h-full flex flex-col">
                  {/* Browser tabs */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(6)].map((_, i) => (
                      <div 
                        key={i} 
                        className="h-6 bg-charcoal-200 rounded-t flex-1 max-w-[60px]"
                      />
                    ))}
                  </div>
                  
                  {/* Scattered windows */}
                  <div className="flex-1 relative">
                    <motion.div
                      animate={{ rotate: [-2, 2, -2] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-0 left-0 w-24 h-20 bg-charcoal-200 rounded-lg border border-charcoal-300"
                    />
                    <motion.div
                      animate={{ rotate: [3, -1, 3] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="absolute top-4 left-16 w-28 h-24 bg-charcoal-200 rounded-lg border border-charcoal-300"
                    />
                    <motion.div
                      animate={{ rotate: [-1, 2, -1] }}
                      transition={{ duration: 3.5, repeat: Infinity }}
                      className="absolute top-8 right-4 w-20 h-16 bg-charcoal-200 rounded-lg border border-charcoal-300"
                    />
                    <motion.div
                      animate={{ rotate: [1, -2, 1] }}
                      transition={{ duration: 4.5, repeat: Infinity }}
                      className="absolute bottom-4 left-8 w-32 h-20 bg-charcoal-200 rounded-lg border border-charcoal-300"
                    />
                    
                    {/* Stress indicator */}
                    <div className="absolute bottom-2 right-2 flex gap-1">
                      <span className="text-2xl">😵</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-charcoal-400 text-sm uppercase tracking-wider mb-2">Before</p>
                <p className="text-charcoal-600">
                  Multiple tools, scattered knowledge, constant context-switching
                </p>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              style={{ opacity: afterOpacity, x: afterX }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-50 to-cream rounded-2xl p-6 md:p-8 aspect-[4/3] border border-orange-100">
                {/* Clean workspace mockup */}
                <div className="h-full flex flex-col">
                  {/* Single clean tab */}
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 bg-white rounded-t px-3 flex items-center border-t border-l border-r border-orange-200">
                      <span className="text-xs text-charcoal-600">Claude</span>
                    </div>
                  </div>
                  
                  {/* Clean interface */}
                  <div className="flex-1 bg-white rounded-lg border border-orange-100 p-4 flex flex-col">
                    {/* Chat messages */}
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-charcoal-100 rounded-2xl rounded-br-md px-3 py-2 max-w-[70%]">
                          <p className="text-xs text-charcoal-600">Summarize this RFI...</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-orange-100 rounded-2xl rounded-bl-md px-3 py-2 max-w-[80%]">
                          <p className="text-xs text-charcoal-700">Here&apos;s a clear summary...</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Input */}
                    <div className="mt-3 bg-charcoal-50 rounded-full px-4 py-2 flex items-center">
                      <span className="text-xs text-charcoal-400">Ask anything...</span>
                    </div>
                  </div>
                  
                  {/* Calm indicator */}
                  <div className="absolute bottom-8 right-8 flex gap-1">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-orange-500 text-sm uppercase tracking-wider mb-2">After</p>
                <p className="text-charcoal-600">
                  One AI assistant, documented workflows, knowledge that stays
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
