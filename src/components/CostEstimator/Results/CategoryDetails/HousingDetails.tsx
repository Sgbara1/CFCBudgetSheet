import React from 'react';
import { SliderWithLabel } from './components/SliderWithLabel';
import { RadioGroup } from './components/RadioGroup';
import { Select } from './components/Select';

interface HousingDetailsProps {
  housingCost: number;
  onChange: (value: number) => void;
}

export function HousingDetails({ housingCost, onChange }: HousingDetailsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-inner mt-2 space-y-6">
      <RadioGroup
        label="Housing Location"
        name="housingLocation"
        options={[
          { label: 'On Campus', value: 'on-campus' },
          { label: 'Off Campus', value: 'off-campus' }
        ]}
        defaultValue="on-campus"
      />
      
      <Select
        label="Housing Type"
        options={[
          { label: 'Campus Average', value: 'average' },
          { label: 'Dormitory', value: 'dorm' },
          { label: 'Apartment', value: 'apartment' }
        ]}
        value="average"
        onChange={() => {}}
      />
      
      <SliderWithLabel
        label="Housing Cost"
        value={housingCost * 0.6}
        min={0}
        max={15000}
        step={100}
        onChange={(value) => onChange(value + (housingCost * 0.4))}
        description="Estimated housing costs per semester"
      />
      
      <SliderWithLabel
        label="Meal Plan"
        value={housingCost * 0.4}
        min={0}
        max={6000}
        step={100}
        onChange={(value) => onChange(value + (housingCost * 0.6))}
        description="Meal plan costs per semester"
      />
    </div>
  );
}