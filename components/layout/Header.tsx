'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-xl border-b border-charcoal-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center group">
            <Image
              src="/prompt-ai-logo.png"
              alt="PromptAI Consulting"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto transition-opacity duration-200 group-hover:opacity-80"
              priority
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
