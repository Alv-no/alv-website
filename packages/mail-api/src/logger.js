/**
 * Makes any object into a favourable string
 * @param {any} err
 * @returns {string}
 * */
const anyToString = (err) => {
  if (typeof err === "string") {
    return err;
  }

  if (typeof err.message === "string") {
    return err.message;
  }

  if (typeof err.toString === "function") {
    return err.toString();
  }

  return JSON.stringify(err);
};

const generateRandomString = () => {
  const randomString = Buffer.from(
    `${Math.random() * 1000}`.substring(2)
  ).toString("base64");
  return randomString.substring(0, randomString.length - 2).toLocaleLowerCase();
};

const uuid = () => {
  const randomString = `${generateRandomString()}${generateRandomString()}`;
  return `${randomString.substring(0, 8)}-${randomString.substring(
    9,
    13
  )}-${randomString.substring(14, 19)}-${randomString.substring(19, 27)}`;
};

export class Logger {
  /** @param {string} correlationId */
  constructor(correlationId) {
    this.correlationId = correlationId;
  }

  /**  @param {any} msg */
  info(msg) {
    this._writeLogs(this.correlationId, msg, "INFO", console.log);
  }

  /**  @param {any} msg */
  warning(msg) {
    this._writeLogs(this.correlationId, msg, "WARNING", console.warn);
  }

  /**  @param {any} msg */
  error(msg) {
    this._writeLogs(this.correlationId, msg, "ERROR", console.error);
  }

  /**
   * @param {string} correlationId
   * @param {any} message
   * @param {string} type
   * @param {(message: string) => void} logFunction
   * */
  _writeLogs(correlationId, message, type, logFunction) {
    const logMessage = {
      type,
      correlationId,
      message: anyToString(message),
    };

    logFunction(JSON.stringify(logMessage));
  }
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * */
export const loggerMiddleware = (req, res, next) => {
  const logger = new Logger(uuid());
  req.logger = logger;

  logger.info(`Request start - ${req.method.toUpperCase()} - ${req.path}`);

  res.on("finish", () => {
    logger.info(
      `Request completed - ${req.method.toUpperCase()} - ${
        req.path
      } - With status ${res.statusCode}`
    );
  });

  next();
};
