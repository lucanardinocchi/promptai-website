'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Role {
  id: string;
  title: string;
  tasks: string[];
  children?: Role[];
}

const gcStructure: Role = {
  id: 'director',
  title: 'Director',
  tasks: ['Strategic reports', 'Bid analysis', 'Client proposals', 'Board presentations'],
  children: [
    {
      id: 'ops',
      title: 'Operations Manager',
      tasks: ['Progress reports', 'Subcontractor coordination', 'Scheduling updates', 'Resource planning'],
      children: [
        {
          id: 'pm',
          title: 'Project Manager',
          tasks: ['RFIs & submittals', 'Daily logs', 'Meeting minutes', 'Progress claims'],
        },
        {
          id: 'supervisor',
          title: 'Site Supervisor',
          tasks: ['Toolbox talks', 'Safety reports', 'Defect lists', 'Photo documentation'],
        },
      ],
    },
    {
      id: 'estimator',
      title: 'Estimator',
      tasks: ['Takeoff summaries', 'Scope analysis', 'Quote comparisons', 'Cost breakdowns'],
    },
    {
      id: 'contracts',
      title: 'Contracts Admin',
      tasks: ['Variation letters', 'EOT claims', 'Contract reviews', 'Compliance tracking'],
    },
    {
      id: 'admin',
      title: 'Office Admin',
      tasks: ['Correspondence', 'Data entry', 'Document formatting', 'Invoice processing'],
    },
  ],
};

const subStructure: Role = {
  id: 'director',
  title: 'Director',
  tasks: ['Quote responses', 'Scope clarifications', 'Tender analysis', 'Client communication'],
  children: [
    {
      id: 'pm',
      title: 'Project Manager',
      tasks: ['Daily reports', 'Defect responses', 'Variation requests', 'Progress updates'],
      children: [
        {
          id: 'foreman',
          title: 'Foreman',
          tasks: ['Toolbox talks', 'Safety docs', 'Progress photos', 'Labour tracking'],
        },
      ],
    },
    {
      id: 'admin',
      title: 'Office Admin',
      tasks: ['Invoice processing', 'Timesheet summaries', 'Compliance docs', 'Correspondence'],
    },
  ],
};

function RoleNode({ 
  role, 
  level = 0, 
  hoveredRole, 
  setHoveredRole,
  isLast = false,
  parentHasMore = false,
}: { 
  role: Role; 
  level?: number;
  hoveredRole: string | null;
  setHoveredRole: (id: string | null) => void;
  isLast?: boolean;
  parentHasMore?: boolean;
}) {
  const isHovered = hoveredRole === role.id;
  const hasChildren = role.children && role.children.length > 0;

  return (
    <div className="relative">
      {/* Horizontal connector line */}
      {level > 0 && (
        <div className="absolute -left-6 top-5 w-6 h-px bg-charcoal-200" />
      )}
      
      {/* Vertical connector line */}
      {level > 0 && !isLast && (
        <div className="absolute -left-6 top-5 w-px h-full bg-charcoal-200" />
      )}

      {/* Role card */}
      <motion.div
        onMouseEnter={() => setHoveredRole(role.id)}
        onMouseLeave={() => setHoveredRole(null)}
        className={`relative mb-4 cursor-pointer transition-all duration-300 ${
          isHovered ? 'z-10' : 'z-0'
        }`}
      >
        <motion.div
          className={`relative px-5 py-3 rounded-xl border transition-all duration-300 ${
            isHovered 
              ? 'bg-charcoal-900 border-charcoal-900 shadow-xl' 
              : 'bg-white border-charcoal-200 hover:border-charcoal-300'
          }`}
          layout
        >
          <p className={`font-medium text-sm transition-colors duration-300 ${
            isHovered ? 'text-white' : 'text-charcoal-900'
          }`}>
            {role.title}
          </p>
          
          {/* Tasks tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full mt-2 w-64 bg-charcoal-900 rounded-xl p-4 shadow-2xl"
              >
                <p className="text-orange-400 text-xs uppercase tracking-wider mb-3">
                  AI-assisted tasks
                </p>
                <ul className="space-y-2">
                  {role.tasks.map((task, i) => (
                    <motion.li
                      key={task}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-2 text-sm text-charcoal-300"
                    >
                      <span className="w-1 h-1 bg-orange-400 rounded-full flex-shrink-0" />
                      {task}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Children */}
      {hasChildren && (
        <div className="ml-6 pl-6 border-l border-charcoal-200">
          {role.children!.map((child, index) => (
            <RoleNode
              key={child.id}
              role={child}
              level={level + 1}
              hoveredRole={hoveredRole}
              setHoveredRole={setHoveredRole}
              isLast={index === role.children!.length - 1}
              parentHasMore={index < role.children!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function OrgChart() {
  const [activeType, setActiveType] = useState<'gc' | 'sub'>('gc');
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  
  const structure = activeType === 'gc' ? gcStructure : subStructure;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-24"
    >
      {/* Toggle */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex bg-charcoal-100 rounded-full p-1.5">
          <button
            onClick={() => setActiveType('gc')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeType === 'gc'
                ? 'bg-white text-charcoal-900 shadow-sm'
                : 'text-charcoal-500 hover:text-charcoal-700'
            }`}
          >
            General Contractor
          </button>
          <button
            onClick={() => setActiveType('sub')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeType === 'sub'
                ? 'bg-white text-charcoal-900 shadow-sm'
                : 'text-charcoal-500 hover:text-charcoal-700'
            }`}
          >
            Subcontractor
          </button>
        </div>
      </div>

      {/* Tree */}
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <RoleNode
              role={structure}
              hoveredRole={hoveredRole}
              setHoveredRole={setHoveredRole}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Instruction */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-charcoal-400 text-sm mt-12"
      >
        Hover over a role to see tasks we automate
      </motion.p>
    </motion.div>
  );
}
