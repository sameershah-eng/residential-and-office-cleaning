import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Check } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

export const InstantEstimateCalculator: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'monthly' | 'onetime'>('biweekly');
  const [deepCleanAddon, setDeepCleanAddon] = useState(false);

  const { openQuoteModal } = useQuoteModal();

  // Price calculations based on real Austin residential pricing
  const { lowPrice, highPrice, hoursLow, hoursHigh, discountLabel } = useMemo(() => {
    // Base formula
    let base = 120 + bedrooms * 30 + bathrooms * 35;
    let hoursMin = 2 + (bedrooms - 1) * 0.5 + (bathrooms - 1) * 0.5;
    let hoursMax = hoursMin + 1.5;

    if (deepCleanAddon) {
      base += 90;
      hoursMin += 1.5;
      hoursMax += 2.0;
    }

    let multiplier = 1.0;
    let discount = '';

    if (frequency === 'weekly') {
      multiplier = 0.80; // 20% off
      discount = '20% Recurring Savings Applied';
    } else if (frequency === 'biweekly') {
      multiplier = 0.85; // 15% off
      discount = '15% Recurring Savings Applied';
    } else if (frequency === 'monthly') {
      multiplier = 0.90; // 10% off
      discount = '10% Recurring Savings Applied';
    } else {
      discount = 'Standard One-Time Rate';
    }

    const calculated = Math.round(base * multiplier);
    return {
      lowPrice: calculated - 15,
      highPrice: calculated + 15,
      hoursLow: hoursMin.toFixed(1),
      hoursHigh: hoursMax.toFixed(1),
      discountLabel: discount,
    };
  }, [bedrooms, bathrooms, frequency, deepCleanAddon]);

  const handleBook = () => {
    const serviceName = deepCleanAddon
      ? 'Signature Deep Clean'
      : frequency === 'onetime'
      ? 'Standard Home Clean'
      : 'Recurring Wellness Plan';

    openQuoteModal({
      service: serviceName,
    });
  };

  return (
    <div className={`bg-white rounded-3xl border border-[#E9DCC7] p-6 sm:p-10 shadow-sm ${className}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#2F7D6D] bg-[#2F7D6D]/10 px-3 py-1 rounded-full">
            Instant Austin Estimate
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-serif text-[#1F3D36]">
            Transparent Pricing Calculator
          </h3>
          <p className="mt-1 text-sm text-[#5C6460]">
            Select your home details below for an instant price range. No email required to calculate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bedrooms selector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1F3D36]">
                  Bedrooms
                </label>
                <span className="text-sm font-serif font-bold text-[#1F3D36]">{bedrooms} {bedrooms === 1 ? 'Bedroom / Studio' : 'Bedrooms'}</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setBedrooms(num)}
                    className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      bedrooms === num
                        ? 'bg-[#1F3D36] text-white shadow-sm'
                        : 'bg-[#FAF8F4] text-[#5C6460] hover:bg-[#E9DCC7]/40 border border-[#E9DCC7]'
                    }`}
                  >
                    {num === 5 ? '5+' : num}
                  </button>
                ))}
              </div>
            </div>

            {/* Bathrooms selector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1F3D36]">
                  Bathrooms
                </label>
                <span className="text-sm font-serif font-bold text-[#1F3D36]">{bathrooms} {bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setBathrooms(num)}
                    className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      bathrooms === num
                        ? 'bg-[#1F3D36] text-white shadow-sm'
                        : 'bg-[#FAF8F4] text-[#5C6460] hover:bg-[#E9DCC7]/40 border border-[#E9DCC7]'
                    }`}
                  >
                    {num === 4 ? '4+' : num}
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F3D36] mb-2">
                Cleaning Frequency
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'weekly', label: 'Weekly', tag: '-20%' },
                  { id: 'biweekly', label: 'Bi-Weekly', tag: '-15%' },
                  { id: 'monthly', label: 'Monthly', tag: '-10%' },
                  { id: 'onetime', label: 'One-Time', tag: 'Standard' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFrequency(item.id as any)}
                    className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                      frequency === item.id
                        ? 'bg-[#2F7D6D]/10 border-[#2F7D6D] text-[#1F3D36] ring-1 ring-[#2F7D6D]'
                        : 'bg-[#FAF8F4] border-[#E9DCC7] text-[#5C6460] hover:border-[#A8C3B1]'
                    }`}
                  >
                    <span className="block text-xs font-bold">{item.label}</span>
                    <span className="block text-[10px] text-[#2F7D6D] font-medium">{item.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Deep Clean Add-on Toggle */}
            <div className="pt-2 border-t border-[#E9DCC7]/60">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={deepCleanAddon}
                  onChange={(e) => setDeepCleanAddon(e.target.checked)}
                  className="w-4 h-4 rounded text-[#2F7D6D] focus:ring-[#2F7D6D] accent-[#2F7D6D] cursor-pointer"
                />
                <span className="text-xs sm:text-sm text-[#1A1A1A]">
                  Include Initial Deep Clean detail (baseboards, oven interior, extra scrubbing)
                </span>
              </label>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-[#FAF8F4] border border-[#A8C3B1]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5C6460]">
                Estimated Austin Flat Rate
              </span>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D36] tabular-nums">
                  ${lowPrice} &ndash; ${highPrice}
                </span>
                <span className="text-xs text-[#5C6460]">
                  {frequency === 'onetime' ? '/ clean' : '/ visit'}
                </span>
              </div>

              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#2F7D6D]/10 text-[#2F7D6D] rounded-full text-xs font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>{discountLabel}</span>
              </div>

              <div className="mt-5 space-y-2 text-xs text-[#5C6460]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2F7D6D]" />
                    <span>Estimated crew time:</span>
                  </span>
                  <span className="font-semibold text-[#1F3D36] tabular-nums">
                    {hoursLow} – {hoursHigh} hours
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2F7D6D]" />
                    <span>Crew configuration:</span>
                  </span>
                  <span className="font-semibold text-[#1F3D36]">
                    2 background-checked cleaners
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E9DCC7]">
              <button
                type="button"
                onClick={handleBook}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#2F7D6D] hover:bg-[#1F3D36] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all cursor-pointer group"
              >
                <span>Lock in this Estimate</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-2 text-center text-[10px] text-[#5C6460]">
                No credit card needed · Free cancellation up to 24h before
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
