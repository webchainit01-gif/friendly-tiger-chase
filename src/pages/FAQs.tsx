import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedDiv from '@/components/AnimatedDiv'; // Import AnimatedDiv

const faqs = [
  {
    question: "What is Ayurveda and how does Ayurveda of India align with it?",
    answer: "Ayurveda is an ancient Indian system of medicine, over 5,000 years old, that focuses on a holistic approach to health, balancing the body, mind, and spirit. It emphasizes natural remedies, personalized diet, lifestyle adjustments, and herbal medicines to prevent and treat diseases. Ayurveda of India is deeply rooted in these traditional principles, meticulously crafting products that blend ancient Ayurvedic wisdom with modern quality standards to promote overall well-being.",
  },
  {
    question: "Are your products 100% natural and free from artificial additives?",
    answer: "Yes, absolutely. All our products are formulated using 100% natural herbs and ingredients, carefully sourced from their native environments. We are committed to providing pure and authentic Ayurvedic solutions, completely free from artificial additives, synthetic colors, harmful chemicals, and preservatives. Our dedication to purity ensures you receive nature's best.",
  },
  {
    question: "Are your products safe to use and what quality certifications do you hold?",
    answer: "Our products are manufactured in state-of-the-art, GMP (Good Manufacturing Practices) certified facilities and undergo rigorous quality control and testing at every stage. We are also ISO 9001 certified, ensuring our commitment to international quality standards. While our products are designed for safety and efficacy, we always recommend consulting with a healthcare professional or an Ayurvedic practitioner before starting any new supplement regimen, especially if you have pre-existing health conditions or are on medication.",
  },
  {
    question: "How do I use the Mount Abu Bala Malkangani Oil for best results?",
    answer: "Mount Abu Bala Malkangani Oil is for external use only. Gently massage a small amount of oil onto the affected joint or muscle area in a circular motion until it is well absorbed. For optimal results, apply twice daily, preferably in the morning and before bedtime, or as directed by an Ayurvedic practitioner. Consistent use is key to experiencing its full benefits.",
  },
  {
    question: "Do you offer international shipping for your products?",
    answer: "Currently, we primarily serve customers within India. We are exploring options for international shipping in the future. For any international inquiries or specific requests, please feel free to contact us directly via WhatsApp, and our team will be happy to discuss potential possibilities.",
  },
  {
    question: "How can I purchase your products or get more information?",
    answer: "We do not currently operate an online shopping cart for direct purchases. To purchase our products, inquire about specific items, or get personalized advice, please click on the floating WhatsApp button prominently displayed on our website. Our dedicated team will assist you directly, provide product details, and guide you through the purchase process.",
  },
  {
    question: "What makes Ayurveda of India products unique?",
    answer: "Ayurveda of India stands out due to our unwavering commitment to authenticity, purity, and quality. Founded by Dr. D.K. Agrawal, we combine ancient Ayurvedic formulations with modern scientific validation. We prioritize ethical sourcing, rigorous testing, and manufacturing in certified facilities, ensuring that each product delivers genuine Ayurvedic benefits for holistic well-being.",
  },
  {
    question: "Can I use your products alongside other medications?",
    answer: "While our products are natural and generally safe, it is always advisable to consult with your healthcare provider or an Ayurvedic practitioner before combining them with any ongoing medications or other supplements. This ensures there are no potential interactions and that the products are suitable for your specific health condition.",
  },
  {
    question: "Are these products Ayurvedic?",
    answer: "Yes, all products are made from pure Ayurvedic herbs and follow traditional principles.",
  },
  {
    question: "Are they safe for all ages?",
    answer: "Yes, products like Liver Guard, Heeng, and Herbal Shampoo are safe for children, adults, and elderly when taken as directed.",
  },
  {
    question: "Do they have side effects?",
    answer: "No. These are 100% Ayurvedic formulations, clinically tested, and free from harmful chemicals.",
  },
  {
    question: "Can these be used daily?",
    answer: "Yes, most products are designed for daily use as part of a balanced lifestyle.",
  },
];

const FAQs = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Find comprehensive answers to common questions about Ayurveda of India, our products, and the principles of Ayurveda."
      />
      <AnimatedDiv delay={200}>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-green-800 hover:no-underline font-serif">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default FAQs;