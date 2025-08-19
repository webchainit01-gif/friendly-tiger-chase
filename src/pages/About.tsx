import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import RevealOnScroll from '@/components/RevealOnScroll'; // Import RevealOnScroll

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <SectionTitle
        title="Our Story & Philosophy"
        subtitle="Ayurveda of India, founded by Dr. D.K. Agrawal, is built on a legacy of natural wellness and a commitment to authentic Ayurvedic principles."
      />
      <RevealOnScroll delay={200} stagger={100}>
        <div className="prose max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <p className="text-center text-xl font-semibold text-green-700 mb-6">
            हजारों साल पुरानी आयुर्वेद की परंपरा को आगे ले जाते हुए
          </p>
          <p>
            Since its inception in 1948, Dr. D.K. Agrawal Ayurvedic Medicines has been a trusted name in Ayurvedic wellness. Our legacy is built on authenticity, family tradition, and quality. Ayurveda, for us, is not just medicine—it is a way of life that restores balance and strengthens health from the roots. We meticulously craft products that blend ancient knowledge with modern scientific rigor, ensuring purity, efficacy, and trust.
          </p>
          <p>
            Our journey began with the profound vision of Dr. D.K. Agrawal, a dedicated proponent of natural healing, who sought to bring the profound healing power of Ayurveda to every household. His commitment to purity, efficacy, and trust forms the bedrock of our brand.
          </p>
          <p>
            We firmly believe in a holistic approach to health, where the body, mind, and spirit are in harmonious balance. Our formulations are derived from carefully selected, potent herbs, sourced from pristine environments and processed with utmost care to retain their natural potency and therapeutic properties. Every product that bears the Ayurveda of India name is a testament to our unwavering dedication to quality, from the initial sourcing of raw materials to the meticulous final packaging.
          </p>
          <p>
            At Ayurveda of India, we are more than just a brand; we are a family committed to your well-being. We strive to empower individuals to embrace a natural lifestyle, fostering optimal health and vitality through the timeless, proven science of Ayurveda. Our mission is to bridge the gap between ancient wisdom and contemporary needs, offering solutions that are both traditional and relevant.
          </p>
          <h3 className="text-2xl font-semibold text-green-700 mt-8 mb-4 font-serif">Our Core Commitments:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>**Heritage & Trust:** Founded in 1948, serving millions of families with authentic Ayurveda. Every medicine is crafted with love, knowledge, and service, not just commerce. Deep roots in Ayurveda, passed through generations and enhanced with modern quality testing. A family legacy, symbolizing trust, purity, and care.</li>
            <li>**Quality & Safety:** 100% Ayurvedic formulations with no side effects. Made from carefully selected herbs, harvested at the right season for maximum potency. Modern packaging and clinical testing ensure safety and effectiveness. Certified by GMP / ISO standards. Every product balances tradition with science to ensure dependable results.</li>
            <li>**Why Choose Us:** Over 75 years of trust and family heritage. Taking forward the thousand-year-old tradition of Ayurveda. Pure herbs, authentic formulations, and modern testing. No harmful chemicals, no adulteration. Safe for all ages, suitable for daily wellness.</li>
          </ul>
          <p>
            Join us on a journey towards holistic well-being, guided by the ancient wisdom of Ayurveda and the unwavering commitment of Ayurveda of India.
          </p>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default About;