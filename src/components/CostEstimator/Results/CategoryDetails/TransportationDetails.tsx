import React from 'react';
import { SliderWithLabel } from './components/SliderWithLabel';
import { RadioGroup } from './components/RadioGroup';

interface TransportationDetailsProps {
  transportationCost: number;
  onChange: (value: number) => void;
}

export function TransportationDetails({ transportationCost, onChange }: TransportationDetailsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-inner mt-2 space-y-6">
      <RadioGroup
        label="Do you have a car?"
        name="hasCar"
        options={[
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ]}
        defaultValue="no"
      />
      
      <SliderWithLabel
        label="Monthly Transportation"
        value={transportationCost}
        min={0}
        max={500}
        step={10}
        onChange={onChange}
        description="Monthly costs for transportation (bus, car, ride-sharing)"
      />
    </div>
  );
}