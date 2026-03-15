import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router"
import {
  ArrowLeft,
  BookText,
  Network,
  Wrench,
  Brain,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Tag,
  ArrowRight,
  GraduationCap,
  Star,
  BookOpen,
} from "lucide-react"
import type {
  KnowledgeDimensionKey,
  KnowledgeSubtypeFlat,
} from "../../types/taxonomy"
import {
  getKnowledgeDimensions,
  getKnowledgeDimensionSubtypes,
} from "../../lib/api/knowledgeDimensions"

const DIMENSION_CONFIG: Record<
  KnowledgeDimensionKey,
  {
    Icon: React.ElementType
    headerBg: string
    headerIconBg: string
    headerIconText: string
    headerBadge: string
    headerTitle: string
    border: string
    ring: string
    subtypeBorder: string
    subtypeBg: string
    subtypeIconBg: string
    subtypeIconText: string
    sectionBg: string
    charCardBg: string
  }
> = {
  factual: {
    Icon: BookText,
    headerBg: "bg-slate-100",
    headerIconBg: "bg-slate-200",
    headerIconText: "text-slate-600",
    headerBadge: "bg-slate-200 text-slate-600",
    headerTitle: "text-slate-900",
    border: "border-slate-200",
    ring: "ring-slate-200",
    subtypeBorder: "border-l-slate-400",
    subtypeBg: "bg-slate-50",
    subtypeIconBg: "bg-slate-200",
    subtypeIconText: "text-slate-600",
    sectionBg: "bg-slate-50/60",
    charCardBg: "bg-slate-50",
  },
  conceptual: {
    Icon: Network,
    headerBg: "bg-indigo-50",
    headerIconBg: "bg-indigo-100",
    headerIconText: "text-indigo-600",
    headerBadge: "bg-indigo-100 text-indigo-600",
    headerTitle: "text-indigo-950",
    border: "border-indigo-100",
    ring: "ring-indigo-200",
    subtypeBorder: "border-l-indigo-400",
    subtypeBg: "bg-indigo-50",
    subtypeIconBg: "bg-indigo-100",
    subtypeIconText: "text-indigo-600",
    sectionBg: "bg-indigo-50/40",
    charCardBg: "bg-indigo-50/60",
  },
  procedural: {
    Icon: Wrench,
    headerBg: "bg-teal-50",
    headerIconBg: "bg-teal-100",
    headerIconText: "text-teal-600",
    headerBadge: "bg-teal-100 text-teal-600",
    headerTitle: "text-teal-950",
    border: "border-teal-100",
    ring: "ring-teal-200",
    subtypeBorder: "border-l-teal-400",
    subtypeBg: "bg-teal-50",
    subtypeIconBg: "bg-teal-100",
    subtypeIconText: "text-teal-600",
    sectionBg: "bg-teal-50/40",
    charCardBg: "bg-teal-50/60",
  },
  metacognitive: {
    Icon: Brain,
    headerBg: "bg-violet-50",
    headerIconBg: "bg-violet-100",
    headerIconText: "text-violet-600",
    headerBadge: "bg-violet-100 text-violet-600",
    headerTitle: "text-violet-950",
    border: "border-violet-100",
    ring: "ring-violet-200",
    subtypeBorder: "border-l-violet-400",
    subtypeBg: "bg-violet-50",
    subtypeIconBg: "bg-violet-100",
    subtypeIconText: "text-violet-600",
    sectionBg: "bg-violet-50/40",
    charCardBg: "bg-violet-50/60",
  },
}

function SubtypeAccordion({
  subtype,
  cfg,
}: {
  subtype: KnowledgeSubtypeFlat
  cfg: (typeof DIMENSION_CONFIG)[KnowledgeDimensionKey]
}) {
  const [open, setOpen] = useState(false)
  const label = subtype.name
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())

  return (
    <li
      className={`overflow-hidden rounded-2xl border-l-4 ${cfg.subtypeBorder} border border-stone-200 bg-white shadow-sm`}
    >
      {/* Accordion trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:brightness-95 ${open ? cfg.subtypeBg : "bg-white"}`}
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${cfg.subtypeIconBg}`}
          >
            <Lightbulb
              size={14}
              strokeWidth={1.8}
              className={cfg.subtypeIconText}
              aria-hidden
            />
          </span>
          <div>
            <p className="text-base font-bold text-stone-900">{label}</p>
            <p className="mt-0.5 line-clamp-1 text-sm text-stone-500">
              {subtype.definition}
            </p>
          </div>
        </div>
        <span className={`shrink-0 ${cfg.subtypeIconText}`}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {open && (
        <div className={`divide-y divide-stone-100 ${cfg.sectionBg}`}>
          {/* Content */}
          <section className="px-5 py-5">
            <h5 className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-stone-400 uppercase">
              <BookOpen size={11} aria-hidden /> Content
            </h5>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { label: "Includes", value: subtype.content.includes },
                { label: "Basis", value: subtype.content.basis },
                ...(subtype.content.precision
                  ? [{ label: "Precision", value: subtype.content.precision }]
                  : []),
              ].map(({ label: l, value }) => (
                <div
                  key={l}
                  className={`rounded-xl border border-stone-200 bg-white px-4 py-3`}
                >
                  <dt className="mb-1 text-xs font-bold tracking-wider text-stone-400 uppercase">
                    {l}
                  </dt>
                  <dd className="text-sm leading-relaxed text-stone-700">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Characteristics */}
          <section className="px-5 py-5">
            <h5 className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-stone-400 uppercase">
              <Tag size={11} aria-hidden /> Characteristics
            </h5>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {Object.entries(subtype.characteristics).map(([k, v]) => (
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

          {/* Distinguished from + Builds upon */}
          <section className="grid grid-cols-1 gap-4 px-5 py-5 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-white px-4 py-3">
              <h5 className="mb-1 flex items-center gap-1.5 text-xs font-bold tracking-widest text-stone-400 uppercase">
                <ArrowRight size={11} aria-hidden /> Distinguished from
              </h5>
              <p className="text-sm leading-relaxed text-stone-700">
                <span className="font-semibold">
                  {subtype.distinguishedFrom.target}
                </span>
                {" — "}
                {subtype.distinguishedFrom.basis}
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white px-4 py-3">
              <h5 className="mb-1 flex items-center gap-1.5 text-xs font-bold tracking-widest text-stone-400 uppercase">
                <ArrowLeft size={11} aria-hidden /> Builds upon
              </h5>
              <p className="text-sm leading-relaxed text-stone-700">
                {subtype.buildsUpon}
              </p>
            </div>
          </section>

          {/* Learning implications + Expertise indicators */}
          <section className="grid grid-cols-1 gap-4 px-5 py-5 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-white px-4 py-3">
              <h5 className="mb-1 flex items-center gap-1.5 text-xs font-bold tracking-widest text-stone-400 uppercase">
                <GraduationCap size={11} aria-hidden /> Learning implications
              </h5>
              <p className="text-sm leading-relaxed text-stone-700">
                {subtype.learningImplications}
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white px-4 py-3">
              <h5 className="mb-1 flex items-center gap-1.5 text-xs font-bold tracking-widest text-stone-400 uppercase">
                <Star size={11} aria-hidden /> Expertise indicators
              </h5>
              <p className="text-sm leading-relaxed text-stone-700">
                {subtype.expertiseIndicators}
              </p>
            </div>
          </section>

          {/* Examples */}
          {Object.keys(subtype.examples).length > 0 && (
            <section className="px-5 py-5">
              <h5 className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-stone-400 uppercase">
                <Lightbulb size={11} aria-hidden /> Examples
              </h5>
              <div className="space-y-4">
                {Object.entries(subtype.examples).map(([category, items]) => (
                  <div key={category}>
                    <p
                      className={`mb-2 inline-block rounded-full px-3 py-0.5 text-xs font-bold tracking-widest uppercase ${cfg.headerBadge}`}
                    >
                      {category.replace(/([A-Z])/g, " $1")}
                    </p>
                    <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {Object.entries(items).map(([term, meaning]) => (
                        <div
                          key={term}
                          className="rounded-lg border border-stone-200 bg-white px-3 py-2"
                        >
                          <dt className="text-xs font-bold text-stone-700 capitalize">
                            {term.replace(/([A-Z])/g, " $1")}
                          </dt>
                          <dd className="mt-0.5 text-xs leading-relaxed text-stone-500">
                            {meaning}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </li>
  )
}

export default function KnowledgeDimensionDetailPage() {
  const { dimension: paramKey } = useParams<{
    dimension: KnowledgeDimensionKey
  }>()
  const { data: dimensions, isLoading: dimLoading } = useQuery({
    queryKey: ["knowledgeDimensions"],
    queryFn: getKnowledgeDimensions,
  })
  const { data: subtypes, isLoading: subtypesLoading } = useQuery({
    queryKey: ["knowledgeDimensionSubtypes", paramKey],
    queryFn: () => getKnowledgeDimensionSubtypes(paramKey!),
    enabled: !!paramKey,
  })
  const dimension = dimensions?.find((d) => d.key === paramKey)
  const isLoading = dimLoading || subtypesLoading
  const cfg =
    DIMENSION_CONFIG[paramKey as KnowledgeDimensionKey] ??
    DIMENSION_CONFIG.factual
  const { Icon } = cfg

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

  return (
    <main className="mx-auto max-w-4xl space-y-10 px-4 py-12">
      {/* Back */}
      <Link
        to="/taxonomy/knowledge-dimensions"
        className="inline-flex items-center gap-1.5 text-sm text-stone-400 transition-colors hover:text-stone-600"
      >
        <ArrowLeft size={14} aria-hidden />
        All knowledge dimensions
      </Link>

      {/* Hero header — matches card design */}
      <section
        className={`overflow-hidden rounded-2xl border-2 ${cfg.border} bg-white shadow-sm`}
      >
        <div
          className={`flex items-center gap-5 ${cfg.headerBg} border-b border-stone-200 px-7 py-6`}
        >
          <span
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${cfg.headerIconBg}`}
          >
            <Icon
              size={28}
              strokeWidth={1.5}
              className={cfg.headerIconText}
              aria-hidden
            />
          </span>
          <div>
            <span
              className={`mb-1.5 inline-block rounded-full px-3 py-0.5 text-xs font-bold tracking-widest uppercase ${cfg.headerBadge}`}
            >
              {dimension.key}
            </span>
            <h1 className={`text-2xl font-extrabold ${cfg.headerTitle}`}>
              {dimension.dimension}
            </h1>
          </div>
        </div>
        <div className="px-7 py-5">
          <p className="text-base leading-relaxed text-stone-600">
            {dimension.definition}
          </p>
        </div>
      </section>

      {/* Characteristics */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-widest text-stone-500 uppercase">
          <Tag size={13} aria-hidden /> Characteristics
        </h2>
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Object.entries(dimension.characteristics).map(([k, v]) => (
            <div
              key={k}
              className={`rounded-xl border border-stone-200 ${cfg.charCardBg} px-5 py-4`}
            >
              <dt className="mb-1 text-xs font-bold tracking-wider text-stone-400 uppercase">
                {k.replace(/([A-Z])/g, " $1")}
              </dt>
              <dd className="text-sm leading-relaxed text-stone-700">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Distinguished from */}
      <section>
        <h2 className="mb-3 flex items-center gap-2 text-sm font-bold tracking-widest text-stone-500 uppercase">
          <ArrowRight size={13} aria-hidden /> Distinguished From
        </h2>
        <div className="rounded-xl border border-stone-200 bg-white px-5 py-4">
          <p className="text-base leading-relaxed text-stone-700">
            <span className="font-semibold">
              {dimension.distinguishedFrom.target}
            </span>
            {" — "}
            {dimension.distinguishedFrom.basis}
          </p>
        </div>
      </section>

      {/* Subtypes */}
      <section>
        <h2 className="mb-5 flex items-center gap-2 text-sm font-bold tracking-widest text-stone-500 uppercase">
          <Lightbulb size={13} aria-hidden />
          Subtypes ({subtypes?.length ?? 0})
        </h2>
        <ul className="space-y-4">
          {subtypes?.map((subtype) => (
            <SubtypeAccordion key={subtype.key} subtype={subtype} cfg={cfg} />
          ))}
        </ul>
      </section>
    </main>
  )
}
