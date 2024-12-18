import { CampusData, EstimateResult, FormData } from '../types';
import { tuitionData } from '../data/tuitionData';

export function calculateEstimate(formData: FormData): EstimateResult | null {
  const campusData = tuitionData[formData.campus];
  const creditHours = parseInt(formData.creditHours);
  
  if (!creditHours || isNaN(creditHours)) return null;

  let tuition = campusData.resident * creditHours;
  if (formData.location === 'out-of-state') {
    tuition = campusData.nonResident * creditHours;
  }

  if (formData.campus === 'losAlamos' && creditHours >= 12) {
    tuition = campusData.fullTime || tuition;
  }

  const fees = (campusData.fees || 0) * creditHours;
  const housing = campusData.housingFood || 0;
  const books = campusData.books || 0;

  return {
    tuition,
    fees,
    ...(housing && { housing }),
    ...(books && { books }),
    total: tuition + fees + housing + books
  };
}