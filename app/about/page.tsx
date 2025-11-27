import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const values = [
    {
      title: "Precision in Everything",
      description: "We obsess over details because our customers' success depends on it. Precision isn't just about tolerances—it's how we communicate, solve problems, and honor commitments."
    },
    {
      title: "Engineering-First Mindset",
      description: "We don't just make parts; we solve engineering challenges. Our team thinks critically, asks questions, and brings manufacturability expertise that makes our customers' products better."
    },
    {
      title: "Relentless Quality",
      description: "Quality is not negotiable. We build it into every process, inspect it at every step, and continuously improve our systems. Our customers trust us with critical components because we've earned that trust through consistent execution."
    },
    {
      title: "Integrity & Transparency",
      description: "We do what we say we'll do. When challenges arise, we communicate openly and work collaboratively toward solutions. Our handshake means something."
    },
    {
      title: "People Matter",
      description: "Our employees are our greatest asset. We invest in training, provide safe working environments, offer competitive benefits, and create opportunities for growth. Diverse perspectives make us stronger."
    },
    {
      title: "Continuous Improvement",
      description: "Good enough isn't good enough. We embrace lean principles, learn from mistakes, invest in technology, and constantly ask 'how can we do this better?'"
    },
    {
      title: "Partnership Approach",
      description: "Our customers aren't just accounts; they're partners. We succeed when they succeed. We share ideas, provide honest feedback, and align our goals with theirs."
    }
  ];

  return (
    <main className="bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-sm font-semibold mb-6">
              Engineering Excellence Since 1987
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Precision Manufacturing<br />That Powers Innovation
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              For 38 years, we've been delivering precision-machined components that enable our customers to build world-changing products.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Founded in March 1987, Precision Components International began as a small machine shop in Cleveland, Ohio. Under the leadership of founder Patrick Brennan, we built our reputation on quality, precision, and customer service.
                </p>
                <p>
                  In 2009, Michael J. Brennan took the helm as President & CEO, leading PCI through transformative growth. We achieved AS9100 aerospace certification, expanded into medical devices with ISO 13485, and opened facilities in Monterrey, Mexico (2012) and Stuttgart, Germany (2022).
                </p>
                <p>
                  Today, with 215+ employees across three continents and 238,000+ square feet of advanced manufacturing space, we serve aerospace, medical device, defense, and industrial customers worldwide. Our revenue has grown from $12M to $47M under Michael's leadership, but our commitment to quality and customer partnership remains unchanged.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/about/company-story.png" alt="Company Story" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-2xl">
              <div className="text-gold text-sm font-semibold mb-4">OUR MISSION</div>
              <p className="text-xl leading-relaxed">
                Precision Components International delivers precision-machined components that enable our customers to build world-changing products. We combine advanced manufacturing technology with engineering expertise and unwavering commitment to quality, serving as a trusted partner to aerospace, medical device, defense, and industrial innovators worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gold to-yellow-600 text-slate-900 p-10 rounded-2xl">
              <div className="text-slate-900 text-sm font-semibold mb-4">OUR VISION</div>
              <p className="text-xl leading-relaxed">
                To be recognized globally as the precision manufacturing partner of choice for companies developing critical technologies—known for engineering excellence, quality leadership, and the ability to solve manufacturing challenges others can't.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Our Core Values</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              These principles guide every decision we make and every component we manufacture.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-gold hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Precision By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '215+', label: 'Employees' },
              { value: '99.7%', label: 'On-Time Delivery' },
              { value: '0.08%', label: 'Defect Rate' },
              { value: '38', label: 'Years Experience' },
              { value: '238K+', label: 'Sq Ft Facilities' },
              { value: '88+', label: 'CNC Machines' },
              { value: '3', label: 'Global Facilities' },
              { value: '8%', label: 'Turnover Rate' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Experience the PCI difference. Let's discuss how we can support your precision manufacturing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-gold hover:bg-gold/90 text-slate-900 font-semibold rounded-lg transition-all">
              Contact Us
            </a>
            <a href="/team" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
