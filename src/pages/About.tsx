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
          Since its inception in 1995, Ayurveda of India has been a beacon of traditional Ayurvedic wisdom, meticulously crafting products that blend ancient knowledge with modern scientific rigor. Our journey began with the profound vision of Mr. D.K. Agarwal, a dedicated proponent of natural healing, who sought to bring the profound healing power of Ayurveda to every household. His commitment to purity, efficacy, and trust forms the bedrock of our brand.
        </p>
        <p>
          We firmly believe in a holistic approach to health, where the body, mind, and spirit are in harmonious balance. Our formulations are derived from carefully selected, potent herbs, sourced from pristine environments and processed with utmost care to retain their natural potency and therapeutic properties. Every product that bears the Ayurveda of India name is a testament to our unwavering dedication to quality, from the initial sourcing of raw materials to the meticulous final packaging.
        </p>
        <p>
          At Ayurveda of India, we are more than just a brand; we are a family committed to your well-being. We strive to empower individuals to embrace a natural lifestyle, fostering optimal health and vitality through the timeless, proven science of Ayurveda. Our mission is to bridge the gap between ancient wisdom and contemporary needs, offering solutions that are both traditional and relevant.
        </p>
        <h3 className="text-2xl font-semibold text-green-700 mt-8 mb-4 font-serif">Our Core Commitments:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>**Authenticity:** We adhere strictly to classical Ayurvedic texts and traditional preparation methods, ensuring the true essence of Ayurveda is preserved in every product.</li>
          <li>**Purity:** We use only 100% natural, ethically sourced ingredients, meticulously screened to be free from artificial additives, harmful chemicals, and contaminants.</li>
          <li>**Quality:** We maintain stringent quality control standards at every stage of manufacturing. Our facilities are ISO 9001 and GMP certified, reflecting our dedication to international quality benchmarks.</li>
          <li>**Innovation:** While rooted in tradition, we continuously research and develop new formulations to address modern health challenges, always staying true to the fundamental principles of Ayurveda.</li>
          <li>**Transparency:** We believe in complete transparency regarding our ingredients, processes, and certifications, building trust with our valued customers.</li>
        </ul>
        <p>
          Join us on a journey towards holistic well-being, guided by the ancient wisdom of Ayurveda and the unwavering commitment of Ayurveda of India.
        </p>
      </div>
    </div>
  );
};

export default About;