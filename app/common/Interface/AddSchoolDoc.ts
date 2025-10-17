
export interface AddDocs {
  name: string;
  teachername?: string;
  notes?: string;
}

export interface AddMedicalDoc {
  name: string;
  doctorName: string;
  startDate?: Date;
  endDate?: Date;
  notes?: string;
}

export interface AddTherapyDoc {
  name: string;
  doctorName: string;
  startDate?: Date;
  endDate?: Date;
  notes?: string;
}
export interface AddAllergyDoc {
  type: string;
  notes?: string;
}
export interface AddImmunizationDoc {
  type: string;
  recievedDate?: Date;
  notes?: string;
}