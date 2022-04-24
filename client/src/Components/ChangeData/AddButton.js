import React, { useState, forwardRef, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import InputAdornment from "@mui/material/InputAdornment";
import Slide from "@mui/material/Slide";
import MenuItem from "@mui/material/MenuItem";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

let states = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

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
    clearInputs();
  };

  const clearInputs = () => {
    setBrand("");
    setModel("");
    setYear("");
    setPrice("");
    setOdometer("");
    setStatus("");
    setColor("");
    setRegion("");
    setState("");
    setDate("");
  };

  const handleEmpty = () => {};

  const handleSubmit = () => {
    setOpen(false);
    let id = Math.floor(Math.random() * 8999999999 + 100000000);
    fetch(`/cars/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id.toString(10),
        region: carRegion,
        price: carPrice,
        year: carYear,
        manufacturer: carBrand,
        model: carModel,
        condition: carState,
        odometer: carOdometer,
        title_status: carStatus,
        paint_color: carColor,
        state: carState,
        posting_date: carDate,
      }),
    }).then((res) => {
      if (parseInt(res.status) === 200) {
        fetchData();
      }
    });
    clearInputs();
  };

  return (
    <div className="px-3">
      <Button
        variant="contained"
        startIcon={<AddCircleIcon />}
        sx={{
          background: "#145DA0",
        }}
        onClick={handleClickOpen}
      >
        Add Entry
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle sx={{ fontWeight: 500, color: "gray" }}>
          Enter car details below
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            id="brand"
            label="Brand"
            type="Brand"
            variant="outlined"
            fullWidth
            value={carBrand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: 1,
                borderRadius: "24px",
              },
            }}
            inputProps={{
              ":hover": {
                border: "2px solid white",
              },
            }}
          />
          <TextField
            required
            margin="dense"
            id="model"
            label="Model"
            type="Model"
            variant="outlined"
            fullWidth
            value={carModel}
            onChange={(event) => {
              setModel(event.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: 1,
                borderRadius: "24px",
              },
            }}
          />
          <TextField
            required
            margin="dense"
            id="year"
            label="Year"
            type="Year"
            variant="outlined"
            value={carYear}
            onChange={(event) => {
              setYear(event.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: 1,
                borderRadius: "24px",
              },
              width: "29%",
              marginRight: 2,
            }}
          />

          <TextField
            required
            margin="dense"
            id="price"
            label="Price"
            type="Number"
            variant="outlined"
            value={carPrice}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: 1,
                borderRadius: "24px",
              },
              width: "32%",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}

          />
          <TextField
            required
            margin="dense"
            id="odometer"
            label="Odometer"
            type="Number"
            variant="outlined"
            value={carOdometer}
            onChange={(event) => {
              console.log(event.target.value);
              setOdometer(event.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: 1,
                borderRadius: "24px",
              },
              width: "33%",
              marginLeft: 2,
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">mil</InputAdornment>,
            }}
          />
          <TextField
            required
            margin="dense"
            id="status"
            label="Status"
            type="Status"
            variant="outlined"
            value={carStatus}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: 1,
                borderRadius: "24px",
              },
              width: "48.5%",
              marginRight: 1,
            }}
          />
          <TextField
            required
            margin="dense"
            id="color"
            label="Color"
            variant="outlined"
            value={carColor}
            onChange={(event) => {
              setColor(event.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: 1,
                borderRadius: "24px",
              },
              width: "48.5%",
              marginLeft: 1,
            }}
          />
          <TextField
            required
            margin="dense"
            id="region"
            label="Region"
            type="Region"
            variant="outlined"
            fullWidth
            value={carRegion}
            onChange={(event) => {
              setRegion(event.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: 1,
                borderRadius: "24px",
              },
            }}
          />
          <TextField
            required
            select
            margin="dense"
            id="state"
            label="State"
            type="State"
            variant="outlined"
            value={carState}
            onChange={(event) => {
              setState(event.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: 1,
                borderRadius: "24px",
              },
              width: "48.5%",
              marginRight: 1,
              textAlign: "left",
            }}
          >
            {states.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            margin="dense"
            id="date"
            type="Date"
            variant="outlined"
            value={carDate}
            onChange={(event) => {
              setDate(event.target.value);
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                boxShadow: 1,
                borderRadius: "24px",
                color: "red",
              },
              width: "48.5%",
              marginLeft: 1,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              background: "#ff5552",
              ":hover": {
                background: "#ff3733",
              },
            }}
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            startIcon={<AddCircleIcon />}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddButton;
