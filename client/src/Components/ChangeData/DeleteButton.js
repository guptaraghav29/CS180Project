import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ currentSelection, fetchData }) => {
  return (
    <div className="">
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={() => {
          currentSelection.forEach((id) => {
            fetch(`/cars/${id}`, { method: "DELETE" }).then((res) => {
              if (res.status === 200) fetchData(); // probably should check once if deleted then refresh once at the end very bad every refresh
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
