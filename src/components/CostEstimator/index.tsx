import React, { useState } from 'react';
import { FormData, EstimateResult } from '../../types';
import { Header } from '../Header';
import { Form } from './Form';
import { Results } from './Results';
import { ActionButtons } from '../ActionButtons';
import { calculateEstimate } from '../../utils/calculations';
import { exportToCSV } from '../../utils/export';

const initialFormData: FormData = {
  semester: 'fall',
  campus: 'main',
  location: 'in-state',
  creditHours: '',
  major: 'engineering'
};

export default function CostEstimator() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm backdrop-filter">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <Form formData={formData} onInputChange={handleInputChange} />
              <ActionButtons
                onCalculate={handleCalculate}
                onExport={handleExport}
                onClear={handleClear}
                estimate={estimate}
              />
            </div>

            <div className="flex-1">
              {estimate ? (
                <Results estimate={estimate} formData={formData} />
              ) : (
                <div className="bg-gradient-to-br from-[#f8f8f8] to-white p-8 rounded-xl border border-gray-100 h-full flex items-center justify-center shadow-lg">
                  <div className="text-center max-w-sm">
                    <Calculator size={48} className="text-[#ba0c2f] mx-auto mb-4 opacity-50" />
                    <p className="text-gray-500 text-lg">
                      Enter your details and click "Calculate Estimate" to see your personalized cost breakdown
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}