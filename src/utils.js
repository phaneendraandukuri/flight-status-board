import { format } from "date-fns";

export const getFormattedTime = (timestamp) => {
  const date = new Date(timestamp);
  const formattedDateTime = format(date, "hh:mm a");
  return formattedDateTime;
};
