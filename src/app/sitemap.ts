import { MetadataRoute } from 'next';

const DOMAIN = 'https://renivisionweddings.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/films',
    '/contact',
    '/blog',
    '/blog/best-wedding-venues-westchester',
    '/blog/how-to-choose-wedding-videographer-nyc',
    '/locations/westchester',
    '/locations/tarrytown',
    '/locations/hudson-valley',
    '/locations/manhattan',
    '/locations/brooklyn',
    '/locations/long-island',
    '/locations/nyc'
  ];

  return routes.map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
