import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Ayurveda?",
    answer: "Ayurveda is an ancient Indian system of medicine that focuses on a holistic approach to health, balancing the body, mind, and spirit. It emphasizes natural remedies, diet, lifestyle, and herbal medicines to prevent and treat diseases.",
  },
  {
    question: "Are your products 100% natural?",
    answer: "Yes, all our products are formulated using 100% natural herbs and ingredients. We are committed to providing pure and authentic Ayurvedic solutions without artificial additives or harmful chemicals.",
  },
  {
    question: "Are your products safe to use?",
    answer: "Our products are manufactured in GMP-certified facilities and undergo rigorous quality control and testing to ensure their safety and efficacy. However, we always recommend consulting with a healthcare professional before starting any new supplement regimen.",
  },
  {
    question: "How do I use the Mount Abu Bala Malkangani Oil?",
    answer: "For external use only. Gently massage a small amount of oil onto the affected joint or muscle area until absorbed. For best results, apply twice daily or as directed by an Ayurvedic practitioner.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we primarily serve customers within India. For international inquiries, please contact us directly via WhatsApp to discuss potential options.",
  },
  {
    question: "How can I purchase your products?",
    answer: "We do not have an online shopping cart. To purchase our products or inquire about them, please click on the floating WhatsApp button on our website. Our team will assist you directly.",
  },
];

const FAQs = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Ayurveda of India and our products."
      />
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-green-800 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;