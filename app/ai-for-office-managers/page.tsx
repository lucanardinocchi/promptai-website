import { Metadata } from 'next';
import AEOPageTemplate from '@/components/AEOPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Office Managers | PromptAI Consulting',
  description:
    'How AI helps construction office managers automate admin coordination, streamline document management, and reduce repetitive tasks.',
  openGraph: {
    title: 'AI for Office Managers in Construction | PromptAI Consulting',
    description:
      'Automate admin coordination and document management with AI. Implementation for construction office managers.',
  },
};

export default function AIForOfficeManagersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Implementation for Office Managers',
            provider: {
              '@type': 'Organization',
              name: 'PromptAI Consulting',
              url: 'https://promptaiconsulting.com',
              email: 'luca@promptaiconsulting.com',
              areaServed: 'Australia',
            },
            description:
              'AI implementation services for office managers in construction companies.',
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
                name: 'How can AI help office managers in construction?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI helps office managers automate document filing and organisation, draft routine correspondence, coordinate scheduling, and reduce the volume of repetitive administrative tasks that consume the workday.',
                },
              },
            ],
          }),
        }}
      />
      <AEOPageTemplate
        role="Office Managers"
        pageTitle="AI for Office Managers in Construction"
        intro="Office managers handle the administrative backbone of construction operations. AI can automate document organisation, draft correspondence, coordinate schedules, and handle the routine tasks that fill your day—so you can focus on the work that requires human judgement."
        problems={[
          "Document management in construction is a constant challenge. Files need to be organised, named correctly, and stored where people can find them. When something's misfiled, you're the one who gets the call.",
          "Routine correspondence takes up significant time. Drafting similar emails, following up on requests, and coordinating between team members involves repetitive communication.",
          "Scheduling and coordination across multiple people, projects, and priorities requires constant attention. When things change, which they always do, everything needs to be updated.",
        ]}
        useCases={[
          {
            title: 'Smart Document Filing',
            description:
              'AI automatically organises, names, and files documents according to your system. No more manual sorting or misfiled paperwork.',
          },
          {
            title: 'Correspondence Automation',
            description:
              'AI drafts routine emails, follow-ups, and standard communications based on templates and context.',
          },
          {
            title: 'Schedule Coordination',
            description:
              'AI helps manage calendars, coordinate meetings, and handle the back-and-forth of scheduling.',
          },
          {
            title: 'Information Retrieval',
            description:
              'Find any document or information instantly by asking in plain language, rather than hunting through folders.',
          },
        ]}
        keyStat="50-70%"
        statLabel="Reduction in admin coordination time"
      />
    </>
  );
}

