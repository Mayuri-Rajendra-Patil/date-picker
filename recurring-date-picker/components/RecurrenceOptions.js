"use client";
import React from 'react';
import { useDatePickerStore } from '../stores/datePickerStore';

export default function RecurrenceOptions() {
  const {
    recurrenceType,
    recurrenceFrequency,
    setRecurrenceType,
    setRecurrenceFrequency,
    setDaysOfWeek,
    setNthDay,
  } = useDatePickerStore();

  return (
    <div>
      <label>Recurrence Type</label>
      <select
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value)}
        className="block mt-2 p-2 border rounded"
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>

      <label className="mt-4 block">Every</label>
      <input
        type="number"
        className="block mt-2 p-2 border rounded"
        value={recurrenceFrequency}
        onChange={(e) => setRecurrenceFrequency(Number(e.target.value))}
      />
      {/* Add additional recurrence customization */}
    </div>
  );
}
