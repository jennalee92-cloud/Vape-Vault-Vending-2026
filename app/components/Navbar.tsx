import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-purple-900/20 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-orange-500">Vape</span>
              <span className="text-white">Vault</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-purple-400 transition">Home</Link>
            <Link href="/about" className="text-sm font-medium hover:text-purple-400 transition">About</Link>
            <Link href="/services" className="text-sm font-medium hover:text-purple-400 transition">Services</Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-purple-400 transition">Pricing</Link>
            <Link href="/faq" className="text-sm font-medium hover:text-purple-400 transition">FAQ</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-purple-400 transition">Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a href="tel:432-661-8982" className="flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition">
              <Phone size={18} />
              <span className="hidden sm:inline">432-661-8982</span>
            </a>
            <Link href="/contact" className="rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold hover:bg-purple-700 transition">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
