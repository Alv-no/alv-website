const { readFile } = require("fs").promises;
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const dotenv = require("dotenv");

dotenv.config({
  path: `.env`,
});

const allowedDocTypes = [
  {
    mimetype: "application/pdf",
    signature: "25504446",
  },
  {
    mimetype:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

    signature: "504b0304",
  },
];

const checkFileForVirus = async (filepath) => {
  let data = new FormData();
  data.append("testfile", fs.createReadStream(filepath));

  let config = {
    method: "post",
    url: `${process.env.VIRUSCHECK_URL}/upload_file`,
    headers: { ...data.getHeaders() },
    data: data,
  };
  try {
    let response = await axios.request(config);
    return { completed: true, message: response.data.message };
  } catch (e) {
    return { completed: false, message: e.message };
  }
};

const validateAttachment = async (file, logger) => {
  const { mimetype, filepath, size } = file;

  //checks file for virus
  const virusCheck = await checkFileForVirus(filepath);

  if (virusCheck.completed && !virusCheck.message.includes("OK")) {
    logger.info("Virus detected in file. File will not be uploaded");
    return false;
  }

  if (!virusCheck.completed) {
    logger.info("Unable to check file for virus: " + virusCheck.message);
    return false;
  }

  // Validate file type by extension
  if (!allowedDocTypes.some((el) => el.mimetype === mimetype)) {
    logger.info("Invalid file type. Must be PDF or DOCX.");
    return false;
  }

  // Validate file type by file signatures
  const bytes = await readFile(filepath, { encoding: "hex" });
  const signature = bytes.toString().slice(0, 8);

  if (!allowedDocTypes.some((type) => type.signature === signature)) {
    logger.info("Invalid file type. Must be PDF or DOCX.");
    return false;
  }

  // Validate file size
  if (size > 10000000) {
    logger.info("File size exceeds maximum size of 10MB");
    return false;
  }

  return true;
};

module.exports = { validateAttachment };
