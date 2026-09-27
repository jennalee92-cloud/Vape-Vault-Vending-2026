import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Sticker, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import merchDesign from './Screenshot 2026-09-09 204738.png'
import wordmarkSticker from './vape-vault-wordmark-sticker.png'
import { PRINTFUL_STORE_URL, PRINTFUL_PRODUCTS } from './constants'

// This one design has an exact brand asset on hand, so it's shown instead of the Printful CDN thumbnail.
const WORDMARK_STICKER_URL = 'https://forgewell.printful.me/product/die-cut-stickers'

export const metadata: Metadata = {
  title: 'Vape Vault Vending Merch | Official Vape Vault Apparel',
  description: 'Shop official Vape Vault Vending apparel, hats, stickers, hoodies, and more.',
}

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
            <p className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-[#d946ef]">Shop the collection</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PRINTFUL_PRODUCTS.map((product) => (
                <a
                  key={product.url}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Shop ${product.name} on the official Vape Vault Printful store (opens in a new tab)`}
                  className="group border border-white/10 bg-[#111113] p-5 transition hover:border-[#c7ff32]"
                >
                  <div className="mb-5 flex aspect-square items-center justify-center overflow-hidden bg-[#09090b]">
                    {product.url === WORDMARK_STICKER_URL ? (
                      <Image
                        src={wordmarkSticker}
                        alt={product.name}
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      />
                    ) : product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={339}
                        height={339}
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <Sticker className="h-16 w-16 text-orange-400" strokeWidth={1} aria-hidden="true" />
                    )}
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c7ff32]">{product.category}</p>
                  <h2 className="mt-2 text-lg font-bold leading-tight text-white">{product.name}</h2>
                  <p className="mt-1 text-sm text-white/55">{product.price}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/70 transition group-hover:text-[#c7ff32]">
                    View on Printful <ArrowUpRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
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

