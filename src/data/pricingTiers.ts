export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceDisplay: string;
  frequencyLabel: string;
  isPopular?: boolean;
  savingsBadge?: string;
  description: string;
  features: string[];
  recommendedFor: string;
  ctaText: string;
  serviceKey: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'one-time',
    name: 'One-Time Deep Clean',
    tagline: 'The restorative baseline reset',
    priceDisplay: '$285',
    frequencyLabel: 'Single visit estimate',
    isPopular: false,
    description: 'A comprehensive, restorative scrub that resets your space from top to bottom before routine care or special occasions.',
    features: [
      'Full hand-wipe of baseboards, doors, and trim',
      'Deep bathroom descaling, tile & grout scrub',
      'Complete exterior appliance & kitchen degreasing',
      'Window sills, blinds, and reachable ceiling fans',
      'All floors HEPA vacuumed and micro-mopped',
      'Non-toxic, allergen-free botanical supplies included',
      'Backed by our 100% Reclean Guarantee',
    ],
    recommendedFor: 'New clients, spring resets, hosting out-of-town guests, or pre-holiday prep.',
    ctaText: 'Book a Deep Clean',
    serviceKey: 'deep-clean',
  },
  {
    id: 'recurring',
    name: 'Recurring Home Care',
    tagline: 'Effortless order, every single week',
    priceDisplay: '$145',
    frequencyLabel: 'Per visit (bi-weekly average)',
    isPopular: true,
    savingsBadge: 'Save 15% - 20%',
    description: 'Our signature recurring program. Enjoy consistent cleaners who memorize your home preferences and keep your sanctuary effortlessly pristine.',
    features: [
      'Same dedicated 2-person crew every visit',
      'Locked calendar time that never gets bumped',
      '15% off bi-weekly or 20% off weekly visits',
      'Complimentary deep clean add-on every 4th visit',
      'Hotel-style bed linen hospital corners',
      'No contracts — pause or skip with 24h notice',
      'Priority emergency reschedule access',
    ],
    recommendedFor: 'Homeowners, parents, pet owners, and busy professionals who value their weekends.',
    ctaText: 'Start Recurring Care',
    serviceKey: 'recurring-plans',
  },
  {
    id: 'commercial',
    name: 'Office & Studio Care',
    tagline: 'Discreet after-hours sanitation',
    priceDisplay: '$240',
    frequencyLabel: 'Per visit baseline',
    isPopular: false,
    description: 'Custom sanitation protocols for creative studios, tech offices, and professional practices. High-touch hygiene without chemical odors.',
    features: [
      'After-hours cleaning (evenings or weekends)',
      'Keycard / alarm code trusted handling with NDA',
      'Full conference room & AV console dusting',
      'Kitchenette sanitation, fridge purge & trash consolidation',
      'Restroom restocking & commercial HEPA extraction',
      'Monthly consolidated corporate invoicing (Net 30)',
      'Dedicated operations manager point of contact',
    ],
    recommendedFor: 'Studios, agencies, law firms, tech teams, and boutique medical/wellness offices.',
    ctaText: 'Request Walkthrough',
    serviceKey: 'office-and-commercial',
  },
];

export interface AddOnOption {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
}

export const availableAddOns: AddOnOption[] = [
  { id: 'inside-fridge', name: 'Interior Refrigerator & Freezer Scrub', price: '$45', duration: '+45 min', description: 'Shelves removed, washed, sanitized, and neatly reorganized.' },
  { id: 'inside-oven', name: 'Interior Oven Degrease', price: '$50', duration: '+45 min', description: 'Eco-friendly degreasing that removes baked-on grease without toxic fumes.' },
  { id: 'inside-windows', name: 'Interior Glass & Window Tracks', price: '$65', duration: '+60 min', description: 'Streak-free interior pane shine, sill detailing, and frame wiping.' },
  { id: 'inside-cabinets', name: 'Interior Kitchen Cabinet Detail', price: '$70', duration: '+60 min', description: 'Empty cabinets and drawers vacuumed and hand-wiped.' },
  { id: 'laundry-service', name: 'Linen Wash, Dry & Fold', price: '$35 / load', duration: '+45 min', description: 'Bed sheets and bath towels laundered with organic fragrance-free detergent.' },
  { id: 'patio-sweep', name: 'Covered Patio Sweep & Furniture Wipe', price: '$35', duration: '+30 min', description: 'Cobwebs removed, deck swept, outdoor dining surfaces wiped.' },
];
