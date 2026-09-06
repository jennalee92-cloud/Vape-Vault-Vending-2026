'use client'

import { FormEvent, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold mb-6">Request an Appointment</h1>
          <p className="text-gray-400 mb-8">Fill out the form and we'll contact you to schedule a site visit and machine assessment.</p>

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
