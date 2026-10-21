import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';
import { austinServiceAreas } from '../data/serviceAreas';
import { QuoteForm } from '../components/QuoteForm';
import { PageTransition } from '../components/PageTransition';

export const Contact: React.FC = () => {
  return (
    <PageTransition className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D]">
            Get In Touch
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-serif text-[#1F3D36] tracking-tight">
            Request your free Austin quote or reach out directly.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5C6460] leading-relaxed">
            Fill out the form below for an exact flat rate estimate within 2 hours, or call our South Congress office directly.
          </p>
        </div>

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Location info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="p-5 bg-white rounded-2xl border border-[#E9DCC7] hover:border-[#2F7D6D] transition-colors flex items-center gap-4 group block shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2F7D6D]/10 text-[#2F7D6D] flex items-center justify-center shrink-0 group-hover:bg-[#2F7D6D] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#5C6460] uppercase tracking-wider block font-medium">
                    Call or Text
                  </span>
                  <span className="font-serif text-lg font-bold text-[#1F3D36] group-hover:text-[#2F7D6D] transition-colors">
                    {siteConfig.phone}
                  </span>
                  <span className="text-[11px] text-[#5C6460] block mt-0.5">
                    Live Austin dispatcher 7:30 AM – 6:30 PM
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="p-5 bg-white rounded-2xl border border-[#E9DCC7] hover:border-[#2F7D6D] transition-colors flex items-center gap-4 group block shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2F7D6D]/10 text-[#2F7D6D] flex items-center justify-center shrink-0 group-hover:bg-[#2F7D6D] group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#5C6460] uppercase tracking-wider block font-medium">
                    Email Inquiries
                  </span>
                  <span className="font-serif text-lg font-bold text-[#1F3D36] group-hover:text-[#2F7D6D] transition-colors">
                    {siteConfig.email}
                  </span>
                  <span className="text-[11px] text-[#5C6460] block mt-0.5">
                    Responses within 2 business hours
                  </span>
                </div>
              </a>

              <div className="p-5 bg-white rounded-2xl border border-[#E9DCC7] flex items-start gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#2F7D6D]/10 text-[#2F7D6D] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#5C6460] uppercase tracking-wider block font-medium">
                    Austin Operations Office
                  </span>
                  <span className="font-serif text-base font-semibold text-[#1F3D36] block">
                    {siteConfig.address.street}
                  </span>
                  <span className="text-xs text-[#5C6460] block">
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </span>
                </div>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="p-6 bg-[#FAF8F4] rounded-2xl border border-[#E9DCC7]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#2F7D6D]" />
                <h3 className="font-serif text-base font-semibold text-[#1F3D36]">
                  Operating Hours
                </h3>
              </div>
              <ul className="space-y-1.5 text-xs text-[#5C6460]">
                <li>{siteConfig.hours.weekdays}</li>
                <li>{siteConfig.hours.saturday}</li>
                <li className="text-[#A8C3B1]">{siteConfig.hours.sunday}</li>
              </ul>
            </div>

            {/* Austin Service Area Summary */}
            <div className="p-6 bg-white rounded-2xl border border-[#E9DCC7]">
              <h3 className="font-serif text-base font-semibold text-[#1F3D36] mb-2">
                Service Radius
              </h3>
              <p className="text-xs text-[#5C6460] leading-relaxed mb-4">
                We service Travis County and immediate surroundings including:
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-[#1F3D36]">
                {austinServiceAreas.map((area) => (
                  <span
                    key={area.name}
                    className="px-2.5 py-1 bg-[#FAF8F4] border border-[#E9DCC7]/80 rounded-lg"
                  >
                    {area.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Quote Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E9DCC7] shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2F7D6D]">
                Free Instant Estimate
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-serif text-[#1F3D36]">
                Tell Us About Your Space
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#5C6460]">
                We calculate flat rates with zero unexpected surprise charges.
              </p>
            </div>

            <QuoteForm />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
