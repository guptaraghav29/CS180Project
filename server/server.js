const express = require("express");
const app = express();
const csv = require("csvtojson");

app.get("/cars", (req, res) => {
  //   const readStream = fs.createReadStream("large-file.json"); // create read stream
  //   readStream.pipe(res); // pass data to client as a writeable stream
  csv()
    .fromFile("data/sample.csv")
    .then((jsonObj) => {
      res.json(jsonObj);
    });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
