'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/merch', label: 'Merch' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition hover:text-[#c7ff32]">{link.label}</Link>
            ))}
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
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition hover:border-[#c7ff32] hover:text-[#c7ff32] lg:hidden"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-nav-menu" className="flex flex-col gap-1 border-t border-white/10 pb-6 pt-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-12 items-center text-sm font-bold uppercase tracking-[0.16em] text-white/70 transition hover:text-[#c7ff32]"
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:432-661-8982" onClick={() => setIsMenuOpen(false)} className="flex min-h-12 items-center gap-2 text-sm font-bold text-white/70 transition hover:text-[#c7ff32]">
              <Phone size={18} />
              432-661-8982
            </a>
          </div>
        )}
      </div>

    </nav>
  )
}
