"use client"
import AssistantChat from "@/components/AssistantChat"

// Chat for a per-business demo (/demo/<slug>). The server picks the business details by slug.
export default function BusinessDemoChat({ slug, name, icon, item, greeting, suggestions }) {
  return (
    <AssistantChat
      endpoint="/api/demo-assistant"
      body={{ slug }}
      icon={icon}
      title={name}
      greeting={greeting}
      suggestions={suggestions}
      offlineMessage={`Hi Manish, I'd like to see the AI receptionist demo for ${name}.`}
      trackParams={{ demo: slug }}
      bookingRows={(b) => [["Customer", b.name], ["Mobile", b.mobile], [item, b.item], ["When", [b.date, b.time].filter(Boolean).join(", ")], ["Notes", b.notes]]}
    />
  )
}
