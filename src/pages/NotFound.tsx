import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Sparkles } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { useQuoteModal } from '../context/QuoteModalContext';

export const NotFound: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <PageTransition className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4">
      <div className="max-w-lg text-center p-8 sm:p-12 bg-white rounded-3xl border border-[#E9DCC7] shadow-sm">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#2F7D6D]/10 text-[#2F7D6D] flex items-center justify-center">
          <Sparkles className="w-8 h-8" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-[#2F7D6D]">
          404 &mdash; Page Cleaned Away
        </span>

        <h1 className="mt-3 text-3xl sm:text-4xl font-serif text-[#1F3D36]">
          This space is completely clear.
        </h1>

        <p className="mt-4 text-sm text-[#5C6460] leading-relaxed">
          The page you are looking for doesn&apos;t exist or may have been moved. Let&apos;s guide you back to our main rooms.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1F3D36] hover:bg-[#2F7D6D] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <button
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2F7D6D] hover:bg-[#1F3D36] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </PageTransition>
  );
};
