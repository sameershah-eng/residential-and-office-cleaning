import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { siteConfig } from '../config/site';

interface CounterItemProps {
  target: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const duration = 1800; // 1.8 seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // easeOutExpo curve
      const progress = frame / totalFrames;
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(easeProgress * value);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(value);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif tabular-nums font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1F3D36]">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatCounters: React.FC<{ className?: string }> = ({ className = '' }) => {
  const stats: CounterItemProps[] = [
    {
      target: siteConfig.trustSignals.homesCleaned,
      suffix: '+',
      label: 'Austin Homes Cleaned',
      sublabel: 'Over 4,800 spotless resets delivered across Central Austin',
    },
    {
      target: siteConfig.trustSignals.officeClients,
      suffix: '+',
      label: 'Creative & Tech Studios',
      sublabel: 'Trusted after-hours care for Austin agencies and practices',
    },
    {
      target: siteConfig.trustSignals.fiveStarReviews,
      suffix: '+',
      label: '5-Star Local Reviews',
      sublabel: 'Consistently top-rated on Google, Yelp & Nextdoor',
    },
    {
      target: siteConfig.trustSignals.yearsInBusiness,
      suffix: ' Years',
      label: 'Dedicated to Austin',
      sublabel: 'Locally owned, non-franchised, bonded & certified',
    },
  ];

  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 ${className}`}>
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 sm:p-5 rounded-2xl bg-white/60 border border-[#E9DCC7]/70 backdrop-blur-xs"
        >
          <AnimatedNumber value={stat.target} suffix={stat.suffix} />
          <span className="mt-2 text-sm font-semibold text-[#1F3D36] tracking-tight">
            {stat.label}
          </span>
          <span className="mt-1 text-xs text-[#5C6460] leading-relaxed">
            {stat.sublabel}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
