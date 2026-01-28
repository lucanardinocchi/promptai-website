import { Metadata } from 'next';
import AEOPageTemplate from '@/components/AEOPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Operations Managers | PromptAI Consulting',
  description:
    'How AI helps construction operations managers reduce weekly reporting by 87%, automate data compilation, and focus on strategic decisions. Real results from CENTINA.',
  openGraph: {
    title: 'AI for Operations Managers in Construction | PromptAI Consulting',
    description:
      'Reduce weekly reporting from 15 hours to 2 hours. AI implementation for construction operations managers.',
  },
};

export default function AIForOperationsManagersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Implementation for Operations Managers',
            provider: {
              '@type': 'Organization',
              name: 'PromptAI Consulting',
              url: 'https://promptaiconsulting.com',
              email: 'luca@promptaiconsulting.com',
              areaServed: 'Australia',
            },
            description:
              'AI implementation services for operations managers in construction companies.',
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
                name: 'How can AI help operations managers in construction?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can reduce weekly reporting time for operations managers by up to 87%. At CENTINA, operations managers went from 15 hours to 2 hours of weekly reporting through automated data compilation and report generation.',
                },
              },
            ],
          }),
        }}
      />
      <AEOPageTemplate
        role="Operations Managers"
        pageTitle="AI for Operations Managers in Construction"
        intro="Operations managers spend significant time compiling reports, tracking metrics, and ensuring visibility across projects. AI can automate data gathering, generate executive summaries, and surface insights without the manual effort."
        problems={[
          "Weekly and monthly reporting is a massive time sink. Pulling data from multiple projects, formatting it consistently, and generating narrative summaries can consume 15+ hours every week.",
          "Keeping leadership informed requires constant data compilation. Every board meeting, review, or update needs fresh information pulled from across the organisation.",
          "Identifying trends and issues across multiple projects requires manual analysis. Important patterns can be missed when you're too busy gathering data to analyse it properly.",
        ]}
        useCases={[
          {
            title: 'Automated Report Generation',
            description:
              'AI pulls data from multiple sources, formats outputs, and generates narrative summaries for regular reports.',
          },
          {
            title: 'Executive Dashboards',
            description:
              'Real-time summaries of key metrics across all projects, automatically updated and ready for leadership review.',
          },
          {
            title: 'Trend Analysis & Insights',
            description:
              'AI identifies patterns across project data, flagging issues, opportunities, and anomalies for attention.',
          },
          {
            title: 'Meeting Preparation',
            description:
              'AI compiles relevant data and generates briefing documents for board meetings, reviews, and stakeholder updates.',
          },
        ]}
        keyStat="15hrs → 2hrs"
        statLabel="Weekly reporting reduction (87%)"
      />
    </>
  );
}

