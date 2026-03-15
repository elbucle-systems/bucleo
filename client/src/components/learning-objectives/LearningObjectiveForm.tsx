import { useRef } from "react"
import { Loader2, Sparkles } from "lucide-react"
import type { LearningObjectiveFormData } from "../../types/taxonomy"

interface Props {
  onSubmit: (data: LearningObjectiveFormData) => void
  isLoading?: boolean
}

export default function LearningObjectiveForm({
  onSubmit,
  isLoading = false,
}: Props) {
  const objectiveRef = useRef<HTMLTextAreaElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const gradeRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const data: LearningObjectiveFormData = {
      learningObjective: objectiveRef.current?.value.trim() ?? "",
      subject: subjectRef.current?.value.trim() ?? "",
      gradeLevel: gradeRef.current?.value.trim() ?? "",
    }
    if (!data.learningObjective || !data.subject || !data.gradeLevel) return
    onSubmit(data)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-stone-200 bg-white p-7 shadow-sm"
    >
      {/* Heading */}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-stone-800">
          Analyze a learning objective
        </h2>
        <p className="text-sm leading-relaxed text-stone-500">
          Describe what learners should be able to do, and we'll classify it
          within Bloom's Revised Taxonomy — identifying the knowledge dimension
          and cognitive level.
        </p>
      </div>

      <hr className="border-stone-100" />

      {/* Learning objective – large textarea */}
      <div className="space-y-1.5">
        <label
          htmlFor="learningObjective"
          className="block text-sm font-medium text-stone-700"
        >
          Learning objective{" "}
          <span className="font-normal text-stone-400">(required)</span>
        </label>
        <textarea
          id="learningObjective"
          ref={objectiveRef}
          required
          rows={4}
          placeholder="e.g. Students will be able to compare the characteristics of mammals and reptiles using a Venn diagram."
          className="w-full resize-none rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-800 transition placeholder:text-stone-400 focus:border-transparent focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          disabled={isLoading}
        />
        <p className="text-xs text-stone-400">
          Use a complete sentence that starts with an action verb.
        </p>
      </div>

      {/* Subject + Grade — two columns */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-stone-700"
          >
            Subject / Discipline{" "}
            <span className="font-normal text-stone-400">(required)</span>
          </label>
          <input
            id="subject"
            ref={subjectRef}
            type="text"
            required
            placeholder="e.g. Biology, History, Mathematics"
            className="w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-2.5 text-sm text-stone-800 transition placeholder:text-stone-400 focus:border-transparent focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="gradeLevel"
            className="block text-sm font-medium text-stone-700"
          >
            Grade / Level{" "}
            <span className="font-normal text-stone-400">(required)</span>
          </label>
          <input
            id="gradeLevel"
            ref={gradeRef}
            type="text"
            required
            placeholder="e.g. Grade 6, Undergraduate, Professional"
            className="w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-2.5 text-sm text-stone-800 transition placeholder:text-stone-400 focus:border-transparent focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:outline-none disabled:bg-indigo-300 sm:w-auto"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden />
            Analyzing…
          </>
        ) : (
          <>
            <Sparkles size={16} aria-hidden />
            Classify objective
          </>
        )}
      </button>
    </form>
  )
}
