const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const formidable = require("formidable");
const dotenv = require("dotenv");
const app = express();
const port = 80;
const { readFile } = require("fs").promises;
const { validateEmailAttachment } = require("./utils");
//const correlator = require("./corrId");
//const logger = require("./logger");
const fs = require("fs");
const path = require("path");

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config({
  path: `.env`,
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get("/", (_, res) => {
  res.send("Hello");
});

app.get("/file/:filename", (req, res) => {
  const fileName = req.params["filename"];
  const filePath = path.join(FILE_DIRNAME, fileName);
  console.log(filePath);

  if (!fs.existsSync(filePath)) {
    res.sendStatus(404);
  }
  res.sendFile(filePath, () => {
    fs.rmSync(filePath);
  });
});

app.post("/send", (req, res) => {
  const form = formidable({ multiples: true });

  //const c = correlator.getId();
  //console.log(c);
  form.parse(req, async (err, fields, files) => {
    let mailbody = "";
    const { subject, firstname, lastname, email } = fields;
    const { cv } = files;

    let cvUrl;
    if (cv) {
      const correlationId = `${Math.random() * 10000000000000000}`;
      const fileName = `${correlationId}-${cv.originalFilename}`;
      const filePath = path.join(FILE_DIRNAME, fileName);
      cvUrl = `https://mail-api.alv.no/file/${fileName}?dl=${cv.originalFilename}`;

      const fileStream = fs.readFileSync(cv.filepath);
      fs.writeFileSync(filePath, fileStream);
    }

    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }

    // Create mail body
    for (const key in fields) {
      if (key !== "subject") {
        mailbody += "\n" + key + ": " + fields[key];
      }
    }

    // Create mail object
    const msg = {
      to: process.env.MAILTO,
      from: "itadmin@alv.no",
      subject: subject,
      text: mailbody,
    };

    var request = require("request");
    var options = {
      method: "POST",
      url: "https://api.airtable.com/v0/app0ueoXOVtAePCHV/tblH9nzYUobkmFCKc",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer patkn9O2mPUFINNqr.878a69df98d728d24debb2e64f1d32e1d09005380a7f57c5bf7777e3ecdf7e76",
      },
      body: JSON.stringify({
        fields: {
          Navn: `${firstname} ${lastname}`,
          Epost: email,
          Status: "Til evaluering",
          CV: [
            {
              url: cvUrl,
            },
          ],
        },
      }),
    };

    try {
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
    } catch (e) {
      console.error("Unable to post to airtable :(", e);
    }
    // Send mail with sendgrid
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent to " + process.env.MAILTO);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
  });
});

// job application forms
app.post("/jobApplication/send", (req, res) => {
  let errorMsg = "";

  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, { files }) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }

    const { email, subject, name } = fields;

    // Create mail body from form fields
    let mailbody = "";
    if (name) mailbody += "\nNavn: " + name;
    if (email) mailbody += "\nEpost: " + email;

    // Create mail object
    const msg = {
      to: process.env.MAILTO,
      from: "itadmin@alv.no",
      subject: subject,
      text: mailbody,
    };

    // Validate request content type
    if (!req.headers["content-type"].includes("multipart/form-data")) {
      errorMsg += "Content type must be of multipart/form-data.";
      return;
    }

    if (files) {
      const attachments = [];

      // Convert files to array if only one file is uploaded
      [files].length === 1 && (files = [files]);

      for (const file in files) {
        const { filepath } = files[file];
        const attachmentErrors = validateEmailAttachment(files[file]);

        if (attachmentErrors) {
          errorMsg += attachmentErrors;
          return;
        }

        // Upon successful validation - convert file to base64 and add to attachments array
        const base64content = await readFile(filepath, { encoding: "base64" });

        attachments.push({
          content: base64content,
          filename: files[file].newFilename,
          type: files[file].mimetype,
          disposition: "attachment",
        });
      }
    }

    if (errorMsg) {
      res.status(400).send(errorMsg);
      return;
    }

    // Send mail
    sgMail
      .send(msg)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
  });
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});