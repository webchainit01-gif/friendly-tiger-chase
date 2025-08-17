import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { ShieldCheck, FlaskConical, Leaf, Factory } from 'lucide-react';

interface QualityFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const QualityFeature: React.FC<QualityFeatureProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <div className="p-3 bg-green-100 rounded-full">
        <Icon size={28} className="text-green-700" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-green-800 mb-2 font-serif">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const QualitySafety = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <SectionTitle
        title="Our Commitment to Quality & Safety"
        subtitle="At Ayurveda of India, your health and trust are our top priorities. We ensure every product meets the highest standards."
      />
      <div className="prose max-w-3xl mx-auto text-gray-700 leading-relaxed mb-12">
        <p>
          We are committed to delivering Ayurvedic products that are not only effective but also safe and pure. Our rigorous quality control measures span from the careful selection of raw materials to the final packaging, ensuring that you receive nothing but the best.
        </p>
        <p>
          Our manufacturing facilities adhere to Good Manufacturing Practices (GMP) and are ISO 9001 certified, reflecting our dedication to maintaining international quality standards. We believe in transparency and traceability, providing you with products you can trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <QualityFeature
          icon={Leaf}
          title="Pure Ingredients"
          description="We source only the finest, natural herbs and ingredients, ensuring they are free from pesticides and contaminants."
        />
        <QualityFeature
          icon={FlaskConical}
          title="Rigorous Testing"
          description="Every batch undergoes comprehensive laboratory testing for purity, potency, and safety."
        />
        <QualityFeature
          icon={Factory}
          title="GMP Certified Facilities"
          description="Our products are manufactured in state-of-the-art facilities that comply with strict Good Manufacturing Practices."
        />
        <QualityFeature
          icon={ShieldCheck}
          title="ISO 9001 Certified"
          description="Our quality management system is certified to ISO 9001 standards, ensuring consistent excellence."
        />
      </div>
    </div>
  );
};

export default QualitySafety;