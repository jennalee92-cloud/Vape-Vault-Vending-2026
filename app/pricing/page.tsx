'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { CheckCircle2, Zap } from 'lucide-react'
import RevenueCalculator from '../components/RevenueCalculator'

export default function Pricing() {
  const machines = [
    {
      name: 'Mini Wall',
      type: 'Wall-Mounted',
      power: '~40W',
      capacity: '~75 units',
      screen: '21" Touch',
      use: 'Ideal for tight spaces & restrooms',
      color: 'cyan'
    },
    {
      name: 'Slim Wall',
      type: 'Wall-Mounted • Most Popular',
      power: '50W',
      capacity: '~100 units',
      screen: '32" Touch',
      use: '500+ deployed nationwide',
      color: 'purple',
      featured: true
    },
    {
      name: 'Mega Wall 2.0',
      type: 'Wall-Mounted',
      power: '~60W',
      capacity: '~150 units',
      screen: '32" Touch',
      use: 'High capacity, dual-lock security',
      color: 'green'
    },
    {
      name: 'Slim Tower 2.0',
      type: 'Freestanding',
      power: '80W',
      capacity: '~250 units',
      screen: '43" Touch',
      use: 'Max visibility & capacity',
      color: 'orange'
    }
  ]

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen pt-24">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#c7ff32]">Vape Vault Vending</p>
          <h1 className="mb-6 text-5xl font-black uppercase tracking-tight text-white">Premium machine options for high-traffic venues.</h1>
          <p className="max-w-2xl text-xl text-gray-300">
            From compact wall units to high-capacity freestanding machines, we help each venue choose the right setup for traffic, layout, and revenue goals.
          </p>
        </section>

        {/* Machines */}
        <section className="border-t border-purple-900/20 bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {machines.map((machine) => (
                <div
                  key={machine.name}
                  className={`rounded-xl border-2 p-6 transition-all ${
                    machine.featured
                      ? `border-${machine.color}-600 bg-gradient-to-br from-${machine.color}-900/40 to-${machine.color}-900/10 ring-2 ring-${machine.color}-600/30`
                      : `border-${machine.color}-900/40 bg-${machine.color}-900/10 hover:border-${machine.color}-600/60`
                  }`}
                >
                  {machine.featured && (
                    <div className="mb-3 inline-block rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-1 text-${machine.color}-400`}>{machine.name}</h3>
                  <p className="text-xs text-gray-400 mb-4">{machine.type}</p>

                  <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="text-xs text-gray-400">Power</p>
                      <p className="font-semibold">{machine.power}</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="text-xs text-gray-400">Capacity</p>
                      <p className="font-semibold">{machine.capacity}</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="text-xs text-gray-400">Screen</p>
                      <p className="font-semibold">{machine.screen}</p>
                    </div>
                  </div>

                  <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-300">Custom quote</p>
                    <p className="mt-1 text-xs text-gray-400">Pricing depends on your venue and setup.</p>
                  </div>

                  <p className={`text-xs text-${machine.color}-300 italic`}>{machine.use}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-purple-600/40 bg-purple-600/20 p-8 text-center">
              <p className="font-semibold text-purple-300">
                We select, purchase, deliver, and install the machine that best fits your venue — at our expense.
              </p>
            </div>
          </div>
        </section>

        {/* Operating Costs */}
        <section className="border-t border-purple-900/20 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Operating costs & setup</h2>

            <div className="grid gap-8 lg:grid-cols-2 mb-8">
              <div className="rounded-xl border border-purple-900/40 bg-purple-900/20 p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-purple-400" />
                  Power & Monthly Costs
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-purple-400 font-semibold">Mini Wall</span>
                    <span className="text-purple-400 font-semibold">~40W (~$3.46/mo)</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-purple-400 font-semibold">Slim Wall</span>
                    <span className="text-purple-400 font-semibold">50W (~$4.32/mo)</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-purple-400 font-semibold">Mega Wall 2.0</span>
                    <span className="text-purple-400 font-semibold">~60W (~$5.18/mo)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400 font-semibold">Slim Tower 2.0</span>
                    <span className="text-purple-400 font-semibold">80W (~$6.91/mo)</span>
                  </div>
                  <div className="mt-4 rounded-lg bg-green-900/30 border border-green-900/60 p-3">
                    <CheckCircle2 className="h-4 w-4 text-green-400 inline mr-2" />
                    <span className="text-sm">WiFi: ~500MB–1GB/mo — uses your existing connection ($0 extra)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-cyan-900/40 bg-cyan-900/20 p-8">
                <h3 className="text-xl font-bold mb-6">Connectivity & Management</h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/5 p-4">
                    <p className="text-cyan-400 font-semibold mb-2">WiFi</p>
                    <p className="text-sm text-gray-300">2.4GHz / 5GHz compatible</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <p className="text-cyan-400 font-semibold mb-2">4G Cellular</p>
                    <p className="text-sm text-gray-300">Backup SIM — always online</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <p className="text-cyan-400 font-semibold mb-2">Ethernet</p>
                    <p className="text-sm text-gray-300">Hardwired port available</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <p className="text-cyan-400 font-semibold mb-2">Data Usage</p>
                    <p className="text-sm text-gray-300">~500MB–1GB / month</p>
                  </div>
                  <div className="rounded-lg bg-green-900/30 border border-green-900/60 p-3 mt-4">
                    <CheckCircle2 className="h-4 w-4 text-green-400 inline mr-2" />
                    <span className="text-sm">Minimal data usage — will not impact your network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RevenueCalculator />

        {/* CTA */}
        <section className="border-t border-purple-900/20 py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to see what your venue can earn?</h2>
            <p className="text-gray-400 mb-8">
              Let’s match the right machine to your space and estimate the revenue potential for your specific location.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
