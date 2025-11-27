'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CoreCapabilities from '@/components/CoreCapabilities'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <CoreCapabilities />
      <Certifications />
      <Footer />
    </main>
  )
}
