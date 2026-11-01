export const EXPERIENCE_START = {
  year: 2018,
  monthIndex: 2, // March
};

export const getExperienceDuration = (from = EXPERIENCE_START, now = new Date()) => {
  const totalMonths =
    (now.getFullYear() - from.year) * 12 + (now.getMonth() - from.monthIndex);

  const safeMonths = Math.max(0, totalMonths);
  const years = Math.floor(safeMonths / 12);
  const months = safeMonths % 12;

  return { years, months };
};

// Whole years only, e.g. "8+ years". Moves to "9+ years" on the anniversary.
export const getExperienceText = (from = EXPERIENCE_START, now = new Date()) => {
  const { years } = getExperienceDuration(from, now);
  return `${years}+ years`;
};
