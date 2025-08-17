import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <SectionTitle
        title="Our Story & Philosophy"
        subtitle="Ayurveda of India, founded by Mr. D.K. Agarwal, is built on a legacy of natural wellness and a commitment to authentic Ayurvedic principles."
      />
      <div className="prose max-w-3xl mx-auto text-gray-700 leading-relaxed">
        <p>
          Since 1995, Ayurveda of India has been a beacon of traditional Ayurvedic wisdom, meticulously crafting products that blend ancient knowledge with modern scientific rigor. Our journey began with Mr. D.K. Agarwal's vision to bring the profound healing power of Ayurveda to every household, ensuring purity, efficacy, and trust.
        </p>
        <p>
          We believe in a holistic approach to health, where the body, mind, and spirit are in harmony. Our formulations are derived from carefully selected herbs, processed with utmost care to retain their natural potency. Every product is a testament to our dedication to quality, from sourcing raw materials to the final packaging.
        </p>
        <p>
          At Ayurveda of India, we are more than just a brand; we are a family committed to your well-being. We strive to empower individuals to embrace a natural lifestyle, fostering health and vitality through the timeless science of Ayurveda.
        </p>
        <h3 className="text-2xl font-semibold text-green-700 mt-8 mb-4 font-serif">Our Commitment:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>**Authenticity:** Adhering strictly to classical Ayurvedic texts and traditional preparation methods.</li>
          <li>**Purity:** Using only 100% natural, ethically sourced ingredients, free from artificial additives.</li>
          <li>**Quality:** Maintaining stringent quality control standards, including ISO 9001 and GMP certifications.</li>
          <li>**Innovation:** Continuously researching and developing new formulations to address modern health challenges while staying true to Ayurvedic principles.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;