import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/20 bg-slate-950/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 text-xl font-bold">
              <span className="text-orange-500">Vape</span>
              <span className="text-white">Vault</span>
            </div>
            <p className="text-sm text-gray-400">Turnkey vape vending solutions for pure profit and passive income.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-purple-400">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-purple-400">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-purple-400">Services</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-purple-400">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-gray-400 hover:text-purple-400">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-purple-400">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <a href="tel:432-661-8982" className="flex items-center gap-2 text-gray-400 hover:text-orange-500">
                <Phone size={16} /> 432-661-8982
              </a>
              <a href="mailto:VapeVaultVendingLLC26@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-orange-500">
                <Mail size={16} /> Email us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-purple-900/20 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Vape Vault Vending. All rights reserved.</p>
          <p className="mt-2 text-xs">*Revenue estimates based on average machine performance. Individual results vary by venue traffic and product mix. Profit share percentage is negotiable.</p>
        </div>
      </div>
    </footer>
  )
}
