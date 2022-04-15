import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CarBrands = ({ carCompanies, currentCompany, setCurrentCompany }) => {
  return (
    <div data-testid="car-brands">
      <Autocomplete
        disablePortal
        id="car-companies"
        value={currentCompany}
        options={carCompanies}
        sx={{ width: 350 }}
        renderInput={(params) => <TextField {...params} label="Brand" />}
        onInputChange={(event, userSelection) => {
          setCurrentCompany(userSelection);
        }}
        onChange={(event, userSelection) => {
          setCurrentCompany(userSelection);
        }}
        autoComplete={true}
        autoHighlight={true}
        clearOnEscape={true}
      />
    </div>
  );
};

export default CarBrands;
