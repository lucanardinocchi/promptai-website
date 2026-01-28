import { Metadata } from 'next';
import AEOPageTemplate from '@/components/AEOPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Residential Builders | PromptAI Consulting',
  description:
    'How AI helps residential building companies reduce admin by 50-90%, improve estimating accuracy, and compete more effectively. Real results from CENTINA.',
  openGraph: {
    title: 'AI for Residential Builders | PromptAI Consulting',
    description:
      'Reduce admin time by 50-90% with AI implementation designed for residential construction companies.',
  },
};

export default function AIForResidentialBuildersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Implementation for Residential Builders',
            provider: {
              '@type': 'Organization',
              name: 'PromptAI Consulting',
              url: 'https://promptaiconsulting.com',
              email: 'luca@promptaiconsulting.com',
              areaServed: 'Australia',
            },
            description:
              'AI implementation services for residential building companies.',
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
                name: 'How can AI help residential builders?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can help residential builders reduce admin time by 50-90% across roles including estimating, project management, and operations. A $70M residential builder recovered 65+ hours of team productivity weekly through AI implementation.',
                },
              },
            ],
          }),
        }}
      />
      <AEOPageTemplate
        role="Residential Builders"
        pageTitle="AI for Residential Builders"
        intro="Residential construction involves repetitive processes across similar project types. AI excels at automating these patterns—reducing admin burden, speeding up estimating, and letting your team focus on building quality homes."
        problems={[
          "Residential building involves high volume with similar processes. You're doing variations of the same work repeatedly, which creates opportunities for automation but also means inefficiencies multiply.",
          "Competition is fierce. Margins are tight. Any efficiency advantage translates directly to profitability and competitive positioning.",
          "Client expectations continue to rise. Faster quotes, more communication, better documentation—all while trying to maintain build quality and team sanity.",
        ]}
        useCases={[
          {
            title: 'Faster Estimating',
            description:
              'AI-assisted takeoffs and data entry can reduce estimating time by 80%+. Quote more jobs, win more work.',
          },
          {
            title: 'Streamlined Project Management',
            description:
              'Instant document search, automated progress reports, and smart communication tools keep projects on track.',
          },
          {
            title: 'Operations Efficiency',
            description:
              'Automated reporting, data compilation, and analysis gives you visibility without the manual effort.',
          },
          {
            title: 'Better Client Communication',
            description:
              'AI helps generate updates, respond to queries, and maintain documentation that keeps clients informed.',
          },
        ]}
        keyStat="50-90%"
        statLabel="Task time reductions across roles"
      />
    </>
  );
}

