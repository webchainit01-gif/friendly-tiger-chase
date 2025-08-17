export interface AyurvedicHerb {
  id: string;
  name: string;
  description: string;
  image: string;
  benefits: string[];
  doshas: string[];
  properties: string[];
}

export const ayurvedicHerbs: AyurvedicHerb[] = [
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    description: 'A powerful adaptogen known for its stress-reducing and rejuvenating properties. It supports overall vitality and helps balance the body.',
    image: '/images/ashwagandha.jpg',
    benefits: ['Stress Reduction', 'Energy Boost', 'Immune Support', 'Improved Sleep'],
    doshas: ['Vata', 'Kapha'],
    properties: ['Rejuvenating', 'Calming', 'Strengthening'],
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    description: 'A golden spice with potent anti-inflammatory and antioxidant properties. Widely used for its healing benefits and to support digestion.',
    image: '/images/turmeric.jpg',
    benefits: ['Anti-inflammatory', 'Antioxidant', 'Digestive Aid', 'Skin Health'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Warming', 'Cleansing', 'Purifying'],
  },
  {
    id: 'triphala',
    name: 'Triphala',
    description: 'A classic Ayurvedic blend of three fruits, renowned for its gentle cleansing and detoxifying effects. It supports healthy digestion and regularity.',
    image: '/images/triphala.jpg',
    benefits: ['Detoxification', 'Digestive Health', 'Immune Support', 'Antioxidant'],
    doshas: ['Vata', 'Pitta', 'Kapha'],
    properties: ['Cleansing', 'Balancing', 'Rejuvenating'],
  },
  {
    id: 'brahmi',
    name: 'Brahmi',
    description: 'Known as the "herb of grace," Brahmi is celebrated for its cognitive-enhancing properties, supporting memory, focus, and mental clarity.',
    image: '/images/brahmi.jpg',
    benefits: ['Memory Enhancement', 'Cognitive Function', 'Stress Reduction', 'Nervous System Support'],
    doshas: ['Vata', 'Pitta'],
    properties: ['Cooling', 'Calming', 'Nourishing'],
  },
  {
    id: 'neem',
    name: 'Neem',
    description: 'A powerful purifying herb with strong antibacterial and antifungal properties. Often used for skin health and detoxification.',
    image: '/images/neem.jpg',
    benefits: ['Skin Health', 'Blood Purification', 'Immune Support', 'Antimicrobial'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Cooling', 'Bitter', 'Purifying'],
  },
  {
    id: 'guduchi',
    name: 'Guduchi',
    description: 'An immune-boosting herb known for its adaptogenic qualities and ability to support the body\'s natural defense mechanisms.',
    image: '/images/guduchi.jpg',
    benefits: ['Immune Booster', 'Detoxification', 'Anti-inflammatory', 'Fever Reduction'],
    doshas: ['Vata', 'Pitta', 'Kapha'],
    properties: ['Rejuvenating', 'Immune-modulating', 'Bitter'],
  },
  {
    id: 'mahavajrashila-family-tablets',
    name: 'Mahavajrashila Family Tablets',
    description: 'A traditional Ayurvedic formulation known for its various therapeutic benefits, supporting overall well-being.',
    image: '/images/placeholder-herb.jpg', // Placeholder image
    benefits: ['Reduces Depression', 'Stress Relief', 'Mental Clarity', 'Nervous System Support'],
    doshas: ['Vata', 'Pitta', 'Kapha'], // Example doshas, adjust as needed
    properties: ['Calming', 'Balancing', 'Rejuvenating'], // Example properties, adjust as needed
  },
];