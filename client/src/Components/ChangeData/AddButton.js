import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const AddButton = () => {
  return (
    <div className="px-3">
      <Button
        variant="contained"
        startIcon={<SendIcon />}
        sx={{
          background: "#145DA0",
        }}
      >
        Add Data
      </Button>
    </div>
  );
};

export default AddButton;
