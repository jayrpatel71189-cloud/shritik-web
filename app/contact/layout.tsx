import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Shritik Enterprises LLP for export inquiries, product samples, pricing, and private label requests. We respond within 24 hours.',
  keywords: [
    'contact Shritik Enterprises',
    'cashew export inquiry India',
    'dehydrated food export quote India',
    'food ingredients supplier contact India',
    'request sample cashew India',
  ],
  alternates: { canonical: 'https://www.shritikenterprises.com/contact' },
  openGraph: {
    title: 'Contact Us — Shritik Enterprises LLP',
    description: 'Send an export inquiry or request product samples. We respond within 24 hours for all pricing and specification requests.',
    url: 'https://www.shritikenterprises.com/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Shritik Enterprises LLP',
    description: 'Send an export inquiry. We respond within 24 hours.',
    images: ['/og-image.jpg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
