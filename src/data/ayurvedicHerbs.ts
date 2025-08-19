export interface AyurvedicHerb {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  benefits: string[];
  doshas: string[];
  properties: string[];
  keyHerbs?: string[];
  image: string; // Added image property
}

export const ayurvedicHerbs: AyurvedicHerb[] = [
  {
    id: 'bhumi-amla',
    name: 'Bhumi Amla',
    tagline: 'Liver Cleanser & Immunity Booster',
    description: 'A potent herb known for its liver-protective and immune-boosting properties.',
    benefits: ['Improves digestion and strengthens immunity', 'Repairs liver cells, reducing weakness and fatigue', 'Balances hormones and supports women’s health', 'Detoxifies harmful toxins and purifies the liver'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Detoxifying', 'Immune-boosting', 'Hepatoprotective'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'bhringraj',
    name: 'Bhringraj',
    tagline: 'Vitality & Skin Tonic',
    description: 'A revered herb in Ayurveda, especially known for its benefits for hair and overall vitality.',
    benefits: ['Boosts stamina, energy, and physical performance', 'Improves digestion and nutrient absorption', 'Promotes healthy skin and hair', 'Detoxifies and supports overall wellness'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Rejuvenating', 'Detoxifying', 'Hair tonic'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'kutki',
    name: 'Kutki',
    tagline: 'Natural Detox & Energy',
    description: 'A powerful detoxifying herb, particularly beneficial for liver health and boosting energy.',
    benefits: ['Repairs liver and reduces fatigue', 'Improves digestion and supports healthy growth', 'Boosts stamina and mental sharpness', 'Strengthens immunity across all ages'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Detoxifying', 'Energizing', 'Immune-boosting'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'kalmegh',
    name: 'Kalmegh',
    tagline: 'Liver Protector & Detox Herb',
    description: 'Known as the "King of Bitters," Kalmegh is a strong liver protector and detoxifier.',
    benefits: ['Eliminates toxins from the body', 'Strengthens immunity in children', 'Improves digestion and energy', 'Repairs liver, reducing weakness and fatigue'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Detoxifying', 'Hepatoprotective', 'Immune-boosting'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'makoy',
    name: 'Makoy',
    tagline: 'Stress Reliever & Liver Cleanser',
    description: 'A traditional herb used for its calming effects and liver cleansing properties.',
    benefits: ['Improves digestion and nutrient absorption', 'Strengthens liver and boosts stamina', 'Repairs liver damage in elders', 'Reduces stress and promotes mental calmness'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Calming', 'Liver cleansing', 'Digestive'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'punarnava',
    name: 'Punarnava',
    tagline: 'Natural Detox & Anti-Swelling Herb',
    description: 'A rejuvenating herb known for its diuretic and anti-inflammatory properties, supporting kidney and liver health.',
    benefits: ['Detoxifies liver and kidneys', 'Reduces inflammation and bloating', 'Boosts energy and relieves fatigue', 'Maintains hormonal balance in women'],
    doshas: ['Kapha', 'Pitta'],
    properties: ['Diuretic', 'Anti-inflammatory', 'Detoxifying'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'arjun',
    name: 'Arjun',
    tagline: 'Heart Strength & Circulation Support',
    description: 'A renowned Ayurvedic herb for cardiovascular health, strengthening the heart muscles and improving circulation.',
    benefits: ['Strengthens heart health and regulates blood pressure', 'Improves circulation and stamina', 'Reduces weakness and fatigue in elders', 'Supports healthy cardiac muscles'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Cardioprotective', 'Circulatory support', 'Tonic'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'daru-haldi',
    name: 'Daru Haldi',
    tagline: 'Anti-Inflammatory & Skin Enhancer',
    description: 'Also known as Indian Barberry, it is valued for its anti-inflammatory and skin-enhancing properties.',
    benefits: ['Improves heart health and circulation', 'Boosts immunity and strength', 'Reduces swelling and joint pain', 'Enhances skin glow and digestion'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Anti-inflammatory', 'Skin tonic', 'Immune-boosting'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'himsra',
    name: 'Himsra',
    tagline: 'Calming & Liver Support Herb',
    description: 'A herb known for its calming effects and beneficial impact on liver function.',
    benefits: ['Reduces stress and promotes calmness', 'Boosts immunity and healthy growth', 'Strengthens liver and detoxifies the body', 'Supports hormonal balance in women'],
    doshas: ['Pitta', 'Vata'],
    properties: ['Calming', 'Hepatoprotective', 'Immune-boosting'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'kasani',
    name: 'Kasani',
    tagline: 'Digestive & Energy Tonic',
    description: 'Chicory, known in Ayurveda as Kasani, supports digestion and provides an energy boost.',
    benefits: ['Improves digestion and nutrient absorption', 'Strengthens liver and removes toxins', 'Boosts stamina and endurance', 'Reduces swelling and supports immunity'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Digestive', 'Energizing', 'Detoxifying'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'mandur-bhasma',
    name: 'Mandur Bhasma',
    tagline: 'Natural Iron & Blood Builder',
    description: 'An Ayurvedic preparation of iron oxide, used to address iron deficiency and improve blood quality.',
    benefits: ['Corrects iron deficiency and improves blood quality', 'Enhances energy and stamina', 'Reduces weakness and fatigue', 'Improves skin, hair, and overall vitality'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Hematinic', 'Energizing', 'Rejuvenating'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'kakamachi',
    name: 'Kakamachi',
    tagline: 'Mental Calmness & Liver Cleanser',
    description: 'Also known as Black Nightshade, it is used for its liver-cleansing and calming properties.',
    benefits: ['Detoxifies liver and purifies blood', 'Boosts stamina and energy', 'Reduces fatigue and weakness in elders', 'Relieves stress and promotes mental peace'],
    doshas: ['Pitta', 'Kapha'],
    properties: ['Detoxifying', 'Calming', 'Energizing'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'kasamarda',
    name: 'Kasamarda',
    tagline: 'Digestion & Strength Support',
    description: 'A traditional herb that aids digestion and contributes to overall strength and immunity.',
    benefits: ['Improves digestion and nutrient absorption', 'Strengthens immunity and energy', 'Reduces joint pain and weakness', 'Cleanses liver naturally'],
    doshas: ['Vata', 'Kapha'],
    properties: ['Digestive', 'Immune-boosting', 'Strengthening'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'biranjasipha',
    name: 'Biranjasipha',
    tagline: 'Complete Health & Detox Support',
    description: 'A versatile herb known for its comprehensive health benefits, including digestion and detoxification.',
    benefits: ['Improves digestion and nutrient absorption', 'Boosts stamina and physical strength', 'Reduces fatigue and weakness', 'Maintains hormonal balance and detoxifies liver'],
    doshas: ['Vata', 'Pitta', 'Kapha'],
    properties: ['Digestive', 'Detoxifying', 'Hormonal balance'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'jhavu-ka',
    name: 'Jhavu Ka',
    tagline: 'Stamina & Digestive Herb',
    description: 'A herb that enhances digestive function and boosts stamina and endurance.',
    benefits: ['Enhances digestion and nutrient absorption', 'Boosts stamina and endurance', 'Reduces weakness and fatigue', 'Detoxifies liver and improves immunity'],
    doshas: ['Kapha', 'Pitta'],
    properties: ['Digestive', 'Energizing', 'Immune-boosting'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'narsingh-churna',
    name: 'Narsingh Churna',
    tagline: 'Strength & Immunity Builder',
    description: 'A traditional Ayurvedic formulation known for building strength and enhancing immunity.',
    benefits: ['Boosts natural strength and energy', 'Strengthens immunity system', 'Supports stamina and mental alertness', 'Relieves fatigue and weakness in women'],
    doshas: ['Vata', 'Kapha'],
    properties: ['Strengthening', 'Immune-boosting', 'Energizing'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'pushpadhanwa-ras',
    name: 'Pushpadhanwa Ras',
    tagline: 'Energy & Mental Balance Support',
    description: 'An Ayurvedic formulation that supports energy levels and helps maintain mental balance.',
    benefits: ['Reduces weakness, fatigue, and sluggishness', 'Balances heartbeat and mental stress', 'Strengthens muscles and joints', 'Enhances hormonal balance and immunity'],
    doshas: ['Vata', 'Pitta', 'Kapha'],
    properties: ['Energizing', 'Balancing', 'Strengthening'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'swarna-bhasma',
    name: 'Swarna Bhasma',
    tagline: 'Immunity & Brain Booster',
    description: 'An esteemed Ayurvedic preparation of gold, known for its powerful rejuvenating and immune-boosting effects.',
    benefits: ['Strengthens immunity and prevents illness', 'Boosts memory and concentration', 'Strengthens heart and reduces stress', 'Improves vitality, longevity, and natural glow'],
    doshas: ['Vata', 'Pitta', 'Kapha'],
    properties: ['Rejuvenating', 'Immune-boosting', 'Brain tonic'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'safed-musli',
    name: 'Safed Musli',
    tagline: 'Natural Detox & Energy Herb',
    description: 'A powerful herb known for its aphrodisiac and general health-promoting properties.',
    benefits: ['Improves digestion and relieves constipation', 'Detoxifies liver and kidneys', 'Supports weight management and blood pressure control', 'Enhances skin glow and immunity'],
    doshas: ['Vata', 'Kapha'],
    properties: ['Rejuvenating', 'Energizing', 'Detoxifying'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  },
  {
    id: 'salam-panja',
    name: 'Salam Panja',
    tagline: 'Natural Stamina & Immunity Builder',
    description: 'A rare and potent herb known for significantly boosting stamina, endurance, and immunity.',
    benefits: ['Boosts stamina and endurance', 'Relieves chronic weakness and fatigue', 'Strengthens heart and muscles', 'Enhances immunity and reduces stress'],
    doshas: ['Vata', 'Kapha'],
    properties: ['Energizing', 'Immune-boosting', 'Strengthening'],
    image: '/public/images/leaf-pattern.png', // Placeholder image
  }
];