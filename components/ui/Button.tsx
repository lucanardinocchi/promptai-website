'use client';

import Link from 'next/link';
import { ReactNode, useRef, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'orange';
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  magnetic?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  magnetic = false,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!magnetic || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    buttonRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    if (!magnetic || !buttonRef.current) return;
    buttonRef.current.style.transform = 'translate(0, 0)';
  };

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    dark: 'btn-dark',
    orange: 'btn-orange',
  };

  const baseClass = `${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} transition-transform duration-200`;

  if (href) {
    return (
      <Link
        href={href}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        className={baseClass}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span>{children}</span>
    </button>
  );
}
