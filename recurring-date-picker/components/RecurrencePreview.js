"use client";
import React from 'react';
import Calendar from 'react-calendar';
import { useDatePickerStore } from '../stores/datePickerStore';

export default function RecurrencePreview() {
  const { startDate, recurrenceType, recurrenceFrequency, daysOfWeek, nthDay } = useDatePickerStore();

  const calculateRecurringDates = () => {
    // Logic to calculate recurring dates based on the selected pattern
    return [];
  };

  const recurringDates = calculateRecurringDates();

  return (
    <div>
      <h3>Recurring Dates Preview</h3>
      <Calendar tileClassName={({ date }) => {
        return recurringDates.includes(date.toISOString().split('T')[0]) ? 'bg-blue-500' : '';
      }} />
    </div>
  );
}
