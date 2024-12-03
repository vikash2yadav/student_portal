import React from "react";
import Textarea from "@mui/joy/Textarea";

const TextArea = ({
  placeholder,
  className,
  name,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div>
      <Textarea
        placeholder={placeholder}
        minRows={3}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
      />
    </div>
  );
};

export default TextArea;
