'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Services & Capabilities",
      questions: [
        {
          q: "What industries do you serve?",
          a: "We primarily serve aerospace & defense, medical devices, semiconductor equipment, industrial automation, robotics, and energy sectors. Our certifications (ISO 9001, AS9100, ISO 13485, ITAR) enable us to handle regulated industries with strict quality requirements."
        },
        {
          q: "What materials can you machine?",
          a: "We machine aluminum alloys, stainless steels, tool steels, titanium, Inconel and exotic alloys, copper/brass/bronze, and engineering plastics. If it's machinable, we've likely worked with it. We're happy to discuss specific materials for your application."
        },
        {
          q: "What tolerances can you hold?",
          a: "Standard tolerances are ±0.005\" on most features. We routinely hold ±0.001\" and can achieve ±0.0002\" on critical features using advanced equipment and processes. Geometric tolerancing per ASME Y14.5-2018 standards."
        },
        {
          q: "Can you handle secondary operations?",
          a: "Yes. We coordinate heat treating, plating, anodizing, passivation, painting, and other finishing processes through qualified partners. We manage the entire supply chain so you receive finished, ready-to-use components."
        },
        {
          q: "Do you provide assembly services?",
          a: "Yes, we offer sub-assembly and full assembly services. Our clean room environment is suitable for medical device assemblies, and we can handle both mechanical and electro-mechanical assemblies."
        }
      ]
    },
    {
      category: "Engineering Support",
      questions: [
        {
          q: "Do you provide design and engineering support?",
          a: "Yes! Our engineering team offers Design for Manufacturability (DFM) reviews, material recommendations, tolerance analysis, and cost optimization suggestions. Many customers involve us early in their design process to avoid expensive changes later."
        },
        {
          q: "What file formats do you accept?",
          a: "We accept most CAD formats: STEP, IGES, Parasolid, SolidWorks, Inventor, CATIA, Pro/E, and others. 2D drawings should be PDF format with clear dimensioning and tolerance callouts."
        }
      ]
    },
    {
      category: "Ordering & Pricing",
      questions: [
        {
          q: "What are your typical lead times?",
          a: "Lead times vary by project complexity: prototype/first article parts typically 2-3 weeks, production orders 4-8 weeks depending on quantity and processes required. We offer expedited services for urgent needs."
        },
        {
          q: "What's your minimum order quantity?",
          a: "We handle everything from one-off prototypes to high-volume production runs. No minimum quantity, though pricing is optimized at different volume levels."
        },
        {
          q: "How do I get a quote?",
          a: "Submit an RFQ through our website with drawings (PDF, STEP, IGES), quantities, and material requirements. Our team typically responds within 48 business hours. Complex projects may require additional clarification."
        }
      ]
    },
    {
      category: "Quality & Compliance",
      questions: [
        {
          q: "What quality inspections do you perform?",
          a: "We perform first article inspection (FAI), in-process inspections, and final inspection using CMM, optical comparators, surface finish testers, and calibrated hand tools. Inspection reports provided with shipments. We can accommodate customer-specific inspection requirements and formats."
        },
        {
          q: "Do you provide material certifications?",
          a: "Yes. We provide full material traceability including mill test reports (MTRs), certificates of conformance (C of C), and chemical composition reports. All materials are traceable to original heat lots."
        },
        {
          q: "Can you handle ITAR/controlled materials?",
          a: "Yes. Our Cleveland facility is ITAR registered, and we have established protocols for handling ITAR-controlled technical data and materials. Relevant personnel maintain required clearances and complete annual training."
        }
      ]
    },
    {
      category: "Logistics & International",
      questions: [
        {
          q: "Do you export internationally?",
          a: "Yes. We have experience with international shipping, export documentation, and customs requirements. Our Germany facility serves European customers directly, reducing shipping time and costs."
        },
        {
          q: "Can I tour your facility?",
          a: "Absolutely! We welcome customer audits and facility tours (subject to availability and ITAR/NDA requirements). Contact your sales representative to schedule a visit."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-sm font-semibold mb-6">
              Frequently Asked Questions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Find answers to common questions about our capabilities, processes, and services. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-gold">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div 
                      key={qIndex}
                      className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-semibold text-slate-900 text-lg">{faq.q}</span>
                        <svg 
                          className={`w-6 h-6 text-gold flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Our team is here to help. Contact us directly and we'll provide the answers you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-gold hover:bg-gold/90 text-slate-900 font-semibold rounded-lg transition-all">
              Contact Us
            </a>
            <a href="/quote" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all">
              Request Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
