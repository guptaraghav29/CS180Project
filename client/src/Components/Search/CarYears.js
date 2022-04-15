import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CarYears = ({ modelYears, style }) => {
  return (
    <div>
      <Autocomplete
        disablePortal
        style={style}
        id="model-years"
        options={modelYears}
        sx={{ width: 350 }}
        renderInput={(params) => <TextField {...params} label="Year" />}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        autoComplete={true}
        autoHighlight={true}
        clearOnEscape={true}
      />
    </div>
  );
};

export default CarYears;
