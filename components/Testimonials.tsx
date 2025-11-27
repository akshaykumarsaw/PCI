'use client'

import { useState } from 'react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "PCI didn't just manufacture parts—they engineered a solution that saved our program. Their responsiveness and technical capability exceeded anything we'd experienced with offshore suppliers.",
      author: "Sarah Venkatesan",
      title: "Senior Procurement Engineer",
      company: "Major Aerospace OEM"
    },
    {
      quote: "Manufacturing medical devices requires a partner who understands regulatory requirements. PCI does both. Their quality system integrates seamlessly with ours, and they've never failed an audit.",
      author: "Dr. Michael Steinberg",
      title: "VP Engineering",
      company: "Medical Device Company"
    },
    {
      quote: "PCI handles our most sensitive ITAR-controlled components. Their security protocols are excellent, and they maintain operational security better than facilities twice their size.",
      author: "James Peterson",
      title: "Director of Operations",
      company: "Defense Contractor"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#0A2239] to-[#1E5AAA] text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Trusted By Industry Leaders</h2>

        <div className="flex items-center gap-8 mb-8">
          <button 
            onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)} 
            className="hidden md:flex w-12 h-12 rounded-full bg-white/10 border border-white/20 items-center justify-center text-2xl transition-all duration-300 hover:bg-white/20 hover:scale-110" 
            aria-label="Previous"
          >
            ←
          </button>

          <div className="flex-1 text-center">
            <div className="text-6xl text-[#D4AF37] leading-none mb-4 font-serif">"</div>
            <p className="text-2xl md:text-3xl leading-relaxed text-white/95 mb-6 font-normal">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold text-[#D4AF37]">{testimonials[currentIndex].author}</div>
              <div className="text-base text-white/80">
                {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
              </div>
            </div>
          </div>

          <button 
            onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)} 
            className="hidden md:flex w-12 h-12 rounded-full bg-white/10 border border-white/20 items-center justify-center text-2xl transition-all duration-300 hover:bg-white/20 hover:scale-110" 
            aria-label="Next"
          >
            →
          </button>
        </div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentIndex(index)} 
              className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[#D4AF37]' : 'w-3 bg-white/30'}`} 
              aria-label={`Go to testimonial ${index + 1}`} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
