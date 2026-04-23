

export const getDate = (date: string): string => {
  if (!date) return "";
  const strDate = new Date(date);
  const month = strDate.toLocaleString("en-Us", { month: "long" });
  const year = strDate.getFullYear();
  const day = String(strDate.getDay()).padStart(2, "0");

  return `${day} ${month}, ${year} `;
};
