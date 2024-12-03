import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Selectbox = ({ name, value, label, onChange, onBlur, option }) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          name={name}
          value={value}
          label={label}
          onChange={onChange}
          onBlur={onBlur}
        >
          {option?.map((item) => (
            <MenuItem value={item?.value}>{item?.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Selectbox;
