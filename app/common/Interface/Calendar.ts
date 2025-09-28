interface IAppointment {
  id: string;
  bookDate: string;
  bookTime: string;
  doctorName: string;
  doctorImage: string;
  status: string;
}
export interface IAppointmentForm {
  title: string;
  dateTime: Date | undefined;
  remainder: Date | undefined;
}
export default IAppointment;
