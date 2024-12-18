import { useState } from 'react';

interface UseSliderProps {
  initialValue: number;
  min: number;
  max: number;
  step: number;
  onChange?: (value: number) => void;
}

export function useSlider({ initialValue, min, max, step, onChange }: UseSliderProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return {
    value,
    handleChange,
    min,
    max,
    step
  };
}