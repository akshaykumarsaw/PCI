import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FacilitiesPage() {
  const facilities = [
    {
      name: "Cleveland Headquarters",
      location: "Cleveland, OH, USA",
      address: "2847 Industrial Parkway, Cleveland, OH 44135",
      phone: "(216) 555-0847",
      sqft: "127,000",
      established: "1987",
      staff: {
        production: 98,
        engineering: 12,
        administrative: 15
      },
      shifts: "2 shifts (6am-2:30pm, 2:30pm-11pm) + selective 3rd shift",
      equipment: "47 CNC machines, 8 EDM units, 12 grinding stations",
      image: "/images/facilities/cleveland-facility.png",
      certifications: ["ISO 9001:2015", "AS9100D", "ISO 13485:2016", "ITAR Registered"],
      description: "Our flagship facility and company headquarters, featuring state-of-the-art 5-axis machining centers, EDM capabilities, and precision grinding equipment. This facility serves aerospace, medical device, and defense customers with the highest quality standards."
    },
    {
      name: "Monterrey Facility",
      location: "Monterrey, Mexico",
      address: "Parque Industrial Milenium, Carretera Miguel Alemán KM 24.5, Apodaca, N.L. 66627, Mexico",
      phone: "+52 81 8144 2890",
      sqft: "68,000",
      established: "2012",
      staff: {
        production: 52,
        engineering: 4,
        administrative: 8
      },
      shifts: "2 shifts",
      equipment: "23 CNC machines, 4 EDM units, 6 grinding stations",
      image: "/images/facilities/monterrey-facility.png",
      certifications: ["ISO 9001:2015", "AS9100D"],
      description: "Our Mexico facility provides cost-effective manufacturing solutions while maintaining Cleveland-equivalent quality standards. Strategically located to serve North American customers with competitive pricing and excellent lead times."
    },
    {
      name: "Stuttgart Facility",
      location: "Stuttgart, Germany",
      address: "Siemensstraße 47, 70469 Stuttgart, Germany",
      phone: "+49 711 8936 420",
      sqft: "43,000",
      established: "2022",
      staff: {
        production: 35,
        engineering: 5,
        administrative: 7
      },
      shifts: "2 shifts",
      equipment: "18 CNC machines, 3 EDM units, 5 grinding stations",
      image: "/images/facilities/stuttgart-facility.png",
      certifications: ["ISO 9001:2015"],
      description: "Our newest facility serves European aerospace and automotive markets with German precision standards. Provides local support and faster delivery times for European customers while maintaining PCI's global quality reputation."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/facility-hero.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-sm font-semibold mb-6">
              Global Manufacturing Excellence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Three Facilities.<br />One Standard of Excellence.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              238,000+ square feet of advanced manufacturing space across three continents, 
              serving customers worldwide with consistent quality and precision.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-gold">238K+</div>
                <div className="text-slate-400 mt-2">Total Sq Ft</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold">215+</div>
                <div className="text-slate-400 mt-2">Employees</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold">88+</div>
                <div className="text-slate-400 mt-2">CNC Machines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {facilities.map((facility, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-96 bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                    <img src={facility.image} alt={facility.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-slate-900">Est. {facility.established}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full mb-4">
                    {facility.location}
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">{facility.name}</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-2xl font-bold text-gold">{facility.sqft.toLocaleString()}</div>
                      <div className="text-sm text-slate-600">Square Feet</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-2xl font-bold text-gold">{facility.staff.production + facility.staff.engineering + facility.staff.administrative}</div>
                      <div className="text-sm text-slate-600">Total Staff</div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Address</div>
                        <div className="text-sm text-slate-600">{facility.address}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Phone</div>
                        <div className="text-sm text-slate-600">{facility.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Operations</div>
                        <div className="text-sm text-slate-600">{facility.shifts}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Equipment</div>
                        <div className="text-sm text-slate-600">{facility.equipment}</div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <div className="text-sm font-semibold text-slate-900 mb-2">Certifications</div>
                    <div className="flex flex-wrap gap-2">
                      {facility.certifications.map((cert, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact any of our facilities to discuss your precision manufacturing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-gold hover:bg-gold/90 text-slate-900 font-semibold rounded-lg transition-all">
              Contact Us
            </a>
            <a href="/quote" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all">
              Request Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
