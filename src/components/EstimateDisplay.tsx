import React from 'react';
import { EstimateResult, FormData } from '../types';

interface EstimateDisplayProps {
  estimate: EstimateResult;
  formData: FormData;
}

export function EstimateDisplay({ estimate, formData }: EstimateDisplayProps) {
  const categories = [
    { label: 'Tuition & Fees:', value: estimate.tuition + estimate.fees },
    { label: 'Books & Supplies:', value: estimate.books || 0 },
    { label: 'Housing & Food:', value: estimate.housing || 0 },
    { label: 'Transportation:', value: 117 },
    { label: 'Personal:', value: 1242 },
    { label: 'Funding:', value: 0, isGreen: true }
  ];

  return (
    <div className="bg-[#f8f8f8] p-6 rounded-lg border border-gray-200">
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-semibold">{category.label}</span>
            <span className={category.isGreen ? 'text-green-600' : ''}>
              ${category.value.toLocaleString()}
            </span>
          </div>
        ))}

        <div className="border-t border-gray-300 pt-4 mt-6">
          <div className="flex justify-between items-center">
            <span className="font-bold">Total Cost:</span>
            <span>${estimate.total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-green-600">
            <span className="font-bold">Total Funding:</span>
            <span>- $0</span>
          </div>
        </div>

        <div className="bg-[#f1f1f1] p-4 rounded-lg mt-6">
          <div className="text-center">
            <div className="text-lg font-semibold mb-2">Total Semester Cost</div>
            <div className="text-4xl font-bold text-[#ba0c2f]">
              ${estimate.total.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Calculation Based on your Selection as below:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Semester:</span>
              <span>{formData.semester}</span>
            </div>
            <div className="flex justify-between">
              <span>Campus:</span>
              <span>{formData.campus}</span>
            </div>
            <div className="flex justify-between">
              <span>Credit Hours:</span>
              <span>{formData.creditHours}</span>
            </div>
            <div className="flex justify-between">
              <span>Major:</span>
              <span>{formData.major}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}