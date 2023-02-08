const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const formidable = require('formidable');
const dotenv = require('dotenv');
const app = express();
const port = 80;
const { readFile } = require('fs').promises;
const { validateEmailAttachment } = require('./utils');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config({
  path: `.env`,
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/', (_, res) => {
  res.send('Hello');
});

app.post('/send', (req, res) => {
  const { subject } = req.body;

  // Create mail body
  let mailbody = '';
  for (const key in req.body) {
    if (key !== 'subject') {
      mailbody += '\n' + key + ': ' + req.body[key];
    }
  }

  // Create mail object
  const msg = {
    to: process.env.MAILTO,
    from: 'itadmin@alv.no',
    subject: subject,
    text: mailbody,
  };

  // Send mail with sendgrid
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent to ' + process.env.MAILTO);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });

  res.sendStatus(200);
});

// job application forms
app.post('/jobApplication/send', (req, res) => {
  let errorMsg = '';

  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, { files }) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }

    const { email, subject, name } = fields;

    // Create mail body from form fields
    let mailbody = '';
    if (name) mailbody += '\nNavn: ' + name;
    if (email) mailbody += '\nEpost: ' + email;

    // Create mail object
    const msg = {
      to: process.env.MAILTO,
      from: 'itadmin@alv.no',
      subject: subject,
      text: mailbody,
    };

    // Validate request content type
    if (!req.headers['content-type'].includes('multipart/form-data')) {
      errorMsg += 'Content type must be of multipart/form-data.';
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
        const base64content = await readFile(filepath, { encoding: 'base64' });

        attachments.push({
          content: base64content,
          filename: files[file].newFilename,
          type: files[file].mimetype,
          disposition: 'attachment',
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
  console.log('Listening on port ' + port);
});
