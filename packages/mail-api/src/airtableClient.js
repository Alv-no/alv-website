const axios = require("axios");
const path = require("path");
const fs = require("fs");
const validate = require("./utils");

class AirtableClient {
  /**
   * @param {string} appId
   * @param {string} tableId
   * @param {string} apiKey
   * */
  appId = "";
  tableId = "";
  apiKey = "";

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

  async sendEmployeeInformationToAirtable(name, email, cv, subject, dirName, logger) {
    let data = JSON.stringify({
      fields: {
        Navn: name,
        Epost: email,
        Emne: subject,
        CV: [
          {
            url: this._createCvUrl(cv, dirName, logger),
          },
        ],
      },
    })

    let config = {
      url: `https://api.airtable.com/v0/${this.appId}/${this.tableId}`,
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`
      },
      data: data
    }

    await axios.request(config)
      .then(() => {
        logger.info("Updated airtable");
      })
      .catch((error) => {
        logger.error("Unable to update airtable: " + error.message);
      })
  }

  async _createCvUrl(cv, dirName, logger) {
    if (cv && await validate.validateEmailAttachment(cv, logger)) {
      const fileName = `${logger.correlationId}-${cv.originalFilename}`;
      const filePath = path.join(dirName, fileName);
      const fileStream = fs.readFileSync(cv.filepath);
      fs.writeFileSync(filePath, fileStream);
      return `https://mail-api.alv.no/file/${fileName}?dl=${cv.originalFilename}`;
    }
    return "";
  }
}

module.exports = { AirtableClient };