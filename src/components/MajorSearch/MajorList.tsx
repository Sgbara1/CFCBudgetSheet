import React from 'react';
import { Major } from '../../data/majors';

interface MajorListProps {
  majors: Major[];
  selectedMajor: string;
  onSelect: (major: string) => void;
}

export function MajorList({ majors, selectedMajor, onSelect }: MajorListProps) {
  return (
    <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
      {majors.map((major) => (
        <div
          key={major.name}
          className={`p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
            selectedMajor === major.name
              ? 'bg-[#ba0c2f] text-white'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => onSelect(major.name)}
        >
          <div className="font-medium">{major.name}</div>
          <div className="text-sm text-gray-500">{major.category}</div>
        </div>
      ))}
    </div>
  );
}