'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: 'bg-charcoal-900 text-white hover:bg-charcoal-800',
    secondary: 'bg-transparent text-charcoal-900 border-2 border-charcoal-200 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-white',
    dark: 'bg-charcoal-900 text-white hover:bg-charcoal-800',
  };

  const buttonClasses = `
    inline-flex items-center justify-center gap-2
    px-8 py-4 rounded-full
    font-medium text-sm
    transition-all duration-300
    ${variants[variant]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className="relative"
    >
      <motion.span
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span
          className="relative z-10 flex items-center gap-2"
          animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
          transition={{ type: 'spring', stiffness: 350, damping: 15 }}
        >
          {children}
        </motion.span>
      </motion.span>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
