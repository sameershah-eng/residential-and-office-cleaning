export interface TestimonialItem {
  id: string;
  name: string;
  neighborhood: string;
  roleOrHomeType: string;
  rating: number;
  serviceUsed: string;
  date: string;
  quote: string;
  verified: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Elena Rostova & David Vance',
    neighborhood: 'South Congress, Austin',
    roleOrHomeType: '3-Bed Craftsman Bungalow',
    rating: 5,
    serviceUsed: 'Bi-Weekly Recurring Home Clean',
    date: 'March 2026',
    quote: 'Walking through the front door on alternate Thursdays has become my favorite moment of the week. There is no noxious bleach smell—just subtle cedarwood and linen, sparkling countertops, and the kind of floor gleam you normally only see in design magazines.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Marcus Chen',
    neighborhood: 'Downtown Austin',
    roleOrHomeType: 'Managing Partner at Forge Studio',
    rating: 5,
    serviceUsed: 'Office & Commercial Care (3x / week)',
    date: 'February 2026',
    quote: 'We host high-profile tech and architecture clients every Tuesday. Fernway handles our 4,200 sq ft creative studio after hours with surgical care. The keyboards, espresso bar, and glass partitions are immaculate every single morning.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Sarah & Patrick Lindqvist',
    neighborhood: 'Zilker, Austin',
    roleOrHomeType: 'Parents of two toddlers + golden retriever',
    rating: 5,
    serviceUsed: 'Weekly Family Clean',
    date: 'January 2026',
    quote: 'With two small kids and a shedding dog, our baseboards and rugs used to feel like a losing battle. Maria and Sofia from Fernway treat our home with such kindness. Having non-toxic, pet-safe plant botanicals gives me total peace of mind.',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Dr. Julian Thorne',
    neighborhood: 'Tarrytown, Austin',
    roleOrHomeType: '4-Bed Modern Residence',
    rating: 5,
    serviceUsed: 'Signature Deep Clean',
    date: 'December 2025',
    quote: 'We booked a deep clean before hosting family for Thanksgiving. They reached areas our previous cleaners simply skipped: refrigerator seals, vent grills, oven interiors, and shower grout lines. Truly exemplary attention to detail.',
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Chloe Arispe',
    neighborhood: 'Clarksville, Austin',
    roleOrHomeType: 'Historic Victorian Home',
    rating: 5,
    serviceUsed: 'Move-In / Move-Out Clean',
    date: 'November 2025',
    quote: 'Our landlord is notoriously strict about deposit returns on historic Clarksville properties. The Fernway team spent 6 hours detailing every drawer, pantry shelf, and molding. We received 100% of our security deposit without a single question.',
    verified: true,
  },
  {
    id: 'rev-6',
    name: 'Devon K. Miller',
    neighborhood: 'Mueller, Austin',
    roleOrHomeType: 'Townhome Owner & Remote Executive',
    rating: 5,
    serviceUsed: 'Monthly Reset Clean',
    date: 'October 2025',
    quote: 'What sets Fernway apart is their consistency and communication. They text when they are en route, they lock up securely, and I have had the same two cleaners for nine months straight. They feel like trusted members of our household.',
    verified: true,
  },
];
