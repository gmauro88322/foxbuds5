import labs from "../../data/labs.json";

export default function LabResultsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold">Lab Results (COAs)</h1>
        <p className="text-white/80 mt-2">
          Certificates of Analysis for recent batches. Replace with your real PDFs as you get them.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {labs.map((x) => (
            <a
              key={x.id}
              href={x.pdf}
              target="_blank"
              rel="noreferrer"
              className="card bg-neutral-900 rounded-xl overflow-hidden border border-white/10 p-4 hover:bg-neutral-900/80"
            >
              <div className="text-sm text-white/60">{x.date}</div>
              <div className="mt-1 text-lg font-bold">{x.product}</div>
              <div className="text-white/80">Batch: <span className="font-mono">{x.batch}</span></div>
              <div className="mt-2 text-sm">
                Potency: <span className="font-semibold">{x.potency}</span> ·
                Terpenes: <span className="font-semibold">{x.terpenes}</span>
              </div>
              <div className="mt-3">
                <span className="button bg-green-700 px-3 py-1 rounded-lg">View PDF</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
