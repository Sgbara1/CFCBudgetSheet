import React from 'react';
import { EstimateResult } from '../../../types';
import { DollarSign } from 'lucide-react';

interface TotalCostProps {
  estimate: EstimateResult;
}

export function TotalCost({ estimate }: TotalCostProps) {
  return (
    <>
      <div className="border-t border-gray-200 pt-6 mt-8">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-lg">Total Cost:</span>
          <span className="text-lg">${estimate.total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center text-green-600">
          <span className="font-bold text-lg">Total Funding:</span>
          <span className="text-lg">- $0</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#f8f8f8] to-white p-8 rounded-xl mt-8 shadow-lg border border-gray-100">
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-[#ba0c2f] text-white p-3 rounded-full mb-4">
            <DollarSign size={24} />
          </div>
          <div className="text-xl font-semibold mb-3 text-gray-700">Total Semester Cost</div>
          <div className="text-5xl font-bold text-[#ba0c2f] tracking-tight">
            ${estimate.total.toLocaleString()}
          </div>
        </div>
      </div>
    </>
  );
}