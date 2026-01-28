export default function Footer() {
  return (
    <footer className="bg-charcoal-950 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-charcoal-500">
            © {new Date().getFullYear()} PromptAI Consulting
          </p>
          <a
            href="mailto:luca@promptaiconsulting.com"
            className="text-charcoal-400 hover:text-white transition-colors"
          >
            luca@promptaiconsulting.com
          </a>
        </div>
      </div>
    </footer>
  );
}
