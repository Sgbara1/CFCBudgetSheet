import React from 'react';
import { Download, RefreshCw, Calculator } from 'lucide-react';
import { EstimateResult } from '../types';

interface ActionButtonsProps {
  onCalculate: () => void;
  onExport: () => void;
  onClear: () => void;
  estimate: EstimateResult | null;
}

export function ActionButtons({ 
  onCalculate, 
  onExport, 
  onClear, 
  estimate 
}: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <button
        onClick={onCalculate}
        className="flex-1 bg-gradient-to-r from-[#ba0c2f] to-[#8a0923] text-white px-6 py-4 rounded-lg hover:from-[#8a0923] hover:to-[#6a0719] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
      >
        <Calculator size={20} className="group-hover:scale-110 transition-transform duration-300" />
        Calculate Estimate
      </button>
      <button
        onClick={onExport}
        disabled={!estimate}
        className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-[#ba0c2f] bg-white border-2 border-[#ba0c2f] hover:bg-[#ba0c2f] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        <Download size={20} /> Export
      </button>
      <button
        onClick={onClear}
        className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-gray-600 bg-white border-2 border-gray-300 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" /> 
        Clear
      </button>
    </div>
  );
}