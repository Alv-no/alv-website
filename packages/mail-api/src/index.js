import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes.js";
import { loggerMiddleware } from "./logger.js";

const app = express();
const port = 8083;

app.use(cors());
app.use(loggerMiddleware);
app.use(routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Listening on port " + port);
});
