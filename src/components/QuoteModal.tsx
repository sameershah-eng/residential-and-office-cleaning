import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { QuoteForm } from './QuoteForm';
import { siteConfig } from '../config/site';

export const QuoteModal: React.FC = () => {
  const { isOpen, options, closeQuoteModal } = useQuoteModal();

  // Close on ESC key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuoteModal();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeQuoteModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeQuoteModal}
            className="fixed inset-0 bg-[#1F3D36]/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#FAF8F4] rounded-2xl shadow-2xl border border-[#E9DCC7] p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
          >
            {/* Close Button */}
            <button
              onClick={closeQuoteModal}
              aria-label="Close quote modal"
              className="absolute top-5 right-5 p-2 rounded-full text-[#5C6460] hover:text-[#1F3D36] hover:bg-[#E9DCC7]/40 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-8 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2F7D6D] uppercase tracking-wider mb-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Instant Free Estimate</span>
              </div>
              <h2 id="quote-modal-title" className="text-2xl sm:text-3xl font-serif text-[#1F3D36]">
                Request Your Custom Clean
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#5C6460]">
                Tell us a bit about your space in {siteConfig.location}. We will respond with an exact flat quote within 2 hours.
              </p>
            </div>

            {/* Trust pills */}
            <div className="grid grid-cols-2 gap-2 mb-6 p-3 bg-white/70 border border-[#E9DCC7]/80 rounded-xl text-xs text-[#5C6460]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2F7D6D] shrink-0" />
                <span>Insured & bonded crew</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2F7D6D] shrink-0" />
                <span>2-hr quote response</span>
              </div>
            </div>

            {/* Form */}
            <QuoteForm
              isModal
              initialService={options.service}
              initialZip={options.zip}
              initialDate={options.date}
              onSuccess={closeQuoteModal}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
