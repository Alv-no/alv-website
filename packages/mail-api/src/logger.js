const correlator = require("./corrId");
const {createLogger, format, transports} = require("winston");

const logg = (correlationId, message, status) => {
    timestamp = new Date().toString();
    console.log(`${timestamp} - ${correlationId} - ${message}`)
}

const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp({
       format: 'MMM-DD-YYYY HH:mm:ss'
   }),
   format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}:`),
),
  transports: [new transports.Console()],
});

module.exports = logger;

//correlator.withId(() => {
//    correlator.getId(); 
//  });