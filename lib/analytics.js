// Send a Google Analytics 4 event. Never pass personal data (names, emails, PAN, GSTIN).
export function track(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
