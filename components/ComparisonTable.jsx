import { comparisonRows } from "@/lib/pricing";

// "Why choose us" comparison: our product vs typical large software vs paper/Excel.
export default function ComparisonTable({ name = "Our software", className = "" }) {
  return (
    <div className={className}>
      <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white">
        <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
          <thead>
            <tr className="border-b border-black/10">
              <th className="p-4 font-semibold text-[#777]" scope="col"><span className="sr-only">Compare</span></th>
              <th className="bg-[#111] p-4 font-display text-lg font-extrabold text-white" scope="col">{name}</th>
              <th className="p-4 font-semibold text-[#555]" scope="col">Typical large software</th>
              <th className="p-4 font-semibold text-[#555]" scope="col">Paper / Excel</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([row, ours, big, paper]) => (
              <tr key={row} className="border-b border-black/5 last:border-0">
                <th className="p-4 font-semibold" scope="row">{row}</th>
                <td className="bg-[#fff4ef] p-4 font-semibold text-[#111]"><span className="mr-2 text-[#ff5a1f]">✓</span>{ours}</td>
                <td className="p-4 text-[#555]">{big}</td>
                <td className="p-4 text-[#555]">{paper}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-[#888]">General comparison. Features and pricing of other software vary.</p>
    </div>
  );
}
