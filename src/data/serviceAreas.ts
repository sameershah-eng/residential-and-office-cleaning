export interface NeighborhoodArea {
  name: string;
  zip: string;
  vibe: string;
  isPopular?: boolean;
}

export const austinServiceAreas: NeighborhoodArea[] = [
  { name: 'South Congress & Bouldin Creek', zip: '78704', vibe: 'Historic cottages, mid-century bungalows & modern builds', isPopular: true },
  { name: 'Zilker & Barton Hills', zip: '78704', vibe: 'Lush tree canopies, park-side family homes & condos', isPopular: true },
  { name: 'Downtown & 2nd St District', zip: '78701', vibe: 'Luxury high-rise penthouses, corporate lofts & creative studios', isPopular: true },
  { name: 'Tarrytown & Old West Austin', zip: '78703', vibe: 'Expansive estates, established historic residences', isPopular: true },
  { name: 'Clarksville', zip: '78703', vibe: 'Quaint heritage homes, tree-lined quiet avenues' },
  { name: 'Hyde Park & North Loop', zip: '78751', vibe: 'Victorian classics, craftsman homes & academics' },
  { name: 'Mueller', zip: '78723', vibe: 'Eco-conscious modern townhomes, young families' },
  { name: 'Travis Heights', zip: '78704', vibe: 'Rolling hills, modern architectural sanctuaries' },
  { name: 'Rosedale & Allandale', zip: '78756 / 78757', vibe: 'Family ranch homes & updated open layouts' },
  { name: 'Westlake Hills & Rollingwood', zip: '78746', vibe: 'Luxury hillside residences & executive homes' },
  { name: 'East Austin & Holly', zip: '78702', vibe: 'Design studios, contemporary homes & tech offices' },
  { name: 'Crestview & Brentwood', zip: '78757', vibe: 'Vibrant neighborhood bungalows & boutique workspaces' },
];
