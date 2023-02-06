const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const formidable = require('formidable');
const FormData = require('form-data');
const { readFile, createReadStream } = require('fs');

const app = express();
const {
  validateEmailAttachment,
  generateVirusEmail,
  fetch,
} = require('./utils');

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
      let virusDetected = false;

      const attachments = [];

      // Convert files to array if only one file is uploaded
      [files].length === 1 && (files = [files]);

      for (const file in files) {
        // If virus is detected, stop processing
        if (virusDetected) {
          return;
        }

        // Validate file
        const attachmentErrors = await validateEmailAttachment(files[file]);

        if (attachmentErrors) {
          errorMsg += attachmentErrors;
          return;
        }

        // scan file with clamav
        const formData = new FormData();
        formData.append('testfile', createReadStream(files[file].filepath));

        const virusScanResponse = await fetch(
          'http://clamav-api-service.clamav.svc.cluster.local/upload_file',
          {
            method: 'POST',
            body: formData,
          }
        )
          .then((res) => res.json())
          .then((data) => data.message)
          .catch((err) => console.error(err));

        // If virus is detected, send email with details to itadmin
        if (virusScanResponse[0] === 'FOUND') {
          msg = generateVirusEmail(virusScanResponse[1], email);
          virusDetected = true;

          return;
        }

        // log to server console
        console.log('No virus detected.');

        // Upon successful validation and scan - convert file to base64 and add to attachments array
        const base64content = await readFile(files[file].filepath, {
          encoding: 'base64',
        });

        attachments.push({
          content: base64content,
          filename: files[file].newFilename,
          type: files[file].mimetype,
          disposition: "attachment",
        });

        // Add attachments to mail object
        msg.attachments = attachments;
      }
    }

    if (errorMsg) {
      console.error(errorMsg);
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
