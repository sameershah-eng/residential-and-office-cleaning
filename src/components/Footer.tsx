import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Shield, Heart } from 'lucide-react';
import { siteConfig } from '../config/site';
import { austinServiceAreas } from '../data/serviceAreas';
import { useQuoteModal } from '../context/QuoteModalContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  return (
    <footer className="bg-[#1F3D36] text-[#FAF8F4] pt-16 pb-12 border-t border-[#A8C3B1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#A8C3B1]/20">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#A8C3B1] group-hover:bg-[#2F7D6D] transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-tight font-semibold text-[#FAF8F4]">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#A8C3B1]">
                  Austin, Texas
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#A8C3B1] max-w-sm leading-relaxed">
              {siteConfig.tagline} Boutique residential & office cleaning crafted with botanical formulations, HEPA air filtration, and bonded, dedicated Austin crews.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-[#FAF8F4]/80">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A8C3B1]" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#A8C3B1]" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-2 text-[#FAF8F4]/70">
                <MapPin className="w-3.5 h-3.5 text-[#A8C3B1]" />
                <span>{siteConfig.address.full}</span>
              </div>
            </div>

            {/* CTA inline */}
            <div className="pt-2">
              <button
                onClick={() => openQuoteModal()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F7D6D] hover:bg-[#A8C3B1] hover:text-[#1F3D36] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8C3B1]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF8F4]/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/residential" className="hover:text-white transition-colors">
                  Residential Care
                </Link>
              </li>
              <li>
                <Link to="/office" className="hover:text-white transition-colors">
                  Office & Studio Care
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About & Crew
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Pricing & Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8C3B1]">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF8F4]/80">
              <li>
                <Link to="/services#standard-home" className="hover:text-white transition-colors">
                  Standard Home Clean
                </Link>
              </li>
              <li>
                <Link to="/services#deep-clean" className="hover:text-white transition-colors">
                  Signature Deep Clean
                </Link>
              </li>
              <li>
                <Link to="/services#move-in-out" className="hover:text-white transition-colors">
                  Move-In / Move-Out
                </Link>
              </li>
              <li>
                <Link to="/services#office-commercial" className="hover:text-white transition-colors">
                  Office & Commercial
                </Link>
              </li>
              <li>
                <Link to="/services#recurring-plans" className="hover:text-white transition-colors">
                  Recurring Wellness
                </Link>
              </li>
              <li>
                <Link to="/services#post-construction" className="hover:text-white transition-colors">
                  Post-Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Newsletter */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8C3B1] mb-2">
                Hours of Care
              </h4>
              <p className="text-xs text-[#FAF8F4]/80 leading-relaxed">
                {siteConfig.hours.weekdays}
                <br />
                {siteConfig.hours.saturday}
                <br />
                <span className="text-[#A8C3B1]">Emergency office cleans available on Sundays.</span>
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8C3B1] mb-2">
                The Fernway Journal
              </h4>
              <p className="text-xs text-[#FAF8F4]/70 mb-2">
                Occasional home care rituals, seasonal cleaning guides, and neighborhood updates.
              </p>
              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#A8C3B1] bg-white/10 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#A8C3B1]" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-[#A8C3B1]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="p-2 bg-[#2F7D6D] hover:bg-[#A8C3B1] hover:text-[#1F3D36] text-white rounded-xl transition-colors cursor-pointer shrink-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Austin Neighborhoods Strip */}
        <div className="py-6 border-b border-[#A8C3B1]/20">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A8C3B1]">
              Austin Neighborhoods Served:
            </span>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#FAF8F4]/70">
            {austinServiceAreas.map((area, idx) => (
              <span key={area.name}>
                {area.name}
                {idx < austinServiceAreas.length - 1 && <span className="ml-3 text-[#A8C3B1]/40">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Trust Signals */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F4]/60">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. Fully Insured & Bonded.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#A8C3B1]" />
              <span>$2M Policy #FW-TX-9902</span>
            </span>
            <span>·</span>
            <span>Austin, Texas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
