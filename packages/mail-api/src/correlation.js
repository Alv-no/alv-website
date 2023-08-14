const winston = require("winston");
const uuid = require("uuid");
const correlator = require("correlation-id");

const LEVELS = {
  fatal: 0,
  error: 1,
  info: 2,
  warn: 3,
  debug: 4,
};

/**
 * Logger
 */
class Logger {
  /**
   * @param {String} instanceId - the instance id of the logger. If not passed in, env.HOSTNAME or a random id
   * @param {String} module - the name of the main module the loggers is being called from
   */
  constructor(instanceId, module = "Error.") {
    this._instanceId = instanceId
      ? instanceId
      : process.env.HOSTNAME
      ? process.env.HOSTNAME
      : uuid.v1();
    this._module = module;
    this._winston = new winston.Logger({
      levels: LEVELS,
    });
    this._winston.add(winston.transports.Console, {
      level: "debug",
      colorize: false,
      json: true,
      stringify: true,
      handleExceptions: true,
      humanReadableUnhandledException: true,
    });
  }

  /**
   * @param {Object} options
   * @param {String} options.module
   * @return {Logger} Logger instance
   */
  createModuleLogger(options) {
    const instanceId = this._instanceId;
    const module = `${this._module}.${options.module}`;

    return new Logger(instanceId, module);
  }

  /**
   * @param {Object} args
   */
  log(...args) {
    // level, message, metadata
    if (
      args.length > 1 &&
      args[args.length - 1] !== null &&
      typeof args[args.length - 1] === "object"
    ) {
      let metadata = args[args.length - 1];
      metadata.uuid = metadata.uuid ? metadata.uuid : this._instanceId;
      metadata.module = metadata.module ? metadata.module : this._module;
      metadata.cid = correlator.getId();
      args[args.length - 1] = metadata;
    } else {
      args.push({
        cid: correlator.getId(),
        uuid: this._instanceId,
        module: this._module,
      });
    }
    this._winston.log.apply(this._winston, args);
  }

  /**
   * @param {Object} args
   */
  fatal(...args) {
    args.unshift("fatal");
    return this.log.apply(this, args);
  }

  /**
   * @param {Object} args
   */
  error(...args) {
    args.unshift("error");
    return this.log.apply(this, args);
  }

  /**
   * @param {Object} args
   */
  info(...args) {
    args.unshift("info");
    return this.log.apply(this, args);
  }

  /**
   * @param {Object} args
   */
  warn(...args) {
    args.unshift("warn");
    return this.log.apply(this, args);
  }

  /**
   * @param {Object} args
   */
  debug(...args) {
    args.unshift("debug");
    return this.log.apply(this, args);
  }
}

module.exports = Logger;
