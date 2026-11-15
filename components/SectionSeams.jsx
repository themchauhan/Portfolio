"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

// When two page sections sit next to each other with the same background colour, give the upper one
// a soft bottom shadow (or a faint line on dark sections), so the page still reads as separate blades.
const bgOf = (el) => {
  for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
    const c = getComputedStyle(n).backgroundColor
    if (c && c !== "transparent" && !/rgba\(.*,\s*0\)$/.test(c)) return c
  }
  return getComputedStyle(document.body).backgroundColor
}
const hasOwnBg = (el) => {
  const c = getComputedStyle(el).backgroundColor
  return !!c && c !== "transparent" && !/rgba\(.*,\s*0\)$/.test(c)
}
const isDark = (rgb) => {
  const [r, g, b] = (rgb.match(/\d+(\.\d+)?/g) || []).map(Number)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 90
}

function mark() {
  document.querySelectorAll(".seam, .seam-dark").forEach((s) => s.classList.remove("seam", "seam-dark"))
  const sections = [...document.querySelectorAll("main section")].filter((s) => !s.parentElement.closest("section") && s.offsetHeight > 0)
  for (let i = 0; i < sections.length - 1; i++) {
    const a = sections[i]
    const b = sections[i + 1]
    if (Math.abs(a.getBoundingClientRect().bottom - b.getBoundingClientRect().top) > 2) continue
    // Only coloured blades: a hero flowing into its content on the plain page background is one block
    if (!hasOwnBg(a) || !hasOwnBg(b)) continue
    const c = bgOf(a)
    if (c === bgOf(b)) a.classList.add(isDark(c) ? "seam-dark" : "seam")
  }
}

export default function SectionSeams() {
  const path = usePathname()
  useEffect(() => {
    const t = setTimeout(mark, 50)
    window.addEventListener("resize", mark)
    return () => {
      clearTimeout(t)
      window.removeEventListener("resize", mark)
    }
  }, [path])
  return null
}
