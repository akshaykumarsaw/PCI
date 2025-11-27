import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function QuotePage() {
  return (
    <main className="bg-slate-50">
      <Header />
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Request a <span className="text-gold">Quote</span></h1>
          <p className="text-xl text-slate-600 mb-12">Tell us about your project and we'll get back to you within 24 hours</p>
          
          <div className="bg-white p-12 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-gold" />
                <input type="text" placeholder="Last Name" className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-gold" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="email" placeholder="Email" className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-gold" />
                <input type="tel" placeholder="Phone" className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-gold" />
              </div>
              <input type="text" placeholder="Company Name" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-gold" />
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-gold">
                <option>Select Industry</option>
                <option>Aerospace</option>
                <option>Medical</option>
                <option>Automotive</option>
                <option>Defense</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Project Details" rows={6} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-gold"></textarea>
              <button type="submit" className="w-full bg-gold text-slate-900 px-6 py-4 rounded-lg font-semibold text-lg hover:bg-gold-dark transition-colors">
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
