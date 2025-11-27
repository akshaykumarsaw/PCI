import Link from 'next/link'

export default function FeaturedCaseStudy() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/quality/quality-inspection-cmm.png" 
                alt="Aerospace Actuator Housing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-6">
            <div className="text-sm font-semibold text-[#00A7E1] tracking-widest uppercase">SUCCESS STORY</div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Aerospace Actuator Housing Rescue
            </h2>
            
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg font-medium text-gray-900 self-start">
              <span className="text-xl">✈️</span>
              <span>Aerospace & Defense</span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                A Tier 1 aerospace supplier faced chronic porosity issues with 40% scrap rates, threatening a major aircraft OEM delivery schedule. The component required machining on all six sides with ±0.001" positional tolerances with only 8 weeks until deadline.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                We switched from castings to billet 7075-T6 aluminum, redesigned internal geometry, and created custom fixtures for our 5-axis DMU 65 machines allowing complete machining in two operations instead of six.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#00C896]">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">The Results</h3>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '18%', label: 'Cost Savings' },
                  { value: 'Zero', label: 'Defects' },
                  { value: '6 Weeks', label: 'Delivery Time' }
                ].map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-[#00C896] font-display leading-none mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="p-6 border-l-4 border-[#D4AF37] bg-gray-50 rounded-lg italic text-gray-700 leading-relaxed">
              "PCI didn't just manufacture parts—they engineered a solution that saved our program. Their responsiveness exceeded anything we'd experienced before."
              <cite className="block mt-3 not-italic font-semibold text-gray-900">— Sarah Venkatesan, Senior Procurement Engineer</cite>
            </blockquote>

            <Link href="/case-studies" className="inline-flex items-center gap-2 text-[#00A7E1] font-semibold text-lg transition-all duration-300 hover:gap-3 hover:text-[#1E5AAA] self-start">
              View All Case Studies →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
