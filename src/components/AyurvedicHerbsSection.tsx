import React from 'react';
import SectionTitle from './SectionTitle';
import { ayurvedicHerbs, AyurvedicHerb } from '@/data/ayurvedicHerbs';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface HerbCardProps {
  herb: AyurvedicHerb;
}

const HerbCard: React.FC<HerbCardProps> = ({ herb }) => {
  return (
    <Card className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={herb.image}
          alt={herb.name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">{herb.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{herb.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {herb.benefits.slice(0, 3).map((benefit, index) => (
            <Badge key={index} variant="secondary" className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
              {benefit}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-center">
        {/* You can add a link to a detailed herb page here if needed in the future */}
        <span className="text-sm text-gray-500">Learn more about {herb.name}</span>
      </CardFooter>
    </Card>
  );
};

const AyurvedicHerbsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Key Ayurvedic Herbs & Their Benefits"
          subtitle="Discover the power of nature's finest herbs, foundational to Ayurvedic wellness."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {ayurvedicHerbs.map((herb) => (
            <HerbCard key={herb.id} herb={herb} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedicHerbsSection;