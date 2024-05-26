export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT;
export const MONGO_DB_URI = process.env.MONGO_DB_URI;

export const isProduction = NODE_ENV === "production";
export const isDevelopment = NODE_ENV === "development";

export const CLIENT_URL = isProduction
  ? process.env.CLIENT_URL_PROD
  : process.env.CLIENT_URL_DEV;

export const ADMIN_URL = isProduction
  ? process.env.ADMIN_URL_PROD
  : process.env.ADMIN_URL_DEV;

export const API_URL = isProduction
  ? process.env.API_URL_PROD
  : process.env.API_URL_DEV;

// mail service credentials
export const MAIL_SERVICE_USER = process.env.MAIL_SERVICE_USER;
export const MAIL_SERVICE_PASS = process.env.MAIL_SERVICE_PASS;

// JWT secrets
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const GOOGLE_TOKEN_SECRET = process.env.GOOGLE_TOKEN_SECRET;
export const FACEBOOK_TOKEN_SECRET = process.env.FACEBOOK_TOKEN_SECRET;
export const FORGOT_PASSWORD_TOKEN_SECRET =
  process.env.FORGOT_PASSWORD_TOKEN_SECRET;

// GOOGLE auth
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;

// FACEBOOK auth
export const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
export const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;
export const FACEBOOK_CALLBACK_URL = process.env.FACEBOOK_CALLBACK_URL;
