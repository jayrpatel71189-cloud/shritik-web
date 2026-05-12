import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cashew Kernels',
  description: 'Premium cashew kernels in W180, W210, W240, W320, W450, splits and pieces. Exported from India with FSSAI, APEDA, and Halal certifications.',
  keywords: [
    'cashew kernels W320 exporter India',
    'W180 cashew kernels bulk',
    'W240 W450 cashew kernels India',
    'cashew splits pieces India',
    'JH LWP cashew kernels India',
    'buy cashew kernels India wholesale',
    'Halal cashew kernels India',
  ],
  alternates: { canonical: 'https://www.shritikenterprises.com/products/cashew-kernels' },
  openGraph: {
    title: 'Cashew Kernels Exporter India — W180 to W450 & Splits',
    description: 'Premium cashew kernels in all internationally traded grades: W180, W210, W240, W320, W450, JH, LWP, splits and pieces. FSSAI, APEDA & Halal certified.',
    url: 'https://www.shritikenterprises.com/products/cashew-kernels',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Premium Cashew Kernels — Shritik Enterprises LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cashew Kernels Exporter India — W180 to W450 & Splits',
    description: 'Premium cashew kernels in all grades. Exported from India with FSSAI, APEDA & Halal certification.',
    images: ['/og-image.jpg'],
  },
};

const grades = [
  { grade: 'W180', desc: 'Largest whole kernel — premium snacking grade', uses: 'Premium retail, gifting' },
  { grade: 'W210', desc: 'Large whole kernel, excellent colour', uses: 'Snacking, retail packs' },
  { grade: 'W240', desc: 'Medium-large whole kernel', uses: 'Snacking, confectionery' },
  { grade: 'W320', desc: 'Most traded grade worldwide', uses: 'All applications' },
  { grade: 'W450', desc: 'Smaller whole kernel', uses: 'Industrial, food service' },
  { grade: 'SW', desc: 'Scorched wholes', uses: 'Roasting, processing' },
  { grade: 'SSW', desc: 'Scorched & slightly spotted wholes', uses: 'Processing' },
  { grade: 'JH', desc: 'Jumbo halves', uses: 'Baking, confectionery' },
  { grade: 'SS', desc: 'Small shorts', uses: 'Granola, toppings' },
  { grade: 'DS', desc: 'Desert splits', uses: 'Bulk food processing' },
  { grade: 'LWP', desc: 'Large white pieces', uses: 'Bakery, confectionery' },
  { grade: 'SWP', desc: 'Small white pieces', uses: 'Bakery, trail mixes' },
  { grade: 'BB', desc: 'Butts and baby pieces', uses: 'Granola, snack bars' },
  { grade: 'SP', desc: 'Small pieces', uses: 'Confectionery, ice cream' },
  { grade: 'Broken', desc: 'Mixed broken kernels', uses: 'Industrial, crushing' },
];

const highlights = [
  'Naturally sweet flavour with creamy texture',
  'Low moisture (max 5%) for extended shelf life',
  'Hand-sorted and machine-graded for uniformity',
  'Available raw or roasted and salted on request',
  'FSSAI, APEDA, ISO, Halal and Kosher certified',
  'Custom packaging: bulk bags, retail pouches, tin cans',
];

const applications = [
  { emoji: '🍫', name: 'Confectionery & Chocolate' },
  { emoji: '🥐', name: 'Bakery & Pastry' },
  { emoji: '🥗', name: 'Salads & Cuisines' },
  { emoji: '🧃', name: 'Granola & Snack Bars' },
  { emoji: '🛒', name: 'Retail & Private Label' },
  { emoji: '🏭', name: 'Food Manufacturing' },
];

export default function CashewKernelsPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #78350f 0%, #b45309 60%, #d97706 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            <span className="text-white">Cashew Kernels</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🥜</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Cashew Kernels</h1>
          </div>
          <p className="text-amber-100 text-lg max-w-2xl">Premium quality cashew kernels in all internationally traded grades — whole, halves, splits, and pieces. Sourced and processed in India.</p>
        </div>
      </div>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-3">Product Overview</p>
              <h2 className="section-heading mb-4">Premium Cashew Kernels from India</h2>
              <div className="accent-line" />
              <p className="text-gray-600 leading-relaxed mb-6">
                Our cashew kernels are sourced from the finest cashew-growing regions and processed in our modern facility in Gujarat. Each batch undergoes multiple quality checks — from raw nut grading through shelling, peeling, drying, and final packing — ensuring you receive consistently premium product.
              </p>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-3xl p-10 text-center">
              <div className="text-8xl mb-6">🥜</div>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Moisture</div>
                  <div className="font-bold text-amber-800">Max 5%</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Grades Available</div>
                  <div className="font-bold text-amber-800">15+ Grades</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Pack Sizes</div>
                  <div className="font-bold text-amber-800">10kg–25kg Bags</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Shelf Life</div>
                  <div className="font-bold text-amber-800">12–18 Months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grades Table */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Available Grades</h2>
            <p className="section-subheading mx-auto text-center">All internationally recognised cashew kernel grades, in stock year-round.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-card">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ background: '#78350f' }}>Grade</th>
                  <th style={{ background: '#78350f' }}>Description</th>
                  <th style={{ background: '#78350f' }}>Common Uses</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((g) => (
                  <tr key={g.grade}>
                    <td className="font-bold text-amber-800">{g.grade}</td>
                    <td>{g.desc}</td>
                    <td className="text-gray-500">{g.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Applications</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((a) => (
              <div key={a.name} className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-3">{a.emoji}</div>
                <p className="text-xs font-semibold text-amber-900">{a.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-16 bg-[#78350f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-4">Packaging & Export</h2>
              <p className="text-amber-100 leading-relaxed mb-6">We offer flexible packaging options including vacuum-sealed foil bags, corrugated cartons, and bulk poly-bags inside PP woven bags. All packaging includes moisture-resistant inner lining and appropriate labelling for your destination market.</p>
              <ul className="space-y-2 text-amber-100 text-sm">
                {['10kg & 25kg vacuum-sealed bags', 'Retail-ready pouch options (private label)', 'Container loads (20ft & 40ft)', 'Custom labelling & barcode support', 'Export documentation included'].map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-300 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-800/50 border border-amber-600 rounded-2xl p-6 text-center text-white">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-semibold text-xl mb-2">Request a Sample</h3>
              <p className="text-amber-200 text-sm mb-5">We offer pre-shipment samples for quality verification before you confirm your order.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-[#f0c040] text-[#78350f] font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
                Request Sample <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
