import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router"
import { ArrowLeft, GraduationCap } from "lucide-react"
import BloomsPyramid from "../../components/taxonomy/BloomsPyramid"
import LevelCard from "../../components/taxonomy/LevelCard"
import { getCognitiveLevels } from "../../lib/api/cognitiveLevels"

const LEVEL_ORDER = [
  "remember",
  "understand",
  "apply",
  "analyze",
  "evaluate",
  "create",
] as const

export default function CognitiveLevelsPage() {
  const { data: levels, isLoading } = useQuery({
    queryKey: ["cognitiveLevels"],
    queryFn: getCognitiveLevels,
  })

  const sorted = levels
    ? [...levels].sort(
        (a, b) =>
          LEVEL_ORDER.indexOf(a.key as never) -
          LEVEL_ORDER.indexOf(b.key as never),
      )
    : []

  return (
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-12">
      {/* Header */}
      <section className="space-y-3">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-500 uppercase">
          <GraduationCap size={14} aria-hidden />
          Bloom's Taxonomy
        </span>
        <h1 className="text-3xl font-bold text-stone-800">Cognitive Levels</h1>
        <p className="max-w-xl text-base leading-relaxed text-stone-500">
          The Cognitive Process Dimension describes <em>how</em> a learner
          engages with knowledge. Six hierarchical categories — each with
          specific verbs and subprocesses — help educators write precise,
          measurable learning objectives.
        </p>
      </section>

      {/* Pyramid navigation */}
      <div className="mx-auto max-w-md">
        <BloomsPyramid interactive />
      </div>

      {/* Cards */}
      <section className="space-y-4">
        {isLoading && (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-24 animate-pulse rounded-xl bg-stone-100"
              />
            ))}
          </div>
        )}

        {!isLoading && !levels && (
          <div className="rounded-xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-400">
            Could not load cognitive levels. Please ensure the API is running.
          </div>
        )}

        {!isLoading &&
          sorted.map((item) => <LevelCard key={item.key} item={item} />)}
      </section>

      <div>
        <Link
          to="/taxonomy"
          className="inline-flex items-center gap-1.5 text-sm text-stone-400 transition-colors hover:text-stone-600"
        >
          <ArrowLeft size={14} aria-hidden />
          Back to Taxonomy overview
        </Link>
      </div>
    </main>
  )
}
