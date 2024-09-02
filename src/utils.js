import { format } from "date-fns";

export const getFormattedTime = (timestamp) => {
  if (!timestamp || isNaN(Date.parse(timestamp))) {
    return "Invalid Date";
  }

  const date = new Date(timestamp);
  return format(date, "hh:mm a");
};
