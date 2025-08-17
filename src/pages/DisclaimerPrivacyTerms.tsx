import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const DisclaimerPrivacyTerms = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <SectionTitle
        title="Legal Information"
        subtitle="Important information regarding our website and products."
      />

      <div className="prose max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-8">
        <section id="disclaimer">
          <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Disclaimer</h2>
          <p>
            The information provided on this website by Ayurveda of India is for general informational and wellness purposes only. It is not intended as, nor should it be considered, a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p>
            Do not disregard professional medical advice or delay in seeking it because of something you have read on this website. Reliance on any information provided by Ayurveda of India, its employees, or others appearing on the website is solely at your own risk. Our products are intended to support general well-being and are not designed to diagnose, treat, cure, or prevent any disease.
          </p>
        </section>

        <section id="privacy">
          <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Privacy Policy</h2>
          <p>
            Ayurveda of India is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or interact with us.
          </p>
          <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Information We Collect:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>**Personal Information:** When you contact us via WhatsApp or email, we may collect your name, contact number, email address, and any other information you choose to provide.</li>
            <li>**Usage Data:** We may collect non-personal information about your visit, such as IP address, browser type, pages viewed, and time spent on the site, to improve our website's functionality and user experience.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">How We Use Your Information:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To process your product orders and facilitate communication regarding them.</li>
            <li>To improve our website and services.</li>
            <li>To send you updates or promotional materials, only if you have opted in to receive them.</li>
          </ul>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law.
          </p>
        </section>

        <section id="terms">
          <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Terms & Conditions</h2>
          <p>
            Welcome to the official website of Ayurveda of India. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully.
          </p>
          <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Use of Website:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
            <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
            <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Intellectual Property:</h3>
          <p>
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
          </p>
          <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Governing Law:</h3>
          <p>
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DisclaimerPrivacyTerms;