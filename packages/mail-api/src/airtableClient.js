import request from "axios";
import { join } from "path";
import { readFileSync, writeFileSync } from "fs";
import { validateAttachment } from "./utils.js";

export class AirtableClient {
  /**
   * @param {string} appId
   * @param {string} tableId
   * @param {string} apiKey
   * */
  appId = "";
  tableId = "";
  apiKey = "";

  /**
   * @param {string} appId
   * @param {string} tableId
   * @param {string} apiKey
   * */
  constructor(appId, tableId, apiKey) {
    this.appId = appId;
    this.tableId = tableId;
    this.apiKey = apiKey;

    if (!appId || !tableId || !apiKey) {
      console.log(
        "Missing configuration. Need at least appId, tableId, apiKey to send data to airtable"
      );
      return;
    }
  }

  /**
   * @param {string} name
   * @param {string} email
   * @param {import("formidable").File} cv
   * @param {string} subject
   * @param {string} dirName
   * @param {import("./logger").Logger} logger
   * */
  async sendEmployeeInformationToAirtable(
    name,
    email,
    cv,
    subject,
    dirName,
    logger
  ) {
    let data = {
      fields: {
        Navn: name,
        Epost: email,
        Emne: subject,
      },
    };

    let cvurl = await this._createCvUrl(cv, dirName, logger);
    if (cvurl) {
      data.fields.CV = [
        {
          url: cvurl,
        },
      ];
    }

    try {
      await request({
        url: `https://api.airtable.com/v0/${this.appId}/${this.tableId}`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        data: JSON.stringify(data),
      });
      logger.info("Updated airtable");
    } catch (e) {
      logger.error("Unable to update airtable: " + e.message);
    }
  }

  /**
   *
   * @param {import("formidable").File} cv
   * @param {string} dirName
   * @param {import("./logger").Logger} logger
   * */
  async _createCvUrl(cv, dirName, logger) {
    if (cv && (await validateAttachment(cv, logger))) {
      const fileName = `${logger.correlationId}-${cv.originalFilename}`;
      const filePath = join(dirName, fileName);
      const fileStream = readFileSync(cv.filepath);
      writeFileSync(filePath, fileStream);
      return `https://mail-api.alv.no/file/${fileName}?dl=${cv.originalFilename}`;
    }
    return null;
  }
}
