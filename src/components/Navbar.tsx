import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../config/site';
import { useQuoteModal } from '../context/QuoteModalContext';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Residential', path: '/residential' },
  { name: 'Office', path: '/office' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const location = useLocation();
  const { openQuoteModal } = useQuoteModal();

  // Check if current page is Home where transparent hero applies
  const isHomePage = location.pathname === '/';

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        const progress = (scrollY / winHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Determine text and appearance state
  // When at the very top of home page, navbar is transparent with white text
  const isTransparentTop = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isTransparentTop
            ? 'bg-transparent text-white py-5'
            : 'bg-[#FAF8F4]/90 backdrop-blur-md text-[#1A1A1A] py-3.5 shadow-sm border-b border-[#E9DCC7]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D6D] rounded-lg"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                isTransparentTop
                  ? 'bg-white/15 text-white backdrop-blur-sm group-hover:bg-white/25'
                  : 'bg-[#1F3D36] text-[#A8C3B1] group-hover:bg-[#2F7D6D]'
              }`}
            >
              {/* Botanical Leaf SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg tracking-tight font-semibold leading-tight transition-colors duration-300 ${
                  isTransparentTop ? 'text-white' : 'text-[#1F3D36]'
                }`}
              >
                Fernway
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${
                  isTransparentTop ? 'text-white/80' : 'text-[#5C6460]'
                }`}
              >
                Cleaning Co.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isTransparentTop
                      ? isActive
                        ? 'text-white font-semibold'
                        : 'text-white/85 hover:text-white'
                      : isActive
                      ? 'text-[#1F3D36] font-semibold'
                      : 'text-[#5C6460] hover:text-[#1F3D36]'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>

                  {/* Active or hovered underline animation */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full ${
                        isTransparentTop ? 'bg-white' : 'bg-[#2F7D6D]'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && hoveredPath === link.path && (
                    <motion.div
                      layoutId="navHoverIndicator"
                      className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full opacity-60 ${
                        isTransparentTop ? 'bg-white/60' : 'bg-[#2F7D6D]/60'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Zone: Phone & Pill Quote Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className={`flex items-center gap-2 text-xs font-semibold tracking-wide transition-colors ${
                isTransparentTop
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#1F3D36] hover:text-[#2F7D6D]'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteConfig.phone}</span>
            </a>

            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F7D6D] hover:bg-[#1F3D36] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => openQuoteModal()}
              className="px-3 py-1.5 bg-[#2F7D6D] text-white text-xs font-medium rounded-full"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isTransparentTop
                  ? 'text-white hover:bg-white/10'
                  : 'text-[#1F3D36] hover:bg-[#E9DCC7]/40'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Thin Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
          <div
            className="h-full bg-[#2F7D6D] transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#FAF8F4] flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto sm:hidden"
          >
            {/* Nav list with staggered items */}
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#5C6460]">
                Explore Fernway
              </span>
              <div className="space-y-1">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.2 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-3 text-2xl font-serif tracking-tight border-b border-[#E9DCC7]/50 ${
                          isActive
                            ? 'text-[#2F7D6D] font-bold'
                            : 'text-[#1F3D36] hover:text-[#2F7D6D]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Direct phone and service area in mobile drawer */}
              <div className="pt-4 text-sm text-[#5C6460] space-y-2">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2.5 text-[#1F3D36] font-medium"
                >
                  <Phone className="w-4 h-4 text-[#2F7D6D]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
                <p className="text-xs text-[#5C6460]">Serving Central Austin & surrounding neighborhoods</p>
              </div>
            </div>

            {/* Pinned quote button at bottom of mobile sheet */}
            <div className="pt-6 border-t border-[#E9DCC7]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#2F7D6D] text-white text-base font-semibold rounded-2xl shadow-lg cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
