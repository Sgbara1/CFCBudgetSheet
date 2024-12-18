import { useState } from 'react';
import { FormData, EstimateResult } from '../../../types';
import { calculateEstimate } from '../../../utils/calculations';
import { exportToCSV } from '../../../utils/export';

export const initialFormData: FormData = {
  semester: 'fall',
  campus: 'main',
  location: 'in-state',
  creditHours: '',
  major: 'engineering'
};

export function useEstimate() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCalculate = () => {
    const result = calculateEstimate(formData);
    if (result) setEstimate(result);
  };

  const handleExport = () => {
    if (estimate) exportToCSV(formData, estimate);
  };

  const handleClear = () => {
    setFormData(initialFormData);
    setEstimate(null);
  };

  const handleUpdateCosts = (category: string, value: number) => {
    if (!estimate) return;
    
    setEstimate(prev => ({
      ...prev!,
      [category]: value,
      total: calculateNewTotal({ ...prev!, [category]: value })
    }));
  };

  return {
    formData,
    estimate,
    handleInputChange,
    handleCalculate,
    handleExport,
    handleClear,
    handleUpdateCosts
  };
}

function calculateNewTotal(estimate: EstimateResult): number {
  return (
    estimate.tuition +
    estimate.fees +
    (estimate.books || 0) +
    (estimate.housing || 0) +
    (estimate.transportation || 0) +
    (estimate.personal || 0) -
    (estimate.funding || 0)
  );
}