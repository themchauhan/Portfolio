"use client"
import AssistantChat from "@/components/AssistantChat"
import { clinic, suggestions } from "@/lib/clinicDemo"

const GREETING = `Hello! I'm the AI receptionist at ${clinic.name}. I can tell you about our doctors, timings and fees, or book an appointment. Ask in English or Hindi.`

// The fictional Sunrise Clinic demo (/demo/clinic-assistant and /ai-integration).
export default function ClinicAssistantDemo() {
  return (
    <AssistantChat
      endpoint="/api/clinic-assistant"
      icon="🏥"
      title={clinic.name}
      greeting={GREETING}
      suggestions={suggestions}
      offlineMessage="Hi Manish, I'd like to see the clinic AI receptionist demo."
      trackParams={{ demo: "clinic" }}
      bookingRows={(b) => [["Patient", b.name], ["Mobile", b.mobile], ["Doctor", b.doctor], ["When", [b.date, b.time].filter(Boolean).join(", ")], ["Reason", b.reason]]}
    />
  )
}
