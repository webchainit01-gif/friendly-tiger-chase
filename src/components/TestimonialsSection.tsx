import React, { useCallback, useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import type { CarouselApi } from "@/components/ui/carousel"; // Import CarouselApi type

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  avatar: string; // Still in interface, but won't be rendered
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <Card className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center h-full">
      <Quote size={40} className="text-green-600 mb-3 opacity-70" />
      <p className="text-base text-gray-700 italic mb-4 leading-normal">"{testimonial.quote}"</p>
      <div className="flex items-center mt-auto">
        {/* Removed img tag for avatar */}
        <div>
          <p className="font-semibold text-green-800 text-base">{testimonial.author}</p>
          <p className="text-xs text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "I've struggled with joint discomfort for years, and Mount Abu Bala Malkangani Oil has been a true blessing. The relief is noticeable, and I can move much more freely now. It's become an essential part of my daily routine.",
      author: "Asha Sharma",
      location: "Delhi",
      avatar: "/images/avatar-1.jpeg",
    },
    {
      quote: "As someone who values authentic Ayurvedic practices, I can confidently say that Ayurveda of India's products are of the highest quality. I've tried their Maha Vajrasheela and feel a significant boost in my overall vitality and energy. Truly trustworthy!",
      author: "Ramesh Kumar",
      location: "Mumbai",
      avatar: "/images/avatar-2.jpeg",
    },
    {
      quote: "The Dayana Pain Oil is incredibly effective. It absorbs quickly and provides soothing relief to my tired muscles after a long day. I appreciate the natural ingredients and the traditional approach. Highly recommend it for anyone seeking natural comfort.",
      author: "Priya Singh",
      location: "Bengaluru",
      avatar: "/images/avatar-3.jpeg",
    },
    {
      quote: "I was looking for a natural way to support my liver health, and Liver Guard A1 has exceeded my expectations. I feel more energetic, and my digestion has improved. It's reassuring to know I'm using a product rooted in ancient wisdom.",
      author: "Anil Gupta",
      location: "Chennai",
      avatar: "/images/avatar-1.jpeg",
    },
    {
      quote: "Maha Vajrasheela (Family) has become a staple in our home. It's a gentle yet effective way to boost immunity for everyone. My family feels more resilient, especially during seasonal changes. Thank you for such a wonderful product!",
      author: "Deepa Reddy",
      location: "Hyderabad",
      avatar: "/images/avatar-2.jpeg",
    },
  ];

  const [emblaApi, setEmblaApi] = useState<CarouselApi>();

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0); // Loop back to start
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(autoplay, 3000); // 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [emblaApi, autoplay]);

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Hear from those who have experienced the profound benefits of Ayurveda of India's authentic products."
        />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
          setApi={setEmblaApi}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;