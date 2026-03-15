import { useState } from "react"
import { ChevronDown, ChevronUp, Layers } from "lucide-react"
import type {
  KnowledgeDimensionItem,
  KnowledgeDimensionKey,
} from "../../types/taxonomy"

const DIMENSION_STYLE: Record<
  KnowledgeDimensionKey,
  { accent: string; badge: string; icon: string }
> = {
  factual: {
    accent: "border-slate-300",
    badge: "bg-slate-100 text-slate-700",
    icon: "text-slate-500",
  },
  conceptual: {
    accent: "border-indigo-300",
    badge: "bg-indigo-50 text-indigo-700",
    icon: "text-indigo-500",
  },
  procedural: {
    accent: "border-teal-300",
    badge: "bg-teal-50 text-teal-700",
    icon: "text-teal-600",
  },
  metacognitive: {
    accent: "border-violet-300",
    badge: "bg-violet-50 text-violet-700",
    icon: "text-violet-600",
  },
}

interface Props {
  item: KnowledgeDimensionItem
}

export default function DimensionCard({ item }: Props) {
  const [expanded, setExpanded] = useState(false)
  const style = DIMENSION_STYLE[item.key] ?? DIMENSION_STYLE.factual
  const subtypeEntries = Object.entries(item.subtypes)

  return (
    <article
      className={`rounded-xl border-2 ${style.accent} overflow-hidden bg-white shadow-sm`}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-stone-50"
        aria-expanded={expanded}
      >
        <div className="flex items-start gap-3">
          <span className={`mt-0.5 ${style.icon}`}>
            <Layers size={20} strokeWidth={1.8} aria-hidden />
          </span>
          <div>
            <span
              className={`mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold tracking-wider uppercase ${style.badge}`}
            >
              {item.key}
            </span>
            <h3 className="text-base leading-snug font-semibold text-stone-800">
              {item.dimension}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-stone-500">
              {item.definition}
            </p>
          </div>
        </div>
        <span className="mt-1 shrink-0 text-stone-400">
          {expanded ? (
            <ChevronUp size={18} aria-hidden />
          ) : (
            <ChevronDown size={18} aria-hidden />
          )}
        </span>
      </button>

      {/* Expanded body */}
      {expanded && (
        <div className="space-y-5 border-t border-stone-100 bg-stone-50/50 px-5 py-5">
          {/* Characteristics */}
          <section>
            <h4 className="mb-2 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Characteristics
            </h4>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {Object.entries(item.characteristics).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-medium text-stone-500 capitalize">
                    {k.replace(/([A-Z])/g, " $1")}
                  </dt>
                  <dd className="text-sm text-stone-700">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Distinguished from */}
          <section>
            <h4 className="mb-2 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Distinguished from
            </h4>
            <p className="text-sm text-stone-700">
              <span className="font-medium">
                {item.distinguishedFrom.target}
              </span>{" "}
              — {item.distinguishedFrom.basis}
            </p>
          </section>

          {/* Subtypes */}
          <section>
            <h4 className="mb-3 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Subtypes ({subtypeEntries.length})
            </h4>
            <ul className="space-y-3">
              {subtypeEntries.map(([key, subtype]) => (
                <li
                  key={key}
                  className="rounded-lg border border-stone-200 bg-white p-4"
                >
                  <p className="text-sm font-semibold text-stone-800">
                    {subtype.name
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (c) => c.toUpperCase())}
                  </p>
                  <p className="mt-1 text-sm text-stone-600">
                    {subtype.definition}
                  </p>
                  <p className="mt-2 text-xs text-stone-400 italic">
                    {subtype.learningImplications}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </article>
  )
}
