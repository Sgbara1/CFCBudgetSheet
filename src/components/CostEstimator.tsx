import React, { useState } from 'react';
import { FormData, EstimateResult } from '../types';
import { Header } from './Header';
import { FormField } from './FormField';
import { ActionButtons } from './ActionButtons';
import { EstimateDisplay } from './EstimateDisplay';
import { calculateEstimate } from '../utils/calculations';
import { exportToCSV } from '../utils/export';
import {
  SEMESTER_OPTIONS,
  CAMPUS_OPTIONS,
  RESIDENCY_OPTIONS,
  MAJOR_OPTIONS
} from '../constants/formOptions';

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
    <div className="min-h-screen bg-[#f5f5f5] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Form */}
            <div className="flex-1">
              <div className="bg-[#f8f8f8] p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Tuition & Fees</h2>
                <div className="space-y-4">
                  <FormField
                    label="Semester"
                    name="semester"
                    type="select"
                    value={formData.semester}
                    onChange={handleInputChange}
                    options={SEMESTER_OPTIONS}
                  />
                  <FormField
                    label="Campus"
                    name="campus"
                    type="select"
                    value={formData.campus}
                    onChange={handleInputChange}
                    options={CAMPUS_OPTIONS}
                  />
                  <FormField
                    label="Residency"
                    name="location"
                    type="select"
                    value={formData.location}
                    onChange={handleInputChange}
                    options={RESIDENCY_OPTIONS}
                  />
                  <FormField
                    label="Credit Hours"
                    name="creditHours"
                    type="number"
                    value={formData.creditHours}
                    onChange={handleInputChange}
                    min={1}
                    max={30}
                  />
                  <FormField
                    label="Major"
                    name="major"
                    type="select"
                    value={formData.major}
                    onChange={handleInputChange}
                    options={MAJOR_OPTIONS}
                  />
                </div>
              </div>
              
              <ActionButtons
                onCalculate={handleCalculate}
                onExport={handleExport}
                onClear={handleClear}
                estimate={estimate}
              />
            </div>

            {/* Right Column - Results */}
            <div className="flex-1">
              {estimate ? (
                <EstimateDisplay estimate={estimate} formData={formData} />
              ) : (
                <div className="bg-[#f8f8f8] p-6 rounded-lg border border-gray-200 h-full flex items-center justify-center">
                  <p className="text-gray-500 text-center">
                    Enter your details and click "Calculate Estimate" to see your cost breakdown
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}