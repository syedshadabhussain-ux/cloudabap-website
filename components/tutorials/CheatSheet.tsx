import { ReactNode } from "react";

interface CheatSheetProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  stats?: string;
  children: ReactNode;
}

export default function CheatSheet({
  title,
  subtitle = "Developer Reference",
  description = "Keep this reference handy while building production-ready CDS View Entities. It summarizes the most important concepts from this lesson for quick lookup during development.",
  icon = "📘",
  stats,
  children,
}: CheatSheetProps) {
  return (
    <div className="my-12 overflow-hidden rounded-xl border border-blue-200 bg-white shadow-sm">
      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-6 py-4">
        <div className="flex items-center gap-4">
          {/* Icon */}

          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 text-2xl">
            {icon}
          </div>

          {/* Heading */}

          <div className="flex-1">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100">
              {subtitle}
            </span>

            <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>

            {stats && <p className="mt-1 text-sm text-blue-100">{stats}</p>}
          </div>
        </div>
      </div>

      {/* Description */}

      <div className="border-b bg-blue-50 px-6 py-3">
        <p className="text-sm leading-6 text-slate-700">{description}</p>
      </div>

      {/* Content */}

      <div className="overflow-hidden bg-white">{children}</div>
    </div>
  );
}
