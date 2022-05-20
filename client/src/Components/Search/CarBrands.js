import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CarBrands = ({
  carCompanies,
  currentCompany,
  setCurrentCompany,
  setCurrentModel,
}) => {
  return (
    <div data-testid="car-brands">
      <Autocomplete
        disablePortal
        id="car-companies"
        value={currentCompany}
        options={carCompanies}
        sx={{
          width: 365,
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "25px",
            boxShadow: 1,
          },
        }}
        renderInput={(params) => (
          <div>
            <TextField {...params} label="Brand" />
          </div>
        )}
        onInputChange={(event, userSelection) => {
          setCurrentCompany(userSelection);
          if (userSelection !== currentCompany) {
            setCurrentModel("");
          }
        }}
        onChange={(event, userSelection) => {
          setCurrentCompany(userSelection);
          if (userSelection !== currentCompany) {
            setCurrentModel("");
          }
        }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        autoComplete={true}
        autoHighlight={true}
        clearOnEscape={true}
        autoSelect={true}
      />
    </div>
  );
};

export default CarBrands;
