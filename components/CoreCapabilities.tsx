import Link from 'next/link'

export default function CoreCapabilities() {
  const capabilities = [
    { icon: '🔧', title: '5-Axis CNC Machining', desc: 'Complex geometries with exceptional precision and surface quality', specs: ['±0.0001"', '8 Machines'] },
    { icon: '⚡', title: 'EDM Services', desc: 'Wire and sinker EDM for intricate features and hard materials', specs: ['±0.0002"', '12 Machines'] },
    { icon: '🎯', title: 'Precision Grinding', desc: 'Superior surface finishes and tight tolerances', specs: ['Ra 4μin', '18 Machines'] },
    { icon: '🎨', title: 'Surface Coating', desc: 'Anodizing, plating, and specialty coatings in-house', specs: ['Multiple', 'In-House'] },
    { icon: '⚙️', title: 'CNC Turning', desc: 'High-precision turning for cylindrical components', specs: ['±0.0001"', '24 Machines'] },
    { icon: '🔩', title: 'Swiss-Type Machining', desc: 'Small, complex parts with exceptional tolerances', specs: ['±0.0002"', '16 Machines'] },
    { icon: '✓', title: 'Quality Inspection', desc: 'CMM inspection with full dimensional reports', specs: ['AS9102', 'FAI'] },
    { icon: '📐', title: 'Engineering Support', desc: 'DFM analysis and manufacturing optimization', specs: ['Expert', 'Team'] }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Manufacturing Solutions
          </h2>
          <p className="text-xl text-gray-600">Precision engineering across all axes</p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-transparent hover:border-[#00A7E1] flex flex-col group">
              <div className="text-5xl mb-4">{cap.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{cap.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 flex-grow text-sm">{cap.desc}</p>
              
              {/* Spec Badges */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {cap.specs.map((spec, j) => (
                  <span key={j} className="bg-gray-100 text-[#1E5AAA] px-3 py-1 rounded-md text-xs font-semibold font-display">
                    {spec}
                  </span>
                ))}
              </div>
              
              <Link href="/capabilities" className="inline-flex items-center gap-2 text-[#00A7E1] font-semibold text-sm transition-all duration-200 group-hover:gap-3 group-hover:text-[#1E5AAA]">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link href="/capabilities" className="inline-block bg-[#FF6B35] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#E65A28] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B35]/30">
            Explore All Capabilities
          </Link>
        </div>
      </div>
    </section>
  )
}
