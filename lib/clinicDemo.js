// Data for the clinic AI receptionist demo (/demo/clinic-assistant).
// Sunrise Clinic is fictional. A real clinic's assistant is set up from that clinic's own details.
export const clinic = {
  name: "Sunrise Clinic",
  area: "Sector 14 (demo address)",
  phoneNote: "Reception number is shared on booking (demo)",
  hours: "Monday to Saturday, 9:00 am – 1:30 pm and 5:00 pm – 8:30 pm. Sunday: 10:00 am – 1:00 pm, emergencies only on call.",
  doctors: [
    { name: "Dr. Anjali Rao", role: "General Physician (MBBS, MD Medicine)", days: "Mon–Sat", times: "9:30 am – 1:30 pm", fee: 500 },
    { name: "Dr. Vikram Mehta", role: "Paediatrician (MBBS, DCH)", days: "Mon–Sat", times: "5:00 pm – 8:30 pm", fee: 600 },
    { name: "Dr. Neha Kapoor", role: "Dentist (BDS)", days: "Tue, Thu, Sat", times: "10:00 am – 1:00 pm and 5:30 pm – 8:00 pm", fee: 400 },
  ],
  services: [
    "General consultation and follow-ups (follow-up within 7 days is free)",
    "Child health check-ups and vaccinations (vaccine cost extra)",
    "Dental check-up, cleaning (from ₹800), fillings (from ₹1,200), root canal (quoted after check-up)",
    "Blood tests with home sample collection (8 am – 11 am, ₹100 visit charge)",
    "ECG (₹300), blood pressure and sugar checks",
  ],
  policies: [
    "Walk-ins are welcome; booked patients are seen first in their slot.",
    "Please arrive 10 minutes early and bring old prescriptions and reports.",
    "Payment by cash, UPI or card.",
    "Free parking in front of the clinic.",
    "Cancel or reschedule by replying to the confirmation message.",
  ],
}

export const suggestions = [
  "What are Dr. Mehta's timings?",
  "Kal subah dentist ka appointment mil sakta hai?",
  "How much is a consultation?",
  "My son has had a fever for 2 days. What should I give him?",
]
