export const getTime = (time: string): string => {
  if (!time) return "00:00";
  const date = new Date(time);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padEnd(2, "0");
  return `${hours}:${minutes}`;
};

