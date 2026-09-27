'use client'

import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const MONTHLY_VISITORS_MIN = 1000
const MONTHLY_VISITORS_MAX = 100000
const MONTHLY_VISITORS_DEFAULT = 10000
const PURCHASE_RATE_MIN = 0.01
const PURCHASE_RATE_MAX = 0.1
const PURCHASE_RATE_DEFAULT = 0.03
const AVERAGE_TRANSACTION_MIN = 10
const AVERAGE_TRANSACTION_MAX = 50
const AVERAGE_TRANSACTION_DEFAULT = 25
const VENUE_REVENUE_SHARE = 0.1

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 })

function RangeInput({
  id,
  label,
  helper,
  value,
  min,
  max,
  step,
  displayValue,
  onChange,
}: {
  id: string
  label: string
  helper: string
  value: number
  min: number
  max: number
  step: number
  displayValue: string
  onChange: (value: number) => void
}) {
  const progress = ((value - min) / (max - min)) * 100

  return (
    <div>
      <div className="mb-3 flex items-end justify-between gap-4">
        <label htmlFor={id} className="text-sm font-bold text-white">{label}</label>
        <output htmlFor={id} className="font-mono text-xl font-bold tabular-nums text-[#c7ff32]">{displayValue}</output>
      </div>
      <input
        id={id}
        className="revenue-slider w-full"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{ '--range-progress': `${progress}%` } as React.CSSProperties}
      />
      <p className="mt-3 text-sm text-white/55">{helper}</p>
    </div>
  )
}

export default function RevenueCalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(MONTHLY_VISITORS_DEFAULT)
  const [purchaseRate, setPurchaseRate] = useState(PURCHASE_RATE_DEFAULT)
  const [averageTransaction, setAverageTransaction] = useState(AVERAGE_TRANSACTION_DEFAULT)

  const monthlyTransactions = monthlyVisitors * purchaseRate
  const monthlySales = monthlyTransactions * averageTransaction
  const monthlyRevenue = monthlySales * VENUE_REVENUE_SHARE
  const annualRevenue = monthlyRevenue * 12
  const contactQuery = new URLSearchParams({
    monthlyVisitors: String(monthlyVisitors),
    purchaseRate: String(purchaseRate),
    averageTransaction: String(averageTransaction),
    estimatedMonthlySales: String(monthlySales),
    estimatedMonthlyVenueRevenue: String(monthlyRevenue),
    estimatedAnnualVenueRevenue: String(annualRevenue),
  })

  const breakdown = [
    { value: number.format(monthlyVisitors), label: 'Monthly Visitors' },
    { value: `${(purchaseRate * 100).toFixed(1)}%`, label: 'Estimated Purchase Rate' },
    { value: number.format(monthlyTransactions), label: 'Estimated Transactions' },
    { value: currency.format(averageTransaction), label: 'Average Transaction' },
    { value: currency.format(monthlySales), label: 'Estimated Monthly Sales' },
    { value: '10%', label: 'Venue Revenue Share' },
  ]

  return (
    <section aria-labelledby="revenue-calculator-heading" className="border-t border-purple-900/20 bg-slate-900/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#c7ff32]">Revenue potential</p>
        <h2 id="revenue-calculator-heading" className="display-face text-4xl uppercase text-white sm:text-5xl">See what your venue could earn</h2>
        <p className="mt-4 max-w-2xl text-lg text-white/65">Estimate the potential revenue your venue could generate with a Vape Vault vending machine.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-[#09090b]/65 p-6 sm:p-8">
            <div className="space-y-9">
              <RangeInput id="monthly-visitors" label="Monthly Venue Visitors" helper="Estimated monthly guests or customers" value={monthlyVisitors} min={MONTHLY_VISITORS_MIN} max={MONTHLY_VISITORS_MAX} step={1000} displayValue={number.format(monthlyVisitors)} onChange={setMonthlyVisitors} />
              <RangeInput id="purchase-rate" label="Estimated Purchase Rate" helper="Estimated percentage of visitors who make a purchase" value={purchaseRate} min={PURCHASE_RATE_MIN} max={PURCHASE_RATE_MAX} step={0.005} displayValue={`${(purchaseRate * 100).toFixed(1)}%`} onChange={setPurchaseRate} />
              <RangeInput id="average-transaction" label="Average Transaction" helper="Estimated average customer purchase" value={averageTransaction} min={AVERAGE_TRANSACTION_MIN} max={AVERAGE_TRANSACTION_MAX} step={1} displayValue={currency.format(averageTransaction)} onChange={setAverageTransaction} />
            </div>
          </div>

          <div className="rounded-lg border border-[#c7ff32]/35 bg-[#0e1110] p-6 shadow-[0_0_40px_rgba(199,255,50,0.08)] sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c7ff32]">Your estimated venue revenue</p>
            <output aria-live="polite" className="revenue-value mt-3 block font-mono text-6xl font-bold leading-none tabular-nums text-white sm:text-7xl">{currency.format(monthlyRevenue)}</output>
            <p className="mt-3 text-sm text-white/55">Illustrative monthly estimate</p>

            <div className="mt-7 grid grid-cols-2 gap-3 border-y border-white/10 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-white/45">Estimated Annual Venue Revenue</p>
                <output aria-live="polite" className="mt-2 block font-mono text-2xl font-bold tabular-nums text-[#c7ff32]">{currency.format(annualRevenue)}</output>
              </div>
              <div className="border-l border-white/10 pl-3">
                <p className="text-xs uppercase tracking-[0.12em] text-white/45">Estimated Monthly Sales</p>
                <output aria-live="polite" className="mt-2 block font-mono text-2xl font-bold tabular-nums text-white">{currency.format(monthlySales)}</output>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">How the estimate works</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {breakdown.map((item, index) => (
                  <div key={item.label} className="relative border border-white/10 bg-white/[0.03] p-3">
                    {index > 0 && <ArrowDown aria-hidden="true" className="absolute -left-5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-[#c7ff32] sm:block" />}
                    <p className="font-mono text-lg font-bold tabular-nums text-white">{item.value}</p>
                    <p className="mt-1 text-xs leading-4 text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 border border-[#c7ff32]/40 bg-[#c7ff32]/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#c7ff32]">Your estimated venue revenue</p>
                <output aria-live="polite" className="mt-1 block font-mono text-3xl font-bold tabular-nums text-white">{currency.format(monthlyRevenue)}</output>
              </div>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <h3 className="display-face text-2xl uppercase text-white">Ready to put your space to work?</h3>
              <p className="mt-2 text-sm text-white/60">See if your venue qualifies for a Vape Vault vending machine.</p>
              <Link href={`/contact?${contactQuery.toString()}`} className="group mt-5 inline-flex min-h-12 items-center gap-2 bg-[#c7ff32] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c7ff32] focus:ring-offset-2 focus:ring-offset-[#0e1110]">
                Request a machine <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-5 text-white/45">Estimates are for illustrative purposes only and are not a guarantee of revenue. Actual results vary based on venue traffic, customer behavior, product mix, pricing, location, operating hours, and other factors.</p>
      </div>
    </section>
  )
}