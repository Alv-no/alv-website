const sgMail = require("@sendgrid/mail");

class EmailClient {
    /**
     * @param {string} apiKey
     * */
    apiKey = "";

    constructor(apiKey) {
        this.apiKey = apiKey;

        if (!apiKey) {
            console.log("Missing configuration. Need apiKey to send data to email");
            return;
        }
    }

    async sendEmail(fields, subject, logger) {
        sgMail.setApiKey(this.apiKey);
        let mailbody = "";
        for (const key in fields) {
            if (key !== "subject") {
                mailbody += "\n" + key + ": " + fields[key];
            }
        };
        const msg = {
            to: process.env.MAILTO,
            from: "itadmin@alv.no",
            subject: subject,
            text: mailbody,
        };
        try{
            await sgMail.send(msg);
            logger.info("Email sent to " + process.env.MAILTO);
        }
        catch(e){
            logger.error(e);
        }
    }
}

module.exports = { EmailClient };