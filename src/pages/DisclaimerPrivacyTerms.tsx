import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import AnimatedDiv from '@/components/AnimatedDiv'; // Import AnimatedDiv

const DisclaimerPrivacyTerms = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <SectionTitle
        title="Legal Information & Policies"
        subtitle="Important information regarding the use of our website, our privacy practices, and terms of service."
      />

      <AnimatedDiv delay={200}>
        <div className="prose max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-8">
          <section id="disclaimer">
            <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Disclaimer</h2>
            <p>
              The information provided on this website by Ayurveda of India is intended for general informational and educational purposes only. It is not, and should not be considered, a substitute for professional medical advice, diagnosis, or treatment. The content is not intended to be a comprehensive guide to self-treatment or to replace consultation with a qualified healthcare professional. Always seek the advice of your physician, Ayurvedic practitioner, or other qualified health provider with any questions you may have regarding a medical condition or before starting any new health regimen, including the use of our products.
            </p>
            <p>
              Do not disregard professional medical advice or delay in seeking it because of something you have read on this website. Reliance on any information provided by Ayurveda of India, its employees, affiliates, or others appearing on the website is solely at your own risk. Our products are formulated to support general well-being and are not designed to diagnose, treat, cure, or prevent any disease. Individual results may vary, and the efficacy of Ayurvedic remedies can depend on various factors unique to each individual.
            </p>
            <p>
              Ayurveda of India makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
            </p>
          </section>

          <section id="privacy">
            <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Privacy Policy</h2>
            <p>
              Ayurveda of India is deeply committed to protecting your privacy. This Privacy Policy outlines in detail how we collect, use, maintain, and disclose information collected from users (each, a "User") of the <a href="https://www.ayurvedaofindia.com" className="text-green-600 hover:underline">www.ayurvedaofindia.com</a> website ("Site"). This privacy policy applies to the Site and all products and services offered by Ayurveda of India.
            </p>
            <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Information We Collect:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>**Personal Identification Information:** We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</li>
              <li>**Non-personal Identification Information:** We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">How We Use Collected Information:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>**To improve customer service:** Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
              <li>**To personalize user experience:** We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
              <li>**To improve our Site:** We may use feedback you provide to improve our products and services.</li>
              <li>**To send periodic emails:** We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc.</li>
            </ul>
            <p>
              We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
            </p>
          </section>

          <section id="terms">
            <h2 className="text-3xl font-bold text-green-800 mb-4 font-serif">Terms & Conditions</h2>
            <p>
              Welcome to the official website of Ayurveda of India. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy, govern Ayurveda of India's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
            </p>
            <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Use of Website:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
              <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
              <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li>
              <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
              <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
            </ul>
            <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Intellectual Property:</h3>
            <p>
              All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website. The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
            </p>
            <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Links to Other Websites:</h3>
            <p>
              Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
            </p>
            <h3 className="text-2xl font-semibold text-green-700 mt-6 mb-3 font-serif">Governing Law:</h3>
            <p>
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of India. Any legal action or proceeding relating to this website shall be brought exclusively in the courts located in India.
            </p>
          </section>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default DisclaimerPrivacyTerms;