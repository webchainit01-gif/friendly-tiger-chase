import React from 'react';
import { Product } from '@/data/products';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedDiv from '@/components/AnimatedDiv'; // Import AnimatedDiv

interface MalkanganiOilDetailContentProps {
  product: Product;
}

const WHATSAPP_NUMBER = "+919876543210"; // Dummy WhatsApp number

const MalkanganiOilDetailContent: React.FC<MalkanganiOilDetailContentProps> = ({ product }) => {
  return (
    <div className="container mx-auto py-16 px-4 bg-white rounded-lg shadow-sm my-8">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <AnimatedDiv delay={0} className="md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-auto rounded-lg shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            loading="lazy"
          />
        </AnimatedDiv>
        <div className="md:w-1/2 text-center md:text-left">
          <AnimatedDiv delay={100}>
            <h1 className="text-4xl font-bold text-green-800 mb-4 font-serif">{product.name}</h1>
          </AnimatedDiv>
          <AnimatedDiv delay={200}>
            <p className="text-gray-700 text-lg mb-2 leading-relaxed">
              <span className="font-bold">100% Ayurvedic | No Adulteration | Clinically Proven</span>
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={300}>
            <h2 className="text-3xl font-semibold text-green-700 mt-6 mb-3 font-serif">Nature’s Gift for Health & Wellness</h2>
          </AnimatedDiv>
          <AnimatedDiv delay={400}>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              <span className="font-bold">One Oil, Countless Benefits</span> – Effective for <span className="font-bold">joint pain, memory, sleep, and hair health.</span>
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={500}>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              Malkagni Oil is a rare Ayurvedic medicine prepared from <span className="font-bold">natural herbs of Mount Abu</span>. It enhances memory in children, concentration in youth, improves women’s health, and strengthens the mental power of the elderly. It provides deep relief from <span className="font-bold">joint pain, arthritis, backache, stiffness of the neck</span>, and supports <span className="font-bold">stress relief, better sleep, and hair nourishment.</span> With <span className="font-bold">natural anti-inflammatory and antioxidant properties</span>, it protects the health of the whole family.
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={600}>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-3 font-serif">Key Benefits:</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base text-left">
                <li>✔ Enhances memory & concentration</li>
                <li>✔ Relieves stress, anxiety, and insomnia</li>
                <li>✔ Improves sleep quality</li>
                <li>✔ Nourishes hair roots, promotes thickness & strength</li>
                <li>✔ Strengthens the nervous system</li>
                <li>✔ Effective for joint, knee, and arthritis pain</li>
                <li>✔ Relieves backache and neck stiffness</li>
                <li>✔ Reduces inflammation & supports family health</li>
              </ul>
            </div>
          </AnimatedDiv>
          <AnimatedDiv delay={700}>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-3 font-serif">Key Herbs Used:</h2>
              <p className="text-gray-700 text-base text-left">{product.keyHerbs.join(', ')}</p>
            </div>
          </AnimatedDiv>

          <AnimatedDiv delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mb-8">
              <span className="text-2xl font-bold text-green-900">{product.price}</span>
              <span className="text-lg text-gray-600">Pack Size: {product.packSize}</span>
            </div>
          </AnimatedDiv>

          <AnimatedDiv delay={900} animationType="scale-in">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in your product: ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 hover:shadow-xl">
                <MessageCircle size={24} /> Chat with Us on WhatsApp
              </Button>
            </a>
          </AnimatedDiv>
        </div>
      </div>

      <AnimatedDiv delay={1000}>
        <div className="prose max-w-4xl mx-auto text-gray-700 leading-relaxed mt-12">
          <hr className="my-8 border-gray-300" />
          <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">The Gift of Nature – Malkagni Oil</h2>
          <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Mental Strength, Physical Balance</h3>
          <p className="mb-4">
            Also known as <span className="font-bold">Jyotishmati Oil</span>, it is prepared from the seeds of <span className="font-bold">Celastrus paniculatus</span>, used in Ayurveda for thousands of years to enhance <span className="font-bold">mental focus, concentration, and memory.</span> Grown in the serene environment of the mountains, this rare herb offers unmatched medicinal properties.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-left">
            <li>✔ Pure Ayurvedic medicine made from mountain herbs</li>
            <li>✔ Blend of Ayurveda tradition & modern knowledge</li>
            <li>✔ Strengthens brain & nervous system</li>
            <li>✔ Naturally improves memory & focus</li>
            <li>✔ Relieves stress, fatigue, and insomnia</li>
            <li>✔ Provides relief in arthritis, joint & back pain</li>
            <li>✔ Boosts immunity to protect from illnesses</li>
            <li>✔ Safe & beneficial for the entire family</li>
          </ul>
          <p className="mb-8">
            <span className="font-bold">Removes pain, strengthens mind & body.</span>
          </p>

          <hr className="my-8 border-gray-300" />
          <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Key Benefits</h2>
          <p className="mb-4">
            The rare heritage of Ayurveda – A protector for the entire family.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-left">
            <li>✔ Improves memory & focus, helpful for studies and career</li>
            <li>✔ Enhances concentration & mental strength</li>
            <li>✔ Provides natural relief from stress, anxiety & insomnia</li>
            <li>✔ Strengthens hair, prevents hair fall, and restores shine</li>
            <li>✔ Relieves joint, knee, arthritis, back, and neck pain</li>
            <li>✔ Natural antioxidants boost immunity & resistance</li>
            <li>✔ Suitable for children, youth, women, and elderly alike</li>
          </ul>
          <p className="mb-8">
            From the lap of the mountains to your home – A holistic Ayurvedic solution for everyday health.
          </p>

          <hr className="my-8 border-gray-300" />
          <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Benefits for Hair & Skin</h2>
          <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">The perfect blend of beauty & health.</h3>
          <p className="mb-4">
            Malkagni Oil deeply nourishes hair from the roots, removes dandruff, and restores natural shine. It makes hair <span className="font-bold">thick, strong, and healthy.</span> For skin, it helps reduce blemishes, brings a natural glow, and protects against pollution.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-left">
            <li>✔ Relief from dandruff & itching</li>
            <li>✔ Deep nourishment for strong & healthy hair</li>
            <li>✔ Adds natural shine, softness, and smoothness</li>
            <li>✔ Increases hair volume & prevents thinning</li>
            <li>✔ Reduces spots & blemishes, improves complexion</li>
            <li>✔ Protects skin from pollution & damage</li>
            <li>✔ Delays premature greying, keeps hair dense</li>
            <li>✔ Provides relaxation from stress & anxiety</li>
            <li>✔ Boosts immunity for complete family protection</li>
          </ul>
          <p className="mb-8">
            Because true beauty is not just looking good – it is about being healthy from within.
          </p>

          <hr className="my-8 border-gray-300" />
          <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Who Can Use It?</h2>
          <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Beneficial for every age and every need.</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-left">
            <li>✔ Children – Improves memory & concentration</li>
            <li>✔ Youth – Reduces stress, fatigue & increases efficiency</li>
            <li>✔ Women – Strengthens hair & skin with natural beauty care</li>
            <li>✔ Elderly – Provides mental peace & physical balance</li>
          </ul>
          <p className="font-bold mb-3 text-left">Effective in:</p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-left">
            <li>Joint, knee & muscle pain</li>
            <li>Arthritis, stiffness, and backache</li>
            <li>Stress, sleeplessness & mental fatigue</li>
            <li>Hair fall, dandruff, premature greying</li>
            <li>Weak immunity and recurring illnesses</li>
          </ul>
          <p className="mb-8">
            One oil – countless benefits for the whole family’s <span className="font-bold">health & happiness.</span>
          </p>

          <hr className="my-8 border-gray-300" />
          <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Our Promise – Your Health First</h2>
          <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Pure care with complete dedication.</h3>
          <p className="mb-4">
            Malkagni Oil is not just a medicine – it is <span className="font-bold">a priceless gift of nature.</span> We deliver it with <span className="font-bold">purity, trust, and care.</span> Suitable for all age groups, it brings <span className="font-bold">balance, peace, and vitality</span> into life.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-left">
            <li>✔ Deep relief from joint, back, and arthritis pain</li>
            <li>✔ Guaranteed purity – trust in every drop</li>
            <li>✔ Naturally sourced – health from the lap of nature</li>
            <li>✔ Safe, effective, and free from harmful side effects</li>
            <li>✔ Long-lasting health benefits with regular use</li>
            <li>✔ Blend of ancient Ayurvedic wisdom & modern research</li>
            <li>✔ Premium quality at affordable pricing</li>
          </ul>
          <p className="mb-8">
            A true gift of nature that brings <span className="font-bold">health and happiness across generations.</span>
          </p>

          <hr className="my-8 border-gray-300" />
          <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Usage Guidelines</h2>
          <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Your safety is our responsibility.</h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-left">
            <li>Always follow doctor’s advice before oral intake</li>
            <li>Avoid overdose (may cause dizziness or restlessness)</li>
            <li>Warm in nature – avoid spicy food during use</li>
            <li>Store in a cool, dry, shaded place away from sunlight</li>
            <li>Keep away from children’s reach</li>
            <li>Use in proper dosage for best results</li>
          </ul>
          <p className="mb-8">
            <span className="font-bold">Our commitment – Only benefits, no risks.</span>
          </p>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default MalkanganiOilDetailContent;