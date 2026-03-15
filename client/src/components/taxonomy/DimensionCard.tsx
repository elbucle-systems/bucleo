import { useState } from "react"
import { Link } from "react-router"
import {
  ChevronDown,
  ChevronUp,
  BookText,
  Network,
  Wrench,
  Brain,
  Tag,
  Lightbulb,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import type {
  KnowledgeDimensionItem,
  KnowledgeDimensionKey,
} from "../../types/taxonomy"

const DIMENSION_CONFIG: Record<
  KnowledgeDimensionKey,
  {
    icon: React.ElementType
    headerBg: string
    headerIconBg: string
    headerIconText: string
    headerBadge: string
    headerTitle: string
    border: string
    chipBg: string
    chipText: string
    subtypeBorder: string
    subtypeBg: string
    subtypeIconBg: string
    subtypeIconText: string
    sectionBg: string
  }
> = {
  factual: {
    icon: BookText,
    headerBg: "bg-slate-100",
    headerIconBg: "bg-slate-200",
    headerIconText: "text-slate-600",
    headerBadge: "bg-slate-200 text-slate-600",
    headerTitle: "text-slate-900",
    border: "border-slate-300",
    chipBg: "bg-slate-100",
    chipText: "text-slate-700",
    subtypeBorder: "border-l-slate-400",
    subtypeBg: "bg-slate-50",
    subtypeIconBg: "bg-slate-200",
    subtypeIconText: "text-slate-600",
    sectionBg: "bg-slate-50/60",
  },
  conceptual: {
    icon: Network,
    headerBg: "bg-indigo-50",
    headerIconBg: "bg-indigo-100",
    headerIconText: "text-indigo-600",
    headerBadge: "bg-indigo-100 text-indigo-600",
    headerTitle: "text-indigo-950",
    border: "border-indigo-200",
    chipBg: "bg-indigo-100",
    chipText: "text-indigo-700",
    subtypeBorder: "border-l-indigo-400",
    subtypeBg: "bg-indigo-50",
    subtypeIconBg: "bg-indigo-100",
    subtypeIconText: "text-indigo-600",
    sectionBg: "bg-indigo-50/40",
  },
  procedural: {
    icon: Wrench,
    headerBg: "bg-teal-50",
    headerIconBg: "bg-teal-100",
    headerIconText: "text-teal-600",
    headerBadge: "bg-teal-100 text-teal-600",
    headerTitle: "text-teal-950",
    border: "border-teal-200",
    chipBg: "bg-teal-100",
    chipText: "text-teal-700",
    subtypeBorder: "border-l-teal-400",
    subtypeBg: "bg-teal-50",
    subtypeIconBg: "bg-teal-100",
    subtypeIconText: "text-teal-600",
    sectionBg: "bg-teal-50/40",
  },
  metacognitive: {
    icon: Brain,
    headerBg: "bg-violet-50",
    headerIconBg: "bg-violet-100",
    headerIconText: "text-violet-600",
    headerBadge: "bg-violet-100 text-violet-600",
    headerTitle: "text-violet-950",
    border: "border-violet-200",
    chipBg: "bg-violet-100",
    chipText: "text-violet-700",
    subtypeBorder: "border-l-violet-400",
    subtypeBg: "bg-violet-50",
    subtypeIconBg: "bg-violet-100",
    subtypeIconText: "text-violet-600",
    sectionBg: "bg-violet-50/40",
  },
}

interface Props {
  item: KnowledgeDimensionItem
}

export default function DimensionCard({ item }: Props) {
  const [expanded, setExpanded] = useState(false)
  const cfg = DIMENSION_CONFIG[item.key] ?? DIMENSION_CONFIG.factual
  const Icon = cfg.icon
  const subtypeEntries = Object.entries(item.subtypes)

  return (
    <article
      className={`overflow-hidden rounded-2xl border-2 ${cfg.border} bg-white shadow-sm`}
    >
      {/* Tinted header */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className={`flex w-full items-center justify-between gap-4 ${cfg.headerBg} border-b border-stone-200 px-6 py-5 text-left transition-colors hover:brightness-95`}
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-4">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${cfg.headerIconBg}`}
          >
            <Icon
              size={24}
              strokeWidth={1.6}
              className={cfg.headerIconText}
              aria-hidden
            />
          </span>
          <div>
            <span
              className={`mb-1 inline-block rounded-full px-3 py-0.5 text-xs font-bold tracking-widest uppercase ${cfg.headerBadge}`}
            >
              {item.key}
            </span>
            <h3 className={`text-xl font-bold ${cfg.headerTitle}`}>
              {item.dimension}
            </h3>
          </div>
        </div>
        <span className="shrink-0 text-stone-400">
          {expanded ? (
            <ChevronUp size={22} aria-hidden />
          ) : (
            <ChevronDown size={22} aria-hidden />
          )}
        </span>
      </button>

      {/* Definition */}
      <div className="border-b border-stone-100 px-6 py-5">
        <p className="text-base leading-relaxed text-stone-600">
          {item.definition}
        </p>
      </div>

      {/* Subtype chips — shown when collapsed */}
      {!expanded && (
        <div className="flex flex-wrap gap-2 px-6 py-4">
          {subtypeEntries.map(([key, subtype]) => (
            <span
              key={key}
              className={`rounded-full px-3 py-1 text-sm font-medium ${cfg.chipBg} ${cfg.chipText}`}
            >
              {subtype.name
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (c) => c.toUpperCase())}
            </span>
          ))}
        </div>
      )}

      {/* Expanded sections */}
      {expanded && (
        <div className={`divide-y divide-stone-100 ${cfg.sectionBg}`}>
          {/* Characteristics */}
          <section className="px-6 py-6">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-widest text-stone-500 uppercase">
              <Tag size={13} aria-hidden />
              Characteristics
            </h4>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {Object.entries(item.characteristics).map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-xl border border-stone-200 bg-white px-4 py-3"
                >
                  <dt className="mb-1 text-xs font-bold tracking-wider text-stone-400 uppercase">
                    {k.replace(/([A-Z])/g, " $1")}
                  </dt>
                  <dd className="text-sm leading-relaxed text-stone-700">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Distinguished from */}
          <section className="px-6 py-6">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-bold tracking-widest text-stone-500 uppercase">
              <ArrowRight size={13} aria-hidden />
              Distinguished From
            </h4>
            <div className="rounded-xl border border-stone-200 bg-white px-4 py-4">
              <p className="text-base leading-relaxed text-stone-700">
                <span className="font-semibold">
                  {item.distinguishedFrom.target}
                </span>{" "}
                — {item.distinguishedFrom.basis}
              </p>
            </div>
          </section>

          {/* Subtypes */}
          <section className="px-6 py-6">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-widest text-stone-500 uppercase">
              <Lightbulb size={13} aria-hidden />
              Subtypes ({subtypeEntries.length})
            </h4>
            <ul className="space-y-4">
              {subtypeEntries.map(([key, subtype]) => (
                <li
                  key={key}
                  className={`rounded-xl border-l-4 ${cfg.subtypeBorder} ${cfg.subtypeBg} px-5 py-4`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${cfg.subtypeIconBg}`}
                    >
                      <Lightbulb
                        size={15}
                        strokeWidth={1.8}
                        className={cfg.subtypeIconText}
                        aria-hidden
                      />
                    </span>
                    <div>
                      <p className="text-base font-bold text-stone-900">
                        {subtype.name
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (c) => c.toUpperCase())}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                        {subtype.definition}
                      </p>
                      <p className="mt-2 text-sm text-stone-400 italic">
                        {subtype.learningImplications}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to={`/taxonomy/knowledge-dimensions/${item.key}`}
              onClick={(e) => e.stopPropagation()}
              className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${cfg.headerIconText} hover:underline`}
            >
              <ExternalLink size={13} aria-hidden />
              Explore full details &amp; examples
            </Link>
          </section>
        </div>
      )}
    </article>
  )
}
