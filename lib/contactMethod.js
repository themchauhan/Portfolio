// Contact forms accept an email address or a phone number in one field.
// Returns 'email', 'phone' or null (not valid). Shared by the form and /api/contact.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function contactMethod(value) {
  const v = String(value || "").trim();
  if (EMAIL_RE.test(v)) return "email";
  // Phone: digits with optional +, spaces, dashes, brackets; 10 to 15 digits (Indian 10-digit or international).
  if (/^\+?[\d\s\-()]+$/.test(v)) {
    const digits = v.replace(/\D/g, "");
    if (digits.length >= 10 && digits.length <= 15) return "phone";
  }
  return null;
}
