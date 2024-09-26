"use client";
import React, { useState } from 'react';

const RecurrenceOptions = () => {
  const [recurrence, setRecurrence] = useState('daily');

  const handleRecurrenceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRecurrence(event.target.value);
  };

  return (
    <div>
      <label>Recurrence: </label>
      <select value={recurrence} onChange={handleRecurrenceChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <p>Selected Recurrence: {recurrence}</p>
    </div>
  );
};

export default RecurrenceOptions;
