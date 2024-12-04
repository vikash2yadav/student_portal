import { TextField } from "@mui/material";
import React from "react";

const Input = ({ label, className, name, value, onChange, onBlur }) => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        value={value}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export default Input;
