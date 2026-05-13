import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Dehydrated Garlic',
  description: 'Dehydrated garlic flakes, granules, minced, and powder with high allicin content. Exported from India with FSSAI, Halal, and Kosher certification.',
  keywords: [
    'dehydrated garlic exporter India',
    'dried garlic flakes wholesale India',
    'garlic granules supplier India',
    'garlic powder bulk exporter India',
    'high allicin garlic powder India',
    'Halal Kosher garlic powder India',
  ],
  alternates: { canonical: 'https://www.shritikenterprises.com/products/dehydrated-garlic' },
  openGraph: {
    title: 'Dehydrated Garlic Exporter India — Flakes, Granules & Powder',
    description: 'Dehydrated garlic flakes, granules, minced, and powder with high allicin content. FSSAI, APEDA, Halal & Kosher certified. Exported from India.',
    url: 'https://www.shritikenterprises.com/products/dehydrated-garlic',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dehydrated Garlic — Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dehydrated Garlic Exporter India — Flakes, Granules & Powder',
    description: 'High allicin dehydrated garlic flakes, granules, minced, and powder exported from India.',
    images: ['/opengraph-image'],
  },
};

const products = [
  { form: 'Flakes', size: '3–5mm', moisture: 'Max 6%', allicin: 'High', uses: 'Marinades, pizza, ready meals' },
  { form: 'Minced', size: '1–3mm', moisture: 'Max 6%', allicin: 'High', uses: 'Seasoning blends, sauces' },
  { form: 'Granules', size: '0.5–1mm', moisture: 'Max 6%', allicin: 'High', uses: 'Spice mixes, dry rubs' },
  { form: 'Powder', size: '40–80 mesh', moisture: 'Max 6%', allicin: 'Medium-High', uses: 'Gravies, instant foods, seasoning' },
];

const highlights = [
  'Made from fresh, mature garlic with high allicin content',
  'Low-temperature dehydration preserves flavour compounds',
  'Consistent white to creamy colour — no browning',
  'No additives, preservatives, or artificial enhancers',
  'Rehydration ratio: approx. 1kg powder = 6–7kg fresh garlic',
  'FSSAI, APEDA, Halal, and Kosher certified',
];

const applications = [
  ['Seasoning blends & spice mixes', 'Garlic bread & pizza', 'Soups & gravies'],
  ['Processed meats & sausages', 'Instant noodles & ready meals', 'Marinades & dry rubs'],
];

export default function DehydratedGarlicPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 60%, #16a34a 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb ph-breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            <span className="text-white">Dehydrated Garlic</span>
          </div>
          <div className="flex items-center gap-4 mb-4 ph-title">
            <span className="text-5xl emoji-float">🧄</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Dehydrated Garlic</h1>
          </div>
          <p className="text-green-100 text-lg max-w-2xl ph-subtitle">High-allicin dehydrated garlic in flakes, granules, minced, and powder form — trusted by spice companies and food manufacturers worldwide.</p>
        </div>
      </div>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="left">
              <div>
                <ScrollReveal animation="down" delay={50}>
                  <p className="text-sm font-semibold text-green-700 uppercase tracking-widest mb-3">Product Overview</p>
                </ScrollReveal>
                <h2 className="section-heading mb-4">Flavour-Rich Dehydrated Garlic</h2>
                <div className="accent-line-anim sr-visible" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  We source fresh garlic from India&apos;s prime growing regions — Madhya Pradesh and Gujarat — and process it in our dedicated garlic dehydration line. Our controlled-temperature drying process ensures maximum allicin retention and a clean, sharp garlic flavour that food manufacturers trust.
                </p>
                <ul className="space-y-3">
                  {highlights.map((h, i) => (
                    <ScrollReveal key={h} animation="left" delay={i * 70 + 100}>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{h}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="right" delay={150}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-10 text-center">
                <div className="text-8xl mb-6 emoji-float">🧄</div>
                <div className="grid grid-cols-2 gap-4 text-left">
                  {[
                    { label: 'Moisture', value: 'Max 6%' },
                    { label: 'Forms', value: '4 Variants' },
                    { label: 'Shelf Life', value: '18–24 Months' },
                    { label: 'Allicin', value: 'High Retention' },
                  ].map((stat, i) => (
                    <ScrollReveal key={stat.label} animation="pop" delay={i * 80 + 200}>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                        <div className="font-bold text-green-800">{stat.value}</div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-10">
              <h2 className="section-heading mb-3">Available Forms & Specifications</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="zoom" delay={100}>
            <div className="overflow-x-auto rounded-2xl shadow-card">
              <table className="data-table">
                <thead>
                  <tr>
                    <th style={{ background: '#14532d' }}>Form</th>
                    <th style={{ background: '#14532d' }}>Particle Size</th>
                    <th style={{ background: '#14532d' }}>Moisture</th>
                    <th style={{ background: '#14532d' }}>Allicin Level</th>
                    <th style={{ background: '#14532d' }}>Typical Uses</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.form}>
                      <td className="font-bold text-green-800">{p.form}</td>
                      <td>{p.size}</td>
                      <td>{p.moisture}</td>
                      <td>{p.allicin}</td>
                      <td className="text-gray-500">{p.uses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-8">
              <h2 className="section-heading mb-3">Applications</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((col, i) => (
              <ScrollReveal key={i} animation={i === 0 ? 'left' : 'right'} delay={i * 100 + 100}>
                <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                  <ul className="space-y-3">
                    {col.map((a, j) => (
                      <ScrollReveal key={a} animation="up" delay={j * 80 + 200}>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{a}</span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#14532d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="blur-up">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">Request Dehydrated Garlic Samples</h2>
            <p className="text-green-200 mb-6">COA, microbiological reports, and samples available on request before order confirmation.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#f0c040] text-[#14532d] font-bold px-6 py-3 rounded-xl text-sm transition-all">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
