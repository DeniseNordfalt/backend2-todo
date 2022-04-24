import { DateTime } from "luxon";

export const convertToReadableDateTime = (dateTime) => {
  const date = DateTime.fromISO(dateTime);
  const readableDateTime = date.toFormat("y'-'LL'-'dd' 'HH':'mm");
  return readableDateTime;
};
