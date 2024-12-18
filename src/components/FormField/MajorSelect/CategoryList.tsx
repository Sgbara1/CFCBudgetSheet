import React from 'react';
import { categories } from '../../../data/majors';

interface CategoryListProps {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryList({ selectedCategory, onSelect }: CategoryListProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <button
        onClick={() => onSelect('')}
        className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
          selectedCategory === '' 
            ? 'bg-[#ba0c2f] text-white' 
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        All Programs
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
            selectedCategory === category 
              ? 'bg-[#ba0c2f] text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}