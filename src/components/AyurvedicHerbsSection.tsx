import React from 'react';
import SectionTitle from './SectionTitle';
import { ayurvedicHerbs, AyurvedicHerb } from '@/data/ayurvedicHerbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface HerbCardProps {
  herb: AyurvedicHerb;
}

const HerbCard: React.FC<HerbCardProps> = ({ herb }) => {
  return (
    <Card
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 flex flex-col justify-between"
    >
      <CardContent className="p-4 text-center flex-grow">
        <h3 className="text-lg font-semibold text-green-800 mb-1 font-serif">{herb.name}</h3>
        {herb.tagline && <p className="text-green-600 text-xs mb-2 font-medium">{herb.tagline}</p>}
        <p className="text-gray-600 text-xs line-clamp-3">{herb.description}</p>
        <div className="flex flex-wrap justify-center gap-1 mt-3">
          {herb.benefits.slice(0, 2).map((benefit, index) => (
            <Badge key={index} variant="secondary" className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[0.65rem]">
              {benefit}
            </Badge>
          ))}
        </div>
      </CardContent>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {ayurvedicHerbs.map((herb) => (
            <HerbCard key={herb.id} herb={herb} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedicHerbsSection;