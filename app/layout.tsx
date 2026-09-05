import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vape Vault Vending - Premium Vending Machine Solutions',
  description: 'Turnkey vape vending solutions with pure profit and passive income. VapeTM flagship machines with 24/7 support.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
        {children}
      </body>
    </html>
  )
}
