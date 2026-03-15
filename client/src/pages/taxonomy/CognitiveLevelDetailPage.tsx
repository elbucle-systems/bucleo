import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Wrench,
  ScanSearch,
  Scale,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Tag,
  Zap,
  ClipboardCheck,
  GraduationCap,
  Star,
} from "lucide-react"
import type {
  CognitiveLevelKey,
  CognitiveProcessFlat,
} from "../../types/taxonomy"
import {
  getCognitiveLevels,
  getCognitiveLevelSubprocesses,
} from "../../lib/api/cognitiveLevels"

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
    subtypeBorder: string
    subtypeBg: string
    subtypeIconBg: string
    subtypeIconText: string
    sectionBg: string
    charCardBg: string
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
    subtypeBorder: "border-l-rose-400",
    subtypeBg: "bg-rose-50",
    subtypeIconBg: "bg-rose-100",
    subtypeIconText: "text-rose-600",
    sectionBg: "bg-rose-50/40",
    charCardBg: "bg-rose-50/60",
  },
  understand: {
    Icon: Brain,
    headerBg: "bg-orange-50",
    headerIconBg: "bg-orange-100",
    headerIconText: "text-orange-600",
    headerBadge: "bg-orange-100 text-orange-600",
    headerTitle: "text-orange-950",
    border: "border-orange-200",
    subtypeBorder: "border-l-orange-400",
    subtypeBg: "bg-orange-50",
    subtypeIconBg: "bg-orange-100",
    subtypeIconText: "text-orange-600",
    sectionBg: "bg-orange-50/40",
    charCardBg: "bg-orange-50/60",
  },
  apply: {
    Icon: Wrench,
    headerBg: "bg-amber-50",
    headerIconBg: "bg-amber-100",
    headerIconText: "text-amber-600",
    headerBadge: "bg-amber-100 text-amber-600",
    headerTitle: "text-amber-950",
    border: "border-amber-200",
    subtypeBorder: "border-l-amber-400",
    subtypeBg: "bg-amber-50",
    subtypeIconBg: "bg-amber-100",
    subtypeIconText: "text-amber-600",
    sectionBg: "bg-amber-50/40",
    charCardBg: "bg-amber-50/60",
  },
  analyze: {
    Icon: ScanSearch,
    headerBg: "bg-teal-50",
    headerIconBg: "bg-teal-100",
    headerIconText: "text-teal-600",
    headerBadge: "bg-teal-100 text-teal-600",
    headerTitle: "text-teal-950",
    border: "border-teal-200",
    subtypeBorder: "border-l-teal-400",
    subtypeBg: "bg-teal-50",
    subtypeIconBg: "bg-teal-100",
    subtypeIconText: "text-teal-600",
    sectionBg: "bg-teal-50/40",
    charCardBg: "bg-teal-50/60",
  },
  evaluate: {
    Icon: Scale,
    headerBg: "bg-blue-50",
    headerIconBg: "bg-blue-100",
    headerIconText: "text-blue-600",
    headerBadge: "bg-blue-100 text-blue-600",
    headerTitle: "text-blue-950",
    border: "border-blue-200",
    subtypeBorder: "border-l-blue-400",
    subtypeBg: "bg-blue-50",
    subtypeIconBg: "bg-blue-100",
    subtypeIconText: "text-blue-600",
    sectionBg: "bg-blue-50/40",
    charCardBg: "bg-blue-50/60",
  },
  create: {
    Icon: Sparkles,
    headerBg: "bg-violet-50",
    headerIconBg: "bg-violet-100",
    headerIconText: "text-violet-600",
    headerBadge: "bg-violet-100 text-violet-600",
    headerTitle: "text-violet-950",
    border: "border-violet-200",
    subtypeBorder: "border-l-violet-400",
    subtypeBg: "bg-violet-50",
    subtypeIconBg: "bg-violet-100",
    subtypeIconText: "text-violet-600",
    sectionBg: "bg-violet-50/40",
    charCardBg: "bg-violet-50/60",
  },
}

function ProcessAccordion({
  proc,
  cfg,
}: {
  proc: CognitiveProcessFlat
  cfg: (typeof LEVEL_CONFIG)[CognitiveLevelKey]
}) {
  const [open, setOpen] = useState(false)
  const label = proc.name.charAt(0).toUpperCase() + proc.name.slice(1)

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
            <Zap
              size={14}
              strokeWidth={1.8}
              className={cfg.subtypeIconText}
              aria-hidden
            />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-base font-bold text-stone-900">{label}</p>
              {proc.alternativeNames.length > 0 && (
                <span className="text-sm text-stone-400 italic">
                  also: {proc.alternativeNames.join(", ")}
                </span>
              )}
            </div>
            <p className="mt-0.5 line-clamp-1 text-sm text-stone-500">
              {proc.definition}
            </p>
          </div>
        </div>
        <span className={`shrink-0 ${cfg.subtypeIconText}`}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {open && (
        <div className={`divide-y divide-stone-100 ${cfg.sectionBg}`}>
          {/* Characteristics */}
          <section className="px-5 py-5">
            <h5 className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-stone-400 uppercase">
              <Tag size={11} aria-hidden /> Characteristics
            </h5>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {Object.entries(proc.characteristics).map(([k, v]) => (
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
                  {proc.distinguishedFrom.target}
                </span>
                {" — "}
                {proc.distinguishedFrom.basis}
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white px-4 py-3">
              <h5 className="mb-1 flex items-center gap-1.5 text-xs font-bold tracking-widest text-stone-400 uppercase">
                <ArrowLeft size={11} aria-hidden /> Builds upon
              </h5>
              <p className="text-sm leading-relaxed text-stone-700">
                {proc.buildsUpon}
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
                {proc.learningImplications}
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white px-4 py-3">
              <h5 className="mb-1 flex items-center gap-1.5 text-xs font-bold tracking-widest text-stone-400 uppercase">
                <Star size={11} aria-hidden /> Expertise indicators
              </h5>
              <p className="text-sm leading-relaxed text-stone-700">
                {proc.expertiseIndicators}
              </p>
            </div>
          </section>

          {/* Assessment methods */}
          {proc.assessmentMethods && (
            <section className="px-5 py-5">
              <h5 className="mb-2 flex items-center gap-2 text-xs font-bold tracking-widest text-stone-400 uppercase">
                <ClipboardCheck size={11} aria-hidden /> Assessment methods
              </h5>
              <div className="rounded-xl border border-stone-200 bg-white px-4 py-3">
                <p className="text-sm leading-relaxed text-stone-700">
                  {proc.assessmentMethods}
                </p>
              </div>
            </section>
          )}

          {/* Examples */}
          {Object.keys(proc.examples).length > 0 && (
            <section className="px-5 py-5">
              <h5 className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-stone-400 uppercase">
                <Zap size={11} aria-hidden /> Examples
              </h5>
              <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {Object.entries(proc.examples).map(([context, value]) =>
                  typeof value === "string" ? (
                    <div
                      key={context}
                      className="rounded-lg border border-stone-200 bg-white px-3 py-2"
                    >
                      <dt className="text-xs font-bold text-stone-700 capitalize">
                        {context.replace(/([A-Z])/g, " $1")}
                      </dt>
                      <dd className="mt-0.5 text-xs leading-relaxed text-stone-500">
                        {value}
                      </dd>
                    </div>
                  ) : (
                    <div
                      key={context}
                      className="rounded-lg border border-stone-200 bg-white px-3 py-2"
                    >
                      <dt
                        className={`mb-1.5 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold tracking-widest uppercase ${cfg.headerBadge}`}
                      >
                        {context.replace(/([A-Z])/g, " $1")}
                      </dt>
                      {Object.entries(value).map(([k, v]) => (
                        <dd key={k} className="mt-1">
                          <span className="text-xs font-semibold text-stone-600 capitalize">
                            {k.replace(/([A-Z])/g, " $1")}
                          </span>
                          <span className="text-xs text-stone-500"> — {v}</span>
                        </dd>
                      ))}
                    </div>
                  ),
                )}
              </dl>
            </section>
          )}
        </div>
      )}
    </li>
  )
}

export default function CognitiveLevelDetailPage() {
  const { level: paramKey } = useParams<{ level: CognitiveLevelKey }>()
  const { data: levels, isLoading: levelsLoading } = useQuery({
    queryKey: ["cognitiveLevels"],
    queryFn: getCognitiveLevels,
  })
  const { data: processes, isLoading: processesLoading } = useQuery({
    queryKey: ["cognitiveLevelSubprocesses", paramKey],
    queryFn: () => getCognitiveLevelSubprocesses(paramKey!),
    enabled: !!paramKey,
  })
  const level = levels?.find((l) => l.key === paramKey)
  const isLoading = levelsLoading || processesLoading
  const cfg =
    LEVEL_CONFIG[paramKey as CognitiveLevelKey] ?? LEVEL_CONFIG.remember
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

  return (
    <main className="mx-auto max-w-4xl space-y-10 px-4 py-12">
      {/* Back */}
      <Link
        to="/taxonomy/cognitive-levels"
        className="inline-flex items-center gap-1.5 text-sm text-stone-400 transition-colors hover:text-stone-600"
      >
        <ArrowLeft size={14} aria-hidden />
        All cognitive levels
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
              {level.key}
            </span>
            <h1 className={`text-2xl font-extrabold ${cfg.headerTitle}`}>
              {level.category}
            </h1>
          </div>
        </div>
        <div className="px-7 py-5">
          <p className="text-base leading-relaxed text-stone-600">
            {level.definition}
          </p>
        </div>
      </section>

      {/* Characteristics */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-widest text-stone-500 uppercase">
          <Tag size={13} aria-hidden /> Characteristics
        </h2>
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Object.entries(level.characteristics).map(([k, v]) => (
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
              {level.distinguishedFrom.target}
            </span>
            {" — "}
            {level.distinguishedFrom.basis}
          </p>
        </div>
      </section>

      {/* Subprocesses */}
      <section>
        <h2 className="mb-5 flex items-center gap-2 text-sm font-bold tracking-widest text-stone-500 uppercase">
          <Zap size={13} aria-hidden />
          Cognitive Subprocesses ({processes?.length ?? 0})
        </h2>
        <ul className="space-y-4">
          {processes?.map((proc) => (
            <ProcessAccordion key={proc.key} proc={proc} cfg={cfg} />
          ))}
        </ul>
      </section>
    </main>
  )
}
