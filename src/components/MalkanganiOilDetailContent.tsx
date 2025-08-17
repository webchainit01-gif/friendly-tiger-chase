import React from 'react';
import { Product } => '@/data/products';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MalkanganiOilDetailContentProps {
  product: Product;
}

const WHATSAPP_NUMBER = "+919876543210"; // Dummy WhatsApp number

const MalkanganiOilDetailContent: React.FC<MalkanganiOilDetailContentProps> = ({ product }) => {
  return (
    <div className="container mx-auto py-16 px-4 bg-white rounded-lg shadow-sm my-8">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-auto rounded-lg shadow-xl border border-gray-100"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-green-800 mb-4 font-serif">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-2 leading-relaxed">
            <span className="font-bold">100% Ayurvedic | No Adulteration | Clinically Proven</span>
          </p>
          <h2 className="text-3xl font-semibold text-green-700 mt-6 mb-3 font-serif">Nature’s Gift for Health & Wellness</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            <span className="font-bold">One Oil, Countless Benefits</span> – Effective for <span className="font-bold">joint pain, memory, sleep, and hair health.</span>
          </p>
          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            Malkagni Oil is a rare Ayurvedic medicine prepared from <span className="font-bold">natural herbs of Mount Abu</span>. It enhances memory in children, concentration in youth, improves women’s health, and strengthens the mental power of the elderly. It provides deep relief from <span className="font-bold">joint pain, arthritis, backache, stiffness of the neck</span>, and supports <span className="font-bold">stress relief, better sleep, and hair nourishment.</span> With <span className="font-bold">natural anti-inflammatory and antioxidant properties</span>, it protects the health of the whole family.
          </p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-3 font-serif">Key Benefits:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
              <li>Enhances memory & concentration</li>
              <li>Relieves stress, anxiety, and insomnia</li>
              <li>Improves sleep quality</li>
              <li>Nourishes hair roots, promotes thickness & strength</li>
              <li>Strengthens the nervous system</li>
              <li>Effective for joint, knee, and arthritis pain</li>
              <li>Relieves backache and neck stiffness</li>
              <li>Reduces inflammation & supports family health</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-3 font-serif">Key Herbs Used:</h2>
            <p className="text-gray-700 text-base">{product.keyHerbs.join(', ')}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mb-8">
            <span className="text-2xl font-bold text-green-900">{product.price}</span>
            <span className="text-lg text-gray-600">Pack Size: {product.packSize}</span>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in your product: ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <MessageCircle size={24} /> Chat with Us on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MalkanganiOilDetailContent;