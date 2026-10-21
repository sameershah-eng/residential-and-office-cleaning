export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'trust';
}

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'pricing',
    question: 'How do you determine your pricing?',
    answer: 'Our quotes are transparent and customized based on the square footage of your home or office, number of bedrooms and bathrooms, the initial condition of the space, and your desired frequency. We do not believe in hidden travel surcharges or surprise checkout fees. Our online quote calculator provides an accurate estimate in seconds, and we confirm the exact flat rate prior to arrival.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'What cleaning supplies and equipment do you bring?',
    answer: 'We arrive fully equipped with everything required: commercial-grade HEPA vacuum cleaners that capture 99.97% of airborne dust, clean color-coded microfiber towels (fresh for each home to eliminate cross-contamination), and our proprietary plant-based, biodegradable cleaning solutions. If you have specific specialty wood oils or stone cleaners you prefer us to use, we are delighted to accommodate.',
  },
  {
    id: 'faq-3',
    category: 'general',
    question: 'Are your products safe for dogs, cats, and toddlers?',
    answer: 'Yes, 100%. Fernway was founded on the belief that a spotless home should never smell like harsh ammonia or synthetic perfumes. All our standard products are non-toxic, cruelty-free, and safe for bare paws, curious babies, and sensitive airways. We also note your pets by name so our crew knows who to greet warmly and who might need a quiet room while the vacuum is running.',
  },
  {
    id: 'faq-4',
    category: 'trust',
    question: 'Do I need to be home during the cleaning? How does access work?',
    answer: 'Most of our clients prefer to be out running errands or working during the service. You can provide entry via a keypad door code, lockbox, smart lock app, or by leaving a key with your building concierge. Our crews are background-checked, bonded, and follow strict lockup procedures, including arming alarms and sending a confirmation photo text upon departure.',
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'We understand that life in Austin gets busy. You can reschedule or pause your appointment with at least 24 hours advance notice without any penalty or fee. For cancellations made with less than 24 hours notice, a modest $50 late-notice fee applies to compensate our cleaners for their reserved block of time.',
  },
  {
    id: 'faq-6',
    category: 'trust',
    question: 'Are you insured, bonded, and background-checked?',
    answer: 'Yes, comprehensively. Fernway carries a $2,000,000 general commercial liability policy and full worker bonding. Every technician undergoes an exhaustive multi-state criminal background check, reference checks, and 4 weeks of hands-on apprenticeship before entering a client home independently. Your property and peace of mind are completely protected.',
  },
  {
    id: 'faq-7',
    category: 'pricing',
    question: 'Do you offer discounts for recurring cleans?',
    answer: 'Absolutely. Recurring cleans are our most popular option because they keep homes effortlessly pristine. Weekly clients enjoy a 20% discount on every visit, bi-weekly clients save 15%, and monthly clients receive 10% off our standard one-time clean rate. There are no long-term contracts; you may adjust your frequency or pause whenever you travel.',
  },
  {
    id: 'faq-8',
    category: 'general',
    question: 'What is included in a clean versus optional add-ons?',
    answer: 'Every standard clean covers thorough dusting, HEPA vacuuming, floor washing, full bathroom sanitization, kitchen exterior counters and appliances, sink polishing, bed making, and waste removal. Optional specialty add-ons include interior refrigerator deep-clean, interior oven detail, interior window washing, patio sweeping, and laundry wash/fold.',
  },
];
