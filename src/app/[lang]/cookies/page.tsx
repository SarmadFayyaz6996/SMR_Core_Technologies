import { LegalPage, legalMetadata } from '@/components/layout/LegalPage';

// Template copy pending legal review — kept out of search results until final.
export const generateMetadata = () => legalMetadata('cookies');

export default function Page() {
  return <LegalPage slug="cookies" />;
}
