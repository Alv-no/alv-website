const uuid = require(`uuid`);

class Logger {
  constructor(correlationId) {
    this.correlationId = correlationId || uuid.v4();
    this.timestamp = new Date().toString();
  }
  info(msg) {
    console.log({
      correlationId: this.correlationId,
      msg,
      timestamp: this.timestamp,
    });
  }
  error(msg) {
    console.error({
      correlationId: this.correlationId,
      msg,
      timestamp: this.timestamp,
    });
  }
}
module.exports = Logger;
