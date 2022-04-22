import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SendIcon from "@mui/icons-material/Send";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";

const AddButton = ({ carCompanies, fetchData }) => {
  const [carBrand, setBrand] = useState("");
  const [carModel, setModel] = useState("");
  const [carYear, setYear] = useState("");
  const [carPrice, setPrice] = useState("");
  const [carOdometer, setOdometer] = useState("");
  const [carStatus, setStatus] = useState("");
  const [carColor, setColor] = useState("");
  const [carRegion, setRegion] = useState("");
  const [carState, setState] = useState("");
  const [carDate, setDate] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    let id = Math.floor(Math.random() * 8999999999 + 100000000);
    fetch(`/cars/${id}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id.toString(10),
        region: carRegion,
        price: carPrice,
        year: carYear,
        manufacturer: carBrand,
        model: carModel,
        condition: carState,
        odoemeter: carOdometer,
        title_status: carStatus,
        type: "",
        paint_color: carColor,
        state: carState,
        posting_date: carDate,
     })
    })
    .then((res) => {
      if (res.status == 200) {
        fetchData();
      }
    });
  };

  return (
    <div className="px-3">
      <Button
        variant="contained"
        startIcon={<SendIcon />}
        sx={{
          background: "#145DA0",
        }}
        onClick={handleClickOpen}
      >
        Add Data
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Car</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            id="brand"
            label="Brand"
            type="Brand"
            fullWidth
            variant="outlined"
            value={carBrand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="model"
            label="Model"
            type="Model"
            fullWidth
            variant="outlined"
            value={carModel}
            onChange={(event) => {
              setModel(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="year"
            label="Year"
            type="Year"
            fullWidth
            variant="outlined"
            value={carYear}
            onChange={(event) => {
              setYear(event.target.value);
            }}
          />

          <TextField
            required
            margin="dense"
            id="price"
            label="Price"
            fullWidth
            type="Number"
            variant="outlined"
            value={carPrice}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="odometer"
            label="Odometer"
            type="Number"
            fullWidth
            variant="outlined"
            value={carOdometer}
            onChange={(event) => {
              setOdometer(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="status"
            label="Status"
            type="Status"
            fullWidth
            variant="outlined"
            value={carStatus}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="color"
            label="Color"
            fullWidth
            variant="outlined"
            value={carColor}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="region"
            label="Region"
            type="Region"
            fullWidth
            variant="outlined"
            value={carRegion}
            onChange={(event) => {
              setRegion(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="state"
            label="State"
            type="State"
            fullWidth
            variant="outlined"
            value={carState}
            onChange={(event) => {
              setState(event.target.value);
            }}
          />
          <TextField
            required
            margin="dense"
            id="date"
            type="Date"
            fullWidth
            variant="outlined"
            value={carDate}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            startIcon={<CheckBoxIcon />}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddButton;
