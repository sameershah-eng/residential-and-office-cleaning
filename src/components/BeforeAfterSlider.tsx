import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = '/src/assets/images/room_messy_before_1792614128229.jpg',
  afterImage = '/src/assets/images/room_clean_after_1792614128880.jpg',
  beforeAlt = 'Living room before cleaning with scattered clutter',
  afterAlt = 'Living room after Fernway deep clean, spotless and serene',
  className = '',
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const percentage = (clamped / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(5, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(95, prev + 5));
    }
  };

  return (
    <div className={`relative select-none ${className}`}>
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Before and after clean comparison slider"
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-[#E9DCC7]/80 cursor-ew-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D6D]"
      >
        {/* Background Layer: AFTER (Clean Room) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt={afterAlt}
            loading="lazy"
            width={1600}
            height={900}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute bottom-4 right-4 bg-[#1F3D36]/80 text-[#FAF8F4] backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#A8C3B1]" />
            <span>After Fernway</span>
          </div>
        </div>

        {/* Foreground Layer: BEFORE (Messy Room) clipped with clip-path */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            loading="lazy"
            width={1600}
            height={900}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute bottom-4 left-4 bg-black/60 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
            <span>Before</span>
          </div>
        </div>

        {/* Draggable Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-2xl pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle knob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#1F3D36] shadow-xl flex items-center justify-center border-2 border-[#1F3D36]/10 transform active:scale-95 transition-transform">
            <ChevronsLeftRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Caption instruction */}
      <div className="mt-3 flex items-center justify-between text-xs text-[#5C6460] px-2">
        <span className="font-medium">Drag handle or use left/right keys to compare</span>
        <span className="hidden sm:inline">Living room reset · Zilker residence</span>
      </div>
    </div>
  );
};
