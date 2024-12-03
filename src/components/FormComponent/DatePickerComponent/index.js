import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";

const DatePickerComponent = ({
  name,
  label,
  className,
  value,
  onChange,
  onBlur,
}) => {
  const handleDateChange = (newValue) => {
    const formattedDate = newValue ? format(newValue, "yyyy-MM-dd") : null;
    onChange(name, formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        className={className}
        name={name}
        label={label}
        value={value ? new Date(value) : null}
        onChange={handleDateChange}
        onBlur={onBlur}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
