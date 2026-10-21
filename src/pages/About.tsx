import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { teamMembers } from '../data/team';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PageTransition } from '../components/PageTransition';

export const About: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <PageTransition className="pt-28 pb-20">
      {/* Hero / Founder Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Our Story & Heritage
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F3D36] tracking-tight leading-[1.12]">
              Cleaning with the quiet care of high hospitality.
            </h1>
            <p className="text-base sm:text-lg text-[#5C6460] leading-relaxed">
              Fernway was born in South Congress out of a simple observation: most cleaning companies treat homes like high-volume conveyor belts. Cleaners are rushed, products are cheap synthetic detergents, and clients never know who is stepping through their front door.
            </p>
            <p className="text-base sm:text-lg text-[#5C6460] leading-relaxed">
              We chose a different path. We pay living Austin wages (starting at $24/hr), supply gentle botanical formulations, assign dedicated two-person pairs, and give our crew the time required to do truly restorative work.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#A8C3B1]">
                <img
                  src="/src/assets/images/founder_portrait_1792614146559.jpg"
                  alt="Claire Holloway, Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-base font-semibold text-[#1F3D36]">Claire Holloway</p>
                <p className="text-xs text-[#5C6460]">Founder & Operations Director, Austin, TX</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E9DCC7] aspect-[4/5] bg-white">
              <img
                src="/src/assets/images/founder_portrait_1792614146559.jpg"
                alt="Claire Holloway in Austin studio"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white border-y border-[#E9DCC7]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Guiding Principles
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
              How we hold our craft.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Living Wages & Dignity',
                desc: 'Our staff are W-2 employees with paid time off and healthcare benefits. When cleaners thrive, your home receives genuine pride and meticulous care.',
              },
              {
                title: 'Clean Air, Zero Toxins',
                desc: 'We never mask odors with artificial air fresheners or aerosol bleach. We clean with organic tea tree, eucalyptus, and HEPA air scrubbing.',
              },
              {
                title: 'Consistent Home Familiarity',
                desc: 'Your space is intimate. You deserve cleaners who know where the vacuum goes, how to tuck your duvet, and which treats your dog loves.',
              },
              {
                title: 'Uncompromised Accountability',
                desc: 'If anything is ever missed, we return within 24 hours to re-clean it. No excuses, no friction, no arguments.',
              },
            ].map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E9DCC7]"
              >
                <h3 className="font-serif text-lg font-semibold text-[#1F3D36] mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-[#5C6460] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Crew Cards */}
      <section className="py-20 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Meet Our Crew
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
              The hands behind your clean home.
            </h2>
            <p className="mt-3 text-base text-[#5C6460]">
              Every team member is fully background-checked, insured, bonded, and certified through our 4-week hospitality training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-[#E9DCC7] overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#E9DCC7]/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif text-xl font-semibold text-[#1F3D36]">
                      {member.name}
                    </h3>
                    <span className="text-[11px] text-[#2F7D6D] font-medium">
                      {member.tenure}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#1F3D36] mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#5C6460] leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="pt-3 border-t border-[#FAF8F4] text-[11px] text-[#5C6460]">
                    <span className="font-semibold text-[#1F3D36]">Specialty: </span>
                    {member.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Badge */}
      <section className="py-16 bg-white border-y border-[#E9DCC7]/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2F7D6D]/10 text-[#2F7D6D] flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-serif text-[#1F3D36]">
            The Fernway 100% Satisfaction Guarantee
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C6460] leading-relaxed">
            We don&apos;t expect you to settle for anything less than pure delight. If an oven rack was missed, a mirror has a streak, or a baseboard didn&apos;t meet your expectations, call or text us within 24 hours. We will send our crew lead back to make it right promptly at zero charge.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F3D36] text-white rounded-3xl p-8 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-white max-w-2xl mx-auto">
            Experience the boutique difference.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A8C3B1] max-w-xl mx-auto leading-relaxed">
            Reserve your first clean or recurring slot with our Austin team today.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => openQuoteModal()}
              className="px-8 py-3.5 bg-[#2F7D6D] hover:bg-[#A8C3B1] hover:text-[#1F3D36] text-white text-sm font-semibold rounded-full shadow-lg transition-colors cursor-pointer"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
