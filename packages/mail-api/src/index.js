const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const formidable = require('formidable');
const dotenv = require('dotenv');
const app = express();
const port = 80;
const fs = require('fs');

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
  const email = req.body.email;
  const subject = req.body.subject;
  const body = req.body.text;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const productname = req.body.productName;

  let mailbody = '';
  if (firstname || lastname)
    mailbody += '\nNavn: ' + firstname + ' ' + lastname;

  if (phone) mailbody += '\nTelefon: ' + phone;

  if (email) mailbody += '\nEpost: ' + email;

  if (body) mailbody += '\n\n' + body;

  if (productname) mailbody += '\n\n' + productname;

  const msg = {
    to: process.env.MAILTO,
    from: 'itadmin@alv.no',
    subject: subject,
    text: mailbody,
  };

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

    if (files) {
      const attachments = [];

      // Convert files to array if only one file is uploaded
      [files].length === 1 && (files = [files]);

      // Convert files to base64 and add to attachments array
      for (const file in files) {
        const base64content = await fs.promises.readFile(files[file].filepath, {
          encoding: 'base64',
        });

        attachments.push({
          content: base64content,
          filename: files[file].originalFilename,
          type: files[file].mimetype,
          disposition: 'attachment',
        });
      }

      msg.attachments = attachments;
    }

    // Send mail
    sgMail
      .send(msg)
      .then(() => {
        res.json({ fields, files, status: 'email sent successfully' });
      })
      .catch((error) => {
        console.error(error);
        console.error(error.response.body);
        res.json(error);
      });
  });
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
