import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CertificationsPage() {
  return (
    <main className="bg-slate-50">
      <Header />
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Quality <span className="text-gold">Certifications</span></h1>
          <p className="text-xl text-slate-600 mb-12">Committed to the highest standards of quality and precision</p>
          
          {/* Certification Badges Banner */}
          <div className="bg-white p-12 rounded-2xl shadow-lg mb-12">
            <img 
              src="/images/certifications/certification-badges-banner.png" 
              alt="Quality Certifications" 
              className="w-full max-w-5xl mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management System' },
              { name: 'AS9100D', desc: 'Aerospace Quality Standard' },
              { name: 'ISO 13485:2016', desc: 'Medical Device Quality' }
            ].map((cert, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center border-4 border-gold/20">
                  <div className="text-2xl font-bold text-slate-900">{cert.name.split(':')[0]}</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{cert.name}</h3>
                <p className="text-slate-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
