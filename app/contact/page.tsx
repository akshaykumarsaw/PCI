import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      <Header />
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Contact <span className="text-gold">Us</span></h1>
          <p className="text-xl text-slate-600 mb-12">Get in touch with our team</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-gold" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-gold" />
                <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-gold"></textarea>
                <button type="submit" className="w-full bg-gold text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Cleveland, OH (HQ)</h3>
                <p className="text-slate-600">1234 Manufacturing Drive<br />Cleveland, OH 44101</p>
                <p className="text-gold font-semibold mt-4">(216) 555-0847</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Business Hours</h3>
                <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
