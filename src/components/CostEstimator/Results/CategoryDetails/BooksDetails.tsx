import React from 'react';
import { SliderWithLabel } from './components/SliderWithLabel';

interface BooksDetailsProps {
  booksCost: number;
  onChange: (value: number) => void;
}

export function BooksDetails({ booksCost, onChange }: BooksDetailsProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-inner mt-2 space-y-6">
      <SliderWithLabel
        label="Textbooks"
        value={booksCost * 0.7}
        min={0}
        max={2000}
        step={50}
        onChange={(value) => onChange(value + (booksCost * 0.3))}
        description="Required textbooks for your courses"
      />
      
      <SliderWithLabel
        label="Course Materials"
        value={booksCost * 0.3}
        min={0}
        max={1000}
        step={25}
        onChange={(value) => onChange(value + (booksCost * 0.7))}
        description="Lab materials, software, and other supplies"
      />
    </div>
  );
}