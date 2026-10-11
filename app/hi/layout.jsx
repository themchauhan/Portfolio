import { Mukta } from 'next/font/google'

// Hindi pages: Devanagari font and lang="hi" for this part of the page.
const mukta = Mukta({ subsets: ['devanagari', 'latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap' })

export default function HindiLayout({ children }) {
  return <div lang="hi" className={mukta.className}>{children}</div>
}
