export const convertToYYYYMMDD = (targetDate: Date | null) => {
  const date = new Date(targetDate || "");

  return date.toLocaleDateString("sv-SV");
};
