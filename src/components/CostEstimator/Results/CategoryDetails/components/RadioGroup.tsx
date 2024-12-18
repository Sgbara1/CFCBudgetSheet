import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function RadioGroup({
  label,
  name,
  options,
  defaultValue,
  onChange
}: RadioGroupProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>
      <div className="flex gap-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={option.value === defaultValue}
              onChange={(e) => onChange?.(e.target.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}