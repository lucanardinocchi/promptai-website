'use client';

import { motion } from 'framer-motion';

interface TimelineIconProps {
  type: 'platform' | 'training' | 'playbook' | 'review';
  delay?: number;
}

const iconVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { duration: 1, ease: "easeInOut" as const },
      opacity: { duration: 0.3 }
    }
  }
};

export default function TimelineIcon({ type, delay = 0 }: TimelineIconProps) {
  const getIcon = () => {
    switch (type) {
      case 'platform':
        // Cloud/server icon
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <motion.path
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay }}
            />
          </svg>
        );
      case 'training':
        // Two people icon
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <motion.path
              d="M17 20c0-1.657-2.239-3-5-3s-5 1.343-5 3"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay }}
            />
            <motion.circle
              cx="12"
              cy="10"
              r="3"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: delay + 0.2 }}
            />
            <motion.path
              d="M21 17c0-1.105-1.343-2-3-2-.768 0-1.47.168-2 .453"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: delay + 0.4 }}
            />
            <motion.circle
              cx="18"
              cy="9"
              r="2"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 }}
            />
          </svg>
        );
      case 'playbook':
        // Book/document icon
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <motion.path
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay }}
            />
          </svg>
        );
      case 'review':
        // Chart/calendar icon
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <motion.path
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay }}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-full flex items-center justify-center text-white"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        delay,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {getIcon()}
    </motion.div>
  );
}
