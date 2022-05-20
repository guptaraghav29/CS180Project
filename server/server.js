const express = require("express");
const app = express();
const csv = require("csvtojson");
const fs = require("fs");
let carData = [];

csv()
  .fromFile("data/sample.csv")
  .then((jsonObj) => {
    carData = jsonObj;
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.delete("/cars/:id", (req, res) => {
  const { id } = req.params;
  const deleted = carData.find((car) => car.id === id);
  if (deleted) {
    carData = carData.filter((car) => car.id !== id);
    res.status(200).json(deleted);
  } else {
    res.status(404).json({ message: `Car with ${id} not found.` });
  }
});

app.post("/cars/:id", (req, res) => {
  carData.push(req.body);
  res.status(200).json(req.body);
});

app.get("/cars", (req, res) => {
  res.json(carData);
});

app.get("/cars/:id", (req, res) => {
  res.send(carData.find((car) => car.id === req.params.id));
});

app.post("/cars/:id/update", (req, res) => {
  let { id, field, value } = req.body;
  let update = carData.find((car) => car.id === id);
  if (!update) {
    res.status(404).json({ message: `Car with ${id} not found.` });
  }
  carData.forEach((car) => {
    if (car.id === id) {
      field = field === "brand" ? "manufacturer" : field;
      car[field] = value;
      res.status(200).json(car);
    }
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
