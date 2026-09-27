import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Sticker, Shirt, ShoppingBag, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import merchDesign from './Screenshot 2026-09-09 204738.png'
import { PRINTFUL_STORE_URL } from './constants'

export const metadata: Metadata = {
  title: 'Vape Vault Vending Merch | Official Vape Vault Apparel',
  description: 'Shop official Vape Vault Vending apparel, hats, stickers, hoodies, and more.',
}

const categories = [
  { name: 'T-Shirts', description: 'Signature tees for everyday wear.', color: 'lime', icon: Shirt },
  { name: 'Hoodies', description: 'Heavyweight layers for late nights.', color: 'purple', icon: Shirt },
  { name: 'Hats', description: 'Structured caps with embroidered branding.', color: 'cyan', icon: ShoppingBag },
  { name: 'Stickers', description: 'Weatherproof packs for gear and cases.', color: 'orange', icon: Sticker },
]

export default function Merch() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24">
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#c7ff32]">Vape Vault Merch</p>
              <h1 className="mb-6 text-5xl font-black uppercase tracking-tight text-white">The Vault Collection</h1>
              <p className="max-w-2xl text-xl text-gray-300">
                Official Vape Vault Vending apparel, hats, stickers, and more.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
                Built for the people who keep the good stuff stocked.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={PRINTFUL_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#c7ff32] px-7 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-white"
                >
                  Shop the Collection <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">
                  Opens the official Vape Vault store in a new tab
                </p>
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-white/30">Fulfilled by Printful</p>
            </div>
            <div className="relative overflow-hidden border border-white/15 bg-[#111113]">
              <Image src={merchDesign} alt="Vape Vault Vending T-shirt and sticker artwork" className="h-auto w-full" priority />
            </div>
          </div>

          <div className="mt-16">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-[#d946ef]">Shop by category</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const CategoryIcon = category.icon
                return (
                  <a
                    key={category.name}
                    href={PRINTFUL_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group border border-${category.color}-900/50 bg-${category.color}-900/10 p-6 transition hover:border-[#c7ff32]`}
                  >
                    <div className="mb-6 flex aspect-[4/3] items-center justify-center bg-[#111113]">
                      <CategoryIcon className={`h-16 w-16 text-${category.color}-400`} strokeWidth={1} aria-hidden="true" />
                    </div>
                    <h2 className="text-xl font-bold uppercase tracking-tight text-white">{category.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-white/55">{category.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/70 transition group-hover:text-[#c7ff32]">
                      Shop {category.name} <ArrowUpRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-purple-900/20 bg-slate-900/50 py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[#c7ff32]"><Sparkles size={17} aria-hidden="true" /><span className="text-xs font-black uppercase tracking-[0.18em]">Venue crews welcome</span></div>
              <h2 className="text-3xl font-bold text-white">Need a team order?</h2>
              <p className="mt-2 max-w-xl text-white/60">Reach out for bulk quantities, custom embroidery, or branded gear for your next launch.</p>
            </div>
            <Link href="/contact?subject=Merch%20team%20order" className="group inline-flex min-h-12 shrink-0 items-center gap-2 bg-[#c7ff32] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-white">
              Ask about team orders <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

