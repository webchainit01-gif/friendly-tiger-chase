import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { AyurvedicHerb } from '@/data/ayurvedicHerbs';
import { Badge } from '@/components/ui/badge';

interface HerbDetailDialogProps {
  herb: AyurvedicHerb | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const HerbDetailDialog: React.FC<HerbDetailDialogProps> = ({ herb, isOpen, onOpenChange }) => {
  if (!herb) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-6">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-green-800 font-serif">{herb.name}</DialogTitle>
          {herb.tagline && <DialogDescription className="text-lg text-gray-600 mt-2">{herb.tagline}</DialogDescription>}
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="flex justify-center mb-4">
            <img
              src={herb.image}
              alt={herb.name}
              className="w-48 h-48 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          <p className="text-gray-700 text-base leading-relaxed">{herb.description}</p>

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2 font-serif">Key Benefits:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              {herb.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {herb.keyHerbs && herb.keyHerbs.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2 font-serif">Key Herbs Used:</h3>
              <p className="text-gray-700 text-sm">{herb.keyHerbs.join(', ')}</p>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2 font-serif">Ayurvedic Properties:</h3>
            <div className="flex flex-wrap gap-2">
              {herb.properties.map((prop, index) => (
                <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                  {prop}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2 font-serif">Dosha Balancing:</h3>
            <div className="flex flex-wrap gap-2">
              {herb.doshas.map((dosha, index) => (
                <Badge key={index} variant="outline" className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">
                  {dosha}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HerbDetailDialog;