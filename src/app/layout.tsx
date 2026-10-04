import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealObserver } from '@/components/layout/RevealObserver';
import { JsonLd } from '@/components/seo/JsonLd';
import { site } from '@/data/site';
import { organizationSchema, websiteSchema } from '@/lib/seo';
import { themeInitScript } from '@/lib/theme';
import './globals.css';

// Self-hosted at build time (no runtime requests to Google). Latin subset keeps the
// critical font small; the mono face is only used for small labels, so it isn't preloaded.
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' });
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Custom Software Development Company`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    url: site.url,
  },
  twitter: { card: 'summary_large_image', site: site.twitterHandle },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#07080b' },
    { media: '(prefers-color-scheme: light)', color: '#fafafb' },
  ],
  colorScheme: 'dark light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
