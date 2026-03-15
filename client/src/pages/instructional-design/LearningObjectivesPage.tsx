import { useMutation } from "@tanstack/react-query"
import { Link } from "react-router"
import { BookOpenCheck } from "lucide-react"
import LearningObjectiveForm from "../../components/learning-objectives/LearningObjectiveForm"
import ClassificationResultPanel from "../../components/learning-objectives/ClassificationResult"
import type { LearningObjectiveFormData } from "../../types/taxonomy"
import { classifyKnowledge } from "../../lib/api/classifyKnowledge"

export default function LearningObjectivesPage() {
  const {
    mutate,
    data: result,
    isPending,
  } = useMutation({
    mutationFn: classifyKnowledge,
  })

  function handleSubmit(data: LearningObjectiveFormData) {
    mutate(data)
  }

  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 py-12">
      {/* Page header */}
      <section className="space-y-3">
        <span className="flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-500 uppercase">
          <BookOpenCheck size={14} aria-hidden />
          Instructional Design Tool
        </span>
        <h1 className="text-3xl font-bold text-stone-800">
          Learning Objective Analyzer
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-stone-500">
          Paste or write a learning objective below. The analyzer will classify
          it according to Bloom's Revised Taxonomy, identifying the{" "}
          <span className="font-medium text-stone-700">
            knowledge dimension
          </span>{" "}
          and{" "}
          <span className="font-medium text-stone-700">knowledge subtype</span>{" "}
          with contextual examples for your subject and grade level.
        </p>
        <p className="text-sm text-stone-400">
          New to the taxonomy?{" "}
          <Link
            to="/taxonomy"
            className="text-indigo-500 underline underline-offset-2 transition-colors hover:text-indigo-700"
          >
            Explore the full reference guide →
          </Link>
        </p>
      </section>

      {/* Two-column layout on wide screens */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        {/* Form */}
        <LearningObjectiveForm onSubmit={handleSubmit} isLoading={isPending} />

        {/* Result / placeholder */}
        <div className="min-h-70">
          {result ? (
            <div className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
              <ClassificationResultPanel result={result} />
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50 px-8 py-14 text-center">
              <BookOpenCheck
                size={32}
                strokeWidth={1.4}
                className="text-stone-300"
                aria-hidden
              />
              <p className="max-w-xs text-sm leading-relaxed text-stone-400">
                Your classification will appear here after you submit an
                objective.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tip banner */}
      <aside className="rounded-xl border border-indigo-200 bg-indigo-50 p-5 text-sm leading-relaxed text-indigo-700">
        <span className="font-semibold">Tip for better results:</span> Start
        your objective with a specific, observable action verb (e.g. "compare",
        "design", "explain") and include the context, such as the lesson topic
        and the expected outcome. Avoid vague verbs like "understand" or "know".
      </aside>
    </main>
  )
}
