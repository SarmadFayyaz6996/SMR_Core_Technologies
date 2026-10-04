export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What kind of software does SMR Core Technologies build?',
    answer:
      'We build custom web applications, mobile apps, desktop software, SaaS products and AI-powered systems — along with the APIs, cloud infrastructure and integrations that connect them.',
  },
  {
    question: 'Can you work with our existing codebase?',
    answer:
      'Yes. Much of our work is improving, extending and modernizing existing applications. We start with a code and architecture review, then agree on an incremental plan that avoids disruption.',
  },
  {
    question: 'How do you integrate AI into existing products?',
    answer:
      'We identify the workflows where AI creates measurable value, then integrate models such as OpenAI or Azure OpenAI through your existing APIs — with retrieval over your data, evaluation, guardrails and cost monitoring.',
  },
  {
    question: 'Which technologies do you specialize in?',
    answer:
      'Our core stack includes Angular, React and Next.js on the frontend; ASP.NET Core, Node.js and Python on the backend; SQL Server and PostgreSQL for data; and Azure or AWS with Docker and Kubernetes for infrastructure.',
  },
  {
    question: 'How do projects typically start?',
    answer:
      'With a short discovery conversation about your goals, users and constraints. From there we propose scope, architecture, timeline and a transparent estimate before any build work begins.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. We offer ongoing maintenance, monitoring, performance optimization and feature development so your software keeps improving after it ships.',
  },
];
