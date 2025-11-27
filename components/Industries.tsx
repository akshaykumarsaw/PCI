import Link from 'next/link'

export default function Industries() {
  const industries = [
    { icon: '✈️', name: 'Aerospace & Defense', badges: ['AS9100D', 'ITAR'], desc: 'Mission-critical components for aviation and defense applications', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80' },
    { icon: '⚕️', name: 'Medical Devices', badges: ['ISO 13485'], desc: 'Precision implants and surgical instruments with biocompatible materials', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80' },
    { icon: '⚙️', name: 'Industrial Automation', badges: [], desc: 'Robotics and automation components for manufacturing excellence', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80' },
    { icon: '🔬', name: 'Semiconductor Equipment', badges: [], desc: 'Ultra-precision components for semiconductor manufacturing', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80' },
    { icon: '🤖', name: 'Robotics', badges: [], desc: 'Advanced robotic system components and assemblies', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80' },
    { icon: '⚡', name: 'Energy Sector', badges: [], desc: 'Power generation and distribution precision parts', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80' }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted Across Critical Sectors
          </h2>
          <p className="text-xl text-gray-600">Delivering precision for industries that demand excellence</p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, i) => (
            <Link key={i} href="/industries" className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer">
              {/* Background Image */}
              <img 
                src={industry.image} 
                alt={industry.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent transition-all duration-300 group-hover:from-slate-900/95" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <div className="text-5xl mb-3">{industry.icon}</div>
                <h3 className="text-3xl font-semibold mb-3">{industry.name}</h3>
                
                {/* Badges */}
                {industry.badges.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {industry.badges.map((badge, j) => (
                      <span key={j} className="bg-[#C5A572]/20 text-[#D4AF37] px-3 py-1 rounded-md text-sm font-semibold border border-[#C5A572]/30">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Description - appears on hover */}
                <p className="text-white/90 leading-relaxed mb-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {industry.desc}
                </p>
                
                <div className="inline-flex items-center gap-2 text-[#00A7E1] font-semibold transition-all duration-200 group-hover:gap-3">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
