import React from 'react';
import { FormData } from '../../../types';
import { FormField } from './FormField';
import { SEMESTER_OPTIONS, CAMPUS_OPTIONS, RESIDENCY_OPTIONS, MAJOR_OPTIONS } from '../../../constants/formOptions';

interface FormProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

export function Form({ formData, onInputChange }: FormProps) {
  return (
    <div className="bg-[#f8f8f8] p-6 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Tuition & Fees</h2>
      <div className="space-y-4">
        <FormField
          label="Semester"
          name="semester"
          type="select"
          value={formData.semester}
          onChange={onInputChange}
          options={SEMESTER_OPTIONS}
        />
        <FormField
          label="Campus"
          name="campus"
          type="select"
          value={formData.campus}
          onChange={onInputChange}
          options={CAMPUS_OPTIONS}
        />
        <FormField
          label="Residency"
          name="location"
          type="select"
          value={formData.location}
          onChange={onInputChange}
          options={RESIDENCY_OPTIONS}
        />
        <FormField
          label="Credit Hours"
          name="creditHours"
          type="number"
          value={formData.creditHours}
          onChange={onInputChange}
          min={1}
          max={30}
        />
        <FormField
          label="Major"
          name="major"
          type="select"
          value={formData.major}
          onChange={onInputChange}
          options={MAJOR_OPTIONS}
        />
      </div>
    </div>
  );
}