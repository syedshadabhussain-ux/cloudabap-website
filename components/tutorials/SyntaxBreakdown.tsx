import { ReactNode } from "react";

interface SyntaxItem {
  syntax: string;
  meaning: string;
  details?: string;
}

interface SyntaxBreakdownProps {
  title?: string;
  subtitle?: string;
  syntax: string;
  items: SyntaxItem[];
  children?: ReactNode;
}

export default function SyntaxBreakdown({
  title = "Syntax Breakdown",
  subtitle = "Understand every keyword before writing code.",
  syntax,
  items,
  children,
}: SyntaxBreakdownProps) {
  return (
    <div className="my-10 overflow-hidden rounded-xl border border-indigo-200 bg-white shadow-sm">
      {/* Header */}

      <div className="bg-linear-to-r from-indigo-700 via-blue-700 to-sky-700 px-6 py-5">
        <h2 className="text-2xl font-bold text-white">{title}</h2>

        <p className="mt-2 text-indigo-100">{subtitle}</p>
      </div>

      {/* Complete Syntax */}

      <div className="border-b bg-slate-900 px-6 py-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Complete Syntax
        </p>

        <code className="font-mono text-lg text-green-400">{syntax}</code>
      </div>

      {/* Breakdown */}

      <div className="divide-y">
        {items.map((item, index) => (
          <div
            key={index}
            className="grid gap-4 px-6 py-5 md:grid-cols-[220px_1fr]"
          >
            <div>
              <code className="rounded bg-indigo-50 px-3 py-1 font-mono text-indigo-700">
                {item.syntax}
              </code>
            </div>

            <div>
              <p className="font-semibold text-slate-900">{item.meaning}</p>

              {item.details && (
                <p className="mt-2 leading-7 text-slate-600">{item.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Optional Content */}

      {children && (
        <div className="border-t bg-slate-50 px-6 py-6">{children}</div>
      )}

      {/* Footer */}

      <div className="border-t bg-slate-50 px-6 py-3">
        <p className="text-center text-sm text-slate-500">
          Understanding the syntax is the first step toward writing better ABAP
          CDS.
        </p>
      </div>
    </div>
  );
}
