'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { CheckCircle2, Zap } from 'lucide-react'

export default function Pricing() {
  const machines = [
    {
      name: 'Mini Wall',
      type: 'Wall-Mounted',
      power: '~40W',
      capacity: '~75 units',
      screen: '21" Touch',
      price: '$2,850',
      use: 'Ideal for tight spaces & restrooms',
      color: 'cyan'
    },
    {
      name: 'Slim Wall',
      type: 'Wall-Mounted • Most Popular',
      power: '50W',
      capacity: '~100 units',
      screen: '32" Touch',
      price: '$3,450',
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
      price: 'Quote',
      use: 'High capacity, dual-lock security',
      color: 'green'
    },
    {
      name: 'Slim Tower 2.0',
      type: 'Freestanding',
      power: '80W',
      capacity: '~250 units',
      screen: '43" Touch',
      price: '$5,000',
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
          <h1 className="text-5xl font-bold mb-6">Machine Pricing & Specs</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Four VapeTM models to fit any bar layout. We select, purchase, deliver, and install the right machine for your space—at our expense.
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

                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-1">Price</p>
                    <p className={`text-2xl font-bold text-${machine.color}-400`}>{machine.price}</p>
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
            <h2 className="text-3xl font-bold mb-12">Operating Costs</h2>

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
                    <span className="text-sm">Minimal data usage — won't impact your network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Section */}
        <section className="border-t border-purple-900/20 bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">The Revenue Picture</h2>
            <p className="text-gray-400 mb-12">A sample monthly earnings breakdown for your location — based on typical bar & club performance.</p>

            <div className="rounded-xl border-2 border-purple-600/40 bg-gradient-to-r from-purple-900/20 to-purple-900/10 p-8 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-purple-600/40">
                  <span className="font-semibold">Average Monthly Machine Sales</span>
                  <span className="text-2xl font-bold text-purple-400">$3,000</span>
                </div>
                <div className="text-xs text-gray-400 italic">Typical bar/club location</div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between pb-3 border-b border-white/10">
                    <span>Texas Vapor Products Tax (8.25%)</span>
                    <span className="text-orange-400 font-semibold">– $247.50</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-white/10">
                    <span>Card Processing Fees (~3.5%)</span>
                    <span className="text-orange-400 font-semibold">– $105.00</span>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-green-900/30 border-2 border-green-600/40 p-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">YOUR MONTHLY EARNINGS (10% of Net)</span>
                    <span className="text-3xl font-bold text-green-400">$264.75</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 italic">Profit share — negotiable based on your venue</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border-2 border-cyan-600/40 bg-cyan-900/20 p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">~$3,177</div>
                <p className="text-sm text-gray-300">Your est. annual earnings per machine</p>
              </div>
              <div className="rounded-xl border-2 border-orange-600/40 bg-orange-900/20 p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$0</div>
                <p className="text-sm text-gray-300">Your total investment to start</p>
              </div>
              <div className="rounded-xl border-2 border-purple-600/40 bg-purple-900/20 p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10%</div>
                <p className="text-sm text-gray-300">Monthly net profit share (negotiable)</p>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-500 italic">
              <p>*Revenue estimates based on average machine performance. Individual results vary by venue traffic and product mix. Profit share percentage is negotiable.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-purple-900/20 py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to See How Much You Can Earn?</h2>
            <p className="text-gray-400 mb-8">
              Let's talk about which machine is right for your venue and what your specific revenue potential looks like.
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
