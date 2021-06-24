const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const app = express();
const port = 80;

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/send', cors(corsOptions), (req, res) => {
  const email = req.body.email;
  const subject = req.body.subject;
  const body = req.body.text;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;

  let mailbody = '';
  if (firstname || lastname)
    mailbody += '\nNavn: ' + firstname + ' ' + lastname;

  if (phone) mailbody += '\nTelefon: ' + phone;

  if (email) mailbody += '\nEpost: ' + email;

  if (body) mailbody += '\n\n' + body;

  const msg = {
    to: 'tommy@alv.no',
    from: 'itadmin@alv.no',
    subject: subject,
    text: mailbody,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
