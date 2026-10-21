import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Sparkles,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Clock,
  Calendar,
  Home as HomeIcon,
  ChevronDown,
  MapPin,
  HeartHandshake,
  Award,
  Users2,
  Zap,
  Phone,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { servicesData } from '../data/services';
import { faqsData } from '../data/faqs';
import { austinServiceAreas } from '../data/serviceAreas';
import { useQuoteModal } from '../context/QuoteModalContext';
import { QuickQuoteCard } from '../components/QuickQuoteCard';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { StatCounters } from '../components/StatCounters';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { QuoteForm } from '../components/QuoteForm';
import { PageTransition } from '../components/PageTransition';

export const Home: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState<string | null>(faqsData[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <PageTransition className="min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#1F3D36] text-white">
        {/* Hero Background Image with subtle zoom & measured overlay scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_bright_living_room_1792614127186.jpg"
            alt="Sunlit minimalist living room with clean hardwood floors and natural linen"
            width={1600}
            height={900}
            fetchPriority="high"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.02]"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          {/* Measured gradient scrim for WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D36] via-[#1F3D36]/65 to-[#1F3D36]/40" />
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
        </div>

        {/* Floating subtle ambient particles/drift */}
        <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-[#A8C3B1]/15 blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#2F7D6D]/20 blur-3xl"
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge / City Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-wide text-[#FAF8F4]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A8C3B1]" />
                <span>Boutique Home & Studio Care in Austin, TX</span>
              </motion.div>

              {/* Headline with Staggered Word Reveal */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                  },
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.12] tracking-tight text-balance"
              >
                {'A cleaner space. A lighter week.'.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className="inline-block mr-2.5"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-base sm:text-lg text-[#FAF8F4]/90 max-w-xl leading-relaxed"
              >
                Thoughtful, chemical-free cleaning for homeowners and boutique offices. Dedicated two-person teams, plant botanicals, and hotel-folded linen corners.
              </motion.p>

              {/* Primary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
              >
                <button
                  onClick={() => openQuoteModal()}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2F7D6D] hover:bg-[#256558] text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <Link
                  to="/services"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full backdrop-blur-sm border border-white/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>See Our Services</span>
                </Link>
              </motion.div>

              {/* Trust Chips Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#FAF8F4]/80"
              >
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#A8C3B1]" />
                  <span>Insured & Bonded ($2M Policy)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-[#A8C3B1]" />
                  <span>Pet-Safe Eco Botanicals</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A8C3B1]" />
                  <span>100% Reclean Guarantee</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Quick Quote Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <QuickQuoteCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= LOCAL TRUST ROW ================= */}
      <section className="py-8 bg-white border-b border-[#E9DCC7]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5C6460] shrink-0">
              Trusted by Austin Residents & Boutiques:
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 items-center w-full md:w-auto opacity-75">
              {[
                'South Congress Lofts',
                'Canopy Studio ATX',
                'Zilker Collective',
                'Hill Country Roasters',
                'East 6th Architecture',
              ].map((name) => (
                <div
                  key={name}
                  className="font-serif text-sm tracking-tight text-[#1F3D36] text-center font-medium hover:opacity-100 transition-opacity"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
                Carefully Crafted Services
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
                Every corner handled with care.
              </h2>
              <p className="mt-3 text-base text-[#5C6460] leading-relaxed">
                Whether you need a serene bi-weekly maintenance rhythm, an exhaustive deep reset, or after-hours commercial sanitation, we bring the exact same boutique standards.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F7D6D] hover:text-[#1F3D36] transition-colors group"
            >
              <span>Explore full service checklists</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc, idx) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-[#E9DCC7] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Service Image with smooth zoom on hover */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E9DCC7]/30">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      loading="lazy"
                      width={600}
                      height={375}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-serif font-bold text-[#1F3D36] shadow-xs">
                      {svc.startingPrice}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#1F3D36] group-hover:text-[#2F7D6D] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#5C6460] leading-relaxed line-clamp-2">
                      {svc.shortDesc}
                    </p>

                    <ul className="mt-4 space-y-1.5 text-xs text-[#5C6460]">
                      {svc.included.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7D6D] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer action buttons */}
                <div className="p-6 pt-0 border-t border-[#FAF8F4] flex items-center justify-between">
                  <Link
                    to={`/services#${svc.id}`}
                    className="text-xs font-medium text-[#5C6460] hover:text-[#1F3D36] transition-colors"
                  >
                    Learn more
                  </Link>

                  <button
                    onClick={() => openQuoteModal({ service: svc.title })}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F7D6D] hover:text-[#1F3D36] transition-colors cursor-pointer"
                  >
                    <span>Book this</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#E9DCC7]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Effortless Onboarding
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
              How Fernway works in three simple steps.
            </h2>
            <p className="mt-3 text-base text-[#5C6460]">
              No awkward in-home walk-through interviews. No complicated invoicing. Just clean predictability.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-[#FAF8F4] border border-[#E9DCC7] text-center relative"
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-2xl bg-[#1F3D36] text-[#A8C3B1] flex items-center justify-center font-serif text-lg font-bold">
                1
              </div>
              <h3 className="text-xl font-serif text-[#1F3D36] mb-2">
                Request Your Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6460] leading-relaxed">
                Fill out our quick 60-second online intake with your Austin address and preferred schedule.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-8 rounded-2xl bg-[#FAF8F4] border border-[#E9DCC7] text-center relative"
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-2xl bg-[#2F7D6D] text-white flex items-center justify-center font-serif text-lg font-bold">
                2
              </div>
              <h3 className="text-xl font-serif text-[#1F3D36] mb-2">
                We Confirm Your Window
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6460] leading-relaxed">
                Our coordinator confirms your flat rate and provides exact arrival times, cleaner names, and keyless access details.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl bg-[#FAF8F4] border border-[#E9DCC7] text-center relative"
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-2xl bg-[#1F3D36] text-[#A8C3B1] flex items-center justify-center font-serif text-lg font-bold">
                3
              </div>
              <h3 className="text-xl font-serif text-[#1F3D36] mb-2">
                Come Home to Calm
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6460] leading-relaxed">
                Walk into fresh air, spotless countertops, crisp linen beds, and a weekend that is 100% yours to enjoy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= BEFORE / AFTER SLIDER ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
                Tangible Transformations
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1F3D36] leading-tight">
                See the difference meticulous care makes.
              </h2>
              <p className="text-sm sm:text-base text-[#5C6460] leading-relaxed">
                A clean home isn&apos;t just about wiping away dust—it changes the psychological atmosphere of your week. Drag the interactive slider to see a real Zilker living room before and after our signature reset clean.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2F7D6D]/15 text-[#2F7D6D] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]">
                    <strong>HEPA dust elimination:</strong> Captures 99.97% of allergens, pet dander, and Austin cedar pollen.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2F7D6D]/15 text-[#2F7D6D] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]">
                    <strong>Zero chemical film:</strong> Surfaces are washed with botanical soap, leaving natural hardwood gleam.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openQuoteModal()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F3D36] hover:bg-[#2F7D6D] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  <span>Book Your Home Reset</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#E9DCC7]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              The Fernway Standard
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
              Built for people who care about who enters their home.
            </h2>
            <p className="mt-3 text-base text-[#5C6460]">
              We are not a gig app connecting random sub-contractors. We are a boutique Austin cleaning team with high wages and rigorous training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users2,
                title: 'Consistent, Vetted Crews',
                desc: 'You receive the same trusted two-person team who know your home layout, pet quirks, and exact preferences.',
              },
              {
                icon: Leaf,
                title: 'Safe Plant Botanicals',
                desc: 'Cruelty-free, biodegradable concentrates scented with organic eucalyptus, cedar, and lemon peel.',
              },
              {
                icon: ShieldCheck,
                title: '$2M Insurance & Bonding',
                desc: 'Comprehensive coverage on every cleaner, every home key, and every luxury fixture. Total security.',
              },
              {
                icon: Award,
                title: '100% Reclean Promise',
                desc: 'If any room fails to meet our standards, notify us within 24 hours and we return to re-clean it free of charge.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E9DCC7]/80 hover:border-[#A8C3B1] transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#2F7D6D]/10 text-[#2F7D6D] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#1F3D36] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#5C6460] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= STAT COUNTERS ================= */}
      <section className="py-16 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatCounters />
        </div>
      </section>

      {/* ================= TESTIMONIALS CAROUSEL ================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#E9DCC7]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Client Testimonials
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
              Trusted by Austin homeowners and studio founders.
            </h2>
            <p className="mt-3 text-base text-[#5C6460]">
              Real feedback from recurring clients in South Congress, Zilker, Tarrytown, and Downtown.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* ================= SERVICE AREA SECTION ================= */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Map styling & Austin Focus */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#E9DCC7] shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#2F7D6D]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2F7D6D]">
                  Austin Service Territory
                </span>
              </div>
              <h3 className="text-2xl font-serif text-[#1F3D36] mb-3">
                Proudly servicing Central Austin & surrounding enclaves.
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6460] leading-relaxed mb-6">
                Our technicians travel in dedicated electric and hybrid service vehicles, bringing complete equipment kits across Travis and Williamson counties.
              </p>

              {/* Stylized Grid of Neighborhoods */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {austinServiceAreas.map((area) => (
                  <div
                    key={area.name}
                    className="p-2.5 rounded-xl bg-[#FAF8F4] border border-[#E9DCC7]/60 flex items-center justify-between"
                  >
                    <span className="font-medium text-[#1F3D36]">{area.name}</span>
                    <span className="text-[10px] text-[#5C6460] tabular-nums">{area.zip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quick Check Callout */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#1F3D36] text-[#FAF8F4] p-8 sm:p-10 rounded-3xl shadow-xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A8C3B1]">
                  Live Zip Verification
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-serif text-white">
                  Not sure if your home is in our radius?
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#A8C3B1] leading-relaxed">
                  We frequently expand to neighboring pockets in Westlake, Lakeway, and Round Rock. Enter your zip in our quote form and we will instantly confirm route availability.
                </p>

                <div className="mt-6 pt-6 border-t border-[#A8C3B1]/20 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => openQuoteModal()}
                    className="w-full sm:w-auto px-6 py-3 bg-[#2F7D6D] hover:bg-[#A8C3B1] hover:text-[#1F3D36] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                  >
                    Check My Address
                  </button>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-xs text-[#FAF8F4] hover:text-[#A8C3B1] transition-colors"
                  >
                    Or call us: {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ACCORDION ================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#E9DCC7]/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
              Clear Answers
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-[#5C6460]">
              Everything you need to know about pricing, supplies, access, and guarantees.
            </p>
          </div>

          <div className="space-y-3">
            {faqsData.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#E9DCC7] rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 bg-[#FAF8F4] hover:bg-[#FAF8F4]/80 transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-semibold text-[#1F3D36]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2F7D6D] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 sm:p-6 pt-0 bg-[#FAF8F4] text-xs sm:text-sm text-[#5C6460] leading-relaxed border-t border-[#E9DCC7]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION WITH FULL QUOTE FORM ================= */}
      <section id="full-quote-section" className="py-20 lg:py-28 bg-[#1F3D36] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left pitch */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#A8C3B1]">
                Begin With A Fresh Slate
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
                Ready for a lighter week?
              </h2>
              <p className="text-sm sm:text-base text-[#A8C3B1] leading-relaxed">
                Take two minutes to submit your details. We will calculate your custom flat rate and confirm availability within 2 business hours.
              </p>

              <div className="space-y-3 pt-4 text-xs text-[#FAF8F4]/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8C3B1]" />
                  <span>Flat-rate transparency &mdash; never surprise overtime charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8C3B1]" />
                  <span>Non-toxic, safe for paws and young children</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8C3B1]" />
                  <span>Free cancellation up to 24 hours prior</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#A8C3B1]/20">
                <p className="text-xs text-[#A8C3B1]">Prefer to speak directly with our team?</p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="mt-1 inline-flex items-center gap-2 font-serif text-xl font-semibold text-white hover:text-[#A8C3B1] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#A8C3B1]" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Right: Embedded Full Quote Form */}
            <div className="lg:col-span-7 bg-[#FAF8F4] text-[#1A1A1A] p-6 sm:p-10 rounded-3xl shadow-2xl border border-[#E9DCC7]">
              <div className="mb-6">
                <h3 className="text-2xl font-serif text-[#1F3D36]">
                  Request Your Free Quote
                </h3>
                <p className="mt-1 text-xs text-[#5C6460]">
                  No obligation. We reply with your guaranteed flat estimate.
                </p>
              </div>

              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
