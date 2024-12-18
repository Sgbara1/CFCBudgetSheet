import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { majors, categories } from '../../data/majors';

interface MajorSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function MajorSelect({ value, onChange }: MajorSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredMajors = majors.filter((major) => {
    const matchesSearch = major.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || major.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:border-[#ba0c2f] focus:ring-2 focus:ring-[#ba0c2f] focus:ring-opacity-20 transition-all duration-200 text-left"
      >
        {value || 'Select a major...'}
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search majors..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ba0c2f] focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === '' ? 'bg-[#ba0c2f] text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategory === category ? 'bg-[#ba0c2f] text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
            {filteredMajors.map((major) => (
              <div
                key={major.name}
                className={`p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                  value === major.name ? 'bg-[#ba0c2f] text-white' : 'hover:bg-gray-100'
                }`}
                onClick={() => {
                  onChange(major.name);
                  setIsOpen(false);
                }}
              >
                <div className="font-medium">{major.name}</div>
                <div className={`text-sm ${value === major.name ? 'text-white/80' : 'text-gray-500'}`}>
                  {major.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}