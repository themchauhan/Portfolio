export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="!py-14 md:!py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-[15px] font-semibold text-[#ff5a1f]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-[#111] md:text-6xl xl:text-7xl">{title}</h1>
        {children && <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#444]">{children}</p>}
      </div>
    </section>
  )
}
