import React from 'react';
import { SliderWithLabel } from './components/SliderWithLabel';

interface FundingDetailsProps {
  fundingAmount: number;
  onChange: (value: number) => void;
}

export function FundingDetails({ fundingAmount, onChange }: FundingDetailsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-inner mt-2 space-y-6">
      <SliderWithLabel
        label="Scholarships"
        value={fundingAmount * 0.5}
        min={0}
        max={20000}
        step={500}
        onChange={(value) => onChange(value + (fundingAmount * 0.5))}
        description="Merit and need-based scholarships"
        accentColor="#16a34a"
      />
      
      <SliderWithLabel
        label="Grants"
        value={fundingAmount * 0.3}
        min={0}
        max={15000}
        step={500}
        onChange={(value) => onChange(value + (fundingAmount * 0.7))}
        description="Federal and state grants"
        accentColor="#16a34a"
      />
      
      <SliderWithLabel
        label="Work Study"
        value={fundingAmount * 0.2}
        min={0}
        max={5000}
        step={250}
        onChange={(value) => onChange(value + (fundingAmount * 0.8))}
        description="Federal work-study program"
        accentColor="#16a34a"
      />
    </div>
  );
}