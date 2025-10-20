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

export interface SymptomItem {
  id: string;
  name: string;
  icon: any; // Image source
  obtainValue: number;
  totalValue: number;
  progress: number; // percentage 0-100
  progressColor?: string;
  status: string;
  timeAgo: string;
}

export interface ReminderCardItem {
  id: string;
  title: string;
  duration: string;
  isToggled: boolean;
  nextAvailable: string;
  icon: any; // Image source
  categoryName: string;
  isSurveyAvailable?: boolean;
}
