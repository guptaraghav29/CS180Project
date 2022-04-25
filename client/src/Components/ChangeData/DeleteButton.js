import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ currentSelection, fetchData }) => {
  return (
    <div className="">
      <Button
        variant="contained"
        sx={{
          background: "#ff5552",
          ":hover": {
            background: "#ff3733",
          },
        }}
        startIcon={<DeleteIcon />}
        onClick={() => {
          currentSelection.forEach((id) => {
            fetch(`/cars/${id}`, { method: "DELETE" });
          });
          fetchData();
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
