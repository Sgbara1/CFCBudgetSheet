import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  value: string;
  onClick: () => void;
  placeholder?: string;
}

export function Dropdown({ value, onClick, placeholder = 'Select a major...' }: DropdownProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:border-[#ba0c2f] focus:ring-2 focus:ring-[#ba0c2f] focus:ring-opacity-20 transition-all duration-200 text-left flex justify-between items-center"
    >
      <span className="truncate">{value || placeholder}</span>
      <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
    </button>
  );
}