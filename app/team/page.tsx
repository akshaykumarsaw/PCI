import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TeamPage() {
  const leadership = [
    {
      name: "Michael J. Brennan",
      title: "President & CEO",
      years: "23 years with PCI",
      email: "mbrennan@pcimanufacturing.com",
      image: "/images/team/michael-brennan.png",
      bio: "Michael joined PCI in 2002 after his father, company founder Patrick Brennan, invited him into the family business. After earning his BS in Mechanical Engineering from Ohio State University and working five years at Parker Hannifin, Michael brought fresh perspective on automation and quality systems. He became President in 2009 and led the company's expansion into Mexico and Germany. Under his leadership, PCI achieved AS9100 certification and grew revenue from $12M to $47M. Michael serves on the Precision Metalforming Association board and mentors young manufacturers through the Ohio Manufacturing Extension Partnership."
    },
    {
      name: "Jennifer Kowalski",
      title: "VP of Operations",
      years: "14 years with PCI",
      email: "jkowalski@pcimanufacturing.com",
      image: "/images/team/jennifer-kowalski.png",
      bio: "Jennifer started as a production supervisor in 2011 after spending eight years in aerospace manufacturing at Eaton Corporation. She earned her MBA from Case Western Reserve while working full-time at PCI, implementing lean manufacturing principles that reduced lead times by 34%. As VP of Operations since 2018, she oversees all three facilities and spearheaded the Germany expansion. Jennifer holds certifications in Six Sigma Black Belt and is passionate about developing manufacturing talent, having created PCI's apprenticeship program that has trained 23 machinists."
    },
    {
      name: "David Chen",
      title: "Director of Sales & Business Development",
      years: "11 years with PCI",
      email: "dchen@pcimanufacturing.com",
      image: "/images/team/david-chen.png",
      bio: "David brings deep aerospace industry connections from his previous 12 years at Hexcel Corporation, where he managed key aerospace accounts. He joined PCI in 2014 to build strategic partnerships beyond the company's traditional automotive customer base. David successfully diversified PCI's portfolio into medical devices and semiconductor equipment, now representing 28% of annual revenue. He holds a BS in Materials Science from MIT and an MBA from University of Michigan. David speaks Mandarin fluently and has been instrumental in establishing PCI's relationships with Asian OEMs seeking North American manufacturing partners."
    },
    {
      name: "Robert \"Bob\" Yamamoto",
      title: "Chief Quality Officer",
      years: "19 years with PCI",
      email: "byamamoto@pcimanufacturing.com",
      image: "/images/team/bob-yamamoto.png",
      bio: "Bob joined PCI in 2006 as Quality Manager and elevated the company's quality systems to world-class standards. He led the successful AS9100 and ISO 13485 certification efforts and maintains relationships with customers' supplier quality engineering teams. Before PCI, Bob spent 14 years in quality leadership at Pratt & Whitney. He holds a BS in Industrial Engineering from Purdue University and is an ASQ Certified Quality Engineer and Auditor. Bob's team has maintained a 99.7% on-time delivery rate and less than 0.08% defect rate over the past five years. He's known for his saying: \"Quality isn't expensive, it's priceless.\""
    },
    {
      name: "Sarah Martinez",
      title: "Director of Engineering",
      years: "8 years with PCI",
      email: "smartinez@pcimanufacturing.com",
      image: "/images/team/sarah-martinez.png",
      bio: "Sarah joined PCI in 2017 after nine years in medical device manufacturing at Stryker Corporation. She leads a team of 21 engineers across three facilities, focusing on Design for Manufacturability (DFM) support that helps customers optimize components for production. Sarah holds an MS in Mechanical Engineering from Georgia Tech and has filed three patents related to precision fixturing methods. She's particularly proud of PCI's engineering internship program, which has converted 85% of interns to full-time hires. Sarah frequently presents at Society of Manufacturing Engineers conferences on precision machining topics."
    },
    {
      name: "Thomas Adler",
      title: "Director of European Operations",
      years: "2 years with PCI",
      email: "tadler@pcimanufacturing.de",
      image: "/images/team/thomas-adler.png",
      bio: "Thomas was recruited in 2022 to launch and manage PCI's Stuttgart facility, bringing 22 years of experience in German precision manufacturing. He previously held operations leadership roles at Trumpf and Arburg, where he specialized in high-mix, low-volume production environments. Thomas holds a Diplom-Ingenieur degree from RWTH Aachen University and fluently speaks German, English, and Dutch. He's been critical in establishing PCI's reputation in European aerospace and automotive markets, securing partnerships with three major German OEMs in his first 18 months. Thomas is known for his meticulous process documentation and believes \"precision is a culture, not just a measurement.\""
    },
    {
      name: "Linda Patterson",
      title: "HR Director",
      years: "16 years with PCI",
      email: "lpatterson@pcimanufacturing.com",
      image: "/images/team/linda-patterson.png",
      bio: "Linda has been with PCI since 2009, evolving the company's HR function from basic administration to strategic talent development. She created PCI's comprehensive benefits package, apprenticeship program, and employee development initiatives that have reduced turnover to just 8% annually—well below the industry average of 37%. Before PCI, Linda spent 11 years in manufacturing HR at Timken Company. She holds SHRM-SCP certification and a BS in Human Resources Management from Bowling Green State University. Linda is passionate about attracting more women and minorities into manufacturing careers and partners with local technical colleges on recruitment initiatives."
    },
    {
      name: "Gregory Foster",
      title: "Plant Manager, Mexico Operations",
      years: "9 years with PCI",
      email: "gfoster@pcimanufacturing.com",
      image: "/images/team/gregory-foster.png",
      bio: "Gregory relocated to Monterrey in 2016 to grow PCI's Mexico operations after serving four years as Production Manager in Cleveland. He's bilingual (English/Spanish) and has successfully built strong relationships with local suppliers and workforce. Before PCI, Gregory spent seven years in automotive manufacturing at Lear Corporation. He holds a BS in Industrial Technology from Kent State University and has implemented innovative cross-training programs that give the Mexico facility exceptional flexibility. Under Gregory's leadership, the Monterrey facility has achieved 99.4% on-time delivery and become PCI's most cost-efficient operation while maintaining Cleveland-equivalent quality standards."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/about/team-collaboration.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-sm font-semibold mb-6">
              Leadership Team
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet the Team Behind<br />Our Success
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our leadership team brings decades of manufacturing expertise, engineering excellence, 
              and unwavering commitment to quality and customer success.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-[300px_1fr] gap-8">
                  {/* Photo */}
                  <div className="relative h-80 md:h-auto bg-gradient-to-br from-slate-200 to-slate-300">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">{member.name}</h3>
                        <div className="text-xl text-gold font-semibold mb-1">{member.title}</div>
                        <div className="text-sm text-slate-600">{member.years}</div>
                      </div>
                      <a 
                        href={`mailto:${member.email}`}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                      </a>
                    </div>
                    
                    <div className="prose prose-slate max-w-none">
                      <p className="text-slate-700 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-slate-300 mb-8">
            We're always looking for talented individuals who share our passion for precision manufacturing and engineering excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/careers" className="px-8 py-4 bg-gold hover:bg-gold/90 text-slate-900 font-semibold rounded-lg transition-all">
              View Open Positions
            </a>
            <a href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all">
              Contact HR
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
