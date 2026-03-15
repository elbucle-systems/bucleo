import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router"
import { ArrowLeft, ChevronDown, ChevronUp, Layers } from "lucide-react"
import type {
  KnowledgeDimensionKey,
  KnowledgeSubtypeDetail,
} from "../../types/taxonomy"
import { getKnowledgeDimensions } from "../../lib/api/knowledgeDimensions"

const DIMENSION_STYLE: Record<
  KnowledgeDimensionKey,
  { badge: string; ring: string; subtypeBg: string }
> = {
  factual: {
    badge: "bg-slate-100 text-slate-700",
    ring: "ring-slate-300",
    subtypeBg: "bg-slate-50",
  },
  conceptual: {
    badge: "bg-indigo-50 text-indigo-700",
    ring: "ring-indigo-300",
    subtypeBg: "bg-indigo-50/40",
  },
  procedural: {
    badge: "bg-teal-50 text-teal-700",
    ring: "ring-teal-300",
    subtypeBg: "bg-teal-50/40",
  },
  metacognitive: {
    badge: "bg-violet-50 text-violet-700",
    ring: "ring-violet-300",
    subtypeBg: "bg-violet-50/40",
  },
}

function SubtypeAccordion({
  subtype,
  style,
}: {
  subtypeKey: string
  subtype: KnowledgeSubtypeDetail
  style: (typeof DIMENSION_STYLE)[KnowledgeDimensionKey]
}) {
  const [open, setOpen] = useState(false)

  return (
    <li className="overflow-hidden rounded-lg border border-stone-200 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-stone-50"
        aria-expanded={open}
      >
        <div>
          <p className="text-sm font-semibold text-stone-800">
            {subtype.name
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (c) => c.toUpperCase())}
          </p>
          <p className="mt-0.5 text-xs text-stone-500">{subtype.definition}</p>
        </div>
        <span className="shrink-0 text-stone-400">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {open && (
        <div
          className={`space-y-4 border-t border-stone-100 px-4 py-4 ${style.subtypeBg}`}
        >
          {/* Content */}
          <section>
            <h5 className="mb-2 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Content
            </h5>
            <dl className="space-y-1.5">
              <div>
                <dt className="text-xs font-medium text-stone-500">Includes</dt>
                <dd className="text-sm text-stone-700">
                  {subtype.content.includes}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-stone-500">Basis</dt>
                <dd className="text-sm text-stone-700">
                  {subtype.content.basis}
                </dd>
              </div>
              {subtype.content.precision && (
                <div>
                  <dt className="text-xs font-medium text-stone-500">
                    Precision
                  </dt>
                  <dd className="text-sm text-stone-700">
                    {subtype.content.precision}
                  </dd>
                </div>
              )}
            </dl>
          </section>

          {/* Characteristics */}
          <section>
            <h5 className="mb-2 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Characteristics
            </h5>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {Object.entries(subtype.characteristics).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-medium text-stone-500 capitalize">
                    {k.replace(/([A-Z])/g, " $1")}
                  </dt>
                  <dd className="text-sm text-stone-700">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h5 className="mb-1 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Distinguished from
            </h5>
            <p className="text-sm text-stone-700">
              <span className="font-medium">
                {subtype.distinguishedFrom.target}
              </span>{" "}
              — {subtype.distinguishedFrom.basis}
            </p>
          </section>

          <section>
            <h5 className="mb-1 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Learning implications
            </h5>
            <p className="text-sm text-stone-700">
              {subtype.learningImplications}
            </p>
          </section>

          <section>
            <h5 className="mb-1 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Expertise indicators
            </h5>
            <p className="text-sm text-stone-700">
              {subtype.expertiseIndicators}
            </p>
          </section>
        </div>
      )}
    </li>
  )
}

export default function KnowledgeDimensionDetailPage() {
  const { dimension: paramKey } = useParams<{
    dimension: KnowledgeDimensionKey
  }>()
  const { data: dimensions, isLoading } = useQuery({
    queryKey: ["knowledgeDimensions"],
    queryFn: getKnowledgeDimensions,
  })
  const dimension = dimensions?.find((d) => d.key === paramKey)
  const style =
    DIMENSION_STYLE[paramKey as KnowledgeDimensionKey] ??
    DIMENSION_STYLE.factual

  if (isLoading) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-4">
          <div className="h-8 w-48 animate-pulse rounded bg-stone-100" />
          <div className="h-4 w-full animate-pulse rounded bg-stone-100" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-stone-100" />
        </div>
      </main>
    )
  }

  if (!dimension) {
    return (
      <main className="mx-auto max-w-3xl space-y-4 px-4 py-12">
        <div className="rounded-xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-400">
          Dimension &ldquo;{paramKey}&rdquo; not found.
        </div>
        <Link
          to="/taxonomy/knowledge-dimensions"
          className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-600"
        >
          <ArrowLeft size={14} /> Back to Knowledge Dimensions
        </Link>
      </main>
    )
  }

  const subtypeEntries = Object.entries(dimension.subtypes)

  return (
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-12">
      {/* Back */}
      <Link
        to="/taxonomy/knowledge-dimensions"
        className="inline-flex items-center gap-1.5 text-sm text-stone-400 transition-colors hover:text-stone-600"
      >
        <ArrowLeft size={14} aria-hidden />
        All knowledge dimensions
      </Link>

      {/* Header */}
      <section className="space-y-3">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
          <Layers size={14} aria-hidden className="text-stone-400" />
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${style.badge}`}
          >
            {dimension.key}
          </span>
        </span>
        <h1 className="text-3xl font-bold text-stone-800">
          {dimension.dimension}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-stone-500">
          {dimension.definition}
        </p>
      </section>

      {/* Characteristics table */}
      <section className={`rounded-xl ring-1 ${style.ring} space-y-1 p-5`}>
        <h2 className="mb-3 text-xs font-semibold tracking-wider text-stone-400 uppercase">
          Characteristics
        </h2>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {Object.entries(dimension.characteristics).map(([k, v]) => (
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
        <h2 className="mb-2 text-xs font-semibold tracking-wider text-stone-400 uppercase">
          Distinguished from
        </h2>
        <p className="text-sm text-stone-700">
          <span className="font-medium">
            {dimension.distinguishedFrom.target}
          </span>{" "}
          — {dimension.distinguishedFrom.basis}
        </p>
      </section>

      {/* Subtypes */}
      <section>
        <h2 className="mb-4 text-sm font-semibold text-stone-700">
          Subtypes ({subtypeEntries.length})
        </h2>
        <ul className="space-y-3">
          {subtypeEntries.map(([key, subtype]) => (
            <SubtypeAccordion
              key={key}
              subtypeKey={key}
              subtype={subtype}
              style={style}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}
