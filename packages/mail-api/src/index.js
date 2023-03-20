const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");
const formidable = require("formidable");
const { readFile } = require("fs");

const app = express();
const {
  validateEmailAttachment,
  generateVirusEmail,
  scanFileForMaliciousContent,
} = require("./utils");

const port = 80;

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

app.post("/send", (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields) => {
    let mailbody = "";
    const { subject } = fields;

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
    let msg = {
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

    // Validate, scan and append attachments to mail object
    if (files) {
      const attachments = [];

      // Convert files to array if only one file is uploaded
      [files].length === 1 && (files = [files]);

      let virusDetected = false;

      for (const file in files) {
        // If virus is detected in a previous iteration => stop processing remaining iterations
        if (virusDetected) {
          return;
        }

        const currentFile = files[file];
        const { filepath, newFilename, mimetype } = currentFile;

        // Validate file size, mimetype and signature
        const attachmentErrors = await validateEmailAttachment(currentFile);

        if (attachmentErrors) {
          errorMsg += attachmentErrors;
          return;
        }

        // scan file with clamav
        const fileScanResults = await scanFileForMaliciousContent(filepath);

        if (fileScanResults.isMalicious) {
          msg = generateVirusEmail(fileScanResults.threat, email);

          // stop processing attachments
          virusDetected = true;

          return;
        }

        // Upon successful validation and scan - convert file to base64 and add to attachments array
        const base64content = await readFile(filepath, {
          encoding: "base64",
        });

        attachments.push({
          content: base64content,
          filename: newFilename,
          type: mimetype,
          disposition: "attachment",
        });

        // Add attachments to mail object
        msg.attachments = attachments;
      }
    }

    if (errorMsg) {
      console.error(
        `One or more errors occured: ${errorMsg} \n \n

        Form data: \n
        Sender name: ${name} \n
        Sender email: ${email} \n
        Subject: ${subject} \n
        No. of attachemnts: ${files?.length || 0}
        `
      );
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
