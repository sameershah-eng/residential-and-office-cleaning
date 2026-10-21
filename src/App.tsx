import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QuoteModalProvider } from './context/QuoteModalContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MobileFloatingCta } from './components/MobileFloatingCta';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Residential } from './pages/Residential';
import { Office } from './pages/Office';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <QuoteModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#FAF8F4] text-[#1A1A1A]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/residential" element={<Residential />} />
              <Route path="/office" element={<Office />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <QuoteModal />
          <MobileFloatingCta />
        </div>
      </BrowserRouter>
    </QuoteModalProvider>
  );
}
