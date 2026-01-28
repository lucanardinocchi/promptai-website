import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://promptaiconsulting.com';

  // Main pages
  const mainPages = [
    '',
    '/services',
    '/case-study',
    '/about',
    '/contact',
  ];

  // AEO pages
  const aeoPages = [
    '/ai-for-estimators',
    '/ai-for-project-managers',
    '/ai-for-operations-managers',
    '/ai-for-contract-administrators',
    '/ai-for-site-supervisors',
    '/ai-for-office-managers',
    '/ai-for-business-owners',
    '/ai-for-residential-builders',
    '/ai-for-contractors',
  ];

  const allPages = [...mainPages, ...aeoPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/ai-for') ? 0.7 : 0.8,
  }));
}

