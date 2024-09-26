import { create } from 'zustand';

export const useDatePickerStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: 'Daily',
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
}));
