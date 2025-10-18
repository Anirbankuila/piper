
export default interface AddDocs {
  name: string;
  teachername?: string;
  notes?: string;
}

export default interface AddMedicalDoc {
  name: string;
  doctorName: string;
  startDate?: Date;
  endDate?: Date;
  notes?: string;
}

export default interface AddTherapyDoc {
  name: string;
  doctorName: string;
  startDate?: Date;
  endDate?: Date;
  notes?: string;
}
export default interface AddAllergyDoc {
  type: string;
  notes?: string;
}
export default interface AddImmunizationDoc {
  type: string;
  recievedDate?: Date;
  notes?: string;
}