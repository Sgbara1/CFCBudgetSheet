import { EstimateResult, FormData } from '../types';

export function exportToCSV(formData: FormData, estimate: EstimateResult) {
  const rows = [
    ['Category', 'Amount'],
    ['Semester', formData.semester],
    ['Campus', formData.campus],
    ['Residency', formData.location],
    ['Credit Hours', formData.creditHours],
    ['Major', formData.major],
    ['Tuition', estimate.tuition.toFixed(2)],
    ['Fees', estimate.fees.toFixed(2)],
    ...(estimate.housing ? [['Housing & Food', estimate.housing.toFixed(2)]] : []),
    ...(estimate.books ? [['Books & Supplies', estimate.books.toFixed(2)]] : []),
    ['Total', estimate.total.toFixed(2)]
  ];

  const csvContent = rows.map(row => row.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'unm_estimate.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}