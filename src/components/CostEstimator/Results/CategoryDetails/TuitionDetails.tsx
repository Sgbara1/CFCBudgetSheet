import React from 'react';
import { SliderWithLabel } from './components/SliderWithLabel';

interface TuitionDetailsProps {
  tuitionCost: number;
  onChange: (value: number) => void;
}

export function TuitionDetails({ tuitionCost, onChange }: TuitionDetailsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-inner mt-2 space-y-6">
      <SliderWithLabel
        label="Base Tuition"
        value={tuitionCost}
        min={0}
        max={50000}
        step={100}
        onChange={onChange}
        description="Base tuition rate for your selected program and credit hours"
      />
    </div>
  );
}