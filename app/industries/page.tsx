import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function IndustriesPage() {
  return (
    <main className="bg-slate-50">
      <Header />
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Industries We <span className="text-gold">Serve</span></h1>
          <p className="text-xl text-slate-600 mb-12">Trusted by leaders across critical sectors</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {['Aerospace', 'Medical', 'Automotive', 'Defense', 'Industrial', 'Energy'].map((industry, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{industry}</h3>
                <p className="text-slate-600">Precision manufacturing solutions for the {industry.toLowerCase()} industry with certified quality standards.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
