import { Link } from "react-router"
import { BookOpenCheck, GraduationCap, ArrowRight } from "lucide-react"
import BloomsPyramid from "../../components/taxonomy/BloomsPyramid"

export default function TaxonomyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-16 px-4 py-12">
      {/* Hero */}
      <section className="space-y-4 text-center">
        <span className="mb-1 inline-block text-sm font-bold tracking-widest text-indigo-500 uppercase">
          Reference Guide
        </span>
        <h1 className="text-5xl leading-tight font-extrabold text-stone-900">
          Bloom's Revised Taxonomy
        </h1>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-stone-500">
          A two-dimensional framework for classifying educational objectives. It
          combines{" "}
          <span className="font-medium text-stone-700">
            cognitive process levels
          </span>{" "}
          — from remembering to creating — with{" "}
          <span className="font-medium text-stone-700">
            knowledge dimensions
          </span>{" "}
          — from factual to metacognitive.
        </p>
      </section>

      {/* Pyramid */}
      <section className="space-y-4">
        <h2 className="text-center text-sm font-bold tracking-widest text-stone-400 uppercase">
          Cognitive Process Levels
        </h2>
        <div className="mx-auto max-w-lg">
          <BloomsPyramid interactive />
        </div>
        <p className="text-center text-sm text-stone-400">
          Click any level to explore its definition, characteristics, and
          subprocesses.
        </p>
      </section>

      {/* CTA cards */}
      <section className="grid gap-5 sm:grid-cols-2">
        <Link
          to="/taxonomy/knowledge-dimensions"
          className="group flex flex-col gap-4 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-7 transition-colors hover:border-indigo-400"
        >
          <span className="flex items-center gap-3 text-indigo-600">
            <BookOpenCheck size={24} strokeWidth={1.6} aria-hidden />
            <span className="text-lg font-bold">Knowledge Dimensions</span>
          </span>
          <p className="text-base leading-relaxed text-indigo-700/80">
            The <em>what</em> of learning — factual, conceptual, procedural, and
            metacognitive knowledge types with their subtypes and
            characteristics.
          </p>
          <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-all group-hover:gap-2.5">
            Explore dimensions <ArrowRight size={15} aria-hidden />
          </span>
        </Link>

        <Link
          to="/taxonomy/cognitive-levels"
          className="group flex flex-col gap-4 rounded-2xl border-2 border-violet-200 bg-violet-50 p-7 transition-colors hover:border-violet-400"
        >
          <span className="flex items-center gap-3 text-violet-600">
            <GraduationCap size={24} strokeWidth={1.6} aria-hidden />
            <span className="text-lg font-bold">Cognitive Levels</span>
          </span>
          <p className="text-base leading-relaxed text-violet-700/80">
            The <em>how</em> of learning — six hierarchical levels of thinking
            from surface retrieval to original production, each with cognitive
            subprocesses.
          </p>
          <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-violet-600 transition-all group-hover:gap-2.5">
            Explore levels <ArrowRight size={15} aria-hidden />
          </span>
        </Link>
      </section>

      {/* Background note */}
      <section className="rounded-xl border border-stone-200 bg-stone-100 p-6 text-sm leading-relaxed text-stone-600">
        <p className="mb-1 font-semibold text-stone-700">
          About this framework
        </p>
        <p>
          Originally published by Benjamin Bloom in 1956 and revised by Anderson
          & Krathwohl in 2001, the taxonomy provides a common language for
          describing educational goals. The revised version shifted the
          knowledge dimension from the original hierarchy and introduced verb
          forms for cognitive processes to make objective-writing more precise.
        </p>
      </section>
    </main>
  )
}
