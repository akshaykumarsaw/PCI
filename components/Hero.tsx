'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video autoplay failed:', err))
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto">
          <source src="/videos/CNC_Machine_Background_Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/30 to-slate-900/40" />
      </div>

      <div className="relative z-10 text-center text-white max-w-6xl px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/30">
          <span className="text-[#D4AF37] font-semibold">38 Years of Excellence</span>
          <span className="text-white/50">|</span>
          <span className="text-white font-medium">AS9100D Certified</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight drop-shadow-lg">
          <span className="text-white">Precision Engineering</span><br />
          <span className="text-white">That Delivers Results</span>
        </h1>

        {/* Stats Bar */}
        <div className="inline-flex items-center gap-1 bg-slate-800/50 backdrop-blur-md border border-white/20 rounded-lg p-2 mb-12">
          <div className="px-6 py-3 text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">215+</div>
            <div className="text-xs md:text-sm text-white/90">Experts</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="px-6 py-3 text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">99.7%</div>
            <div className="text-xs md:text-sm text-white/90">On-Time</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="px-6 py-3 text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">3</div>
            <div className="text-xs md:text-sm text-white/90">Global Facilities</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/quote" className="bg-[#FF6B35] text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#E65A28] hover:-translate-y-1 hover:shadow-xl">
            Request Quote
          </a>
          <a href="/capabilities" className="bg-transparent text-white border-2 border-white/50 px-10 py-4 rounded-lg font-semibold text-lg backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-1">
            Explore Capabilities
          </a>
        </div>
      </div>
    </section>
  )
}
