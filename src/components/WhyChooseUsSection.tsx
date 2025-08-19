import React from 'react';
import SectionTitle from './SectionTitle';
import { Leaf, ShieldCheck, Award, ScrollText } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll'; // Import RevealOnScroll

interface WhyChooseUsItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const WhyChooseUsItem: React.FC<WhyChooseUsItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="p-3 bg-green-100 rounded-full mb-3">
        <Icon size={30} className="text-green-700" />
      </div>
      <h3 className="text-lg font-semibold text-green-800 mb-1 font-serif">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Choose Ayurveda of India?"
          subtitle="Experience the difference of authentic Ayurvedic wisdom combined with modern quality."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RevealOnScroll stagger={150}>
            <WhyChooseUsItem
              icon={Leaf}
              title="Authenticity"
              description="Rooted in ancient Ayurvedic texts, our formulations are true to tradition."
            />
            <WhyChooseUsItem
              icon={ShieldCheck}
              title="Purity"
              description="We use only the finest natural ingredients, free from harmful chemicals."
            />
            <WhyChooseUsItem
              icon={Award}
              title="Quality"
              description="Manufactured under strict quality controls, ensuring efficacy and safety."
            />
            <WhyChooseUsItem
              icon={ScrollText}
              title="Tradition"
              description="Bringing the timeless wisdom of Ayurveda to modern wellness needs."
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;