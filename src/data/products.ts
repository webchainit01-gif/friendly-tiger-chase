export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  benefits: string[];
  keyHerbs: string[];
  packSize: string;
  price: string;
  isHero?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mount Abu Bala Malkangani Oil",
    slug: "mount-abu-bala-malkangani-oil",
    image: "/images/malkangani-oil.jpeg",
    description: "A balanced Ayurvedic oil for joint and muscular comfort. Helps ease stiffness, fatigue, and supports daily mobility.",
    benefits: [
      "Helps reduce joint & muscle discomfort",
      "Soothes stiffness & soreness",
      "Supports flexibility & daily activity",
    ],
    keyHerbs: ["Bala", "Malkangani", "Nirgundi", "Ashwagandha"],
    packSize: "100 ml",
    price: "₹199",
    isHero: true,
  },
  {
    id: "2",
    name: "Maha Vajrasheela Power (For Men)",
    slug: "maha-vajrasheela-power-for-men",
    image: "/images/maha-vajra-shila-power.jpeg",
    description: "Maha Vajrasheela Power is a potent 100% herbal Ayurvedic formulation specifically designed to enhance strength, stamina, and vitality in men. It supports overall male wellness, energy levels, and endurance for a more active lifestyle.",
    benefits: [
      "Boosts physical strength and endurance",
      "Enhances vitality and energy levels naturally",
      "Supports reproductive health and vigor",
      "Aids in reducing fatigue and improving recovery",
      "Promotes overall male well-being and confidence",
    ],
    keyHerbs: ["Shilajit", "Ashwagandha", "Gokshura", "Safed Musli", "Kaunch Beej", "Shatavari"],
    packSize: "60 Tablets",
    price: "₹499",
  },
  {
    id: "3",
    name: "Maha Vajrasheela (Family)",
    slug: "maha-vajrasheela-family",
    image: "/images/maha-vajra-shila-family.jpeg",
    description: "Maha Vajrasheela (Family) offers everyday Ayurvedic wellness for the entire family. These tablets are formulated to promote sustained energy, enhance natural immunity, and build resilience against common ailments, supporting holistic well-being for all ages.",
    benefits: [
      "Supports daily energy and vitality for all family members",
      "Enhances natural immunity and resistance to infections",
      "Promotes overall well-being and balanced health",
      "Aids in detoxification and healthy metabolism",
      "Helps in stress management and mental clarity",
    ],
    keyHerbs: ["Amla", "Giloy", "Tulsi", "Brahmi", "Neem", "Haritaki"],
    packSize: "60 Tablets",
    price: "₹399",
  },
  {
    id: "4",
    name: "Dayana (Joint Support)",
    slug: "dayana-joint-support",
    image: "/images/dayana-tablets.jpeg",
    description: "Dayana Joint Support tablets are formulated with a powerful blend of Ayurvedic herbs to provide comprehensive support for joint health. They help improve mobility, reduce inflammation, and alleviate discomfort, promoting flexibility and ease of movement.",
    benefits: [
      "Supports healthy joint function and cartilage integrity",
      "Helps reduce inflammation and swelling in joints",
      "Promotes flexibility and ease of movement",
      "Alleviates joint pain and stiffness",
      "Strengthens bones and connective tissues",
    ],
    keyHerbs: ["Asthi Samharka", "Nirgundi", "Shalaki", "Ashwagandha", "Ginger", "Babool Phali", "Guggul", "Rasna"],
    packSize: "60 Tablets",
    price: "₹449",
  },
  {
    id: "5",
    name: "Dayana Pain Oil",
    slug: "dayana-pain-oil",
    image: "/images/dayana-pain-oil.jpeg",
    description: "Dayana Pain Oil is a quick-absorbing Ayurvedic oil designed for fast and effective relief from joint and muscular discomfort. Its unique blend of natural ingredients penetrates deep to provide soothing comfort, reduce stiffness, and promote relaxation.",
    benefits: [
      "Provides rapid relief from joint and muscle pain",
      "Reduces stiffness and soreness effectively",
      "Easy to apply and quickly absorbed for instant comfort",
      "Offers soothing warmth to affected areas",
      "Supports improved mobility and flexibility",
    ],
    keyHerbs: ["Mahanarayan Oil", "Gandhapura Oil", "Nilgiri Oil", "Pudina Satva", "Wintergreen Oil", "Clove Oil"],
    packSize: "100 ml",
    price: "₹179",
  },
  {
    id: "6",
    name: "Liver Guard A1",
    slug: "liver-guard-a1",
    image: "/images/liver-guard-a1.jpeg",
    description: "Liver Guard A1 is an advanced Ayurvedic formulation specifically designed to support optimal liver health. It aids in improving digestion, rejuvenating liver cells, and promoting healthy liver function, crucial for overall detoxification and metabolism.",
    benefits: [
      "Improves digestion and metabolism efficiency",
      "Rejuvenates and protects liver cells from damage",
      "Promotes healthy liver function and detoxification",
      "Helps repair damaged liver mucosa and tissues",
      "Supports bile production for better fat digestion",
      "Enhances overall vitality and energy levels",
    ],
    keyHerbs: ["Bhumi Amla", "Punarnava", "Katuki", "Chirayata", "Kalmegh", "Kutki", "Daruharidra"],
    packSize: "60 Tablets",
    price: "₹449",
  },
];