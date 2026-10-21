import React, { useState } from 'react';
import { ArrowRight, Sparkles, Calendar, MapPin } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

const todayString = new Date().toISOString().split('T')[0];

export const QuickQuoteCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [service, setService] = useState('Standard Home Clean');
  const [zip, setZip] = useState('78704');
  const [date, setDate] = useState(todayString);
  const { openQuoteModal } = useQuoteModal();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    // Either scroll to #full-quote-section if present, or open modal
    const fullFormEl = document.getElementById('full-quote-section');
    if (fullFormEl) {
      fullFormEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      openQuoteModal({ service, zip, date });
    }
  };

  return (
    <div
      className={`bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xl border border-[#E9DCC7]/80 text-[#1A1A1A] ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#2F7D6D]" />
        <span className="text-xs font-semibold uppercase tracking-wider text-[#2F7D6D]">
          Instant Booking Concierge
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-serif text-[#1F3D36] mb-1">
        Check Availability & Pricing
      </h3>
      <p className="text-xs text-[#5C6460] mb-5">
        Custom flat rates for Austin residences and creative studios.
      </p>

      <form onSubmit={handleContinue} className="space-y-3.5">
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1F3D36] mb-1">
            Service Desired
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-3 py-2 bg-[#FAF8F4] border border-[#E9DCC7] rounded-xl text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#2F7D6D] focus:border-transparent transition-all"
          >
            <option value="Standard Home Clean">Standard Home Clean (From $165)</option>
            <option value="Signature Deep Clean">Signature Deep Clean (From $285)</option>
            <option value="Move-In / Move-Out Clean">Move-In / Move-Out Clean (From $320)</option>
            <option value="Office & Commercial Care">Office & Studio Care (From $240)</option>
            <option value="Recurring Wellness Plan">Recurring Plan (Save up to 20%)</option>
            <option value="Post-Construction Detail">Post-Construction Detail (From $395)</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1F3D36] mb-1">
              Austin Zip
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#5C6460]/60">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <input
                type="text"
                value={zip}
                maxLength={5}
                onChange={(e) => setZip(e.target.value)}
                placeholder="78704"
                className="w-full pl-8 pr-3 py-2 bg-[#FAF8F4] border border-[#E9DCC7] rounded-xl text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#2F7D6D] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1F3D36] mb-1">
              Target Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#5C6460]/60">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <input
                type="date"
                min={todayString}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-8 pr-2 py-2 bg-[#FAF8F4] border border-[#E9DCC7] rounded-xl text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#2F7D6D] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-[#2F7D6D] hover:bg-[#1F3D36] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all group cursor-pointer"
        >
          <span>Continue to Final Estimate</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#5C6460]">
          <Sparkles className="w-3.5 h-3.5 text-[#2F7D6D]" />
          <span>Locked flat price · Never an automated estimate surprise</span>
        </div>
      </form>
    </div>
  );
};
