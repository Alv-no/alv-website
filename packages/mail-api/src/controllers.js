import formidable from "formidable";
import { EmailClient } from "./emailClient.js";
import { AirtableClient } from "./airtableClient.js";
import { existsSync, mkdirSync, rmSync } from "fs";
import path from "path";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";

/**
 * @typedef {import("./types/extended_request.js").MailRequest} MailRequest
 * @typedef {import("express").Response} Response
 **/

const __dirname = fileURLToPath(new URL(".", import.meta.url));
dotenv.config({
  path: `.env`,
});

/**
 * @param {string} dirpath
 */
const ensureDirectoryExists = (dirpath) => {
  if (!existsSync(dirpath)) {
    mkdirSync(dirpath, { recursive: true });
  }
};

const FILE_DIRNAME = path.join(__dirname, "..", "files");
ensureDirectoryExists(FILE_DIRNAME);
const airtable = new AirtableClient(
  process.env.AIRTABLE_APP_ID,
  process.env.AIRTABLE_TABLE_ID,
  process.env.AIRTABLE_API_KEY
);

const sendGrid = new EmailClient(process.env.SENDGRID_API_KEY);

/**
 * @param {MailRequest} req
 * @param {import("express").Response} res
 * */
export async function send(req, res) {
  try {
    const [fields] = await parseFormAsync(req);
    const { subject, firstname, lastname, email } = fields;

    if (!subject || !firstname || !lastname || !email) {
      req.logger.error(
        "Missing data: Requires subject, firstname, lastname and email"
      );
      res.sendStatus(500);
      return;
    }

    await sendGrid.sendEmail(fields, subject[0], req.logger);

    res.sendStatus(200);
  } catch (err) {
    if (err) {
      req.logger.error(err);
      res.sendStatus(500);
      return;
    }
  }
}

/**
 * @param {MailRequest} req
 * @param {Response} res
 * */
export async function sendJobApplication(req, res) {
  try {
    const [fields] = await parseFormAsync(req);

    if (!fields.subject || !fields.name || !fields.email) {
      req.logger.error("Missing data: Requires subject, name and email");
      res.sendStatus(400);
      res.end();
      return;
    }

    //send to email
    await sendGrid.sendEmail(fields, fields.subject[0], req.logger);

    //send to airtable
    await airtable.sendEmployeeInformationToAirtable(
      fields.name[0],
      fields.email[0],
      fields.subject[0],
      req.logger
    );

    res.sendStatus(200);
    res.end();
  } catch (e) {
    req.logger.error(`Unable to process request ${e}`);
    res.sendStatus(500);
    res.end();
    return;
  }
}

/**
 * @param {MailRequest} req
 * @returns {Promise<[formidable.Fields<string>, formidable.Files<string>]>}
 * */
const parseFormAsync = (req) => {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }

      resolve([fields, files]);
    });
  });
};

/**
 * @param {MailRequest} req
 * @param {Response} res
 **/
export function getFile(req, res) {
  const fileName = req.params["filename"];
  const filePath = path.join(FILE_DIRNAME, fileName);

  if (!existsSync(filePath)) {
    res.sendStatus(404);
  }
  res.sendFile(filePath, () => {
    rmSync(filePath);
  });
}
