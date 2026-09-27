'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CheckCircle2, Award, Users, Zap } from 'lucide-react'

export default function About() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen pt-24">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="animate-fade-in">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#c7ff32]">Vape Vault Vending</p>
              <h1 className="mb-6 text-5xl font-black uppercase tracking-tight text-white">Built for better nights and bigger revenue.</h1>
              <p className="mb-6 text-xl text-gray-300">
                We help bars, lounges, and nightlife venues turn idle space into a premium revenue stream with a machine that feels like part of the experience.
              </p>
              <p className="mb-8 text-gray-400">
                From installation to inventory and compliance, Vape Vault Vending manages the operation so your team can focus on the room, not the logistics.
              </p>
            </div>
            
            <div className="animate-slide-in-right space-y-4">
              <div className="rounded-xl border border-purple-900/40 bg-purple-900/20 p-6">
                <Award className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Premium Partner</h3>
                <p className="text-gray-400">Partnered with VapeTM Flagship Machines to bring a premium, compliant vending experience into high-energy venues.</p>
              </div>
              
              <div className="rounded-xl border border-cyan-900/40 bg-cyan-900/20 p-6">
                <Users className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">500+ Venue Deployments</h3>
                <p className="text-gray-400">More than 500 installations nationwide with proven performance in real-world nightlife and hospitality environments.</p>
              </div>
              
              <div className="rounded-xl border border-green-900/40 bg-green-900/20 p-6">
                <Zap className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Always On</h3>
                <p className="text-gray-400">Real-time monitoring, remote diagnostics, and hands-on support keep the machine working when the room is busiest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-purple-900/20 bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Stand For</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-purple-600/30 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hassle-Free</h3>
                <p className="text-gray-400">We take care of the machine, inventory, and compliance so your venue can stay focused on the experience.</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-cyan-600/30 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparent</h3>
                <p className="text-gray-400">Clear reporting, straightforward terms, and no surprises—just a cleaner path to passive revenue.</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-600/30 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compliant</h3>
                <p className="text-gray-400">Every deployment is built around responsible verification, proper permits, and full operational compliance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
