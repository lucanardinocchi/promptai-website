# PromptAI Consulting Website

AI implementation consulting for the construction industry. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
promptai-website/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design system & global styles
│   ├── services/           # Services page
│   ├── case-study/         # CENTINA case study
│   ├── about/              # About page
│   ├── contact/            # Contact form page
│   ├── api/contact/        # Contact form API endpoint
│   ├── ai-for-*/           # 9 AEO (AI Engine Optimization) pages
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.ts           # Robots.txt configuration
├── components/
│   ├── layout/             # Header, Footer, Section
│   ├── ui/                 # Buttons, Cards, etc.
│   └── forms/              # Contact form
└── lib/
    ├── animations.ts       # Framer Motion variants
    └── utils.ts            # Utility functions
```

## Pages

### Main Navigation
- `/` - Homepage
- `/services` - AI implementation services
- `/case-study` - CENTINA case study
- `/about` - Team & company info
- `/contact` - Contact form

### AEO Pages (SEO-optimized, not in nav)
- `/ai-for-estimators`
- `/ai-for-project-managers`
- `/ai-for-operations-managers`
- `/ai-for-contract-administrators`
- `/ai-for-site-supervisors`
- `/ai-for-office-managers`
- `/ai-for-business-owners`
- `/ai-for-residential-builders`
- `/ai-for-contractors`

## Design System

### Colors
- **Primary:** Orange (#F7931E)
- **Text:** Charcoal scale (#1A1A1A - #E5E5E5)

### Typography
- **Display:** Instrument Serif
- **Body:** Satoshi
- **Mono:** JetBrains Mono (stats/numbers)

### Fonts
Fonts are loaded via Google Fonts (Instrument Serif) and Fontshare (Satoshi).

## Contact Form

The contact form submits to `/api/contact`. To enable email notifications:

1. Install a mail service (Resend, SendGrid, etc.)
2. Add API key to environment variables
3. Uncomment the email sending code in `app/api/contact/route.ts`

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy

### Environment Variables
```
# Optional: For email notifications
RESEND_API_KEY=your_api_key
```

## Performance Targets

- Lighthouse Performance: >90
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## License

Private - PromptAI Consulting
