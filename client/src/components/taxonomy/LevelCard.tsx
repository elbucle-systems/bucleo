import { useState } from "react"
import {
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
  CognitiveLevelItem,
  CognitiveLevelKey,
} from "../../types/taxonomy"

const LEVEL_STYLE: Record<
  CognitiveLevelKey,
  {
    border: string
    badge: string
    icon: string
    bg: string
    Icon: React.ElementType
  }
> = {
  remember: {
    border: "border-rose-300",
    badge: "bg-rose-100 text-rose-700",
    icon: "text-rose-500",
    bg: "bg-rose-50/40",
    Icon: BookOpen,
  },
  understand: {
    border: "border-orange-300",
    badge: "bg-orange-100 text-orange-700",
    icon: "text-orange-500",
    bg: "bg-orange-50/40",
    Icon: Brain,
  },
  apply: {
    border: "border-amber-300",
    badge: "bg-amber-100 text-amber-700",
    icon: "text-amber-600",
    bg: "bg-amber-50/40",
    Icon: Wrench,
  },
  analyze: {
    border: "border-teal-300",
    badge: "bg-teal-100 text-teal-700",
    icon: "text-teal-600",
    bg: "bg-teal-50/40",
    Icon: ScanSearch,
  },
  evaluate: {
    border: "border-blue-300",
    badge: "bg-blue-100 text-blue-700",
    icon: "text-blue-600",
    bg: "bg-blue-50/40",
    Icon: Scale,
  },
  create: {
    border: "border-violet-300",
    badge: "bg-violet-100 text-violet-700",
    icon: "text-violet-600",
    bg: "bg-violet-50/40",
    Icon: Sparkles,
  },
}

interface Props {
  item: CognitiveLevelItem
}

export default function LevelCard({ item }: Props) {
  const [expanded, setExpanded] = useState(false)
  const style = LEVEL_STYLE[item.key] ?? LEVEL_STYLE.remember
  const { Icon } = style
  const processEntries = Object.entries(item.processes)

  return (
    <article
      className={`rounded-xl border-2 ${style.border} overflow-hidden bg-white shadow-sm`}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-stone-50"
        aria-expanded={expanded}
      >
        <div className="flex items-start gap-3">
          <span className={`mt-0.5 ${style.icon}`}>
            <Icon size={20} strokeWidth={1.8} aria-hidden />
          </span>
          <div>
            <span
              className={`mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold tracking-wider uppercase ${style.badge}`}
            >
              {item.key}
            </span>
            <h3 className="text-base leading-snug font-semibold text-stone-800">
              {item.category}
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
        <div
          className={`space-y-5 border-t border-stone-100 px-5 py-5 ${style.bg}`}
        >
          {/* Characteristics */}
          <section>
            <h4 className="mb-2 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Characteristics
            </h4>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
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

          {/* Subprocesses */}
          <section>
            <h4 className="mb-3 text-xs font-semibold tracking-wider text-stone-400 uppercase">
              Cognitive Subprocesses ({processEntries.length})
            </h4>
            <ul className="space-y-3">
              {processEntries.map(([key, proc]) => (
                <li
                  key={key}
                  className="rounded-lg border border-stone-200 bg-white p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-stone-800">
                      {proc.name}
                    </p>
                    {proc.alternativeNames.length > 0 && (
                      <span className="shrink-0 text-xs text-stone-400 italic">
                        also: {proc.alternativeNames.join(", ")}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-stone-600">
                    {proc.definition}
                  </p>
                  {proc.assessmentMethods && (
                    <p className="mt-2 text-xs text-stone-400">
                      <span className="font-medium text-stone-500 not-italic">
                        Assessment:
                      </span>{" "}
                      {proc.assessmentMethods}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </article>
  )
}
