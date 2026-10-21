import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Heart, Sparkles, Shield, Leaf, Clock, Sun } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PageTransition } from '../components/PageTransition';

export const Residential: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <PageTransition className="pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Residential Care
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F3D36] tracking-tight leading-[1.12]">
              Your home as a sanctuary, not another weekend chore.
            </h1>
            <p className="text-base sm:text-lg text-[#5C6460] leading-relaxed">
              Between work deadlines, family commitments, and Austin life, cleaning shouldn&apos;t consume your Saturdays. Fernway gives you back 10+ hours every month with discreet, hotel-caliber residential care.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openQuoteModal({ service: 'Recurring Wellness Plan' })}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2F7D6D] hover:bg-[#1F3D36] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer group"
              >
                <span>Request Residential Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="text-xs text-[#5C6460] flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-[#2F7D6D]" />
                100% plant-derived & safe for pets
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E9DCC7] aspect-[4/3] bg-[#E9DCC7]/20">
              <img
                src="/src/assets/images/cleaner_friendly_crew_1792614129751.jpg"
                alt="Friendly Fernway cleaner with gentle eco-friendly supplies"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-[#E9DCC7] shadow-lg max-w-[240px] hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <Heart className="w-4 h-4 text-[#2F7D6D]" />
                <span className="text-xs font-serif font-bold text-[#1F3D36]">Consistent Faces</span>
              </div>
              <p className="text-[11px] text-[#5C6460]">
                The same two-person crew assigned to your home for long-term consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room-by-Room Detail */}
      <section className="py-20 bg-white border-y border-[#E9DCC7]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Room-By-Room Protocol
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
              Every space treated like our own.
            </h2>
            <p className="mt-3 text-base text-[#5C6460]">
              We tailor our routine to the materials in your home: Carrara marble, reclaimed hardwoods, brass fixtures, and delicate woven wool rugs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Living & Dining',
                focus: 'Dust eradication & floor revival',
                points: [
                  'HEPA vacuuming under furniture cushions',
                  'Baseboards and window ledges hand-wiped',
                  'Hardwoods damp-mopped with botanical soap',
                  'Ceiling fan blades and lamp shades dusted',
                ],
              },
              {
                title: 'Kitchen & Pantry',
                focus: 'Grease-free, food-safe sanitization',
                points: [
                  'Countertops cleared, sanitized, and sealed',
                  'Cooktop and range hood degreased',
                  'Microwave interior & exterior detailed',
                  'Sink scrubbed and faucet polished',
                ],
              },
              {
                title: 'Bedrooms & Linens',
                focus: 'Calm, crisp rest sanctuaries',
                points: [
                  'Bed made with tight hotel hospital corners',
                  'Nightstands & lamps dusted without disturbing items',
                  'Carpet edges and under-bed borders vacuumed',
                  'Discreet trash liner replacement',
                ],
              },
              {
                title: 'Bathrooms & Showers',
                focus: 'Limescale, mold & tile hygiene',
                points: [
                  'Glass shower doors descaled and polished',
                  'Grout agitated with gentle mineral scrubs',
                  'Toilet sanitized behind base and hinges',
                  'Mirrors polished to streak-free clarity',
                ],
              },
            ].map((room) => (
              <div
                key={room.title}
                className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E9DCC7] hover:border-[#A8C3B1] transition-all"
              >
                <h3 className="font-serif text-xl font-semibold text-[#1F3D36]">
                  {room.title}
                </h3>
                <p className="text-xs text-[#2F7D6D] font-medium mt-1 mb-4">
                  {room.focus}
                </p>
                <ul className="space-y-2 text-xs text-[#5C6460]">
                  {room.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7D6D] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Families & Pets */}
      <section className="py-20 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
                Family & Pet Wellness
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1F3D36]">
                Safe for bare crawling knees and curious puppy paws.
              </h2>
              <p className="text-base text-[#5C6460] leading-relaxed">
                Conventional cleaners often leave invisible residues containing phthalates, ammonia, and artificial synthetic fragrances that linger for days.
              </p>
              <p className="text-base text-[#5C6460] leading-relaxed">
                Fernway uses zero VOC, biodegradable cleaning solutions powered by natural essential oils (sweet orange, cedar, and tea tree). No asthma triggers, no toxic residue.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#E9DCC7]">
                  <strong className="block text-[#1F3D36] font-semibold mb-1">We Love Austin Pets</strong>
                  <span className="text-[#5C6460]">We introduce ourselves gently and note anxious pets in our system.</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E9DCC7]">
                  <strong className="block text-[#1F3D36] font-semibold mb-1">HEPA Sealed Filtration</strong>
                  <span className="text-[#5C6460]">Zero pet hair blown back into your air vents.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E9DCC7] aspect-[4/3] bg-white">
                <img
                  src="/src/assets/images/hero_bright_living_room_1792614127186.jpg"
                  alt="Clean bright living room safe for family and pets"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential CTA Band */}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F3D36] text-white rounded-3xl p-8 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-white max-w-2xl mx-auto">
            Give your weekends back to what matters most.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A8C3B1] max-w-xl mx-auto leading-relaxed">
            Get your instant residential quote. Choose between weekly, bi-weekly, or seasonal one-time cleans.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => openQuoteModal({ service: 'Standard Home Clean' })}
              className="px-8 py-3.5 bg-[#2F7D6D] hover:bg-[#A8C3B1] hover:text-[#1F3D36] text-white text-sm font-semibold rounded-full shadow-lg transition-colors cursor-pointer"
            >
              Request Free Residential Quote
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
