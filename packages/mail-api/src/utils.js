const { readFile } = require("fs").promises;
const { createReadStream } = require("fs");
const FormData = require("form-data");

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

module.exports = {
  validateEmailAttachment,
  fetch,
  generateVirusEmail,
  scanFileForMaliciousContent,
};
