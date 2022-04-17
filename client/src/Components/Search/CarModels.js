import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CarModels = ({ companyModels, currentModel, setCurrentModel, style }) => {
  return (
    <div data-testid="car-models">
      <Autocomplete
        disablePortal
        style={style}
        id="company-models"
        value={currentModel}
        options={companyModels}
        sx={{ width: 365 }}
        renderInput={(params) => <TextField {...params} label="Model" />}
        onInputChange={(event, userSelection) => {
          setCurrentModel(userSelection);
        }}
        onChange={(event, userSelection) => {
          setCurrentModel(userSelection);
        }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        autoComplete={true}
        autoHighlight={true}
        clearOnEscape={true}
      />
    </div>
  );
};

export default CarModels;
