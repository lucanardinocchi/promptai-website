import { Metadata } from 'next';
import AEOPageTemplate from '@/components/AEOPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Project Managers | PromptAI Consulting',
  description:
    'How AI helps construction project managers reduce document lookup by 90%, automate reporting, and focus on project delivery. Real results from CENTINA.',
  openGraph: {
    title: 'AI for Project Managers in Construction | PromptAI Consulting',
    description:
      'Reduce document lookup from 30 minutes to 3 minutes. AI implementation for construction project managers.',
  },
};

export default function AIForProjectManagersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Implementation for Project Managers',
            provider: {
              '@type': 'Organization',
              name: 'PromptAI Consulting',
              url: 'https://promptaiconsulting.com',
              email: 'luca@promptaiconsulting.com',
              areaServed: 'Australia',
            },
            description:
              'AI implementation services for project managers in construction companies.',
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
                name: 'How can AI help project managers in construction?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can reduce document lookup time for project managers by up to 90%. At CENTINA, project managers went from 30 minutes to 3 minutes per lookup through intelligent document search and summarisation.',
                },
              },
            ],
          }),
        }}
      />
      <AEOPageTemplate
        role="Project Managers"
        pageTitle="AI for Project Managers in Construction"
        intro="Project managers juggle dozens of documents, stakeholders, and deadlines. AI can instantly find information across your project archives, generate reports, and keep you focused on decisions rather than document hunting."
        problems={[
          "Construction projects generate enormous volumes of documentation. Contracts, variations, RFIs, specifications, drawings, emails, meeting notes—finding specific information when you need it can take 30 minutes or more.",
          "Reporting consumes significant time. Compiling status updates, progress reports, and client communications requires pulling data from multiple sources and formatting it appropriately.",
          "Coordination across teams and stakeholders means constant context-switching. You're answering questions, tracking issues, and making sure nothing falls through the cracks—often with information scattered across systems.",
        ]}
        useCases={[
          {
            title: 'Intelligent Document Search',
            description:
              'Search across all project documents using natural language. Ask "what did we agree about the flooring change?" and get the exact clause.',
          },
          {
            title: 'Automated Progress Reports',
            description:
              'AI compiles data from multiple sources and generates formatted progress reports, meeting minutes, and status updates.',
          },
          {
            title: 'Email & Communication Management',
            description:
              'AI summarises email threads, drafts responses, and tracks action items from correspondence.',
          },
          {
            title: 'Issue Tracking & Alerts',
            description:
              'AI monitors project documentation and flags potential issues, deadline risks, or items requiring attention.',
          },
        ]}
        keyStat="30min → 3min"
        statLabel="Document lookup reduction (90%)"
      />
    </>
  );
}

