// DatePickerComponent.js
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="datepicker-container">
      <ReactDatePicker
        id="date-picker"
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Click to select a date"
        className="px-4 py-2 border rounded-md shadow-sm focus:ring focus:border-blue-300"
      />
      {selectedDate && (
        <p className="mt-2 text-gray-600">
          Selected Date: {selectedDate.toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export default DatePickerComponent;
