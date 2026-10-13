'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { ComponentProps } from 'react';
import { defaultLocale, isLocale, localizeHref } from './config';

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

/** next/link that keeps the visitor in their current language ("/work" → "/fr/work"). */
export function LocaleLink({ href, ...rest }: LocaleLinkProps) {
  const { lang } = useParams<{ lang?: string }>();
  const locale = isLocale(lang) ? lang : defaultLocale;
  return <Link href={localizeHref(locale, href)} {...rest} />;
}
