export const isSunday = (dateString: string) => {
  // Split the date string into day, month, and year
  var parts = dateString.split("-");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1; // Months are zero-indexed
  var year = parseInt(parts[2], 10);

  // Create a Date object
  var date = new Date(year, month, day);

  // Check if the day of the week is Sunday (0)
  return date.getDay() === 0;
};
