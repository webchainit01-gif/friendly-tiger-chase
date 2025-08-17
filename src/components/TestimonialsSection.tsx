import React from 'react';
import SectionTitle from './SectionTitle';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
      <Quote size={48} className="text-green-600 mb-4 opacity-70" />
      <p className="text-lg text-gray-700 italic mb-4">"{quote}"</p>
      <p className="font-semibold text-green-800">- {author}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "This oil has really helped my joints feel relaxed.", author: "Asha (Delhi)" },
    { quote: "Authentic Ayurvedic products I can trust.", author: "Ramesh (Mumbai)" },
    { quote: "I've noticed a significant improvement in my energy levels.", author: "Priya (Bengaluru)" },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Hear from those who have experienced the benefits of Ayurveda of India."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;