'use client';

import { motion } from 'framer-motion';

export default function ProblemVisual() {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 my-16">
      {/* Abandoned Subscription */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="bg-charcoal-100/50 rounded-2xl p-6 md:p-8 aspect-[4/3] flex flex-col">
          {/* Chat interface mockup */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-charcoal-300" />
            <div className="w-3 h-3 rounded-full bg-charcoal-300" />
            <div className="w-3 h-3 rounded-full bg-charcoal-300" />
          </div>
          
          <div className="flex-1 flex flex-col justify-center gap-3">
            {/* User message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="self-end bg-charcoal-200 rounded-2xl rounded-br-md px-4 py-2 max-w-[70%]"
            >
              <p className="text-charcoal-500 text-sm">Help me write a...</p>
            </motion.div>
            
            {/* AI typing then fading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: [0, 1, 1, 0.3] }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 2, times: [0, 0.2, 0.7, 1] }}
              className="self-start bg-charcoal-300/50 rounded-2xl rounded-bl-md px-4 py-2 max-w-[70%]"
            >
              <motion.div 
                className="flex gap-1"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: 2 }}
              >
                <span className="w-2 h-2 bg-charcoal-400 rounded-full" />
                <span className="w-2 h-2 bg-charcoal-400 rounded-full" />
                <span className="w-2 h-2 bg-charcoal-400 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Dust/abandoned effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p className="text-charcoal-400 text-lg font-display italic">unused</p>
            </motion.div>
          </div>
        </div>
        <p className="text-charcoal-500 text-sm mt-4 text-center">The subscription that sits idle</p>
      </motion.div>

      {/* Knowledge Walks Out */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="bg-charcoal-100/50 rounded-2xl p-6 md:p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
          {/* Person silhouette walking away */}
          <div className="relative w-full h-full">
            {/* Door frame */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-32 border-2 border-charcoal-300 rounded-t-lg" />
            
            {/* Person walking out */}
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
              className="absolute right-20 top-1/2 -translate-y-1/2"
            >
              {/* Simple person icon */}
              <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="text-charcoal-400">
                <circle cx="20" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 18 L20 38 M20 24 L8 32 M20 24 L32 32 M20 38 L10 55 M20 38 L30 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              
              {/* Knowledge dots following */}
              <motion.div
                initial={{ opacity: 1, x: -20 }}
                whileInView={{ opacity: 0, x: 60 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.8 }}
                className="absolute -left-8 top-4 flex gap-2"
              >
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
              </motion.div>
            </motion.div>
            
            {/* Remaining team (faded) */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 flex gap-4 opacity-30">
              <svg width="30" height="45" viewBox="0 0 40 60" fill="none" className="text-charcoal-400">
                <circle cx="20" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 18 L20 38 M20 24 L8 32 M20 24 L32 32 M20 38 L10 55 M20 38 L30 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg width="30" height="45" viewBox="0 0 40 60" fill="none" className="text-charcoal-400">
                <circle cx="20" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 18 L20 38 M20 24 L8 32 M20 24 L32 32 M20 38 L10 55 M20 38 L30 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="text-charcoal-500 text-sm mt-4 text-center">The knowledge that walks out the door</p>
      </motion.div>
    </div>
  );
}
