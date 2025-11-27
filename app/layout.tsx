import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Precision Components International | AS9100D Certified Manufacturing',
  description: 'Precision engineering and manufacturing for aerospace, medical, and industrial sectors. AS9100D certified. 38 years of excellence.',
  keywords: 'precision manufacturing, CNC machining, aerospace manufacturing, medical device manufacturing, AS9100D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
