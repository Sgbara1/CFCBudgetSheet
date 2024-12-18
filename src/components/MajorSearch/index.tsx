import React, { useState, useMemo } from 'react';
import { majors, categories } from '../../data/majors';
import { SearchInput } from './SearchInput';
import { CategoryFilter } from './CategoryFilter';
import { MajorList } from './MajorList';

interface MajorSearchProps {
  selectedMajor: string;
  onSelect: (major: string) => void;
}

export function MajorSearch({ selectedMajor, onSelect }: MajorSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredMajors = useMemo(() => {
    return majors.filter((major) => {
      const matchesSearch = major.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || major.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full">
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search for a major..."
      />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <MajorList
        majors={filteredMajors}
        selectedMajor={selectedMajor}
        onSelect={onSelect}
      />
    </div>
  );
}