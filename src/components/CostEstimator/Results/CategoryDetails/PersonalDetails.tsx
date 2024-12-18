import React from 'react';
import { SliderWithLabel } from './components/SliderWithLabel';

interface PersonalDetailsProps {
  personalCost: number;
  onChange: (value: number) => void;
}

export function PersonalDetails({ personalCost, onChange }: PersonalDetailsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-inner mt-2 space-y-6">
      <SliderWithLabel
        label="Personal Care"
        value={personalCost * 0.4}
        min={0}
        max={1000}
        step={25}
        onChange={(value) => onChange(value + (personalCost * 0.6))}
        description="Health, hygiene, and personal care items"
      />
      
      <SliderWithLabel
        label="Entertainment"
        value={personalCost * 0.3}
        min={0}
        max={500}
        step={25}
        onChange={(value) => onChange(value + (personalCost * 0.7))}
        description="Recreation and entertainment expenses"
      />
      
      <SliderWithLabel
        label="Miscellaneous"
        value={personalCost * 0.3}
        min={0}
        max={500}
        step={25}
        onChange={(value) => onChange(value + (personalCost * 0.7))}
        description="Other personal expenses"
      />
    </div>
  );
}