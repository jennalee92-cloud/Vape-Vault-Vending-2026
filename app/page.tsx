'use client'

import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ArrowDownRight, ArrowUpRight, PlayCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react'

const features = [
  { number: '01', title: 'The machine', text: 'A premium, age-verified vending experience built for the places people stay late.', icon: Zap },
  { number: '02', title: 'The inventory', text: 'Fast-moving products, restocked on schedule and monitored without adding work for your team.', icon: Sparkles },
  { number: '03', title: 'The upside', text: 'A new revenue stream for your venue with zero equipment investment on your side.', icon: ShieldCheck },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate min-h-[760px] overflow-hidden border-b border-white/10 pt-28">
          <div className="absolute inset-0 -z-30 bg-[#09090b]" />
          <div className="absolute inset-0 -z-25 bg-[url('/smoking-hero.jpg.jpg')] bg-cover bg-[center_left] bg-no-repeat opacity-80" />
          <div className="absolute inset-y-0 right-0 -z-20 w-full bg-[linear-gradient(100deg,#09090b_20%,#101014_68%,#19151d_100%)]" />
          <div className="relative z-10 mx-auto flex min-h-[630px] max-w-7xl items-end px-5 pb-16 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#c7ff32]"><span className="h-px w-10 bg-[#c7ff32]" /> Vape Vault Vending</div>
              <h1 className="display-face max-w-4xl text-[clamp(4.5rem,11vw,10rem)] leading-[.82] tracking-wide text-white">VENDING<br /><span className="text-[#c7ff32]">AFTER</span> DARK.</h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">Premium vape vending built for venues where the room is moving, the energy is high, and the machine needs to feel like part of the experience.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#c7ff32] px-6 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-white">Request a placement <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
                <Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/25 px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#d946ef] hover:text-[#d946ef]"><PlayCircle size={17} /> See the setup</Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 lg:flex"><ArrowDownRight size={18} className="text-[#d946ef]" /> Scroll to explore</div>
        </section>

        <section className="border-b border-white/10 bg-[#111114] py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">A new lane for venue revenue</p><div className="flex gap-8 text-sm font-bold text-white/80"><span><b className="text-[#c7ff32]">$0</b> setup cost</span><span><b className="text-[#d946ef]">24/7</b> availability</span><span><b className="text-[#38bdf8]">100%</b> managed</span></div></div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#d946ef]">Why Vape Vault Vending</p><h2 className="display-face max-w-md text-6xl leading-[.9] tracking-wide text-white sm:text-8xl">YOUR VENUE.<br /><span className="text-[#38bdf8]">MORE ENERGY.</span></h2></div><p className="max-w-xl text-lg leading-8 text-white/55">Vape Vault Vending keeps your guests in the room, your staff focused, and your venue earning from a category that is already moving.</p></div>
          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">{features.map(({ number, title, text, icon: Icon }) => <div key={number} className="bg-[#09090b] p-7 transition hover:bg-[#16161a] sm:p-9"><div className="mb-16 flex items-start justify-between"><span className="text-xs font-bold text-[#c7ff32]">{number}</span><Icon className="text-[#d946ef]" size={22} /></div><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{text}</p></div>)}</div>
        </section>

        <section className="border-y border-white/10 bg-[#111114] py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left sm:px-8 lg:px-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c7ff32]">The Vault Collection</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Official Vape Vault Vending merch is here.</h3>
            </div>
            <Link href="/merch" className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[#c7ff32] px-6 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-white">
              Shop Merch <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-[#c7ff32] px-5 py-20 text-black sm:px-8 lg:px-12"><div className="absolute -right-10 -top-20 display-face text-[18rem] leading-none text-black/[.06]">VVV</div><div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="mb-5 text-xs font-black uppercase tracking-[0.22em]">Ready when your venue is</p><h2 className="display-face max-w-3xl text-7xl leading-[.85] tracking-wide sm:text-9xl">MAKE ROOM<br />FOR MORE.</h2></div><Link href="/contact" className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 border-2 border-black px-7 text-sm font-black uppercase tracking-[0.12em] transition hover:bg-black hover:text-[#c7ff32]">Talk to the team <ArrowUpRight size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div></section>
      </main>
      <Footer />
    </>
  )
}
