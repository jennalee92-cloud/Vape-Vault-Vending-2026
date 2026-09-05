'use client'

import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ArrowRight, TrendingUp, DollarSign, Zap, Shield, Cpu, Package, Briefcase } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-24">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-600/20 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="animate-fade-in space-y-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-900/40 bg-purple-900/20 px-4 py-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-300">Market Growing 17M+ Users</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                  Passive Income from<br />
                  <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                    Vending Machines
                  </span>
                </h1>
                
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Turnkey vape vending solutions with $0 investment. We handle everything—machines, inventory, compliance, and support. You just open your doors and earn.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="rounded-lg border border-purple-900/40 bg-purple-900/20 p-4">
                  <div className="text-2xl font-bold text-purple-400">~$3K</div>
                  <div className="text-xs text-gray-400">Monthly Sales</div>
                </div>
                <div className="rounded-lg border border-cyan-900/40 bg-cyan-900/20 p-4">
                  <div className="text-2xl font-bold text-cyan-400">$265/mo</div>
                  <div className="text-xs text-gray-400">Your Earnings (10%)</div>
                </div>
                <div className="rounded-lg border border-green-900/40 bg-green-900/20 p-4">
                  <div className="text-2xl font-bold text-green-400">$0</div>
                  <div className="text-xs text-gray-400">Your Investment</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  Request an Appointment
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="tel:432-661-8982" className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-900/40 bg-purple-900/20 px-8 py-4 font-semibold hover:border-purple-900/60 hover:bg-purple-900/30 transition">
                  <span>Call Now: 432-661-8982</span>
                </a>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="animate-slide-in-right space-y-4">
              <div className="rounded-2xl border border-purple-600/40 bg-gradient-to-br from-purple-900/30 to-purple-900/10 p-6 hover:border-purple-600/60 transition">
                <div className="flex gap-4">
                  <Zap className="h-6 w-6 flex-shrink-0 text-purple-400" />
                  <div>
                    <h3 className="font-semibold mb-2">No Installation Hassle</h3>
                    <p className="text-sm text-gray-400">We select, purchase, deliver, and install the perfect machine for your space.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-600/40 bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 p-6 hover:border-cyan-600/60 transition">
                <div className="flex gap-4">
                  <Package className="h-6 w-6 flex-shrink-0 text-cyan-400" />
                  <div>
                    <h3 className="font-semibold mb-2">Inventory Management</h3>
                    <p className="text-sm text-gray-400">Premium vapes, tobacco alternatives, and accessories. We handle restocking and compliance.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-green-600/40 bg-gradient-to-br from-green-900/30 to-green-900/10 p-6 hover:border-green-600/60 transition">
                <div className="flex gap-4">
                  <Shield className="h-6 w-6 flex-shrink-0 text-green-400" />
                  <div>
                    <h3 className="font-semibold mb-2">100% Compliant</h3>
                    <p className="text-sm text-gray-400">Age verification, TX permits, tax filing—we handle all compliance requirements.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-orange-600/40 bg-gradient-to-br from-orange-900/30 to-orange-900/10 p-6 hover:border-orange-600/60 transition">
                <div className="flex gap-4">
                  <Briefcase className="h-6 w-6 flex-shrink-0 text-orange-400" />
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Support</h3>
                    <p className="text-sm text-gray-400">Real-time monitoring, remote management, and dedicated technical support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="border-t border-purple-900/20 bg-gradient-to-b from-slate-950 to-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">The Vape Market is Booming</h2>
            <p className="text-gray-400">And your bar is perfectly positioned to capture it.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-purple-900/40 bg-purple-900/20 p-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/30">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">~17M</div>
              <p className="text-sm font-medium">Adult e-cigarette users in the U.S.</p>
              <p className="mt-2 text-xs text-gray-400">CDC NCHS data — a massive, growing market</p>
            </div>

            <div className="rounded-xl border border-cyan-900/40 bg-cyan-900/20 p-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600/30">
                <Cpu className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">73%</div>
              <p className="text-sm font-medium">Prefer in-venue convenience</p>
              <p className="mt-2 text-xs text-gray-400">They buy where they drink & socialize</p>
            </div>

            <div className="rounded-xl border border-green-900/40 bg-green-900/20 p-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-600/30">
                <DollarSign className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">$0</div>
              <p className="text-sm font-medium">Your out-of-pocket investment</p>
              <p className="mt-2 text-xs text-gray-400">We cover every cost — start to finish</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-purple-600/40 bg-purple-600/20 p-8 text-center">
            <p className="text-lg font-medium text-purple-300">
              Bars and clubs are the #1 high-traffic venues for vape sales — and most don't have vending yet. You can be first in your market.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-purple-900/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">From handshake to revenue in 3 simple steps. Typically live in under 3 weeks.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: 1,
                title: 'Sign & Get Compliant',
                timeline: 'Week 1–2',
                items: [
                  'Sign our partnership agreement',
                  'We help apply for TX Vapor Permit',
                  'We pay the permit fee entirely'
                ],
                color: 'purple'
              },
              {
                step: 2,
                title: 'We Install & Stock',
                timeline: 'Week 2–3',
                items: [
                  'We deliver & install your VapeTM',
                  'We load it with premium products',
                  'We configure payments & WiFi'
                ],
                color: 'cyan'
              },
              {
                step: 3,
                title: 'Revenue Starts Flowing',
                timeline: 'Month 1 onwards',
                items: [
                  'Machine runs 24/7 — no staff needed',
                  'We handle restocking & maintenance',
                  'We give you the monthly tax amount'
                ],
                color: 'green'
              }
            ].map((section) => (
              <div key={section.step} className={`rounded-xl border border-${section.color}-900/40 bg-${section.color}-900/20 p-8`}>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-${section.color}-600 text-xl font-bold`}>
                  {section.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <p className={`text-sm text-${section.color}-300 mb-4`}>{section.timeline}</p>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-300">
                      <span className={`text-${section.color}-400 font-bold`}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-purple-900/20 overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Your<br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              New Revenue Stream?
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            $0 investment. 100% passive income. Earn your share every month.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Get Started Today
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:432-661-8982" className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-900/40 bg-purple-900/20 px-8 py-4 font-semibold hover:border-purple-900/60 hover:bg-purple-900/30 transition">
              Call: 432-661-8982
            </a>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            <p>*Revenue estimates based on average machine performance. Individual results vary by venue traffic and product mix. Profit share percentage is negotiable.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
