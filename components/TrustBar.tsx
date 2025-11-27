export default function TrustBar() {
  const certifications = [
    { name: 'ISO 9001:2015', label: 'Quality' },
    { name: 'AS9100D', label: 'Aerospace' },
    { name: 'ISO 13485:2016', label: 'Medical' },
    { name: 'ITAR Registered', label: 'Defense' },
    { name: '99.7% OTD', label: 'On-Time' }
  ]

  return (
    <section className="bg-gray-50 py-8 border-b border-gray-200">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
        <div className="flex justify-around items-center gap-6 flex-wrap">
          {certifications.map((cert, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00A7E1] to-[#1E5AAA] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                ✓
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-sm">{cert.name}</div>
                <div className="text-xs text-gray-600">{cert.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
