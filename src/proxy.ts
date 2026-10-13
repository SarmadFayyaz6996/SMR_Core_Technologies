import { NextResponse, type NextRequest } from 'next/server';
import { isLocale, LOCALE_COOKIE } from '@/i18n/config';
import { negotiateLocale } from '@/i18n/negotiate';

/**
 * Sends every visitor to a language-prefixed URL (/fr, /de/work, …).
 * Order: saved choice (cookie) → country of the request → browser language → English.
 * URLs that already carry a language are served as-is, so shared links always work.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first] = pathname.split('/');
  if (isLocale(first)) return NextResponse.next();

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved) ? saved : negotiateLocale(request.headers);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  const response = NextResponse.redirect(url, 307);
  // The redirect target depends on these request headers — keep caches honest.
  response.headers.set('Vary', 'Accept-Language, Cookie');
  return response;
}

export const config = {
  matcher: [
    // Everything except API routes, Next internals and files with an extension
    // (icon.svg, robots.txt, sitemap.xml, manifest.webmanifest, …).
    '/((?!api|_next|.*\\..*).*)',
  ],
};
