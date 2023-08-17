const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 80;
const routes = require("./routes");

app.use(routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log("Listening on port " + port);
});