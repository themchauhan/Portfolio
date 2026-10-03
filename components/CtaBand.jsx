import Link from 'next/link'

export default function CtaBand({ title = "Let's build something.", href = '/contacts', label = 'Start a project' }) {
  return (
    <section className="!py-16 md:!py-24 bg-[#ff5a1f]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center">
        <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111] md:text-5xl">{title}</h2>
        <Link href={href} className="shrink-0 rounded-full bg-[#111] px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#111]">{label}</Link>
      </div>
    </section>
  )
}
