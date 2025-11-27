import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/80 py-12">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">PCI</h4>
            <p className="text-sm">Precision Components International</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/capabilities" className="hover:text-gold transition-colors">Capabilities</Link></li>
              <li><Link href="/industries" className="hover:text-gold transition-colors">Industries</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/capabilities" className="hover:text-gold transition-colors">CNC Machining</Link></li>
              <li><Link href="/capabilities" className="hover:text-gold transition-colors">Quality Inspection</Link></li>
              <li><Link href="/capabilities" className="hover:text-gold transition-colors">Engineering</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">Cleveland, OH</p>
            <p className="text-sm">(216) 555-0847</p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-sm">
          <p>© 2025 Precision Components International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
