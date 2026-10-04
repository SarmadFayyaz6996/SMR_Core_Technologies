/**
 * Placeholder legal copy. These templates must be reviewed and replaced by
 * qualified counsel before the site is used commercially.
 */
export interface LegalDocument {
  slug: 'privacy' | 'terms' | 'cookies';
  title: string;
  description: string;
  updated: string;
  sections: { heading: string; body: string }[];
}

export const legalDocuments: Record<LegalDocument['slug'], LegalDocument> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    description: 'How SMR Core Technologies collects, uses and protects personal information.',
    updated: '2026-10-01',
    sections: [
      {
        heading: 'Information we collect',
        body: 'When you contact us we collect the details you provide — such as your name, work email, company, phone number and project information — so that we can respond to your enquiry.',
      },
      {
        heading: 'How we use information',
        body: 'We use your information only to respond to your enquiry, provide our services and improve our website. We do not sell personal information.',
      },
      {
        heading: 'Data retention',
        body: 'We keep enquiry data only for as long as needed to respond and maintain a business relationship, or as required by law.',
      },
      {
        heading: 'Your rights',
        body: 'You may request access to, correction of or deletion of your personal information at any time by contacting us.',
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Terms & Conditions',
    description: 'Terms governing use of the SMR Core Technologies website.',
    updated: '2026-10-01',
    sections: [
      {
        heading: 'Use of this website',
        body: 'This website provides general information about our services. Content may change without notice and does not form a binding offer.',
      },
      {
        heading: 'Demo content',
        body: 'Case studies, metrics, concept projects and articles marked as demo content are illustrative and do not represent actual client engagements or results.',
      },
      {
        heading: 'Intellectual property',
        body: 'The design, text and graphics of this website are the property of SMR Core Technologies unless otherwise stated.',
      },
      {
        heading: 'Limitation of liability',
        body: 'Information on this website is provided “as is” without warranties of any kind.',
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    title: 'Cookie Policy',
    description: 'How the SMR Core Technologies website uses cookies and local storage.',
    updated: '2026-10-01',
    sections: [
      {
        heading: 'Essential storage only',
        body: 'This website does not use advertising or tracking cookies. We store a single preference in your browser’s local storage to remember your chosen colour theme.',
      },
      {
        heading: 'Managing preferences',
        body: 'You can clear local storage at any time through your browser settings. The site will then follow your system theme.',
      },
    ],
  },
};
