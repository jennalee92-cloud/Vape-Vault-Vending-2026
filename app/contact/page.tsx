'use client'

import { FormEvent, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#c7ff32]">Vape Vault Vending</p>
          <h1 className="mb-6 text-4xl font-black uppercase tracking-tight text-white">Request a placement</h1>
          <p className="mb-8 text-gray-400">Tell us about your venue and we’ll reach out to talk about the right machine, install plan, and revenue potential.</p>

          <ContactForm />

          <div className="mt-8 text-sm text-gray-400">
            <p>Or email us at <a className="text-orange-400" href="mailto:VapeVaultVendingLLC26@gmail.com">VapeVaultVendingLLC26@gmail.com</a></p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [calculatorResults, setCalculatorResults] = useState<Record<string, string>>({})

  useEffect(() => {
    const parameters = new URLSearchParams(window.location.search)
    const calculatorFields = [
      'monthlyVisitors',
      'purchaseRate',
      'averageTransaction',
      'estimatedMonthlySales',
      'estimatedMonthlyVenueRevenue',
      'estimatedAnnualVenueRevenue',
    ]
    const results = Object.fromEntries(
      calculatorFields.flatMap((field) => {
        const value = parameters.get(field)
        return value === null ? [] : [[field, value]]
      }),
    )
    setCalculatorResults(results)
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.ok) setStatus('sent')
      else {
        console.error(data)
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/40 rounded-lg p-8 border border-purple-900/20">
      {Object.entries(calculatorResults).map(([name, value]) => <input key={name} type="hidden" name={name} value={value} />)}
      {Object.keys(calculatorResults).length > 0 && (
        <p className="border border-[#c7ff32]/30 bg-[#c7ff32]/10 p-3 text-sm text-[#e4ff9b]">Your revenue estimate is attached to this request.</p>
      )}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-200">Full Name</label>
        <input name="name" required className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-200">Email</label>
        <input name="email" type="email" required className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-200">Phone</label>
        <input name="phone" className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-200">Venue Address</label>
        <input name="address" className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-200">Message</label>
        <textarea name="message" className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500" rows={4} />
      </div>

      <div className="flex items-center justify-between">
        <button type="submit" disabled={status === 'sending'} className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 font-semibold">
          {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent — Thanks!' : 'Request Appointment'}
        </button>
        <a href="tel:432-661-8982" className="text-sm text-orange-400">Or call: 432-661-8982</a>
      </div>

      {status === 'error' && <div className="text-sm text-red-400">There was an error sending your request. Try again or email us directly.</div>}
    </form>
  )
}
