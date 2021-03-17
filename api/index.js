require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const { getDbResponse } = require("./controllers/controllers");

const port = 3000;
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(202).json("This is the server responding to a get call");
});

app.get("/test_route", (req, res) => {
  getDbResponse()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
});

app.listen(port, () => {
  console.log(`Express app is listening at http://localhost:${port}`);
});
