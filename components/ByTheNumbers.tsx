'use client'

import { useEffect, useRef, useState } from 'react'

export default function ByTheNumbers() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { value: 215, suffix: '+', label: 'Employees' },
    { value: 99.7, suffix: '%', label: 'On-Time Delivery' },
    { value: 0.08, suffix: '%', label: 'Defect Rate' },
    { value: 38, suffix: '', label: 'Years Experience' },
    { value: 88, suffix: '', label: 'CNC Machines' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#0A2239] to-[#1E5AAA] text-white">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Precision By The Numbers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 relative">
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/20" />
              )}
              <div className="text-5xl md:text-6xl font-bold font-display text-[#D4AF37] leading-none mb-3 transition-all duration-1000">
                {isVisible ? stat.value : 0}{stat.suffix}
              </div>
              <div className="text-base text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
