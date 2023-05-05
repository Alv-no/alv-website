/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const formidable = require("formidable");

const {
  generateMailbody,
  generateAttachmentFromFiles,
  validateFiles,
  sendSgMail,
  generateVirusEmail,
} = require("../utils");

const form = formidable({ multiples: true });

module.exports = (req, res) => {
  if (!req.headers["content-type"].includes("multipart/form-data")) {
    res.status(400).send("Content type must be of multipart/form-data.");
    return;
  }

  form.parse(req, async (err, fields, { files }) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }
    // If only one file is uploaded, formidable will not return an array but an object instead
    // This line makes sure that the files variable is always an array
    if ([files].length === 1) files = [files];

    const { threat, formatErrors } = files ? validateFiles(files) : {};

    // If a virus is detected, send virus report email and return 200
    if (threat) {
      const virusReportMail = generateVirusEmail(threat, fields.email);
      console.error(virusReportMail);
      await sendSgMail(virusReportMail);
      res.sendStatus(200);
      return;
    }

    // If the format of the files is not correct, return 400 and log the errors
    if (formatErrors) {
      console.error(formatErrors, `fields: ${fields}`);
      res.status(400).send(formatErrors);
      return;
    }

    const mail = {
      to: process.env.MAILTO,
      from: "itadmin@alv.no",
      subject: fields.subject,
      text: generateMailbody(fields),
      attachments: files ? await generateAttachmentFromFiles(files) : [],
    };

    sendSgMail(mail).then(() => {
      res.sendStatus(200);
    });
  });
};
