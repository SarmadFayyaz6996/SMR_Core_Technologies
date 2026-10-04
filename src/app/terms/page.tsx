import type { Metadata } from 'next';
import { LegalPage } from '@/components/layout/LegalPage';
import { legalDocuments } from '@/data/legal';
import { buildMetadata } from '@/lib/seo';

const document = legalDocuments.terms;

export const metadata: Metadata = buildMetadata({
  title: document.title,
  description: document.description,
  path: '/terms',
  // Template copy pending legal review — keep out of search results until final.
  noIndex: true,
});

export default function Page() {
  return <LegalPage document={document} />;
}
