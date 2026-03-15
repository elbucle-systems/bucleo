import { useState } from "react"
import { Link } from "react-router"
import {
  BookOpen,
  Brain,
  Wrench,
  ScanSearch,
  Scale,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Tag,
  ArrowRight,
  Zap,
  ClipboardCheck,
  ExternalLink,
} from "lucide-react"
import type {
  CognitiveLevelItem,
  CognitiveLevelKey,
} from "../../types/taxonomy"

const LEVEL_CONFIG: Record<
  CognitiveLevelKey,
  {
    Icon: React.ElementType
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
  remember: {
    Icon: BookOpen,
    headerBg: "bg-rose-50",
    headerIconBg: "bg-rose-100",
    headerIconText: "text-rose-600",
    headerBadge: "bg-rose-100 text-rose-600",
    headerTitle: "text-rose-950",
    border: "border-rose-200",
    chipBg: "bg-rose-100",
    chipText: "text-rose-700",
    subtypeBorder: "border-l-rose-400",
    subtypeBg: "bg-rose-50",
    subtypeIconBg: "bg-rose-100",
    subtypeIconText: "text-rose-600",
    sectionBg: "bg-rose-50/40",
  },
  understand: {
    Icon: Brain,
    headerBg: "bg-orange-50",
    headerIconBg: "bg-orange-100",
    headerIconText: "text-orange-600",
    headerBadge: "bg-orange-100 text-orange-600",
    headerTitle: "text-orange-950",
    border: "border-orange-200",
    chipBg: "bg-orange-100",
    chipText: "text-orange-700",
    subtypeBorder: "border-l-orange-400",
    subtypeBg: "bg-orange-50",
    subtypeIconBg: "bg-orange-100",
    subtypeIconText: "text-orange-600",
    sectionBg: "bg-orange-50/40",
  },
  apply: {
    Icon: Wrench,
    headerBg: "bg-amber-50",
    headerIconBg: "bg-amber-100",
    headerIconText: "text-amber-600",
    headerBadge: "bg-amber-100 text-amber-600",
    headerTitle: "text-amber-950",
    border: "border-amber-200",
    chipBg: "bg-amber-100",
    chipText: "text-amber-700",
    subtypeBorder: "border-l-amber-400",
    subtypeBg: "bg-amber-50",
    subtypeIconBg: "bg-amber-100",
    subtypeIconText: "text-amber-600",
    sectionBg: "bg-amber-50/40",
  },
  analyze: {
    Icon: ScanSearch,
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
  evaluate: {
    Icon: Scale,
    headerBg: "bg-blue-50",
    headerIconBg: "bg-blue-100",
    headerIconText: "text-blue-600",
    headerBadge: "bg-blue-100 text-blue-600",
    headerTitle: "text-blue-950",
    border: "border-blue-200",
    chipBg: "bg-blue-100",
    chipText: "text-blue-700",
    subtypeBorder: "border-l-blue-400",
    subtypeBg: "bg-blue-50",
    subtypeIconBg: "bg-blue-100",
    subtypeIconText: "text-blue-600",
    sectionBg: "bg-blue-50/40",
  },
  create: {
    Icon: Sparkles,
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
  item: CognitiveLevelItem
}

export default function LevelCard({ item }: Props) {
  const [expanded, setExpanded] = useState(false)
  const cfg = LEVEL_CONFIG[item.key] ?? LEVEL_CONFIG.remember
  const { Icon } = cfg
  const processEntries = Object.entries(item.processes)

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
              {item.category}
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

      {/* Subprocess chips — shown when collapsed */}
      {!expanded && (
        <div className="flex flex-wrap gap-2 px-6 py-4">
          {processEntries.map(([key, proc]) => (
            <span
              key={key}
              className={`rounded-full px-3 py-1 text-sm font-medium ${cfg.chipBg} ${cfg.chipText}`}
            >
              {proc.name.charAt(0).toUpperCase() + proc.name.slice(1)}
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

          {/* Subprocesses */}
          <section className="px-6 py-6">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-widest text-stone-500 uppercase">
              <Zap size={13} aria-hidden />
              Cognitive Subprocesses ({processEntries.length})
            </h4>
            <ul className="space-y-4">
              {processEntries.map(([key, proc]) => (
                <li
                  key={key}
                  className={`rounded-xl border-l-4 ${cfg.subtypeBorder} ${cfg.subtypeBg} px-5 py-4`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${cfg.subtypeIconBg}`}
                    >
                      <Zap
                        size={15}
                        strokeWidth={1.8}
                        className={cfg.subtypeIconText}
                        aria-hidden
                      />
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-base font-bold text-stone-900">
                          {proc.name.charAt(0).toUpperCase() +
                            proc.name.slice(1)}
                        </p>
                        {proc.alternativeNames.length > 0 && (
                          <span className="text-sm text-stone-400 italic">
                            also: {proc.alternativeNames.join(", ")}
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                        {proc.definition}
                      </p>
                      <p className="mt-2 text-sm text-stone-400 italic">
                        {proc.learningImplications}
                      </p>
                      {proc.assessmentMethods && (
                        <div className="mt-3 flex items-start gap-1.5">
                          <ClipboardCheck
                            size={13}
                            className="mt-0.5 shrink-0 text-stone-400"
                            aria-hidden
                          />
                          <p className="text-sm text-stone-500">
                            <span className="font-semibold text-stone-600">
                              Assessment:
                            </span>{" "}
                            {proc.assessmentMethods}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to={`/taxonomy/cognitive-levels/${item.key}`}
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
