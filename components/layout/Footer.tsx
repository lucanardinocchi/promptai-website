import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white py-16 md:py-20">
      <div className="container">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12 border-b border-charcoal-800">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">P</span>
              </div>
              <span className="font-display text-lg text-white">PromptAI</span>
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-xs">
              AI implementation for construction companies. Built by builders, for builders.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-wider text-charcoal-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/services', label: 'Services' },
                { href: '/case-study', label: 'Case Study' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-charcoal-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-wider text-charcoal-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:luca@promptaiconsulting.com"
                  className="text-charcoal-300 hover:text-white transition-colors text-sm"
                >
                  luca@promptaiconsulting.com
                </a>
              </li>
              <li className="text-charcoal-400 text-sm">
                Sydney & Adelaide, Australia
              </li>
              <li className="pt-2">
                <a
                  href="https://www.linkedin.com/company/promptai-consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-charcoal-400 hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-sm">
            © {new Date().getFullYear()} PromptAI Consulting
          </p>
          <p className="text-charcoal-600 text-xs">
            ABN available on request
          </p>
        </div>
      </div>
    </footer>
  );
}
