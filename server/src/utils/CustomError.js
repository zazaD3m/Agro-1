class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
  static BadRequest(message = "Bad Request") {
    return new CustomError(message, 400);
  }
  static Unauthorized(message = "Unauthorized") {
    return new CustomError(message, 401);
  }
  static NotFound(message = "Not Found") {
    return new CustomError(message, 404);
  }
  static Custom(message, statusCode) {
    return new CustomError(message, statusCode);
  }
  static Conflict(message = "Conflict") {
    return new CustomError(message, 409);
  }
  static Duplicate(message = "Duplicate input") {
    return new CustomError(message, 409);
  }
  static ServerError(message = "Internal Server Error") {
    return new CustomError(message, 500);
  }
}

class ThrowErr {
  static Custom(message, statusCode) {
    throw new CustomError(message, statusCode);
  }
  static BadRequest(message = "Bad Request") {
    throw new CustomError(message, 400);
  }
  static Unauthorized(message = "Unauthorized") {
    throw new CustomError(message, 401);
  }
  static Forbidden(message = "Forbidden") {
    throw new CustomError(message, 403);
  }
  static NotFound(message = "Not Found") {
    throw new CustomError(message, 404);
  }
  static Conflict(message = "Conflict") {
    throw new CustomError(message, 409);
  }
  static Duplicate(message = "Duplicate input") {
    throw new CustomError(message, 409);
  }
  static ServerError(message = "Internal Server Error") {
    throw new CustomError(message, 500);
  }
}

export { CustomError, ThrowErr };
