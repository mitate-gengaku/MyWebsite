export const convertToJST = (dateTarget: Date | null) => {
  const date = new Date(dateTarget ?? "");
  const year = date.getFullYear();
  const month = ("00" + (date.getMonth() + 1)).slice(-2);
  const day = ("00" + date.getDate()).slice(-2);

  const result = year + "年" + month + "月" + day + "日";

  return result;
};
