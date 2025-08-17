export interface AyurvedicHerb {
  id: string;
  name: string;
  image: string;
  benefits: string[];
  description: string;
}

export const ayurvedicHerbs: AyurvedicHerb[] = [
  {
    id: "1",
    name: "Ashwagandha",
    image: "/images/ashwagandha.jpeg",
    benefits: [
      "Reduces stress and anxiety",
      "Boosts energy and stamina",
      "Supports cognitive function",
      "Enhances immunity",
    ],
    description: "A powerful adaptogen known for its rejuvenating properties, helping the body manage stress and promoting overall vitality.",
  },
  {
    id: "2",
    name: "Turmeric (Haldi)",
    image: "/images/turmeric.jpeg",
    benefits: [
      "Potent anti-inflammatory",
      "Strong antioxidant",
      "Supports joint health",
      "Aids digestion",
    ],
    description: "A golden spice revered for its medicinal properties, primarily due to curcumin, which offers significant anti-inflammatory and antioxidant benefits.",
  },
  {
    id: "3",
    name: "Neem",
    image: "/images/neem.jpeg",
    benefits: [
      "Purifies blood",
      "Supports skin health",
      "Antimicrobial properties",
      "Boosts detoxification",
    ],
    description: "Known as the 'village pharmacy,' Neem is widely used for its purifying and detoxifying effects, especially beneficial for skin and blood health.",
  },
  {
    id: "4",
    name: "Brahmi",
    image: "/images/brahmi.jpeg",
    benefits: [
      "Enhances memory and concentration",
      "Reduces mental fatigue",
      "Supports nervous system",
      "Promotes calm and clarity",
    ],
    description: "A renowned brain tonic in Ayurveda, Brahmi is celebrated for its ability to improve cognitive functions, memory, and reduce anxiety.",
  },
  {
    id: "5",
    name: "Triphala",
    image: "/images/triphala.jpeg",
    benefits: [
      "Supports digestion and regularity",
      "Gentle detoxifier",
      "Rich in antioxidants",
      "Boosts immunity",
    ],
    description: "A classic Ayurvedic blend of three fruits (Amalaki, Bibhitaki, Haritaki), Triphala is a powerful digestive aid and rejuvenator.",
  },
  {
    id: "6",
    name: "Giloy",
    image: "/images/giloy.jpeg",
    benefits: [
      "Strengthens immunity",
      "Antipyretic properties",
      "Supports liver function",
      "Helps manage blood sugar",
    ],
    description: "Often called 'Amrita' (the root of immortality), Giloy is highly valued for its immune-boosting and fever-reducing properties.",
  },
];