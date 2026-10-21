import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/services';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PageTransition } from '../components/PageTransition';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial' | 'specialty'>('all');
  const { openQuoteModal } = useQuoteModal();

  const filteredServices = servicesData.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <PageTransition className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
            Service Directory
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-serif text-[#1F3D36] tracking-tight">
            Tailored care for every square foot.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5C6460] leading-relaxed">
            From routine weekly maintenance to high-precision post-construction resets, every Fernway service includes bonded staff, HEPA filtration, and non-toxic botanical formulations.
          </p>

          {/* Interactive Filter Controls (Allowed tabs as per design guidelines) */}
          <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-white border border-[#E9DCC7] rounded-2xl w-fit">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Office & Studio' },
              { id: 'specialty', label: 'Specialty / Post-Build' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#1F3D36] text-white shadow-xs'
                    : 'text-[#5C6460] hover:text-[#1F3D36] hover:bg-[#FAF8F4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List with Checklists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-32 bg-white rounded-3xl border border-[#E9DCC7] overflow-hidden shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image Col */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#E9DCC7]/20">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1F3D36] shadow-sm">
                    {service.category.toUpperCase()}
                  </div>
                </div>

                {/* Content Col */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                      <h2 className="text-2xl sm:text-3xl font-serif text-[#1F3D36]">
                        {service.title}
                      </h2>
                      <div className="text-right">
                        <span className="font-serif text-2xl font-bold text-[#2F7D6D]">
                          {service.startingPrice}
                        </span>
                        <p className="text-[11px] text-[#5C6460]">{service.priceNote}</p>
                      </div>
                    </div>

                    <p className="text-sm text-[#5C6460] leading-relaxed mb-6">
                      {service.fullDesc}
                    </p>

                    <div className="mb-6 p-4 rounded-xl bg-[#FAF8F4] border border-[#E9DCC7]/60 text-xs text-[#5C6460] space-y-1">
                      <p>
                        <strong className="text-[#1F3D36]">Ideal For:</strong> {service.idealFor}
                      </p>
                      <p>
                        <strong className="text-[#1F3D36]">Estimated Duration:</strong> {service.durationEst}
                      </p>
                    </div>

                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1F3D36] mb-3">
                      What&apos;s Included In Every Visit:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C6460] mb-8">
                      {service.included.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7D6D] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA Bar */}
                  <div className="pt-6 border-t border-[#E9DCC7]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-[#5C6460]">
                      No contracts required · 100% Reclean Guarantee
                    </span>

                    <button
                      onClick={() => openQuoteModal({ service: service.title })}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2F7D6D] hover:bg-[#1F3D36] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer group"
                    >
                      <span>Request Quote for {service.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Bottom CTA */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F3D36] text-white rounded-3xl p-8 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-white max-w-2xl mx-auto">
            Need a custom arrangement or combined home and office quote?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A8C3B1] max-w-xl mx-auto leading-relaxed">
            Our Austin team can bundle multi-property cleans, coordinate custom keyless entries, and tailor schedules to your lifestyle.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => openQuoteModal()}
              className="px-8 py-3.5 bg-[#2F7D6D] hover:bg-[#A8C3B1] hover:text-[#1F3D36] text-white text-sm font-semibold rounded-full shadow-lg transition-colors cursor-pointer"
            >
              Get a Free Custom Quote
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
