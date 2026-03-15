import { Link } from "react-router"
import {
  BookOpenCheck,
  Layers,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Brain,
  GitFork,
  FlaskConical,
  Users,
} from "lucide-react"

const TOOLS = [
  {
    to: "/instructional-design/learning-objectives",
    icon: BookOpenCheck,
    label: "Learning Objective Analyzer",
    description:
      "Paste any learning objective and get an instant Bloom's Taxonomy classification — knowledge dimension, subtype, and concrete examples tailored to your subject.",
    accent: "border-indigo-200 hover:border-indigo-400",
    iconBg: "bg-indigo-50 text-indigo-600",
    badge: "Available now",
    badgeColor: "bg-indigo-50 text-indigo-700",
  },
]

const TAXONOMY_SECTIONS = [
  {
    to: "/taxonomy",
    icon: GraduationCap,
    label: "Bloom's Taxonomy Overview",
    description:
      "An interactive pyramid showing all six cognitive process levels and how they relate to each other.",
    accent: "border-violet-200 hover:border-violet-400",
    iconBg: "bg-violet-50 text-violet-600",
  },
  {
    to: "/taxonomy/knowledge-dimensions",
    icon: Layers,
    label: "Knowledge Dimensions",
    description:
      "Explore factual, conceptual, procedural, and metacognitive knowledge — with definitions, characteristics, and subtypes.",
    accent: "border-teal-200 hover:border-teal-400",
    iconBg: "bg-teal-50 text-teal-600",
  },
  {
    to: "/taxonomy/cognitive-levels",
    icon: BookOpen,
    label: "Cognitive Process Levels",
    description:
      "Browse all six levels of the cognitive process dimension — from Remember to Create — with sub-processes and action verbs.",
    accent: "border-amber-200 hover:border-amber-400",
    iconBg: "bg-amber-50 text-amber-600",
  },
]

const PRINCIPLES = [
  {
    icon: Brain,
    label: "Augment, don't replace",
    description:
      "Every tool in Bucleo is designed to scaffold human reasoning — not shortcut it. AI surfaces structure and patterns; the thinking stays yours.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: FlaskConical,
    label: "Openly experimental",
    description:
      "Bucleo is a living experiment. Features are tested openly, informed by learning science, and refined through real classroom use.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Users,
    label: "Built with contributors",
    description:
      "Future learning systems will be co-created with educators, researchers, and developers who believe education deserves better tools.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      {/* Hero */}
      <section className="mb-24 text-center">
        <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
          <Sparkles size={14} aria-hidden /> Open Source · Experimental ·
          Educational
        </span>
        <h1 className="mt-4 text-5xl leading-tight font-extrabold tracking-tight text-stone-900 sm:text-6xl">
          AI-assisted learning
          <br />
          <span className="text-indigo-600">that keeps you thinking.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-stone-500">
          Bucleo is an open source project experimenting with AI tools that
          augment — not replace — how educators and learners think. Today: a
          Bloom's Taxonomy reference and analyzer. Tomorrow: collaborative
          learning systems built with the community.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/instructional-design/learning-objectives"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-indigo-700"
          >
            Try the Analyzer <ArrowRight size={17} aria-hidden />
          </Link>
          <Link
            to="/taxonomy"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-stone-200 bg-white px-7 py-3.5 text-base font-semibold text-stone-700 transition-colors hover:border-stone-300 hover:bg-stone-50"
          >
            Explore Taxonomy
          </Link>
        </div>
      </section>

      {/* Principles */}
      <section className="mb-24">
        <p className="mb-6 text-sm font-semibold tracking-widest text-stone-400 uppercase">
          What Bucleo stands for
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {PRINCIPLES.map(({ icon: Icon, label, description, color, bg }) => (
            <div
              key={label}
              className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}
              >
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className={color}
                  aria-hidden
                />
              </span>
              <div>
                <h3 className="mb-1.5 text-base font-bold text-stone-900">
                  {label}
                </h3>
                <p className="text-sm leading-relaxed text-stone-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tool */}
      <section className="mb-16">
        <p className="mb-5 text-sm font-semibold tracking-widest text-stone-400 uppercase">
          Tools
        </p>
        <div className="grid gap-5">
          {TOOLS.map(
            ({
              to,
              icon: Icon,
              label,
              description,
              accent,
              iconBg,
              badge,
              badgeColor,
            }) => (
              <Link
                key={to}
                to={to}
                className={`group flex items-center gap-6 rounded-2xl border-2 bg-white p-7 shadow-sm transition-all ${accent}`}
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
                >
                  <Icon size={26} strokeWidth={1.6} aria-hidden />
                </span>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-bold tracking-widest uppercase ${badgeColor}`}
                    >
                      {badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">{label}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-stone-500">
                    {description}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="shrink-0 text-stone-300 transition-colors group-hover:text-indigo-500"
                  aria-hidden
                />
              </Link>
            ),
          )}
        </div>
      </section>

      {/* Taxonomy reference */}
      <section className="mb-24">
        <p className="mb-5 text-sm font-semibold tracking-widest text-stone-400 uppercase">
          Taxonomy Reference
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {TAXONOMY_SECTIONS.map(
            ({ to, icon: Icon, label, description, accent, iconBg }) => (
              <Link
                key={to}
                to={to}
                className={`group flex flex-col gap-5 rounded-2xl border-2 bg-white p-6 shadow-sm transition-all ${accent}`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}
                >
                  <Icon size={22} strokeWidth={1.6} aria-hidden />
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-stone-900">
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-500">
                    {description}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-stone-400 transition-colors group-hover:text-stone-700">
                  Explore <ArrowRight size={14} aria-hidden />
                </span>
              </Link>
            ),
          )}
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="mb-24 overflow-hidden rounded-2xl border-2 border-violet-100 bg-violet-50 p-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-violet-100">
            <GitFork
              size={26}
              strokeWidth={1.6}
              className="text-violet-600"
              aria-hidden
            />
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-extrabold text-violet-950">
              Want to help build the next learning system?
            </h2>
            <p className="mt-2 text-base leading-relaxed text-violet-700">
              Bucleo is in active development and looking for educators,
              researchers, and developers who want to co-create tools that make
              learning more meaningful. All contributions welcome — code,
              pedagogy, ideas.
            </p>
          </div>
          <a
            href="https://github.com/elbucle-systems/bucleo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
          >
            Contribute on GitHub <ArrowRight size={15} aria-hidden />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-100 pt-10 text-center text-sm text-stone-400">
        <p className="mb-1">
          Created by{" "}
          <span className="font-semibold text-stone-600">Ivan Perez</span>
          {" · "}
          <a
            href="https://github.com/elbucle-systems/bucleo/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
            className="hover:text-stone-600 hover:underline"
          >
            Apache 2.0
          </a>
        </p>
        <p>
          Taxonomy based on Anderson &amp; Krathwohl (2001) —{" "}
          <em>A Taxonomy for Learning, Teaching, and Assessing</em>
        </p>
      </footer>
    </main>
  )
}
