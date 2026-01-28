import { Metadata } from 'next';
import AEOPageTemplate from '@/components/AEOPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Site Supervisors | PromptAI Consulting',
  description:
    'How AI helps construction site supervisors reduce reporting time, access information faster on-site, and focus on what matters—managing the build.',
  openGraph: {
    title: 'AI for Site Supervisors in Construction | PromptAI Consulting',
    description:
      'Reduce site reporting time and access project information instantly. AI implementation for construction site supervisors.',
  },
};

export default function AIForSiteSupervisorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Implementation for Site Supervisors',
            provider: {
              '@type': 'Organization',
              name: 'PromptAI Consulting',
              url: 'https://promptaiconsulting.com',
              email: 'luca@promptaiconsulting.com',
              areaServed: 'Australia',
            },
            description:
              'AI implementation services for site supervisors in construction companies.',
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
                name: 'How can AI help site supervisors in construction?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI helps site supervisors reduce daily reporting time, access project specifications instantly from mobile devices, and generate documentation without leaving the site. This means more time managing the build and less time on paperwork.',
                },
              },
            ],
          }),
        }}
      />
      <AEOPageTemplate
        role="Site Supervisors"
        pageTitle="AI for Site Supervisors in Construction"
        intro="Site supervisors need instant access to information while managing everything happening on-site. AI provides quick answers to technical questions, automates daily reporting, and reduces the paperwork burden that takes you away from the build."
        problems={[
          "End-of-day reporting takes time you don't have. After a full day on site, the last thing you want is an hour of paperwork documenting what happened.",
          "Accessing project information on-site is often slow or impossible. When you need to check a specification or contract detail, you're digging through folders or waiting for someone in the office to respond.",
          "Communication with the office requires constant updates, photos, and documentation. Keeping everyone informed while managing the site is a juggling act.",
        ]}
        useCases={[
          {
            title: 'Voice-to-Report',
            description:
              'Dictate daily reports and let AI format them properly. Walk the site, describe what you see, and generate documentation automatically.',
          },
          {
            title: 'Mobile Specification Access',
            description:
              'Ask questions about project documents from your phone. Get instant answers about specifications, requirements, or contract terms.',
          },
          {
            title: 'Photo Documentation',
            description:
              'AI organises and labels site photos, matches them to project stages, and generates visual progress reports.',
          },
          {
            title: 'Quick Communication',
            description:
              'AI drafts emails and updates based on verbal input. Keep the office informed without typing on your phone.',
          },
        ]}
        keyStat="50-70%"
        statLabel="Reduction in reporting time"
      />
    </>
  );
}

