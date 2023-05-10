const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const sendRoute = require("./routes/send");

dotenv.config({
  path: `.env`,
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const port = 80;

app.post("/send", sendRoute);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
