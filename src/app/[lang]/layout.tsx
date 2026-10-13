import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RevealObserver } from '@/components/layout/RevealObserver';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPrimaryNav } from '@/data/navigation';
import { site } from '@/data/site';
import { localeInfo, locales } from '@/i18n/config';
import { getDictionary, getLocale } from '@/i18n/server';
import { organizationSchema, websiteSchema } from '@/lib/seo';
import { themeInitScript } from '@/lib/theme';
import '../globals.css';

// Self-hosted at build time (no runtime requests to Google). Only the Latin subset is
// preloaded; Latin Extended glyphs (Polish, Turkish, …) load on demand via unicode-range.
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' });
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: false,
});

/** Pre-render every page in every language at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.homeTitle, template: `%s | ${site.name}` },
    description: dict.meta.siteDescription,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    formatDetection: { telephone: false },
    icons: { icon: '/icon.svg', apple: site.logo },
    // Ownership verification for Google Search Console / Bing Webmaster Tools (set in .env).
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
      other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : undefined,
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: localeInfo[locale].ogLocale,
    },
    twitter: { card: 'summary_large_image', site: site.twitterHandle },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#07080b' },
    { media: '(prefers-color-scheme: light)', color: '#fafafb' },
  ],
  colorScheme: 'dark light',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <html
      lang={locale}
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          {dict.common.skipToContent}
        </a>
        <Navbar
          locale={locale}
          links={getPrimaryNav(dict)}
          t={dict.nav}
          common={{ letsTalk: dict.common.letsTalk, startProject: dict.common.startProject }}
          email={site.email}
        />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <JsonLd data={[organizationSchema(dict, locale), websiteSchema()]} />
      </body>
    </html>
  );
}
