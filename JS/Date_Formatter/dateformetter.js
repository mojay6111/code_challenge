/**
 * Convert "Month day, year" -> "YYYY-MM-DD"
 * Example: "December 6, 2025" -> "2025-12-06"
 *
 * Throws an Error on invalid input.
 */
function formatDate(input) {
  if (typeof input !== "string") {
    throw new Error('Input must be a string in the format "Month day, year".');
  }

  // 1) Trim and normalize spacing
  const s = input.trim();

  // 2) Regex to extract three parts: monthName, day, year
  // Accepts variable spaces, case-insensitive month names
  const match = s.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{1,})$/);
  if (!match) {
    throw new Error(
      'Invalid date format. Expected "Month day, year" (e.g. "December 6, 2025").'
    );
  }

  let [, monthName, dayStr, yearStr] = match;
  monthName = monthName.toLowerCase();

  // 3) Map month names to numbers (1-12)
  const months = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
  };

  const monthNum = months[monthName];
  if (!monthNum) {
    throw new Error(`Invalid month name: "${monthName}".`);
  }

  // 4) Parse day and year
  const day = parseInt(dayStr, 10);
  const year = parseInt(yearStr, 10);

  if (!Number.isFinite(day) || !Number.isFinite(year) || day < 1) {
    throw new Error("Invalid day or year.");
  }

  // 5) Validate day is within range for the month, considering leap years
  // Use Date to find days in month reliably:
  const daysInMonth = new Date(year, monthNum, 0).getDate(); // monthNum is 1-12, new Date(year, monthNum, 0) -> last day of monthNum
  if (day > daysInMonth) {
    throw new Error(
      `${
        monthName[0].toUpperCase() + monthName.slice(1)
      } ${day}, ${year} is not a valid date.`
    );
  }

  // 6) Zero-pad month and day to two digits
  const mm = String(monthNum).padStart(2, "0");
  const dd = String(day).padStart(2, "0");

  return `${year}-${mm}-${dd}`;
}
