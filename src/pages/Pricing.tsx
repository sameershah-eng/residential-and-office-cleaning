import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import { pricingTiers, availableAddOns } from '../data/pricingTiers';
import { InstantEstimateCalculator } from '../components/InstantEstimateCalculator';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PageTransition } from '../components/PageTransition';

export const Pricing: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <PageTransition className="pt-28 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
          Transparent Austin Rates
        </span>
        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F3D36] tracking-tight">
          Clear, honest pricing with zero surprise fees.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#5C6460] max-w-2xl mx-auto leading-relaxed">
          No hidden fuel surcharges, travel fees, or sudden invoice revisions. We calculate transparent flat rates based on square footage and room counts.
        </p>
      </section>

      {/* 3 Pricing Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-white border-2 border-[#2F7D6D] shadow-xl lg:-translate-y-2'
                  : 'bg-white/80 border border-[#E9DCC7] shadow-xs hover:border-[#A8C3B1]'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2F7D6D] text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
                  Most Popular in Austin
                </div>
              )}

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-2xl font-bold text-[#1F3D36]">
                    {tier.name}
                  </h3>
                  {tier.savingsBadge && (
                    <span className="text-xs font-semibold text-[#2F7D6D] bg-[#2F7D6D]/10 px-2.5 py-0.5 rounded-full">
                      {tier.savingsBadge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#5C6460] mb-6">
                  {tier.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-[#E9DCC7]/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1F3D36] tabular-nums">
                      {tier.priceDisplay}
                    </span>
                  </div>
                  <span className="text-xs text-[#5C6460] block mt-1">
                    {tier.frequencyLabel}
                  </span>
                </div>

                <p className="text-xs text-[#5C6460] leading-relaxed mb-6">
                  {tier.description}
                </p>

                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#1F3D36] mb-3">
                  Key Plan Highlights:
                </h4>
                <ul className="space-y-2.5 text-xs text-[#5C6460] mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2F7D6D] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] text-[#5C6460] mb-4 italic">
                  <strong>Recommended for:</strong> {tier.recommendedFor}
                </p>

                <button
                  onClick={() => openQuoteModal({ service: tier.name })}
                  className={`w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.isPopular
                      ? 'bg-[#2F7D6D] hover:bg-[#1F3D36] text-white shadow-md'
                      : 'bg-[#1F3D36] hover:bg-[#2F7D6D] text-white'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Instant Estimate Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <InstantEstimateCalculator />
      </section>

      {/* Add-ons List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
            A La Carte Add-Ons
          </span>
          <h2 className="mt-2 text-3xl font-serif text-[#1F3D36]">
            Custom touches for deeper care.
          </h2>
          <p className="mt-2 text-sm text-[#5C6460]">
            Add any of these specialized services to your one-time clean or recurring visits with a single click.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableAddOns.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-2xl border border-[#E9DCC7] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-lg font-semibold text-[#1F3D36]">
                    {item.name}
                  </h3>
                  <span className="font-serif text-base font-bold text-[#2F7D6D] tabular-nums">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-[#5C6460] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#FAF8F4] flex items-center justify-between text-[11px] text-[#5C6460]">
                <span>Duration: {item.duration}</span>
                <button
                  onClick={() => openQuoteModal({ service: `Add-on: ${item.name}` })}
                  className="font-medium text-[#2F7D6D] hover:text-[#1F3D36] transition-colors cursor-pointer"
                >
                  + Add to quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing FAQs Snippet */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F4] border border-[#E9DCC7] rounded-3xl p-8 sm:p-10">
          <h3 className="font-serif text-2xl text-[#1F3D36] mb-4">
            Common Questions About Billing & Payments
          </h3>
          <div className="space-y-4 text-xs sm:text-sm text-[#5C6460]">
            <p>
              <strong className="text-[#1F3D36]">When am I charged?</strong> We do not bill you until after your cleaning is successfully completed and verified. A credit card is stored securely on file during booking, and invoices are charged automatically the afternoon of service.
            </p>
            <p>
              <strong className="text-[#1F3D36]">Do I tip the cleaners?</strong> Tipping is never required or expected, but always warmly appreciated. 100% of tips go directly to your assigned crew members. You can tip in cash or easily add a tip to your digital invoice.
            </p>
            <p>
              <strong className="text-[#1F3D36]">What if my home takes longer than estimated?</strong> If our initial walkthrough reveals unprecedented scope, we will call you immediately to confirm approval before doing extra work. You will never see an unexpected overtime charge.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
