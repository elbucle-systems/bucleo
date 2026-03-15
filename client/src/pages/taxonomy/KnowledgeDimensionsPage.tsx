import { useQuery } from "@tanstack/react-query"
import { Layers } from "lucide-react"
import DimensionCard from "../../components/taxonomy/DimensionCard"
import { getKnowledgeDimensions } from "../../lib/api/knowledgeDimensions"

const DIMENSION_ORDER = [
  "factual",
  "conceptual",
  "procedural",
  "metacognitive",
] as const

export default function KnowledgeDimensionsPage() {
  const { data: dimensions, isLoading } = useQuery({
    queryKey: ["knowledgeDimensions"],
    queryFn: getKnowledgeDimensions,
  })

  const sorted = dimensions
    ? [...dimensions].sort(
        (a, b) =>
          DIMENSION_ORDER.indexOf(a.key as never) -
          DIMENSION_ORDER.indexOf(b.key as never),
      )
    : []

  return (
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-12">
      {/* Header */}
      <section className="space-y-3">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-500 uppercase">
          <Layers size={14} aria-hidden />
          Bloom's Taxonomy
        </span>
        <h1 className="text-3xl font-bold text-stone-800">
          Knowledge Dimensions
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-stone-500">
          The Knowledge Dimension describes the <em>type</em> of knowledge
          embedded in a learning objective — the substance that learners must
          acquire, understand, or apply. The revised taxonomy identifies four
          broad kinds, each with distinct subtypes.
        </p>
      </section>

      {/* Axis diagram */}
      <div className="flex items-center gap-0 overflow-x-auto pb-1">
        {(
          ["Factual", "Conceptual", "Procedural", "Metacognitive"] as const
        ).map((label, i, arr) => {
          const colors = [
            "bg-slate-100 text-slate-700 border-slate-300",
            "bg-indigo-50 text-indigo-700 border-indigo-300",
            "bg-teal-50 text-teal-700 border-teal-300",
            "bg-violet-50 text-violet-700 border-violet-300",
          ]
          return (
            <div key={label} className="flex items-center">
              <div
                className={`rounded border px-3 py-1.5 text-xs font-semibold whitespace-nowrap ${colors[i]}`}
              >
                {label}
              </div>
              {i < arr.length - 1 && (
                <div className="h-px w-5 shrink-0 bg-stone-300" />
              )}
            </div>
          )
        })}
        <span className="ml-2 text-[10px] tracking-wider whitespace-nowrap text-stone-400 uppercase">
          ← Concrete → Abstract
        </span>
      </div>

      {/* Cards */}
      <section className="space-y-4">
        {isLoading && (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="h-24 animate-pulse rounded-xl bg-stone-100"
              />
            ))}
          </div>
        )}

        {!isLoading && !dimensions && (
          <div className="rounded-xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-400">
            Could not load knowledge dimensions. Please ensure the API is
            running.
          </div>
        )}

        {!isLoading &&
          sorted.map((item) => <DimensionCard key={item.key} item={item} />)}
      </section>
    </main>
  )
}
