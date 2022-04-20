import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CarYears = ({ modelYears, currentYear, setCurrentYear, style }) => {
  return (
    <div data-testid="car-years">
      <Autocomplete
        disablePortal
        style={style}
        sx={{
          width: 365,
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "25px",
            boxShadow: 1,
          },
        }}
        id="model-years"
        value={currentYear}
        options={modelYears}
        renderInput={(params) => <TextField {...params} label="Year" />}
        onInputChange={(event, userSelection) => {
          setCurrentYear(userSelection);
        }}
        onChange={(event, userSelection) => {
          setCurrentYear(userSelection);
        }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        autoComplete={true}
        autoHighlight={true}
        clearOnEscape={true}
      />
    </div>
  );
};

export default CarYears;
