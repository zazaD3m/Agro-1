import { format } from "date-fns";
import { ka } from "date-fns/locale";

export const getFullDate = (date) => {
  const formattedDate = format(date, "d MMM yyyy", { locale: ka });

  return formattedDate;
};
