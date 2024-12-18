import React, { useState, useMemo } from 'react';
import { majors } from '../../../data/majors';
import { Dropdown } from './Dropdown';
import { SearchInput } from './SearchInput';
import { CategoryList } from './CategoryList';
import { MajorList } from './MajorList';
import { useClickOutside } from '../../../hooks/useClickOutside';

interface MajorSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function MajorSelect({ value, onChange }: MajorSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const filteredMajors = useMemo(() => {
    return majors.filter((major) => {
      const matchesSearch = major.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || major.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSelect = (majorName: string) => {
    onChange(majorName);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <Dropdown 
        value={value} 
        onClick={() => setIsOpen(!isOpen)} 
      />

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <SearchInput 
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <CategoryList
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <MajorList
            majors={filteredMajors}
            selectedMajor={value}
            onSelect={handleSelect}
          />
        </div>
      )}
    </div>
  );
}