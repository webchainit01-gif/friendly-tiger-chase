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
    description: "100% herbal tablets designed to support strength, stamina, and vitality specifically for men.",
    benefits: [
      "Boosts strength and endurance",
      "Enhances vitality and energy levels",
      "Supports overall male wellness",
    ],
    keyHerbs: ["Shilajit", "Ashwagandha", "Gokshura", "Safed Musli"],
    packSize: "60 Tablets",
    price: "₹499",
  },
  {
    id: "3",
    name: "Maha Vajrasheela (Family)",
    slug: "maha-vajrasheela-family",
    image: "/images/maha-vajra-shila-family.jpeg",
    description: "Everyday Ayurvedic wellness tablets for the whole family, promoting energy and resilience.",
    benefits: [
      "Supports daily energy and vitality",
      "Enhances natural immunity",
      "Promotes overall well-being for all ages",
    ],
    keyHerbs: ["Amla", "Giloy", "Tulsi", "Brahmi"],
    packSize: "60 Tablets",
    price: "₹399",
  },
  {
    id: "4",
    name: "Dayana (Joint Support)",
    slug: "dayana-joint-support",
    image: "/images/dayana-tablets.jpeg",
    description: "Formulated with powerful Ayurvedic herbs to support mobility and provide comprehensive joint comfort.",
    benefits: [
      "Supports healthy joint function",
      "Helps reduce inflammation",
      "Promotes flexibility and ease of movement",
    ],
    keyHerbs: ["Asthi Samharka", "Nirgundi", "Shalaki", "Ashwagandha", "Ginger", "Babool Phali"],
    packSize: "60 Tablets",
    price: "₹449",
  },
  {
    id: "5",
    name: "Dayana Pain Oil",
    slug: "dayana-pain-oil",
    image: "/images/dayana-pain-oil.jpeg",
    description: "A quick-absorbing Ayurvedic oil for fast relief from joint and muscle discomfort, providing soothing comfort.",
    benefits: [
      "Provides rapid pain relief",
      "Reduces muscle stiffness",
      "Easy to apply and quickly absorbed",
    ],
    keyHerbs: ["Mahanarayan Oil", "Gandhapura Oil", "Nilgiri Oil", "Pudina Satva"],
    packSize: "100 ml",
    price: "₹179",
  },
  {
    id: "6",
    name: "Liver Guard A1",
    slug: "liver-guard-a1",
    image: "/images/liver-guard-a1.jpeg",
    description: "An Ayurvedic formulation designed to support digestion, rejuvenate liver cells, and promote healthy liver function.",
    benefits: [
      "Improves digestion and metabolism",
      "Rejuvenates and protects liver cells",
      "Promotes healthy liver function",
      "Helps repair damaged liver mucosa",
    ],
    keyHerbs: ["Bhumi Amla", "Punarnava", "Katuki", "Chirayata"],
    packSize: "60 Tablets",
    price: "₹449",
  },
];