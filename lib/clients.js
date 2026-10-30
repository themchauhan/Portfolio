// Companies whose websites Manish has built or worked on (mostly as part of the Clear Digital team).
// Shown on /projects as name cards (no third-party logos). `industry` is a short label.

export const featuredClients = [
  { name: "Clear Digital", industry: "B2B digital agency, Silicon Valley" },
  { name: "Estimatic", industry: "Estimating software" },
  { name: "LightBeam", industry: "Data privacy & security" },
  { name: "Socure", industry: "Identity verification" },
  { name: "Sift", industry: "Fraud prevention" },
  { name: "Digimarc", industry: "Digital watermarking" },
  { name: "Splunk", industry: "Security & observability" },
]

export const clientGroups = [
  {
    title: "Cybersecurity",
    clients: [
      { name: "Bitdefender", industry: "Cybersecurity" },
      { name: "Carbon Black", industry: "Endpoint security" },
      { name: "Venafi", industry: "Machine identity security" },
      { name: "JumpCloud", industry: "Identity & device management" },
      { name: "vArmour", industry: "Application security" },
      { name: "Agari", industry: "Email security" },
      { name: "Thales", industry: "Aerospace, defence & security" },
    ],
  },
  {
    title: "Data, cloud & AI",
    clients: [
      { name: "Cohesity", industry: "Data security & management" },
      { name: "Couchbase", industry: "Cloud database" },
      { name: "DataStax", industry: "Database & AI platform" },
      { name: "Weka", industry: "Data platform" },
      { name: "H2O.ai", industry: "AI platform" },
      { name: "Aviatrix", industry: "Cloud networking" },
      { name: "Virtana", industry: "Hybrid cloud observability" },
      { name: "Aternity", industry: "Digital experience management" },
      { name: "DZS", industry: "Broadband networking" },
    ],
  },
  {
    title: "Fintech, insurance & enterprise software",
    clients: [
      { name: "Kount", industry: "Fraud prevention" },
      { name: "Hippo", industry: "Home insurance" },
      { name: "Model N", industry: "Revenue management software" },
      { name: "Rimini Street", industry: "Enterprise software support" },
      { name: "Tealbook", industry: "Supplier data platform" },
    ],
  },
  {
    title: "Healthcare",
    clients: [
      { name: "Surescripts", industry: "Health information network" },
      { name: "Vocera", industry: "Clinical communication" },
      { name: "Akasa", industry: "AI for healthcare operations" },
      { name: "EyeQue", industry: "Vision testing devices" },
    ],
  },
  {
    title: "Marketing, media & data",
    clients: [
      { name: "Leadspace", industry: "B2B customer data platform" },
      { name: "Habu", industry: "Data clean rooms" },
      { name: "Ace Metrix", industry: "Video ad analytics" },
      { name: "Viral Nation", industry: "Influencer marketing" },
    ],
  },
  {
    title: "Industrial & construction",
    clients: [
      { name: "Blach Construction", industry: "Construction" },
      { name: "Heat and Control", industry: "Food processing equipment" },
      { name: "TRS-RenTelco", industry: "Test equipment rental" },
      { name: "Hoover", industry: "Industrial products" },
      { name: "Ernest Packaging", industry: "Packaging solutions" },
    ],
  },
]

export const clientCount = featuredClients.length + clientGroups.reduce((n, g) => n + g.clients.length, 0)
