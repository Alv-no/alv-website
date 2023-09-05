const Logger = require("./logger");
const formidable = require("formidable");
const airtableClient = require("./airtableClient");
const emailClient = require("./emailClient");
const fs = require("fs");
const path = require("path");

const dotenv = require("dotenv");

dotenv.config({
  path: `.env`,
});

const maxFileSize = 10 * 1024 * 1024; // 10 MB

/**
 * @param {string} dirpath
 */
const ensureDirectoryExists = (dirpath) => {
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath, { recursive: true });
  }
};

const FILE_DIRNAME = path.join(__dirname, "..", "files");
ensureDirectoryExists(FILE_DIRNAME);
const airtable = new airtableClient.AirtableClient(
  process.env.AIRTABLE_APP_ID,
  process.env.AIRTABLE_TABLE_ID,
  process.env.AIRTABLE_API_KEY
);

const sendGrid = new emailClient.EmailClient(process.env.SENDGRID_API_KEY);

module.exports = {
  async send(req, res) {
    const logger = new Logger();
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields) => {
      const { subject, firstname, lastname, email } = fields;

      if (err) {
        logger.error(err);
        res.sendStatus(500);
        return;
      }

      if (!subject || !firstname || !lastname || !email) {
        logger.error(
          "Missing data: Requires subject, firstname, lastname and email"
        );
        res.sendStatus(500);
        return;
      }

      //send to email
      await sendGrid.sendEmail(fields, subject, logger);

      res.sendStatus(200);
    });
  },

  async sendJobApplication(req, res) {
    const logger = new Logger();
    const form = formidable({ multiples: true, maxFileSize });

    form.parse(req, async (err, fields, files) => {
      const { email, subject, name } = fields;
      const { cv } = files;

      if (err) {
        logger.error(err);
        res.sendStatus(500);
        return;
      }

      if (!subject || !name || !email) {
        logger.error("Missing data: Requires subject, name and email");
        res.sendStatus(500);
        return;
      }

      //send to email
      await sendGrid.sendEmail(fields, subject, logger);

      //send to airtable
      await airtable.sendEmployeeInformationToAirtable(
        name,
        email,
        cv,
        subject,
        FILE_DIRNAME,
        logger
      );

      res.sendStatus(200);
    });
  },

  getFile(req, res) {
    const fileName = req.params["filename"];
    const filePath = path.join(FILE_DIRNAME, fileName);
    console.log(filePath);

    if (!fs.existsSync(filePath)) {
      res.sendStatus(404);
    }
    res.sendFile(filePath, () => {
      fs.rmSync(filePath);
    });
  },
};
