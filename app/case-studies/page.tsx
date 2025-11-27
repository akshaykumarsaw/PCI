'use client';

import { useState } from 'react';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CaseStudiesPage() {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  const caseStudies = [
    {
      title: 'Aerospace Actuator Housing Rescue',
      industry: 'Commercial Aviation',
      customer: 'Tier 1 Aerospace Supplier',
      icon: '✈️',
      challenge: "The customer's existing supplier in Asia was producing actuator housings with chronic porosity issues in the aluminum castings, resulting in 40% scrap rates and threatening a major aircraft OEM delivery schedule. The component required machining on all six sides with ±0.001\" positional tolerances and specific surface finish requirements for O-ring sealing surfaces. With only 8 weeks until the delivery deadline, they needed a domestic solution immediately.",
      solution: "Our engineering team proposed switching from castings to billet 7075-T6 aluminum, redesigning internal geometry to reduce weight and maintain structural requirements. We created a custom fixture system for our 5-axis DMU 65 machines that allowed complete machining in two operations instead of six. Our quality team established a first-article inspection process completed in 72 hours and implemented 100% CMM inspection with automated SPC monitoring.",
      results: [
        { label: 'Delivered first production parts', value: '6 weeks (2 weeks early)' },
        { label: 'Cost reduction', value: '18%' },
        { label: 'Defects across 847 units', value: 'Zero' },
        { label: 'Component weight reduced', value: '12%' },
        { label: 'Annual program value', value: '$2.3M' }
      ],
      testimonial: "PCI didn't just manufacture parts—they engineered a solution that saved our program. Their responsiveness and technical capability exceeded anything we'd experienced with offshore suppliers.",
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80'
    },
    {
      title: 'Medical Device Implant Component Qualification',
      industry: 'Medical Devices (Class II)',
      customer: 'Orthopedic Implant Manufacturer',
      icon: '⚕️',
      challenge: "Customer needed a manufacturing partner who could produce titanium spinal implant components with complex geometries, hold ±0.0005\" tolerances, and navigate FDA quality system requirements. Their previous supplier couldn't achieve the required surface finish (Ra 8 microinches) on internal channels critical for osseointegration. The component required exotic machining: 7° compound angles, through-holes at 0.040\" diameter in Ti-6Al-4V, and complete traceability per FDA 21 CFR Part 820.",
      solution: "We invested in specialized tooling (diamond-coated micro-endmills) and developed custom programs for our Mazak Integrex multi-axis machines. Our quality team worked directly with the customer's regulatory affairs department to establish a compliant Quality Management System interface, including proper documentation protocols, CAPA procedures, and validation requirements. We created a dedicated cleanroom machining area meeting Class 100,000 standards and implemented lot traceability from raw material heat lot through final packaging.",
      results: [
        { label: 'First-pass quality rate', value: '99.8%' },
        { label: 'Surface finish achieved', value: 'Ra 6-7 (exceeds Ra 8 requirement)' },
        { label: 'FDA audit non-conformances', value: 'Zero' },
        { label: 'Cost reduction vs previous supplier', value: '31%' },
        { label: 'Production volume scaled to', value: '12,000 pcs/year' }
      ],
      testimonial: "Finding a machine shop that understands medical device regulations is challenging. Finding one that delivers PCI's quality and responsiveness is nearly impossible. They're an extension of our team.",
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80'
    },
    {
      title: 'Semiconductor Equipment Rapid Prototype to Production',
      industry: 'Semiconductor Capital Equipment',
      customer: 'Silicon Valley Semiconductor Equipment Startup',
      icon: '🔬',
      challenge: "Early-stage company developing next-generation lithography equipment needed to move from R&D prototypes to beta production units for customer trials. They required 140 unique precision components in exotic materials (Invar 36, Zerodur glass-ceramic, molybdenum) with angstrom-level flatness requirements on optical mounting surfaces. Timeline was aggressive: 12 weeks from final drawings to assembled beta units. Their existing prototype shop couldn't scale, and large contract manufacturers had 26-week lead times.",
      solution: "We assigned a dedicated project engineer to embed with their design team, conducting weekly DFM reviews and suggesting manufacturability improvements that maintained performance while reducing costs. Our engineering team created detailed process plans for each component, identifying which parts needed EDM, grinding, or 5-axis machining. We established a rapid-iteration process: receive drawings Monday, provide DFM feedback Wednesday, deliver first articles following Monday. For production, we set up kitted deliveries with all 140 components arriving simultaneously for customer assembly.",
      results: [
        { label: 'Delivery time', value: '11 weeks (1 week early)' },
        { label: 'Manufacturing cost reduction', value: '22% ($47K per unit)' },
        { label: 'Flatness maintained', value: '±0.0002\"' },
        { label: 'Customer funding secured', value: '$15M Series B' },
        { label: 'Program lifetime value', value: '$6.8M projected' }
      ],
      testimonial: "As a startup, we needed a manufacturing partner who could move at our speed without compromising quality. PCI's engineering team felt like our employees. We literally couldn't have launched without them.",
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80'
    },
    {
      title: 'Defense Program Cost Reduction Initiative',
      industry: 'Defense/Military Systems',
      customer: 'Major Defense Contractor',
      icon: '🛡️',
      challenge: "Customer needed to reduce costs on a mature defense program by 15% to remain competitive for contract renewal. The component family consisted of 27 different parts used in targeting systems—primarily 17-4 PH stainless steel with complex 3D geometries, some requiring heat treatment to H900 condition and subsequent grinding. Existing supplier (15-year incumbent) had limited improvement ideas, and customer needed to maintain or improve quality while cutting costs.",
      solution: "We conducted a comprehensive should-cost analysis and identified opportunities: consolidating multiple setups through better fixturing, optimizing tool paths with modern CAM software, and utilizing our in-house heat treat partners for faster turnaround. We proposed converting three components from 17-4 PH to 15-5 PH (equal performance, better machinability). Our team created family-based scheduling to maximize machine utilization and reduce setup frequency. We also identified design features that provided no functional value but added significant machining time—customer approved revisions saving 30% cycle time.",
      results: [
        { label: 'Total cost reduction', value: '19% (exceeded 15% target)' },
        { label: 'Lead time reduction', value: '50% (12 weeks to 6 weeks)' },
        { label: 'Defect rate improvement', value: '0.8% to 0.09%' },
        { label: 'On-time delivery', value: '99.7% (from 94%)' },
        { label: 'Annual program value', value: '$4.1M' }
      ],
      testimonial: "PCI approached this as true partners. They didn't just quote what we asked for—they showed us what was possible. That's the difference between a vendor and a strategic manufacturing partner.",
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80'
    }
  ]

  return (
    <main className="bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-sm font-semibold mb-6">
              Customer Success Stories
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Challenges.<br />Real Solutions.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              See how we've helped industry leaders overcome their most complex manufacturing challenges with engineering excellence and precision execution.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {caseStudies.map((study, i) => (
              <article key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="relative h-80 overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg text-white text-sm font-medium mb-4">
                      <span className="text-xl">{study.icon}</span>
                      <span>{study.industry}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">{study.title}</h2>
                    <p className="text-slate-200">Customer: {study.customer}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Challenge */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">The Challenge</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Our Solution</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">The Results</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {study.results.map((result, j) => (
                        <div key={j} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                          <div className="text-2xl font-bold text-gold mb-1">{result.value}</div>
                          <div className="text-sm text-slate-600">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl text-white">
                    <svg className="w-12 h-12 text-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-xl italic leading-relaxed mb-4">"{study.testimonial}"</p>
                    <div className="text-slate-400">— {study.customer}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how we can solve your manufacturing challenges with precision engineering and proven expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/quote" className="px-8 py-4 bg-gold hover:bg-gold/90 text-slate-900 font-semibold rounded-lg transition-all">
              Request Quote
            </a>
            <a href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
