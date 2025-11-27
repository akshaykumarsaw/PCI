'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-slate-900/60 backdrop-blur-md'}`}>
      <div className="max-w-[1536px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-2xl font-bold text-white">PCI</div>
          <div className="hidden md:flex flex-col text-xs leading-tight text-white/80">
            <span className="font-semibold">PRECISION COMPONENTS</span>
            <span>INTERNATIONAL</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-[#D4AF37] transition-colors font-medium">Home</Link>
          <Link href="/about" className="text-white hover:text-[#D4AF37] transition-colors font-medium">About Us</Link>
          
          <div className="relative group">
            <button className="text-white hover:text-[#D4AF37] transition-colors font-medium flex items-center gap-1">
              Capabilities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/capabilities" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-t-lg">All Capabilities</Link>
              <Link href="/equipment" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-b-lg">Equipment List</Link>
            </div>
          </div>

          <Link href="/industries" className="text-white hover:text-[#D4AF37] transition-colors font-medium">Industries</Link>
          <Link href="/facilities" className="text-white hover:text-[#D4AF37] transition-colors font-medium">Facilities</Link>
          <Link href="/case-studies" className="text-white hover:text-[#D4AF37] transition-colors font-medium">Case Studies</Link>
          <Link href="/team" className="text-white hover:text-[#D4AF37] transition-colors font-medium">Team</Link>
          <Link href="/faq" className="text-white hover:text-[#D4AF37] transition-colors font-medium">FAQ</Link>
          <Link href="/contact" className="text-white hover:text-[#D4AF37] transition-colors font-medium">Contact</Link>
        </nav>

        <Link href="/quote" className="bg-[#D4AF37] text-slate-900 px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 hover:bg-[#C5A572] hover:shadow-lg">
          Request Quote
        </Link>
      </div>
    </header>
  )
}
