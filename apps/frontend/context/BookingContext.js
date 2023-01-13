import { createContext } from "react";
import { DatePickerDefaultRange } from "../components/DatePicker";

export const initialBookingState = {
  dateRange: DatePickerDefaultRange,
  selectedCar: undefined
};

export const BookingContext = createContext();
