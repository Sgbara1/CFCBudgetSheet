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

export const tuitionData: TuitionData = {
  main: { 
    resident: 383.30, 
    nonResident: 1134.10, 
    housingFood: 11884, 
    books: 1660 
  },
  valencia: { 
    resident: 74.50, 
    nonResident: 210.00, 
    fees: 3.75 
  },
  losAlamos: { 
    resident: 82.00, 
    nonResident: 227.50, 
    fees: 3.00, 
    fullTime: 1048.00 
  },
  taos: { 
    resident: 81.00, 
    nonResident: 206.00, 
    fees: 30.00 
  },
  gallup: { 
    resident: 80.50, 
    nonResident: 196.16, 
    fees: 3.75 
  }
};