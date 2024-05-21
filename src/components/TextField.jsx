import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({ placeholder, label, type }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      color="secondary"
      placeholder={placeholder}
      focused
      type={type}
      label={label}
      InputLabelProps={{
        sx: {
          color: "#07262E",
        },
        "&.Mui-focused": {
          color: "#07262E", // Color of the label when focused
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#f2f4f4",
            borderWidth: 1.7,
            borderRadius: 2,
          },
        },
      }}
      // focused
    />
  );
};

export default CustomTextField;
