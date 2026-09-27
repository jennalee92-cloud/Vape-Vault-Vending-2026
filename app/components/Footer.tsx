import Link from 'next/link'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/services#how-it-works' },
  { label: 'Services', href: '/services' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const venueLinks = [
  { label: 'Get a Machine', href: '/contact' },
  { label: 'How It Works', href: '/services#how-it-works' },
  { label: 'Revenue Potential', href: '/pricing#revenue-calculator' },
  { label: 'Request a Placement', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer aria-labelledby="footer-heading" className="border-t border-white/10 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <h2 id="footer-heading" className="sr-only">Vape Vault Vending footer</h2>

        <div className="grid gap-12 lg:grid-cols-[1.35fr_.8fr_.8fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <Link href="/" aria-label="Vape Vault Vending home" className="group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7ff32] focus-visible:ring-offset-4 focus-visible:ring-offset-[#09090b]">
              <span className="flex h-10 w-10 items-center justify-center bg-[#c7ff32] text-sm font-black text-black transition group-hover:bg-white">VVV</span>
              <span className="text-left text-sm font-black uppercase tracking-[0.18em] leading-tight">
                <span className="block text-white">Vape Vault</span>
                <span className="block text-[#c7ff32]">Vending</span>
              </span>
            </Link>
            <p className="mt-7 max-w-xs text-sm leading-6 text-white/55">Premium automated vending solutions for bars, nightclubs, hotels, casinos, and entertainment venues.</p>
            <Link href="/contact" className="group mt-7 inline-flex min-h-11 items-center gap-2 border border-white/20 px-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-[#c7ff32] hover:text-[#c7ff32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c7ff32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]">
              Start a conversation <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <nav aria-label="Company">
            <h3 className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-[#c7ff32]">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => <li key={link.href + link.label}><Link href={link.href} className="inline-flex min-h-7 items-center text-sm text-white/55 transition hover:text-white focus:outline-none focus-visible:text-[#c7ff32] focus-visible:ring-2 focus-visible:ring-[#c7ff32]">{link.label}</Link></li>)}
            </ul>
          </nav>

          <nav aria-label="For venues">
            <h3 className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-[#c7ff32]">For Venues</h3>
            <ul className="space-y-3">
              {venueLinks.map((link) => <li key={link.href + link.label}><Link href={link.href} className="inline-flex min-h-7 items-center text-sm text-white/55 transition hover:text-white focus:outline-none focus-visible:text-[#c7ff32] focus-visible:ring-2 focus-visible:ring-[#c7ff32]">{link.label}</Link></li>)}
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-[#c7ff32]">Get In Touch</h3>
            <div className="space-y-4 text-sm">
              <a href="tel:432-661-8982" className="flex min-h-7 items-center gap-3 text-white/65 transition hover:text-[#d946ef] focus:outline-none focus-visible:text-[#d946ef] focus-visible:ring-2 focus-visible:ring-[#d946ef]">
                <Phone size={16} aria-hidden="true" className="text-[#d946ef]" />
                <span>432-661-8982</span>
              </a>
              <a href="mailto:VapeVaultVendingLLC26@gmail.com" className="flex min-h-7 items-start gap-3 break-all text-white/65 transition hover:text-[#d946ef] focus:outline-none focus-visible:text-[#d946ef] focus-visible:ring-2 focus-visible:ring-[#d946ef]">
                <Mail size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[#d946ef]" />
                <span>VapeVaultVendingLLC26@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Vape Vault Vending. All rights reserved.</p>
          <p>Built for venues after dark.</p>
        </div>
      </div>
    </footer>
  )
}
