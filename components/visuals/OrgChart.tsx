'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Role {
  title: string;
  tasks: string[];
}

const gcRoles: Role[] = [
  {
    title: 'Director / Owner',
    tasks: ['Strategic reports', 'Bid analysis', 'Client proposals'],
  },
  {
    title: 'Operations Manager',
    tasks: ['Progress reports', 'Subcontractor coordination', 'Scheduling updates'],
  },
  {
    title: 'Project Manager',
    tasks: ['RFIs & submittals', 'Daily logs', 'Meeting minutes'],
  },
  {
    title: 'Estimator',
    tasks: ['Takeoff summaries', 'Scope analysis', 'Quote comparisons'],
  },
  {
    title: 'Contract Administrator',
    tasks: ['Variation letters', 'EOT claims', 'Contract reviews'],
  },
  {
    title: 'Office Admin',
    tasks: ['Correspondence', 'Data entry', 'Document formatting'],
  },
];

const subRoles: Role[] = [
  {
    title: 'Director / Owner',
    tasks: ['Quote responses', 'Scope clarifications', 'Tender summaries'],
  },
  {
    title: 'Project Manager',
    tasks: ['Daily reports', 'Defect responses', 'Variation requests'],
  },
  {
    title: 'Foreman / Supervisor',
    tasks: ['Toolbox talks', 'Safety documentation', 'Progress photo captions'],
  },
  {
    title: 'Office Admin',
    tasks: ['Invoice processing', 'Timesheet summaries', 'Compliance docs'],
  },
];

export default function OrgChart() {
  const [activeType, setActiveType] = useState<'gc' | 'sub'>('gc');
  const [expandedRole, setExpandedRole] = useState<number | null>(null);
  
  const roles = activeType === 'gc' ? gcRoles : subRoles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-20"
    >
      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-charcoal-100 rounded-full p-1">
          <button
            onClick={() => setActiveType('gc')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeType === 'gc'
                ? 'bg-charcoal-900 text-white shadow-md'
                : 'text-charcoal-600 hover:text-charcoal-900'
            }`}
          >
            General Contractor
          </button>
          <button
            onClick={() => setActiveType('sub')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeType === 'sub'
                ? 'bg-charcoal-900 text-white shadow-md'
                : 'text-charcoal-600 hover:text-charcoal-900'
            }`}
          >
            Subcontractor
          </button>
        </div>
      </div>

      {/* Org Chart */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group"
              >
                <div
                  onClick={() => setExpandedRole(expandedRole === index ? null : index)}
                  className={`bg-white border rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                    expandedRole === index 
                      ? 'border-orange-300 shadow-lg shadow-orange-500/10' 
                      : 'border-charcoal-100 hover:border-charcoal-200 hover:shadow-md'
                  }`}
                >
                  {/* Role header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        expandedRole === index ? 'bg-orange-500' : 'bg-charcoal-100 group-hover:bg-charcoal-200'
                      }`}>
                        <svg 
                          className={`w-5 h-5 transition-colors duration-300 ${
                            expandedRole === index ? 'text-white' : 'text-charcoal-500'
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-charcoal-900 text-sm">
                        {role.title}
                      </h4>
                    </div>
                    <motion.svg
                      animate={{ rotate: expandedRole === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5 text-charcoal-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>

                  {/* Tasks (expandable) */}
                  <AnimatePresence>
                    {expandedRole === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-charcoal-100">
                          <p className="text-xs text-charcoal-500 uppercase tracking-wider mb-3">
                            AI-assisted tasks
                          </p>
                          <ul className="space-y-2">
                            {role.tasks.map((task, i) => (
                              <motion.li
                                key={task}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-2 text-sm text-charcoal-600"
                              >
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                                {task}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mobile: always show tasks */}
                  <div className="md:hidden pt-4 mt-4 border-t border-charcoal-100">
                    <ul className="space-y-2">
                      {role.tasks.map((task) => (
                        <li
                          key={task}
                          className="flex items-center gap-2 text-sm text-charcoal-600"
                        >
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-charcoal-500 text-sm mt-8"
      >
        Click a role to see tasks we help automate
      </motion.p>
    </motion.div>
  );
}
