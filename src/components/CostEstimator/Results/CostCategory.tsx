import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CostCategoryProps {
  label: string;
  value: number;
  isGreen?: boolean;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function CostCategory({
  label,
  value,
  isGreen,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: CostCategoryProps) {
  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive
          ? 'bg-[#ba0c2f] bg-opacity-10 border-l-4 border-[#ba0c2f]'
          : 'hover:bg-gray-100'
      }`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-2">
        <ChevronRight
          size={20}
          className={`transform transition-transform duration-300 ${
            isActive ? 'rotate-90' : ''
          } ${isGreen ? 'text-green-600' : 'text-[#ba0c2f]'}`}
        />
        <span className={`font-semibold ${isGreen ? 'text-green-600' : ''}`}>
          {label}
        </span>
      </div>
      <span className={isGreen ? 'text-green-600' : ''}>
        ${value.toLocaleString()}
      </span>
    </div>
  );
}