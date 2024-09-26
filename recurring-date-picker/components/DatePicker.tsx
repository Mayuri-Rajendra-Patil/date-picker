"use client";
import React, { useState } from 'react';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(event.target.value));
  };

  return (
    <div>
      <label>Select Date: </label>
      <input type="date" onChange={handleDateChange} />
      {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
    </div>
  );
};

export default DatePicker;
