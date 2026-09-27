import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[#c7ff32] text-sm font-black text-black">VVV</span>
            <div className="text-left text-[11px] font-black uppercase tracking-[0.18em] leading-tight sm:text-sm">
              <div className="text-white">Vape Vault</div>
              <div className="text-[#c7ff32]">Vending</div>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden items-center gap-7 md:flex">
            <Link href="/" className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition hover:text-[#c7ff32]">Home</Link>
            <Link href="/about" className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition hover:text-[#c7ff32]">About</Link>
            <Link href="/services" className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition hover:text-[#c7ff32]">Services</Link>
            <Link href="/pricing" className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition hover:text-[#c7ff32]">Pricing</Link>
            <Link href="/merch" className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition hover:text-[#c7ff32]">Merch</Link>
            <Link href="/faq" className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition hover:text-[#c7ff32]">FAQ</Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a href="tel:432-661-8982" className="hidden items-center gap-2 text-xs font-bold text-white/60 transition hover:text-[#c7ff32] lg:flex">
              <Phone size={18} />
              <span className="hidden sm:inline">432-661-8982</span>
            </a>
            <Link href="/contact" className="group flex items-center gap-2 bg-[#c7ff32] px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-white">
              Start Here <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
