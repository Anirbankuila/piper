export interface Medication {
  id: string;
  name: string;
  dosage: string;
  schedule: string;
  time: string;
  status: "Taken" | "Missed";
  date: Date;
}

export interface IMedicineDetails {
  name: string;
  remainder?: Date;
  dosageAmount: number;
  chooseDaily: false;
  startDate?: Date;
  endDate?: Date;
  dateTime: undefined;
  notes?: string;
}
