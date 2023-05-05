const { readFile } = require("fs").promises;
const { createReadStream } = require("fs");
const FormData = require("form-data");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config({
  path: `.env`,
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

const validateEmailAttachment = async (file) => {
  const { mimetype, filepath, size } = file;

  let errors;

  // Validate file type by extension
  if (!allowedDocTypes.some((el) => el.mimetype === mimetype)) {
    errors += "Invalid file type. Must be PDF or DOCX.";
    return;
  }

  // Validate file type by file signatures
  const bytes = await readFile(filepath, { encoding: "hex" });
  const signature = bytes.toString().slice(0, 8);

  if (!allowedDocTypes.some((type) => type.signature === signature)) {
    errors += "Invalid file type. Must be PDF or DOCX.";
    return;
  }

  // Validate file size
  if (size > 10000000) {
    errors += "File size exceeds maximum size of 10MB";
    return;
  }

  return errors;
};

const fetch = (url, options) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url, options));

const generateVirusEmail = (threat, sender) => ({
  to: "itadmin@alv.no",
  from: "itadmin@alv.no",
  subject: "Virus scan failed",
  text: `\n CalmAV detected: ${threat} \n Sender: ${sender} \n Timestamp: ${new Date()} \n\n Original form data was not forwarded.`,
});

const scanFileForMaliciousContent = async (filepath) => {
  let isMalicious;
  let threat = "";
  const formData = new FormData();
  formData.append("testfile", createReadStream(filepath));

  const virusScanResponse = await fetch(
    "http://clamav-api-service.clamav.svc.cluster.local/upload_file",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((err) => console.error(err));

  // If virus is detected, send email with details to itadmin
  if (virusScanResponse[0] === "FOUND") {
    isMalicious = true;
    threat = virusScanResponse[1];
  }

  return { isMalicious, threat };
};

const generateMailbody = (fields) => {
  let mailbody = "";

  for (const key in fields) {
    if (key !== "subject") {
      mailbody += "\n" + key + ": " + fields[key];
    }
  }

  return mailbody;
};

const generateAttachmentFromFiles = async (files) => {
  const attachments = [];

  for (const file in files) {
    const currentFile = files[file];
    const { filepath, newFilename, mimetype } = currentFile;

    // Upon successful validation and scan - convert file to base64 and add to attachments array
    const base64content = await readFile(filepath, "base64");

    // Add attachments to mail object
    attachments.push({
      content: base64content,
      filename: newFilename,
      type: mimetype,
      disposition: "attachment",
    });
  }
  return attachments;
};

const validateSingleFile = async (file) => {
  const formatErrors = await validateEmailAttachment(file);

  if (formatErrors) {
    return { threat: null, formatErrors };
  }

  const fileScanResults = await scanFileForMaliciousContent(file.filepath);

  if (fileScanResults.isMalicious) {
    return { threat: fileScanResults.threat, formatErrors: null };
  }

  return { threat: null, formatErrors: null };
};

const validateFiles = async (files) => {
  for (const file in files) {
    const currentFile = files[file];
    const validationResult = await validateSingleFile(currentFile);

    const { threat, formatErrors } = validationResult;

    if (threat || formatErrors) {
      return validationResult;
    }
  }

  return { threat: null, formatErrors: null };
};

const sendSgMail = async (mail) => {
  sgMail
    .send(mail)
    .then(() => {
      console.log("Virus email sent to " + process.env.MAILTO);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  fetch,
  validateEmailAttachment,
  generateVirusEmail,
  generateAttachmentFromFiles,
  scanFileForMaliciousContent,
  generateMailbody,
  validateFiles,
  sendSgMail,
};
