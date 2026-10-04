import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#07080b',
    theme_color: '#07080b',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
