import express from "express";
import { send, sendJobApplication, getFile } from "./controllers.js";

const router = express.Router();

router.post("/send", send);
router.post("/jobApplication/send", sendJobApplication);
router.get("/file/:filename", getFile);

export default router;
