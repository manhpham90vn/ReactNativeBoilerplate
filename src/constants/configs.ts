export const Constants = Object.freeze({
  BASE_URL: process.env.BASE_URL || 'http://192.168.100.46:3000/',
  TIME_OUT: 30_000,
  DEBUG: Boolean(process.env.DEBUG) || true,
  LOG_STATE: false,
});
