import { monthAbbreviations } from "@/constants/DateFormatterData";

export const DateFormatter = ({ current, date }: DateFormatterProps) => {
  let currentDate = new Date();

  // Extract day, month, and year
  let day: string | number = currentDate.getDate();
  let month: string | number = currentDate.getMonth(); // Note: January is 0!
  let year = currentDate.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  // english

  const monthAbbreviation: string = monthAbbreviations[month];

  const formattedDate = `${day}-${monthAbbreviation}-${year}`;

  // bengali
  // day

  return { formattedDate };
};
