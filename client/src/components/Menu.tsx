import { Link, NavLink } from "react-router"
import { BookOpenCheck, GraduationCap, Layers, BookOpen } from "lucide-react"

function NavItem({
  to,
  icon: Icon,
  children,
}: {
  to: string
  icon: React.ElementType
  children: React.ReactNode
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors",
          isActive
            ? "bg-indigo-50 font-medium text-indigo-700"
            : "text-stone-500 hover:bg-stone-100 hover:text-stone-800",
        ].join(" ")
      }
    >
      <Icon size={15} strokeWidth={1.8} aria-hidden />
      {children}
    </NavLink>
  )
}

export default function Menu() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white">
      <nav className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-4">
        {/* Logo / home */}
        <Link
          to="/"
          className="mr-4 shrink-0 text-base font-bold tracking-tight text-stone-800"
        >
          Bucleo
        </Link>

        {/* Tools group */}
        <div className="flex items-center gap-1">
          <span className="mr-1 text-xs font-semibold tracking-wider text-stone-300 uppercase">
            Tools
          </span>
          <NavItem
            to="/instructional-design/learning-objectives"
            icon={BookOpenCheck}
          >
            Objectives
          </NavItem>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-stone-200" aria-hidden />

        {/* Taxonomy group */}
        <div className="flex items-center gap-1">
          <span className="mr-1 text-xs font-semibold tracking-wider text-stone-300 uppercase">
            Taxonomy
          </span>
          <NavItem to="/taxonomy" icon={BookOpen}>
            Overview
          </NavItem>
          <NavItem to="/taxonomy/knowledge-dimensions" icon={Layers}>
            Dimensions
          </NavItem>
          <NavItem to="/taxonomy/cognitive-levels" icon={GraduationCap}>
            Levels
          </NavItem>
        </div>
      </nav>
    </header>
  )
}
