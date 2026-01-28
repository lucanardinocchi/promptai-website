import { Metadata } from 'next';
import AEOPageTemplate from '@/components/AEOPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Contractors | PromptAI Consulting',
  description:
    'How AI helps construction contractors reduce admin by 50-90%, respond faster to tenders, and compete more effectively in a tight market.',
  openGraph: {
    title: 'AI for Contractors | PromptAI Consulting',
    description:
      'Reduce admin time by 50-90% with AI implementation designed for construction contractors.',
  },
};

export default function AIForContractorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Implementation for Contractors',
            provider: {
              '@type': 'Organization',
              name: 'PromptAI Consulting',
              url: 'https://promptaiconsulting.com',
              email: 'luca@promptaiconsulting.com',
              areaServed: 'Australia',
            },
            description: 'AI implementation services for construction contractors.',
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
                name: 'How can AI help construction contractors?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can help contractors reduce admin time by 50-90%, respond to tenders faster, improve estimating accuracy, and maintain better documentation. This translates to more competitive bids and better project outcomes.',
                },
              },
            ],
          }),
        }}
      />
      <AEOPageTemplate
        role="Contractors"
        pageTitle="AI for Construction Contractors"
        intro="Contractors face constant pressure to bid competitively while maintaining margins. AI helps you respond faster to tenders, estimate more accurately, and reduce the admin overhead that eats into profitability."
        problems={[
          "Tender timelines are tight. Getting competitive bids out quickly while maintaining accuracy requires efficient processes. Manual work creates bottlenecks.",
          "Documentation requirements continue to grow. Compliance, safety, quality systems—the paperwork burden increases every year.",
          "Competition is intense. When margins are thin, operational efficiency is the difference between profitable projects and breakeven work.",
        ]}
        useCases={[
          {
            title: 'Rapid Tender Response',
            description:
              'AI-assisted estimating and document preparation helps you respond to more tenders in less time.',
          },
          {
            title: 'Accurate Costing',
            description:
              'AI maintains historical data, suggests pricing based on similar projects, and reduces estimation errors.',
          },
          {
            title: 'Compliance Documentation',
            description:
              'Automate the generation and management of safety, quality, and compliance documentation.',
          },
          {
            title: 'Subcontractor Management',
            description:
              'AI helps track quotes, manage communications, and coordinate across multiple subcontractors.',
          },
        ]}
        keyStat="50-90%"
        statLabel="Task time reductions across roles"
      />
    </>
  );
}

