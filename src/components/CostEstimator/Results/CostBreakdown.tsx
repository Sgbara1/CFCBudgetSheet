import React, { useState } from 'react';
import { EstimateResult } from '../../../types';
import { CostCategory } from './CostCategory';
import { TransportationDetails } from './CategoryDetails/TransportationDetails';
import { HousingDetails } from './CategoryDetails/HousingDetails';
import { BooksDetails } from './CategoryDetails/BooksDetails';
import { PersonalDetails } from './CategoryDetails/PersonalDetails';
import { FundingDetails } from './CategoryDetails/FundingDetails';

interface CostBreakdownProps {
  estimate: EstimateResult;
  onUpdateCosts: (category: string, value: number) => void;
}

export function CostBreakdown({ estimate, onUpdateCosts }: CostBreakdownProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    { id: 'tuition', label: 'Tuition & Fees:', value: estimate.tuition + estimate.fees },
    { id: 'books', label: 'Books & Supplies:', value: estimate.books || 0 },
    { id: 'housing', label: 'Housing & Food:', value: estimate.housing || 0 },
    { id: 'transportation', label: 'Transportation:', value: estimate.transportation || 0 },
    { id: 'personal', label: 'Personal:', value: estimate.personal || 0 },
    { id: 'funding', label: 'Funding:', value: estimate.funding || 0, isGreen: true }
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const handleCostChange = (category: string, value: number) => {
    onUpdateCosts(category, value);
  };

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div key={category.id}>
          <CostCategory
            label={category.label}
            value={category.value}
            isGreen={category.isGreen}
            isActive={activeCategory === category.id || hoveredCategory === category.id}
            onClick={() => handleCategoryClick(category.id)}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          />
          {activeCategory === category.id && (
            <>
              {category.id === 'transportation' && (
                <TransportationDetails 
                  transportationCost={category.value}
                  onChange={(value) => handleCostChange('transportation', value)}
                />
              )}
              {category.id === 'housing' && (
                <HousingDetails 
                  housingCost={category.value}
                  onChange={(value) => handleCostChange('housing', value)}
                />
              )}
              {category.id === 'books' && (
                <BooksDetails 
                  booksCost={category.value}
                  onChange={(value) => handleCostChange('books', value)}
                />
              )}
              {category.id === 'personal' && (
                <PersonalDetails 
                  personalCost={category.value}
                  onChange={(value) => handleCostChange('personal', value)}
                />
              )}
              {category.id === 'funding' && (
                <FundingDetails 
                  fundingAmount={category.value}
                  onChange={(value) => handleCostChange('funding', value)}
                />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}