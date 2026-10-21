import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, KeyRound, Coffee, Monitor, Sparkles, Building2 } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PageTransition } from '../components/PageTransition';

export const Office: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <PageTransition className="pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Commercial & Creative Studios
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F3D36] tracking-tight leading-[1.12]">
              Elevated workplace care for Austin&apos;s forward-thinking teams.
            </h1>
            <p className="text-base sm:text-lg text-[#5C6460] leading-relaxed">
              First impressions matter to your clients and team morale. Fernway delivers discreet after-hours commercial sanitation for architecture studios, tech offices, law suites, and modern clinics.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openQuoteModal({ service: 'Office & Commercial Care' })}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2F7D6D] hover:bg-[#1F3D36] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer group"
              >
                <span>Request a Free Walkthrough</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <span className="text-xs text-[#5C6460] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2F7D6D]" />
                Strict NDA & Alarm Protocols
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E9DCC7] aspect-[16/10] bg-[#E9DCC7]/20">
              <img
                src="/src/assets/images/office_modern_clean_1792614129535.jpg"
                alt="Spotless modern boutique creative office in Austin"
                width={800}
                height={500}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Priorities */}
      <section className="py-20 bg-white border-y border-[#E9DCC7]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Why Austin Operations Managers Choose Us
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
              Reliable, security-conscious, and invisible by morning.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF8F4] border border-[#E9DCC7]">
              <div className="w-12 h-12 rounded-xl bg-[#2F7D6D]/10 text-[#2F7D6D] flex items-center justify-center mb-5">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1F3D36] mb-2">
                Secure Keycard & Alarm Mastery
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6460] leading-relaxed">
                We sign mutual NDAs, manage key fobs and alarm codes with encrypted vaults, and send digital logs of lock-ups upon exit.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F4] border border-[#E9DCC7]">
              <div className="w-12 h-12 rounded-xl bg-[#2F7D6D]/10 text-[#2F7D6D] flex items-center justify-center mb-5">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1F3D36] mb-2">
                Zero Toxic Fumes for Morning Arrivals
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6460] leading-relaxed">
                We use hospital-grade botanical disinfectants. When your team arrives at 8:30 AM, there is no noxious bleach smell—only crisp, fresh air.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F4] border border-[#E9DCC7]">
              <div className="w-12 h-12 rounded-xl bg-[#2F7D6D]/10 text-[#2F7D6D] flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1F3D36] mb-2">
                Flexible Corporate Invoicing
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6460] leading-relaxed">
                Direct monthly billing via Net-30 invoicing, credit card auto-pay, and custom itemized reports for expense reconciliation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Checklist */}
      <section className="py-20 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Commercial Scope of Work
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
              Every zone of your office, fully handled.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                zone: 'Open Desking & Workstations',
                tasks: [
                  'Surface wiping and dust-free monitor bases',
                  'High-touch disinfection (keyboards, mouse pads, phones)',
                  'Desk-side waste and recycling sorting',
                  'Under-desk wire-safe HEPA vacuuming',
                ],
              },
              {
                zone: 'Conference & Presentation Rooms',
                tasks: [
                  'Whiteboard cleaning and marker residue removal',
                  'Glass partition streak-free polishing',
                  'Conference table sanitized and chairs neatly aligned',
                  'AV and teleconference console dusting',
                ],
              },
              {
                zone: 'Kitchenette & Coffee Station',
                tasks: [
                  'Dishwasher load / unload and sink polishing',
                  'Espresso machine drip tray and microwave interior scrub',
                  'Refrigerator weekly purge and wipe-down',
                  'Counters and high-top dining surface sanitization',
                ],
              },
              {
                zone: 'Restrooms & Executive Suites',
                tasks: [
                  'Deep fixture descaling and hygienic floor wash',
                  'Paper goods, soaps, and hand sanitizers restocked',
                  'Touch-point handles and light switches disinfected',
                  'Trash emptied with fresh heavy-duty liners',
                ],
              },
            ].map((col) => (
              <div
                key={col.zone}
                className="p-6 sm:p-8 bg-white rounded-2xl border border-[#E9DCC7] shadow-xs"
              >
                <h3 className="font-serif text-xl font-semibold text-[#1F3D36] mb-4">
                  {col.zone}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#5C6460]">
                  {col.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2F7D6D] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Walkthrough CTA */}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F3D36] text-white rounded-3xl p-8 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-white max-w-2xl mx-auto">
            Schedule an on-site office walkthrough in Austin.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A8C3B1] max-w-xl mx-auto leading-relaxed">
            Our commercial operations director will visit your facility, assess square footage and frequency needs, and deliver a detailed custom proposal within 24 hours.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => openQuoteModal({ service: 'Office & Commercial Care' })}
              className="px-8 py-3.5 bg-[#2F7D6D] hover:bg-[#A8C3B1] hover:text-[#1F3D36] text-white text-sm font-semibold rounded-full shadow-lg transition-colors cursor-pointer"
            >
              Request Walkthrough & Proposal
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
