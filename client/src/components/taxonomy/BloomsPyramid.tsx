import { Link } from "react-router"
import {
  BookOpen,
  Brain,
  Wrench,
  ScanSearch,
  Scale,
  Sparkles,
} from "lucide-react"
import type { CognitiveLevelKey } from "../../types/taxonomy"

interface Tier {
  key: CognitiveLevelKey
  label: string
  widthClass: string
  bg: string
  border: string
  text: string
  Icon: React.ElementType
  order: number
}

const TIERS: Tier[] = [
  {
    key: "create",
    label: "Create",
    widthClass: "w-[36%]",
    bg: "bg-violet-100",
    border: "border-violet-300",
    text: "text-violet-800",
    Icon: Sparkles,
    order: 1,
  },
  {
    key: "evaluate",
    label: "Evaluate",
    widthClass: "w-[50%]",
    bg: "bg-blue-100",
    border: "border-blue-300",
    text: "text-blue-800",
    Icon: Scale,
    order: 2,
  },
  {
    key: "analyze",
    label: "Analyze",
    widthClass: "w-[62%]",
    bg: "bg-teal-100",
    border: "border-teal-300",
    text: "text-teal-800",
    Icon: ScanSearch,
    order: 3,
  },
  {
    key: "apply",
    label: "Apply",
    widthClass: "w-[74%]",
    bg: "bg-amber-100",
    border: "border-amber-300",
    text: "text-amber-800",
    Icon: Wrench,
    order: 4,
  },
  {
    key: "understand",
    label: "Understand",
    widthClass: "w-[87%]",
    bg: "bg-orange-100",
    border: "border-orange-300",
    text: "text-orange-800",
    Icon: Brain,
    order: 5,
  },
  {
    key: "remember",
    label: "Remember",
    widthClass: "w-full",
    bg: "bg-rose-100",
    border: "border-rose-300",
    text: "text-rose-800",
    Icon: BookOpen,
    order: 6,
  },
]

interface Props {
  /** If true, each tier is a link; if false, decorative only */
  interactive?: boolean
  /** Highlight a specific level */
  activeLevel?: CognitiveLevelKey
}

export default function BloomsPyramid({
  interactive = true,
  activeLevel,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-1 select-none" role="list">
      {TIERS.map((tier) => {
        const isActive = activeLevel === tier.key

        const sharedClass = [
          tier.widthClass,
          tier.bg,
          tier.border,
          tier.text,
          "border rounded-sm px-4 py-2.5 flex items-center justify-center gap-2 transition-all duration-150",
          interactive
            ? "cursor-pointer hover:brightness-95 hover:scale-[1.01]"
            : "",
          isActive ? "ring-2 ring-offset-1 ring-current font-semibold" : "",
        ]
          .filter(Boolean)
          .join(" ")

        const inner = (
          <>
            <tier.Icon size={16} strokeWidth={2} aria-hidden />
            <span className="text-sm font-medium tracking-wide">
              {tier.label}
            </span>
          </>
        )

        return interactive ? (
          <Link
            key={tier.key}
            to={`/taxonomy/cognitive-levels/${tier.key}`}
            role="listitem"
            className={sharedClass}
          >
            {inner}
          </Link>
        ) : (
          <div key={tier.key} role="listitem" className={sharedClass}>
            {inner}
          </div>
        )
      })}

      {/* Base label */}
      <p className="mt-3 text-xs tracking-widest text-stone-400 uppercase">
        Lower-order ← → Higher-order thinking
      </p>
    </div>
  )
}
