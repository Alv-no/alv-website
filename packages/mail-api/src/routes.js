const express = require("express");
const controller = require("./controllers");
const router = express.Router();

router.post("/send", (req, res) => {
  controller.send(req, res);
});

router.post("/jobApplication/send", (req, res) => {
  controller.sendJobApplication(req, res);
});

router.get("/file/:filename", (req, res) => {
  controller.getFile(req, res);
});

module.exports = router;
