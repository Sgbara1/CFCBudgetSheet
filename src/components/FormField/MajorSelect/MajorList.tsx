import React from 'react';
import { Major } from '../../../data/majors';

interface MajorListProps {
  majors: Major[];
  selectedMajor: string;
  onSelect: (major: string) => void;
}

export function MajorList({ majors, selectedMajor, onSelect }: MajorListProps) {
  return (
    <div className="mt-4 max-h-60 overflow-y-auto divide-y divide-gray-100">
      {majors.map((major) => (
        <div
          key={major.name}
          onClick={() => onSelect(major.name)}
          className={`p-3 cursor-pointer transition-colors duration-200 ${
            selectedMajor === major.name 
              ? 'bg-[#ba0c2f] text-white' 
              : 'hover:bg-gray-50'
          }`}
        >
          <div className="font-medium">{major.name}</div>
          <div className={`text-sm ${
            selectedMajor === major.name 
              ? 'text-white/80' 
              : 'text-gray-500'
          }`}>
            {major.category}
          </div>
        </div>
      ))}
    </div>
  );
}