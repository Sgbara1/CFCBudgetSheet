import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: 'select' | 'number';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  options?: { value: string; label: string; }[];
  min?: number;
  max?: number;
}

export function FormField({ 
  label, 
  name, 
  type, 
  value, 
  onChange, 
  options,
  min,
  max 
}: FormFieldProps) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-[#4a4a4a] mb-2">
        {label}
      </label>
      {type === 'select' ? (
        <div className="relative">
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:border-[#ba0c2f] focus:ring-2 focus:ring-[#ba0c2f] focus:ring-opacity-20 transition-all duration-200 appearance-none cursor-pointer shadow-sm"
          >
            {options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:border-[#ba0c2f] focus:ring-2 focus:ring-[#ba0c2f] focus:ring-opacity-20 transition-all duration-200 shadow-sm"
        />
      )}
    </div>
  );
}