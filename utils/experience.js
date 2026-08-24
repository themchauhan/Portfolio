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

export const getExperienceText = (from = EXPERIENCE_START, now = new Date()) => {
  const { years, months } = getExperienceDuration(from, now);
  return `${years} years ${months} months`;
};
