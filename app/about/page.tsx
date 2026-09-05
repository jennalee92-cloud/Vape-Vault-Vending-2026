'use client'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
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
              <h1 className="text-5xl font-bold mb-6">About Vape Vault Vending</h1>
              <p className="text-xl text-gray-300 mb-6">
                We're turnkey vape vending solution experts. We handle everything so you don't have to—machines, inventory, compliance, and support. Your job? Just open your doors and earn passive income.
              </p>
              <p className="text-gray-400 mb-8">
                Our mission is to make vending effortless for bar and club owners. We believe in pure profit, zero hassle, and passive income that actually works.
              </p>
            </div>
            
            <div className="animate-slide-in-right space-y-4">
              <div className="rounded-xl border border-purple-900/40 bg-purple-900/20 p-6">
                <Award className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Industry Leading</h3>
                <p className="text-gray-400">Partnered with VapeTM Flagship Machines—the #1 smart vape vending solution in the USA.</p>
              </div>
              
              <div className="rounded-xl border border-cyan-900/40 bg-cyan-900/20 p-6">
                <Users className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">500+ Deployed</h3>
                <p className="text-gray-400">Over 500 machines successfully installed nationwide with proven revenue performance.</p>
              </div>
              
              <div className="rounded-xl border border-green-900/40 bg-green-900/20 p-6">
                <Zap className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-400">Real-time monitoring, remote management, and dedicated technical support always available.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-purple-900/20 bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-purple-600/30 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hassle-Free</h3>
                <p className="text-gray-400">We handle the complexity so you don't have to. Focus on running your venue; we'll manage the machine.</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-cyan-600/30 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparent</h3>
                <p className="text-gray-400">Clear numbers, clear terms, zero surprises. You always know exactly what you're earning.</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-600/30 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compliant</h3>
                <p className="text-gray-400">Every location is 100% compliant with Texas regulations. Age verification, permits, taxes—all covered.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
