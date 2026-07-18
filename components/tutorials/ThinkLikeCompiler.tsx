import { ReactNode } from "react";

interface ThinkLikeCompilerProps {
  title: string;
  thought: string;
  steps: string[];
  decision: string;
  performanceTip?: string;
  children?: ReactNode;
}

export default function ThinkLikeCompiler({
  title,
  thought,
  steps,
  decision,
  performanceTip,
  children,
}: ThinkLikeCompilerProps) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm">
      {/* Header */}

      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-3xl backdrop-blur-sm">
            🧠
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-100">
              INSIDE THE CDS COMPILER
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white">{title}</h2>
          </div>
        </div>
      </div>

      {/* Thought */}

      <div className="border-b bg-orange-50 px-6 py-5">
        <h3 className="mb-3 text-lg font-semibold text-orange-800">
          💭 Compiler Thought Process
        </h3>

        <p className="leading-8 text-slate-700">{thought}</p>
      </div>

      {/* Decision Flow */}

      <div className="px-6 py-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="mb-6 text-xl font-bold text-slate-900">
            Compiler Decision Flow
          </h3>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-5 pb-6 last:pb-0">
                {/* Vertical Connector */}

                {index !== steps.length - 1 && (
                  <div className="absolute left-4 top-9 h-full w-0.5 bg-orange-200"></div>
                )}

                {/* Step Number */}

                <div className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-sm">
                  {index + 1}
                </div>

                {/* Step */}

                <div className="pt-1">
                  <p className="leading-7 text-slate-700">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Decision */}

      <div className="border-t bg-green-50 px-6 py-5">
        <h3 className="mb-3 text-xl font-bold text-green-700">
          ✅ Final Compiler Decision
        </h3>

        <div className="rounded-lg border border-green-200 bg-white p-4">
          <p className="font-medium leading-7 text-slate-800">{decision}</p>
        </div>
      </div>

      {/* SQL Optimization */}

      {performanceTip && (
        <div className="border-t bg-blue-50 px-6 py-5">
          <h3 className="mb-3 text-xl font-bold text-blue-700">
            ⚡ SQL Optimization Insight
          </h3>

          <div className="rounded-lg border border-blue-200 bg-white p-4">
            <p className="leading-7 text-slate-700">{performanceTip}</p>
          </div>
        </div>
      )}

      {/* Optional Additional Content */}

      {children && <div className="border-t px-6 py-6">{children}</div>}
    </div>
  );
}
