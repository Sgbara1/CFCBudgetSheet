export interface CampusData {
  resident: number;
  nonResident: number;
  fees?: number;
  fullTime?: number;
  housingFood?: number;
  books?: number;
}

export interface TuitionData {
  [key: string]: CampusData;
}

export interface FormData {
  semester: string;
  campus: string;
  location: string;
  creditHours: string;
  major: string;
}

export interface EstimateResult {
  tuition: number;
  fees: number;
  housing?: number;
  books?: number;
  transportation?: number;
  personal?: number;
  funding?: number;
  total: number;
}