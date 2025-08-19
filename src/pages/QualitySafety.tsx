import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { ShieldCheck, FlaskConical, Leaf, Factory } from 'lucide-react';
import RevealOnScroll from '@/components/RevealOnScroll'; // Import RevealOnScroll

interface QualityFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const QualityFeature: React.FC<QualityFeatureProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
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
        subtitle="At Ayurveda of India, your health and trust are our top priorities. We ensure every product meets the highest standards of purity, potency, and safety."
      />
      <RevealOnScroll delay={200} stagger={100}>
        <div className="prose max-w-3xl mx-auto text-gray-700 leading-relaxed mb-12">
          <p>
            We are deeply committed to delivering Ayurvedic products that are not only highly effective but also unequivocally safe and pure. Our rigorous quality control measures are meticulously implemented at every stage of the production process, spanning from the careful selection and sourcing of raw materials to the precise formulation and final packaging. This comprehensive approach ensures that you receive nothing short of the best, consistently.
          </p>
          <p>
            Our state-of-the-art manufacturing facilities strictly adhere to Good Manufacturing Practices (GMP) and are proudly ISO 9001 certified. These certifications are a testament to our unwavering dedication to maintaining and exceeding international quality standards. We champion transparency and traceability, providing you with complete confidence in the integrity and origin of every product you choose from Ayurveda of India.
          </p>
          <p>
            From the moment an herb is harvested to the time a product reaches your hands, we employ stringent protocols to guarantee its authenticity and efficacy. Our team of Ayurvedic experts and quality assurance professionals work in synergy to uphold the legacy of natural healing with modern precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <QualityFeature
            icon={Leaf}
            title="Pure & Ethically Sourced Ingredients"
            description="We meticulously source only the finest, natural herbs and ingredients from trusted cultivators, ensuring they are free from pesticides, heavy metals, and other contaminants. Our commitment to ethical sourcing supports sustainable practices."
          />
          <QualityFeature
            icon={FlaskConical}
            title="Rigorous Laboratory Testing"
            description="Every single batch of our products undergoes comprehensive laboratory testing. This includes tests for purity, potency, microbial contamination, and heavy metals, ensuring each product is safe, effective, and consistent."
          />
          <QualityFeature
            icon={Factory}
            title="GMP Certified Manufacturing Facilities"
            description="Our products are manufactured in cutting-edge facilities that strictly comply with Good Manufacturing Practices (GMP). This ensures consistent quality, hygiene, and adherence to regulatory standards throughout the production cycle."
          />
          <QualityFeature
            icon={ShieldCheck}
            title="ISO 9001 Certified Quality Management"
            description="Our entire quality management system is certified to ISO 9001 standards. This international recognition underscores our commitment to continuous improvement, customer satisfaction, and maintaining the highest levels of quality assurance."
          />
        </div>
        <div className="prose max-w-3xl mx-auto text-gray-700 leading-relaxed mt-12">
          <p>
            Your well-being is our ultimate goal. With Ayurveda of India, you can be assured that you are choosing products crafted with integrity, backed by science, and rooted in the profound wisdom of Ayurveda.
          </p>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default QualitySafety;