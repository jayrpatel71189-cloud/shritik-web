import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Factory, Thermometer, Package, Microscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Infrastructure',
  description: 'Shritik Enterprises LLP owns and operates integrated cashew processing and dehydration plants in India. Learn about our manufacturing capabilities and quality infrastructure.',
};

const cashewSteps = [
  { num: '01', title: 'Raw Nut Receiving', desc: 'Incoming raw cashews are inspected for moisture, weight, and visual quality before acceptance.' },
  { num: '02', title: 'Steam Treatment', desc: 'Nuts are steam-conditioned to loosen shells and reduce breakage during shelling.' },
  { num: '03', title: 'Shelling', desc: 'Semi-automatic shelling equipment removes the outer shell while minimising kernel damage.' },
  { num: '04', title: 'Peeling & Drying', desc: 'Testa (skin) is removed and kernels are dried to target moisture levels (max 5%).' },
  { num: '05', title: 'Grading & Sorting', desc: 'Automated size graders and colour sorters separate kernels by grade with high precision.' },
  { num: '06', title: 'QC & Lab Testing', desc: 'Moisture, microbiological, and physical checks are performed per batch before packing.' },
  { num: '07', title: 'Packing', desc: 'Kernels are vacuum-sealed in food-grade foil bags, packed in cartons or bulk bags.' },
  { num: '08', title: 'Dispatch & Export', desc: 'Packed goods are dispatched to port with full export documentation.' },
];

const strengths = [
  { icon: Factory, title: 'In-House Processing', desc: 'No outsourcing. All processing — shelling, drying, sorting, packing — is done in our own facilities.' },
  { icon: Thermometer, title: 'Controlled Environment', desc: 'Temperature and humidity-controlled storage for finished goods, preventing quality degradation.' },
  { icon: Microscope, title: 'On-Site Lab', desc: 'Equipped with instruments for moisture, microbial, and physical quality testing without sending to external labs for routine checks.' },
  { icon: Package, title: 'Flexible Packing Lines', desc: 'Multiple packing lines support bulk, retail, and private label formats simultaneously.' },
];

export default function InfrastructurePage() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <span className="text-white">Infrastructure</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Our Infrastructure</h1>
          <p className="text-green-100 text-lg max-w-2xl">Integrated, in-house manufacturing ensures quality at every stage — from raw material to export-ready packaging.</p>
        </div>
      </div>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">Our Facilities</p>
            <h2 className="section-heading mb-4">Manufacturing Capabilities</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-3xl p-8">
              <div className="text-4xl mb-4">🥜</div>
              <h3 className="font-serif text-2xl font-bold text-amber-900 mb-3">Cashew Processing Unit</h3>
              <p className="text-gray-600 leading-relaxed mb-5">Our cashew processing facility in Gujarat handles the complete value chain — from raw nut receiving through steam conditioning, shelling, peeling, grading, and export packing.</p>
              <ul className="space-y-2">
                {[
                  'Annual capacity: 3,000+ MT raw cashew',
                  'Semi-automated shelling lines with high recovery rates',
                  'Colour sorter for grade-accurate separation',
                  'Vacuum packing line for W-grade and splits',
                  'Cold storage for long-term kernel preservation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-serif text-2xl font-bold text-green-900 mb-3">Dehydration Plant</h3>
              <p className="text-gray-600 leading-relaxed mb-5">A dedicated dehydration facility processes onion, garlic, and ginger through cleaning, slicing, dehydration, grinding, screening, and packing — all in a controlled environment.</p>
              <ul className="space-y-2">
                {[
                  'Annual capacity: 2,000+ MT dehydrated product',
                  'Multi-tray and belt dryers with precise temperature control',
                  'Dedicated garlic, onion, and ginger lines',
                  'Hammer mills and pin mills for powder production',
                  'Stainless steel equipment throughout for hygiene',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest mb-3">From Raw to Export-Ready</p>
            <h2 className="section-heading mb-4">Cashew Processing Flow</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cashewSteps.map((step) => (
              <div key={step.num} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1a472a] flex items-center justify-center text-white text-sm font-bold mb-3 font-mono">{step.num}</div>
                <h3 className="font-semibold text-[#1a472a] text-sm mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-4">Operational Strengths</h2>
            <div className="accent-line mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s) => (
              <div key={s.title} className="p-6 border border-gray-100 rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-[#2d6a4f]" />
                </div>
                <h3 className="font-semibold text-[#1a472a] mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#f0fdf4] border-t border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-4">Questions About Our Capacity?</h2>
          <p className="section-subheading mx-auto text-center mb-8">Contact us to discuss your volume requirements, lead times, and whether we can accommodate your specifications.</p>
          <Link href="/contact" className="btn-primary">
            Discuss Capacity <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
