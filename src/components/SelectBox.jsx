import { FormControl, InputLabel, Select } from "@mui/material";
import React from "react";

const SelectBox = ({ label, placeholder, sx }) => {
  return (
    <FormControl fullWidth>
      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      <Select
        sx={{ ...sx  ,outline : "none" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        placeholder={placeholder}
        // label="Age"
      ></Select>
    </FormControl>
  );
};

export default SelectBox;
