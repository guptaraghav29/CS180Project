const express = require("express");
const app = express();
const csv = require("csvtojson");
const fs = require("fs");

const headers =  [
  { label: 'ID', key: 'id' },
  { label: 'Brand', key: 'manufacturer' },
  { label: 'Model', key: 'model' },
  { label: 'Year', key: 'year' },
  { label: 'Price', key: 'price' },
  { label: 'Odometer', key: 'odometer' },
  { label: 'Status', key: 'title_status' },
  { label: 'Color', key: 'paint_color' },
  { label: 'Region', key: 'region' },
  { label: 'State', key: 'state' },
  { label: 'Date Listed', key: 'posting_date' }
];

let carData = [];

csv()
  .fromFile("data/vehicles.csv")
  .then((jsonObj) => {
    carData = jsonObj;
  });

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

app.get("/cars", (req, res) => {
  res.json(carData);
});



app.get("/savedata", (req, res) => {
  console.log("test");
  res.status(404);
  

  const csvReport = {
    filename: "Result.csv",
    headers: headers,
    data: carData
  };
  //res.send("tests");
  //const jsonData = JSON.stringify(carData);
  fs.writeFileSync("./data/test.json", "");
  
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});


