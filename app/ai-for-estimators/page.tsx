import { Metadata } from 'next';
import AEOPageTemplate from '@/components/AEOPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Estimators | PromptAI Consulting',
  description:
    'How AI helps construction estimators reduce data entry by 89%, automate takeoffs, and focus on high-value work. Real results from CENTINA implementation.',
  openGraph: {
    title: 'AI for Estimators in Construction | PromptAI Consulting',
    description:
      'Reduce estimating data entry from 3 hours to 20 minutes daily. AI implementation for construction estimators.',
  },
};

export default function AIForEstimatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Implementation for Estimators',
            provider: {
              '@type': 'Organization',
              name: 'PromptAI Consulting',
              url: 'https://promptaiconsulting.com',
              email: 'luca@promptaiconsulting.com',
              areaServed: 'Australia',
            },
            description:
              'AI implementation services for estimators in construction companies.',
            serviceType: 'AI Consulting',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How can AI help estimators in construction?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can reduce daily data entry time for estimators by up to 89%. At CENTINA, estimators went from 3 hours to 20 minutes of daily data entry through AI-assisted extraction and automated workflows.',
                },
              },
            ],
          }),
        }}
      />
      <AEOPageTemplate
        role="Estimators"
        pageTitle="AI for Estimators in Construction"
        intro="Estimators spend hours on data entry, cross-referencing documents, and repetitive calculations. AI can handle most of this work automatically, letting you focus on the judgement calls that actually require your expertise."
        problems={[
          "Estimating in construction involves massive amounts of data entry. You're constantly moving information between spreadsheets, estimating software, and project management systems. The same data gets entered three or four times into different systems.",
          "Finding information buried in specifications, drawings, and historical project data takes time. Every estimate requires hunting through documents to find relevant details, pricing history, and supplier information.",
          "The repetitive nature of the work creates fatigue and increases error rates. When you're copying the same types of data hundreds of times, mistakes slip through.",
        ]}
        useCases={[
          {
            title: 'Automated Data Extraction',
            description:
              'AI reads specifications, quotes, and documents and extracts relevant data automatically. No more manual transcription from PDFs into spreadsheets.',
          },
          {
            title: 'Smart Cost Database',
            description:
              'AI maintains and queries historical pricing data, suggesting costs based on similar past projects and current market conditions.',
          },
          {
            title: 'Document Search & Summary',
            description:
              'Ask questions about project documents in plain language. Find specific clauses, requirements, or specifications in seconds.',
          },
          {
            title: 'Report Generation',
            description:
              'AI formats and generates estimate reports, proposals, and comparison documents from your data automatically.',
          },
        ]}
        keyStat="3hrs → 20min"
        statLabel="Daily data entry reduction (89%)"
      />
    </>
  );
}

