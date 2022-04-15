import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CarYears = ({ modelYears, style }) => {
  return (
    <div data-testid="car-years">
      <Autocomplete
        disablePortal
        style={style}
        id="model-years"
        options={modelYears}
        sx={{ width: 350 }}
        renderInput={(params) => <TextField {...params} label="Year" />}
        autoComplete={true}
        autoHighlight={true}
        clearOnEscape={true}
      />
    </div>
  );
};

export default CarYears;
