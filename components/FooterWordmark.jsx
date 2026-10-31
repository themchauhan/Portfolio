'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// Big footer line: outlined words + orange words, rotating every few seconds.
const PHRASES = [
  ['manish', 'chauhan.'],
  ["let's", 'build.'],
  ['websites that', 'work.'],
  ['automate the', 'paperwork.'],
  ['learn', 'AI.'],
]

export default function FooterWordmark() {
  const [i, setI] = useState(0)
  const [scale, setScale] = useState(1)
  const box = useRef(null)
  const line = useRef(null)

  // Rotate, unless the visitor prefers reduced motion
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((n) => (n + 1) % PHRASES.length), 3200)
    return () => clearInterval(id)
  }, [])

  // Shrink longer phrases so every one fits on one line
  useLayoutEffect(() => {
    const fit = () => {
      if (!box.current || !line.current) return
      const applied = parseFloat(line.current.style.fontSize) || 1
      const natural = line.current.scrollWidth / applied
      setScale(Math.min(1, box.current.clientWidth / natural))
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [i])

  const [outline, filled] = PHRASES[i]
  return (
    <div
      ref={box}
      aria-hidden="true"
      className="mt-14 flex h-[11vw] select-none items-end font-display text-[11vw] font-extrabold leading-none tracking-tight xl:h-[9rem] xl:text-[9rem]"
    >
      <p ref={line} key={i} style={{ fontSize: `${scale}em` }} className="overflow-hidden whitespace-nowrap pb-[0.12em]">
        <span className="wordmark-in inline-block text-transparent transition-colors duration-500 [-webkit-text-stroke:1px_#ffffff] hover:text-white">{outline}</span>{' '}
        <span className="wordmark-in inline-block text-[#ff5a1f] [animation-delay:120ms]">{filled}</span>
      </p>
    </div>
  )
}
