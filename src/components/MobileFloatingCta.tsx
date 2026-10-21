import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/site';
import { useQuoteModal } from '../context/QuoteModalContext';

export const MobileFloatingCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling ~380px (past hero)
      setIsVisible(window.scrollY > 380);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 left-4 right-4 z-30 sm:hidden flex items-center gap-2.5 p-2 bg-[#1F3D36]/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#A8C3B1]/30 max-h-[64px]"
        >
          {/* Quick call button */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            aria-label="Call Fernway directly"
            className="flex items-center justify-center w-11 h-11 bg-white/10 hover:bg-white/20 text-[#FAF8F4] rounded-xl transition-colors shrink-0"
          >
            <Phone className="w-5 h-5 text-[#A8C3B1]" />
          </a>

          {/* Quote Button */}
          <button
            onClick={() => openQuoteModal()}
            className="flex-1 flex items-center justify-center gap-2 h-11 px-4 bg-[#2F7D6D] active:bg-[#1F3D36] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>Request Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
