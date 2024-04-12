export const isProduction = import.meta.env.PROD;
export const isDevelopment = import.meta.env.DEV;

export const API_URL = isProduction
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL_DEV;

export const CLIENT_URL = isProduction
  ? import.meta.env.VITE_CLIENT_URL_PROD
  : import.meta.env.VITE_CLIENT_URL_DEV;
