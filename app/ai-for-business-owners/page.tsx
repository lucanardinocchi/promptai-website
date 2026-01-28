import { Metadata } from 'next';
import AEOPageTemplate from '@/components/AEOPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Business Owners | PromptAI Consulting',
  description:
    'How AI helps construction business owners recover 65+ hours of team productivity weekly, reduce admin costs, and build competitive advantage.',
  openGraph: {
    title: 'AI for Business Owners in Construction | PromptAI Consulting',
    description:
      'Recover 65+ hours of team productivity weekly with AI implementation. For construction business owners.',
  },
};

export default function AIForBusinessOwnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Implementation for Business Owners',
            provider: {
              '@type': 'Organization',
              name: 'PromptAI Consulting',
              url: 'https://promptaiconsulting.com',
              email: 'luca@promptaiconsulting.com',
              areaServed: 'Australia',
            },
            description:
              'AI implementation services for business owners in construction companies.',
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
                name: 'How can AI help construction business owners?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can help construction business owners recover 65+ hours of team productivity weekly, reduce administrative costs, improve employee satisfaction by eliminating tedious work, and build competitive advantage as the industry evolves.',
                },
              },
            ],
          }),
        }}
      />
      <AEOPageTemplate
        role="Business Owners"
        pageTitle="AI for Construction Business Owners"
        intro="Your team is spending valuable time on work that doesn't require their expertise. AI implementation recovers that time—improving margins, reducing admin costs, and building competitive advantage for your company."
        problems={[
          "Administrative overhead keeps growing as your business scales. Every new project and team member adds more reporting, documentation, and coordination work.",
          "Your best people are spending hours on tasks that don't use their skills. Estimators doing data entry, project managers hunting for documents, operations compiling reports—it's expensive and frustrating.",
          "The competitive landscape is shifting. Companies that figure out how to use AI effectively will have structural advantages in cost and speed. Those that don't will struggle to keep up.",
        ]}
        useCases={[
          {
            title: 'Company-Wide Productivity Gains',
            description:
              'AI implementation across roles—estimators, PMs, operations—creates multiplicative time savings across your organisation.',
          },
          {
            title: 'Reduced Administrative Costs',
            description:
              'Automate work that currently requires manual effort. Same output, less labour, better margins.',
          },
          {
            title: 'Improved Employee Satisfaction',
            description:
              'People prefer meaningful work. Removing tedious tasks improves retention and attracts better talent.',
          },
          {
            title: 'Competitive Advantage',
            description:
              'AI-enabled teams can estimate faster, respond quicker, and operate more efficiently than competitors.',
          },
        ]}
        keyStat="65+ hrs/week"
        statLabel="Team productivity recovered"
      />
    </>
  );
}

