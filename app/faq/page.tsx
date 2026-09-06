'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FAQ() {
  const faqs = [
    {
      q: 'Do I need to pay to start?',
      a: 'No. We cover the machine purchase, initial inventory, and installation. Your investment is $0.'
    },
    {
      q: 'Are the products legal?',
      a: 'Yes. All vape and e-cigarette products are 100% US and Texas compliant. We handle permits and compliance.'
    },
    {
      q: 'How long does setup take?',
      a: 'Typically under 3 weeks from contract signing to live machine.'
    },
    {
      q: 'What is the profit share?',
      a: 'Default example is 10% of net monthly revenue. Terms are negotiable based on venue.'
    },
    {
      q: 'Who handles restocking?',
      a: 'We do. Our team monitors inventory remotely and restocks on an ongoing schedule.'
    }
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold mb-6">FAQ</h1>
          <p className="text-gray-400 mb-8">Common questions answered about our vending partnerships.</p>

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
