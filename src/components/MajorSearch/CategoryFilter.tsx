import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <button
        onClick={() => onSelect('')}
        className={`px-3 py-1 rounded-full text-sm ${
          selectedCategory === ''
            ? 'bg-[#ba0c2f] text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-3 py-1 rounded-full text-sm ${
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