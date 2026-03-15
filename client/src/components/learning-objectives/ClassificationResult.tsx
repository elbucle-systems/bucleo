import { Layers, BookOpen, ArrowRight, Lightbulb } from "lucide-react"
import type { ClassificationResult } from "../../types/taxonomy"

const DIMENSION_COLOR: Record<
  string,
  { banner: string; badge: string; icon: string }
> = {
  factual: {
    banner: "bg-slate-100 border-slate-300",
    badge: "bg-slate-200 text-slate-700",
    icon: "text-slate-600",
  },
  conceptual: {
    banner: "bg-indigo-50 border-indigo-300",
    badge: "bg-indigo-100 text-indigo-700",
    icon: "text-indigo-600",
  },
  procedural: {
    banner: "bg-teal-50 border-teal-300",
    badge: "bg-teal-100 text-teal-700",
    icon: "text-teal-700",
  },
  metacognitive: {
    banner: "bg-violet-50 border-violet-300",
    badge: "bg-violet-100 text-violet-800",
    icon: "text-violet-700",
  },
}

function normalizeDimensionKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+knowledge$/, "")
    .trim()
}

interface Props {
  result: ClassificationResult
}

export default function ClassificationResult({ result }: Props) {
  const dimKey = normalizeDimensionKey(result.dimension.name)
  const colors = DIMENSION_COLOR[dimKey] ?? DIMENSION_COLOR.conceptual

  return (
    <div className="space-y-5">
      <h2 className="text-base font-semibold text-stone-700">
        Classification result
      </h2>

      {/* Dimension banner */}
      <div
        className={`rounded-xl border-2 ${colors.banner} flex items-start gap-4 p-5`}
      >
        <span className={`mt-0.5 shrink-0 ${colors.icon}`}>
          <Layers size={22} strokeWidth={1.8} aria-hidden />
        </span>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-semibold tracking-wider uppercase ${colors.badge}`}
            >
              Knowledge Dimension
            </span>
            <span className="text-base font-bold text-stone-800">
              {result.dimension.name}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-stone-600">
            {result.dimension.explanation}
          </p>
        </div>
      </div>

      {/* Subtype card */}
      <div className="flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <span className="mt-0.5 shrink-0 text-indigo-400">
          <BookOpen size={20} strokeWidth={1.8} aria-hidden />
        </span>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-semibold tracking-wider text-stone-500 uppercase">
              Subtype
            </span>
            <span className="text-base font-semibold text-stone-800">
              {result.subtype.name}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-stone-600">
            {result.subtype.explanation}
          </p>
        </div>
      </div>

      {/* Examples */}
      {result.examples.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-stone-500">
            <Lightbulb size={15} strokeWidth={1.8} aria-hidden />
            <span className="text-xs font-semibold tracking-wider uppercase">
              Classroom examples
            </span>
          </div>

          <ul className="space-y-3">
            {result.examples.map((ex, i) => (
              <li
                key={i}
                className="space-y-2 rounded-lg border border-stone-200 bg-stone-50 p-4"
              >
                <p className="text-sm font-medium text-stone-700">
                  {ex.scenario}
                </p>
                <div className="flex items-start gap-2 text-stone-500">
                  <ArrowRight
                    size={14}
                    className="mt-0.5 shrink-0"
                    aria-hidden
                  />
                  <p className="text-sm text-stone-600">
                    {ex.howItAppliesToObjective}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
