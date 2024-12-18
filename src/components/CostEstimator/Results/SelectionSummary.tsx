import React from 'react';
import { FormData } from '../../../types';

interface SelectionSummaryProps {
  formData: FormData;
}

export function SelectionSummary({ formData }: SelectionSummaryProps) {
  const selections = [
    { label: 'Semester:', value: formData.semester },
    { label: 'Campus:', value: formData.campus },
    { label: 'Credit Hours:', value: formData.creditHours },
    { label: 'Major:', value: formData.major }
  ];

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Calculation Based on your Selection as below:</h3>
      <div className="space-y-2 text-sm">
        {selections.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}