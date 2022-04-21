import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = (currentSelection, setCurrentSelection) => {
  return (
    <div className="py-3 flex justify-end">
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={() => {
          currentSelection.currentSelection.forEach((id) => {
            fetch(`/cars/${id}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(id);
                console.log(data);
              });
          });
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
