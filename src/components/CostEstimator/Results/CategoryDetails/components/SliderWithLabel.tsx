import React from 'react';

interface SliderWithLabelProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  description?: string;
  prefix?: string;
  accentColor?: string;
}

export function SliderWithLabel({
  label,
  value,
  min,
  max,
  step,
  onChange,
  description,
  prefix = '$',
  accentColor = '#ba0c2f'
}: SliderWithLabelProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm font-semibold text-gray-900">
          {prefix}{value.toLocaleString()}
        </span>
      </div>
      
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        style={{ 
          accentColor,
          background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${(value/max)*100}%, #e5e7eb ${(value/max)*100}%, #e5e7eb 100%)`
        }}
      />
      
      <div className="flex justify-between text-xs text-gray-500">
        <span>{prefix}{min.toLocaleString()}</span>
        <span>{prefix}{max.toLocaleString()}</span>
      </div>
      
      {description && (
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      )}
    </div>
  );
}