'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FAQ() {
  const faqs = [
    {
      q: 'Do I need to pay to start?',
      a: 'No. Vape Vault Vending covers the machine, installation, and initial inventory, so your venue starts with $0 upfront cost.'
    },
    {
      q: 'Are the products legal and compliant?',
      a: 'Yes. We only operate with compliant products and handle the permits, compliance setup, and age-verification requirements for each venue.'
    },
    {
      q: 'How long does setup take?',
      a: 'Most placements are live within a few weeks of approval, depending on venue readiness and installation logistics.'
    },
    {
      q: 'What does the revenue split look like?',
      a: 'Typical arrangements are based on a percentage of net monthly revenue, with terms tailored to the venue and machine placement.'
    },
    {
      q: 'Who handles restocking and support?',
      a: 'We do. Our team monitors sales, tracks inventory, restocks the machine, and handles support so your staff does not have to.'
    }
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#c7ff32]">Vape Vault Vending</p>
          <h1 className="mb-6 text-4xl font-black uppercase tracking-tight text-white">Frequently asked questions</h1>
          <p className="mb-8 text-gray-400">Everything venue owners need to know before launching a premium vending setup in their space.</p>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="rounded-lg border border-purple-900/20 bg-slate-900/40 p-4">
                <summary className="cursor-pointer text-lg font-semibold">{f.q}</summary>
                <div className="mt-2 text-gray-300">{f.a}</div>
              </details>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
