import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function EquipmentPage() {
  const equipment = {
    '5-Axis CNC Machining Centers': [
      { name: 'DMG MORI DMU 65 monoBLOCK', qty: 3, specs: 'Travel: 650x650x560mm, 18,000 RPM, 0.001mm repeatability' },
      { name: 'Mazak Integrex i-400S', qty: 2, specs: 'Multi-tasking, 5-axis simultaneous, live tooling, 12,000 RPM' },
      { name: 'Haas UMC-750SS', qty: 2, specs: 'Travel: 762x508x508mm, 12,000 RPM, 32+1 tool capacity' },
      { name: 'Hermle C42U', qty: 1, specs: 'Travel: 850x1000x550mm, 18,000 RPM, 5-sided machining' }
    ],
    '3-Axis CNC Vertical Machining Centers': [
      { name: 'Haas VF-4SS', qty: 8, specs: 'Travel: 1270x508x635mm, 12,000 RPM, high-speed machining' },
      { name: 'Mazak VCN-530C', qty: 5, specs: 'Travel: 1050x530x510mm, 12,000 RPM, 30-tool capacity' },
      { name: 'Okuma Genos M560-V', qty: 4, specs: 'Travel: 1420x560x510mm, 12,000 RPM' },
      { name: 'Doosan DNM 500', qty: 3, specs: 'Travel: 1020x530x530mm, 10,000 RPM' }
    ],
    'CNC Turning Centers': [
      { name: 'Mazak Quick Turn Smart 250M', qty: 6, specs: '10" chuck, 25.6" length, live tooling, sub-spindle' },
      { name: 'Haas ST-30', qty: 4, specs: '12" chuck, 28" length, live tooling' },
      { name: 'Okuma LB3000 EX II', qty: 2, specs: '15" chuck, 80" length, heavy-duty turning' }
    ],
    'Swiss-Type Lathes': [
      { name: 'Tsugami SS327-III', qty: 3, specs: '32mm bar capacity, 7-axis, sub-spindle' },
      { name: 'Star SR-32J', qty: 2, specs: '32mm bar capacity, guide bush type' }
    ],
    'EDM (Electrical Discharge Machining)': [
      { name: 'Makino EDGE3', qty: 4, specs: 'Wire EDM, 0.0001" accuracy, 400x600x300mm capacity' },
      { name: 'Sodick VL400Q', qty: 2, specs: 'Wire EDM, linear motor drives, 0.00004" accuracy' },
      { name: 'Makino EDNC43', qty: 2, specs: 'Sinker EDM, 15.75x11.81x11.81" capacity' }
    ],
    'Grinding Equipment': [
      { name: 'Studer S33', qty: 4, specs: 'Universal cylindrical grinder, 0.0001" accuracy' },
      { name: 'Haas TL-1', qty: 3, specs: 'CNC tool room lathe with grinding capability' },
      { name: 'Okamoto ACC-1224DX', qty: 2, specs: 'Surface grinder, 12x24" capacity, automatic' },
      { name: 'ANCA FX7', qty: 2, specs: 'Tool and cutter grinder, 7-axis CNC' },
      { name: 'Junker JUMAT 5000', qty: 1, specs: 'High-production cylindrical grinding' }
    ],
    'Inspection & Quality': [
      { name: 'Zeiss Contura G2', qty: 2, specs: 'CMM, 1000x1200x600mm, tactile/optical scanning' },
      { name: 'Zeiss O-Inspect 543', qty: 1, specs: 'Multi-sensor CMM with optical and tactile' },
      { name: 'Mitutoyo Crysta-Apex S574', qty: 4, specs: 'CMM, 500x700x400mm' }
    ]
  }

  return (
    <main className="bg-slate-50">
      <Header />
      <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Equipment <span className="text-[#D4AF37]">List</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art precision manufacturing equipment across our Cleveland, Monterrey, and Stuttgart facilities
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(equipment).map(([category, items]) => (
              <div key={category} className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-[#D4AF37] pb-4">
                  {category}
                </h2>
                <div className="space-y-4">
                  {items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#00A7E1] to-[#1E5AAA] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        {item.qty}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.specs}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-[#0A2239] to-[#1E5AAA] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Total Equipment Count</h2>
            <div className="text-6xl font-bold text-[#D4AF37] mb-4">88+</div>
            <p className="text-xl">CNC Machines & Precision Equipment</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
