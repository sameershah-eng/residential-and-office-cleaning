import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonialsData, TestimonialItem } from '../data/testimonials';

export const TestimonialsCarousel: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-play interval (6 seconds), pauses on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const current: TestimonialItem = testimonialsData[currentIndex];

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E9DCC7] p-8 sm:p-12 shadow-sm min-h-[340px] sm:min-h-[300px] flex flex-col justify-between">
        {/* Subtle background decorative quotation mark */}
        <div className="absolute top-6 right-8 text-[#E9DCC7]/35 pointer-events-none select-none">
          <Quote className="w-24 h-24 stroke-[1]" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col justify-between h-full"
          >
            {/* Top row: stars + service used */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-1 text-[#2F7D6D]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="ml-1 text-xs font-semibold text-[#1F3D36]">5.0 / 5.0</span>
              </div>

              <div className="text-xs text-[#5C6460]">
                <span>{current.serviceUsed}</span>
                <span className="mx-1.5 text-[#A8C3B1]">·</span>
                <span>{current.date}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-xl font-serif text-[#1F3D36] leading-relaxed italic mb-8">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author info */}
            <div className="pt-6 border-t border-[#E9DCC7]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-serif text-base font-semibold text-[#1F3D36]">
                  {current.name}
                </h4>
                <p className="text-xs text-[#5C6460]">
                  {current.neighborhood} &mdash; {current.roleOrHomeType}
                </p>
              </div>

              <span className="text-[11px] font-medium text-[#2F7D6D] bg-[#2F7D6D]/10 px-2.5 py-1 rounded-full w-fit">
                Verified Austin Client
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls: Dots and Arrows */}
      <div className="mt-6 flex items-center justify-between px-2">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-[#2F7D6D]' : 'w-2 bg-[#E9DCC7] hover:bg-[#A8C3B1]'
              }`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-2.5 rounded-full border border-[#E9DCC7] bg-white text-[#1F3D36] hover:bg-[#FAF8F4] hover:border-[#A8C3B1] transition-colors shadow-xs cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-2.5 rounded-full border border-[#E9DCC7] bg-white text-[#1F3D36] hover:bg-[#FAF8F4] hover:border-[#A8C3B1] transition-colors shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
