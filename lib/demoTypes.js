// Business types for the per-business AI receptionist demos (/demo/<slug>).
// item: what a booking is for (shown on the "sent to reception" card).
// booking: what the assistant collects. rules: extra behaviour for this kind of business.
export const demoTypes = {
  hotel: {
    label: 'Hotel or homestay', icon: '🏨', noun: 'rooms, rates and bookings', item: 'Room',
    booking: 'room type, check-in and check-out dates, and number of guests',
    suggestions: ['Room available this Saturday? Rate kya hai?', 'What time is check-in?', 'Is breakfast included?', 'Do you have parking?'],
  },
  restaurant: {
    label: 'Restaurant or café', icon: '🍽️', noun: 'the menu, timings and table bookings', item: 'Table / order',
    booking: 'number of people, date and time, and any occasion or special request',
    suggestions: ['Table for 6 tonight at 8:30?', 'Veg options kya hain?', 'Do you deliver to my area?', 'Birthday party ke liye package hai?'],
  },
  coaching: {
    label: 'Coaching centre or tuition', icon: '📚', noun: 'courses, batches, fees and demo classes', item: 'Course / batch',
    booking: "the student's name and class, the course or subject, and a preferred day for a demo class or visit",
    suggestions: ['New batch kab start ho raha hai?', 'Is there a free demo class?', 'What are the batch timings?', 'Online classes bhi hain?'],
  },
  clinic: {
    label: 'Clinic or doctor', icon: '🏥', noun: 'doctors, timings and appointments', item: 'Doctor',
    booking: 'which doctor (or the reason, so you can pick the doctor), and preferred date and time within that doctor’s timings',
    rules: 'Never diagnose, never suggest medicines or doses, and never interpret symptoms or reports. If anything sounds urgent (chest pain, breathing difficulty, heavy bleeding, unconsciousness, seizure, high fever in an infant, severe injury), tell them to call 112 or go to the nearest emergency department now, before anything else.',
    suggestions: ['Doctor sahab kab baithte hain?', 'Kal subah appointment mil sakta hai?', 'How much is the consultation fee?', 'Is there parking?'],
  },
  salon: {
    label: 'Salon or spa', icon: '✂️', noun: 'services, prices and appointments', item: 'Service',
    booking: 'which service, and preferred date and time',
    suggestions: ['Haircut ka rate kya hai?', 'Can I book for Sunday 11 am?', 'Bridal makeup package?', 'Do you have a male stylist?'],
  },
  pg: {
    label: 'PG or hostel', icon: '🏠', noun: 'rooms, rent, food and visits', item: 'Room',
    booking: 'room type (single or sharing), when they want to move in, and a day and time to visit',
    suggestions: ['Single room khali hai?', 'Rent mein khana included hai?', 'Security deposit kitna hai?', 'Can I visit tomorrow?'],
  },
  realestate: {
    label: 'Property dealer or builder', icon: '🏢', noun: 'properties, prices and site visits', item: 'Property',
    booking: 'what they are looking for (type, size, budget) and a day and time for a site visit',
    rules: 'Never promise prices, discounts, approvals or availability beyond what the details say; offer a call from the team instead.',
    suggestions: ['2BHK ka budget kya hai?', 'Is the project RERA approved?', 'Site visit Sunday ko ho sakti hai?', 'Ready to move flats hain?'],
  },
  gym: {
    label: 'Gym or fitness studio', icon: '💪', noun: 'plans, timings and free trials', item: 'Plan',
    booking: 'which plan or class, and a day and time for a free trial or visit',
    suggestions: ['Monthly fees kitni hai?', 'Is there a free trial?', 'Ladies batch timing?', 'Personal trainer milega?'],
  },
  school: {
    label: 'School', icon: '🏫', noun: 'admissions, classes, transport and visits', item: 'Class',
    booking: "the child's name and the class for admission, and a day and time to visit the school",
    suggestions: ['Admission kab open hai?', 'Which board is the school?', 'Is school transport available?', 'Can we visit the campus?'],
  },
  shop: {
    label: 'Shop or showroom', icon: '🛍️', noun: 'products, prices and orders', item: 'Product',
    booking: 'which product and quantity, and whether they want delivery or will visit the shop',
    suggestions: ['Ye item stock mein hai?', 'Home delivery karte ho?', 'What are your shop timings?', 'UPI payment chalega?'],
  },
  other: {
    label: 'Other business', icon: '💬', noun: 'services, prices and bookings', item: 'Service',
    booking: 'which service they need, and preferred date and time',
    suggestions: ['What are your timings?', 'Rate kya hai?', 'Can I book for tomorrow?', 'Where are you located?'],
  },
}

export const demoTypeKeys = Object.keys(demoTypes)
export const typeOf = (key) => demoTypes[key] || demoTypes.other
