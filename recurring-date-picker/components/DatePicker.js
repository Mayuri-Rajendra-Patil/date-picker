"use client";
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDatePickerStore } from '../stores/datePickerStore';

export default function DatePicker() {
  const { startDate, setStartDate, endDate, setEndDate } = useDatePickerStore();

  return (
    <div className="flex gap-4">
      <div>
        <h3>Start Date</h3>
        <Calendar onChange={setStartDate} value={startDate} />
      </div>
      <div>
        <h3>End Date (Optional)</h3>
        <Calendar onChange={setEndDate} value={endDate} />
      </div>
    </div>
  );
}
