import React from 'react';
import DatePicker from '../components/DatePicker';
import RecurrenceOptions from '../components/RecurrenceOptions';
import RecurrencePreview from '../components/RecurrencePreview';

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
      <DatePicker />
      <RecurrenceOptions />
      <RecurrencePreview />
    </div>
  );
}
