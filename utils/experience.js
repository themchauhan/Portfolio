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

// For sentences: "almost a decade" from 8.5 years (Sept 2026) until 10 years, then "10+ years".
// Reads well after "with ... of experience" and "... building software".
export const getExperienceText = (from = EXPERIENCE_START, now = new Date()) => {
  const { years, months } = getExperienceDuration(from, now);
  if (years >= 10) return `${years}+ years`;
  if (years * 12 + months >= 8 * 12 + 6) return "almost a decade";
  return `${years}+ years`;
};

// For big number tiles: "~9" after half a year has passed, otherwise "8+". Shown with "years".
export const getExperienceYears = (from = EXPERIENCE_START, now = new Date()) => {
  const { years, months } = getExperienceDuration(from, now);
  return months >= 6 ? `~${years + 1}` : `${years}+`;
};
