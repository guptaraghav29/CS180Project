const express = require("express");
const app = express();
const csv = require("csvtojson");

app.delete("/cars/:id", (req, res) => {
  csv()
    .fromFile("data/vehicles.csv")
    .then((jsonObj) => {
      res.json(jsonObj.filter((car) => car.id != req.params.id));
    });
});

app.get("/cars", (req, res) => {
  csv()
    .fromFile("data/vehicles.csv")
    .then((jsonObj) => {
      res.json(jsonObj);
    });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
