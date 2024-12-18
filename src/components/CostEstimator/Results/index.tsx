import React from 'react';
import { EstimateResult, FormData } from '../../../types';
import { CostBreakdown } from './CostBreakdown';
import { TotalCost } from './TotalCost';
import { SelectionSummary } from './SelectionSummary';

interface ResultsProps {
  estimate: EstimateResult;
  formData: FormData;
}

export function Results({ estimate, formData }: ResultsProps) {
  return (
    <div className="bg-[#f8f8f8] p-6 rounded-lg border border-gray-200">
      <div className="space-y-4">
        <CostBreakdown estimate={estimate} />
        <TotalCost estimate={estimate} />
        <SelectionSummary formData={formData} />
      </div>
    </div>
  );
}