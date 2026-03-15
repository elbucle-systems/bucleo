import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router"
import {
  ArrowLeft,
  BookOpen,
  Brain,
  Wrench,
  ScanSearch,
  Scale,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import type {
  CognitiveLevelKey,
  CognitiveProcessDetail,
} from "../../types/taxonomy"
import { getCognitiveLevels } from "../../lib/api/cognitiveLevels"

const LEVEL_STYLE: Record<
  CognitiveLevelKey,
  {
    badge: string
    ring: string
    Icon: React.ElementType
    procBg: string
  }
> = {
  remember: {
    badge: "bg-rose-100 text-rose-700",
    ring: "ring-rose-300",
    Icon: BookOpen,
    procBg: "bg-rose-50/40",
  },
  understand: {
    badge: "bg-orange-100 text-orange-700",
    ring: "ring-orange-300",
    Icon: Brain,
    procBg: "bg-orange-50/40",
  },
  apply: {
    badge: "bg-amber-100 text-amber-700",
    ring: "ring-amber-300",
    Icon: Wrench,
    procBg: "bg-amber-50/40",
  },
  analyze: {
    badge: "bg-teal-100 text-teal-700",
    ring: "ring-teal-300",
    Icon: ScanSearch,
    procBg: "bg-teal-50/40",
  },
  evaluate: {
    badge: "bg-blue-100 text-blue-700",
    ring: "ring-blue-300",
    Icon: Scale,
    procBg: "bg-blue-50/40",
  },
  create: {
    badge: "bg-violet-100 text-violet-700",
    ring: "ring-violet-300",
    Icon: Sparkles,
    procBg: "bg-violet-50/40",
  },
}

function ProcessAccordion({
  proc,
  procBg,
}: {
  proc: CognitiveProcessDetail
  procBg: string
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
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-stone-800">{proc.name}</p>
            {proc.alternativeNames.length > 0 && (
              <span className="text-xs text-stone-400 italic">
                also: {proc.alternativeNames.join(", ")}
              </span>
            )}
          </div>
          <p className="mt-0.5 text-xs text-stone-500">{proc.definition}</p>
        </div>
        <span className="shrink-0 text-stone-400">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {open && (
        <div
          className={`space-y-4 border-t border-stone-100 px-4 py-4 ${procBg}`}
        >
          {/* Characteristics */}
          <section>
            <h5 className="mb-2 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Characteristics
            </h5>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {Object.entries(proc.characteristics).map(([k, v]) => (
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
                {proc.distinguishedFrom.target}
              </span>{" "}
              — {proc.distinguishedFrom.basis}
            </p>
          </section>

          {proc.assessmentMethods && (
            <section>
              <h5 className="mb-1 text-xs font-semibold tracking-wider text-stone-400 uppercase">
                Assessment methods
              </h5>
              <p className="text-sm text-stone-700">{proc.assessmentMethods}</p>
            </section>
          )}

          <section>
            <h5 className="mb-1 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Learning implications
            </h5>
            <p className="text-sm text-stone-700">
              {proc.learningImplications}
            </p>
          </section>

          <section>
            <h5 className="mb-1 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Expertise indicators
            </h5>
            <p className="text-sm text-stone-700">{proc.expertiseIndicators}</p>
          </section>
        </div>
      )}
    </li>
  )
}

export default function CognitiveLevelDetailPage() {
  const { level: paramKey } = useParams<{ level: CognitiveLevelKey }>()
  const { data: levels, isLoading } = useQuery({
    queryKey: ["cognitiveLevels"],
    queryFn: getCognitiveLevels,
  })
  const level = levels?.find((l) => l.key === paramKey)
  const style =
    LEVEL_STYLE[paramKey as CognitiveLevelKey] ?? LEVEL_STYLE.remember
  const { Icon } = style

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

  if (!level) {
    return (
      <main className="mx-auto max-w-3xl space-y-4 px-4 py-12">
        <div className="rounded-xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-400">
          Level &ldquo;{paramKey}&rdquo; not found.
        </div>
        <Link
          to="/taxonomy/cognitive-levels"
          className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-600"
        >
          <ArrowLeft size={14} /> Back to Cognitive Levels
        </Link>
      </main>
    )
  }

  const processEntries = Object.entries(level.processes)

  return (
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-12">
      {/* Back */}
      <Link
        to="/taxonomy/cognitive-levels"
        className="inline-flex items-center gap-1.5 text-sm text-stone-400 transition-colors hover:text-stone-600"
      >
        <ArrowLeft size={14} aria-hidden />
        All cognitive levels
      </Link>

      {/* Header */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Icon
            size={22}
            className="text-stone-400"
            strokeWidth={1.8}
            aria-hidden
          />
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${style.badge}`}
          >
            {level.key}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-stone-800">{level.category}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-stone-500">
          {level.definition}
        </p>
      </section>

      {/* Characteristics */}
      <section className={`rounded-xl ring-1 ${style.ring} p-5`}>
        <h2 className="mb-3 text-xs font-semibold tracking-wider text-stone-400 uppercase">
          Characteristics
        </h2>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {Object.entries(level.characteristics).map(([k, v]) => (
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
          <span className="font-medium">{level.distinguishedFrom.target}</span>{" "}
          — {level.distinguishedFrom.basis}
        </p>
      </section>

      {/* Subprocesses */}
      <section>
        <h2 className="mb-4 text-sm font-semibold text-stone-700">
          Cognitive Subprocesses ({processEntries.length})
        </h2>
        <ul className="space-y-3">
          {processEntries.map(([key, proc]) => (
            <ProcessAccordion key={key} proc={proc} procBg={style.procBg} />
          ))}
        </ul>
      </section>
    </main>
  )
}
