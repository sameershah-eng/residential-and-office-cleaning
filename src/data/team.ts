export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tenure: string;
  specialty: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Claire Holloway',
    role: 'Founder & Head of Standards',
    tenure: 'Founder (6 yrs)',
    specialty: 'Hospitality protocols & botanical formulations',
    bio: 'Former boutique hotel operations director who founded Fernway to bring calm, non-toxic luxury standards to Austin homes and creative workspaces.',
    image: '/src/assets/images/founder_portrait_1792614146559.jpg',
  },
  {
    id: 'team-2',
    name: 'Maria Santos',
    role: 'Senior Team Lead & Trainer',
    tenure: '5 years with Fernway',
    specialty: 'Historic hardwoods & fine stone preservation',
    bio: 'With over 12 years of luxury residential cleaning experience, Maria personally mentors every incoming cleaner on gentle material care and speed-with-care techniques.',
    image: '/src/assets/images/cleaner_friendly_crew_1792614129751.jpg',
  },
  {
    id: 'team-3',
    name: 'David Alvarez',
    role: 'Commercial Operations Manager',
    tenure: '4 years with Fernway',
    specialty: 'Tech studio security, after-hours schedules & key logistics',
    bio: 'Oversees our commercial and studio cleaning divisions across Downtown and East Austin, ensuring strict NDA compliance and zero-disruption night visits.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'team-4',
    name: 'Sofia Ramirez',
    role: 'Residential Specialist & Pet Liaison',
    tenure: '3 years with Fernway',
    specialty: 'Pet-friendly sanitization & hypoallergenic cleans',
    bio: 'Known for befriending every dog and cat on her route, Sofia is certified in asthma-safe botanical sanitation and allergen eradication.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'team-5',
    name: 'Lucas Campbell',
    role: 'Post-Construction & Detail Lead',
    tenure: '3 years with Fernway',
    specialty: 'HEPA dust extraction & fine architectural finishes',
    bio: 'Brings an eagle eye for paint overspray, fine gypsum dust, and glass tracking, working hand-in-hand with Austin architects and interior designers.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'team-6',
    name: 'Amara Ndiaye',
    role: 'Client Experience & Scheduling Coordinator',
    tenure: '2 years with Fernway',
    specialty: 'Seamless schedule optimization & custom home preferences',
    bio: 'The warm voice behind our phone lines and quote intake. Amara ensures every unique preference—from gate codes to special linen folds—is honored.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
];
