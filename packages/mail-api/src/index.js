const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
const app = express();
const port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config({
  path: `.env`,
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/', (req, res) => {
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
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
