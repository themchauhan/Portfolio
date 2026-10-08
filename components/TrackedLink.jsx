"use client"
import { track } from "@/lib/analytics";

// A plain <a> that also sends an Analytics event when clicked.
export default function TrackedLink({ event, params, onClick, ...props }) {
  return <a {...props} onClick={(e) => { track(event, params); onClick?.(e); }} />;
}
