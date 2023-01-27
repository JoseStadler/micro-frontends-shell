export function getTimeZone() {
  return Math.round((new Date().getTimezoneOffset() / 60) * -1);
}
