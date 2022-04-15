import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CarYears = ({ modelYears, currentYear, setCurrentYear, style }) => {
  return (
    <div>
      <Autocomplete
        disablePortal
        style={style}
        id="model-years"
        options={modelYears}
        value={currentYear}
        sx={{ width: 350 }}
        renderInput={(params) => <TextField {...params} label="Year" />}
        onInputChange={(event, userSelection) => {
          setCurrentYear(userSelection);
        }}
        onChange={(event, userSelection) => {
          setCurrentYear(userSelection);
        }}
        isOptionEqualToValue={(option, value) => option === value}
        autoComplete={true}
        autoHighlight={true}
        clearOnEscape={true}
      />
    </div>
  );
};

export default CarYears;
