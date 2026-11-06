// Answer-first content block for tool pages: a heading phrased like the search, a direct answer,
// an optional table and key points. Written as plain text so search engines and AI overviews can quote it.
export default function ToolGuide({ title, intro, table, points, pointsTitle, note, bg = 'bg-white' }) {
  return (
    <section className={`!py-14 md:!py-20 ${bg}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="max-w-4xl font-display text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
        {intro && <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#333]">{intro}</p>}
        {table && (
          <div className="mt-8 max-w-5xl overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[560px] text-left text-[15px]">
              <thead><tr className="bg-[#111] text-white">{table.head.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
              <tbody>
                {table.rows.map((r) => (
                  <tr key={r[0]} className={`border-t border-black/10 ${r[0].startsWith('Net') || r[0].startsWith('Total') ? 'font-semibold' : ''}`}>
                    {r.map((c, i) => <td key={i} className={`px-4 py-3 ${i === 0 ? 'font-semibold' : 'text-[#444]'}`}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {points && (
          <>
            {pointsTitle && <h3 className="mt-10 font-display text-2xl font-extrabold">{pointsTitle}</h3>}
            <ul className="mt-5 grid max-w-5xl gap-3 md:grid-cols-2">
              {points.map(([h, d]) => (
                <li key={h} className="rounded-xl border border-black/10 bg-[#f4f1ec] p-4">
                  <p className="font-semibold text-[#111]">{h}</p>
                  {d && <p className="mt-1 text-[#555]">{d}</p>}
                </li>
              ))}
            </ul>
          </>
        )}
        {note && <p className="mt-6 max-w-4xl text-sm text-[#666]">{note}</p>}
      </div>
    </section>
  )
}
