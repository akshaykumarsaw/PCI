export default function CompanyIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Floating Badge */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/homepage/cnc-machining-action.png" 
                alt="Factory Floor" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl text-center border-4 border-white">
              <div className="text-4xl font-bold text-[#00A7E1] font-display leading-none">238,000+</div>
              <div className="text-sm text-gray-600 mt-2 font-medium">Sq Ft Manufacturing</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col gap-6">
            <div className="text-sm font-semibold text-[#00A7E1] tracking-widest uppercase">
              ENGINEERING EXCELLENCE SINCE 1987
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Precision Manufacturing<br />
              That Powers Innovation
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-600">
              For over three decades, Precision Components International has been the trusted manufacturing partner for companies pushing the boundaries of what's possible. From aerospace actuators to medical implants, we deliver the precision and quality that critical applications demand.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Our state-of-the-art facilities across three continents house the latest CNC technology, operated by expert machinists and engineers who understand that every micron matters. With AS9100D and ISO 13485 certifications, we bring aerospace-grade quality to every project.
            </p>

            {/* Mini Stats Grid */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-gray-200">
              {[
                { value: '238,000+', label: 'Sq Ft' },
                { value: '99.7%', label: 'On-Time' },
                { value: '0.08%', label: 'Defects' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-[#1E5AAA] font-display leading-none">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="/about" className="inline-flex items-center gap-2 text-[#00A7E1] font-semibold text-lg transition-all duration-300 hover:gap-3 hover:text-[#1E5AAA] self-start">
              Discover Our Story →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
