'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ShoppingCart, Cpu, Settings, TrendingUp } from 'lucide-react'

export default function Services() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen pt-24">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Complete turnkey vending solutions. We handle selection, installation, inventory, compliance, and support—everything you need to generate revenue.
          </p>
        </section>

        {/* The Machine */}
        <section className="border-t border-purple-900/20 bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Our Machine Partner: VapeTM Flagship</h2>
            <p className="text-gray-400 mb-8">The #1 Smart Vape Vending Machine in the USA</p>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <div className="rounded-xl border border-purple-900/40 bg-purple-900/20 p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-purple-600/30 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="font-bold mb-2">Age Verification</h3>
                <p className="text-sm text-gray-400">Built-in ID scanner verifies 21+ at every purchase</p>
              </div>
              
              <div className="rounded-xl border border-cyan-900/40 bg-cyan-900/20 p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-cyan-600/30 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="font-bold mb-2">Multiple Payments</h3>
                <p className="text-sm text-gray-400">Tap-to-pay, Apple Pay, Google Pay, chip & swipe</p>
              </div>
              
              <div className="rounded-xl border border-green-900/40 bg-green-900/20 p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-green-600/30 flex items-center justify-center">
                  <Wifi className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="font-bold mb-2">Connected & Managed</h3>
                <p className="text-sm text-gray-400">WiFi / 4G / Ethernet — always online and monitored</p>
              </div>
              
              <div className="rounded-xl border border-orange-900/40 bg-orange-900/20 p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-orange-600/30 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="font-bold mb-2">Real-Time Data</h3>
                <p className="text-sm text-gray-400">Live sales & inventory monitored by our team</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="border-t border-purple-900/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">We Take Care of Everything</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-purple-600/40 bg-purple-600/20 p-8">
                <h3 className="text-xl font-bold mb-6">100% Our Expense</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400 mt-0.5" />
                    <span>Purchase and install the VapeTM machine</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400 mt-0.5" />
                    <span>Buy all initial product inventory</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400 mt-0.5" />
                    <span>Ongoing restocking and inventory rotation</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400 mt-0.5" />
                    <span>Federal compliance — FDA age-verification standards</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400 mt-0.5" />
                    <span>State permits — we obtain and maintain</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400 mt-0.5" />
                    <span>Maintenance and technical support</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400 mt-0.5" />
                    <span>Payment processing setup and hardware</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400 mt-0.5" />
                    <span>Software subscription and remote dashboard</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-cyan-600/40 bg-cyan-600/20 p-8">
                <h3 className="text-xl font-bold mb-6">Your Job</h3>
                <div className="text-5xl font-bold text-cyan-400 mb-4">Open Your Doors</div>
                <p className="text-gray-200 mb-6">
                  That's it. The machine runs 24/7 without staff. No restocking, no compliance headaches, no tech support needed.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="rounded-lg bg-white/10 p-4">
                    <p className="font-semibold mb-2">Month 1</p>
                    <p className="text-sm text-gray-300">Machine goes live and begins generating revenue</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <p className="font-semibold mb-2">Each Month</p>
                    <p className="text-sm text-gray-300">You receive your profit share (~10%, negotiable) minus taxes and fees</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <p className="font-semibold mb-2">Ongoing</p>
                    <p className="text-sm text-gray-300">We monitor, maintain, restock. You collect income.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="border-t border-purple-900/20 bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Premium Products in Every Machine</h2>
            <p className="text-gray-400 mb-12">All 100% US and Texas compliant</p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border-2 border-purple-600 bg-gradient-to-br from-purple-900/30 to-purple-900/10 p-6">
                <h3 className="text-lg font-bold text-purple-400 mb-4">Disposable Vapes</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Lost Mary</li>
                  <li>• Geek Bar Pulse</li>
                  <li>• Breeze Pro</li>
                  <li>• EB Design / Elf Bar</li>
                  <li>• Funky Republic</li>
                </ul>
              </div>
              
              <div className="rounded-xl border-2 border-cyan-600 bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">Tobacco & Nicotine</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Premium Cigarettes</li>
                  <li>• Zyn Nicotine Pouches</li>
                  <li>• 3mg & 6mg options</li>
                  <li>• 0%–5% strength levels</li>
                  <li>• Traditional & modern</li>
                </ul>
              </div>
              
              <div className="rounded-xl border-2 border-green-600 bg-gradient-to-br from-green-900/30 to-green-900/10 p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4">Pod Systems</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• JUUL Pods</li>
                  <li>• Vuse Alto Pods</li>
                  <li>• Refill Cartridges</li>
                  <li>• Compatible systems</li>
                  <li>• Multiple strengths</li>
                </ul>
              </div>
              
              <div className="rounded-xl border-2 border-orange-600 bg-gradient-to-br from-orange-900/30 to-orange-900/10 p-6">
                <h3 className="text-lg font-bold text-orange-400 mb-4">Nightlife Accessories</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Disposable Chargers</li>
                  <li>• Mystery Fun Bags</li>
                  <li>• Pocket Lighters</li>
                  <li>• Gum & Breath Mints</li>
                  <li>• & More Essentials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

import { CheckCircle2, Shield, CreditCard, Wifi, BarChart3 } from 'lucide-react'
