import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CapabilitiesPage() {
  return (
    <main className="bg-slate-50">
      <Header />
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our <span className="text-gold">Capabilities</span></h1>
          <p className="text-xl text-slate-600 mb-12">Comprehensive manufacturing solutions for precision engineering</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {['CNC Machining', 'Additive Manufacturing', 'Quality Inspection', 'Engineering Services', 'Surface Treatment', 'Assembly'].map((cap, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{cap}</h3>
                <p className="text-slate-600">Advanced {cap.toLowerCase()} services with state-of-the-art equipment and expert technicians.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
