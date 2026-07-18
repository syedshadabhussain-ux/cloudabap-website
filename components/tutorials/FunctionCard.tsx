import { ReactNode } from "react";

interface FunctionCardProps {
  name: string;
  syntax: string;
  purpose: string;

  category?: string;

  returns?: string;

  supportedTypes?: string[];

  architectTip?: string;

  codePushdown?: boolean;

  children: ReactNode;
}

export default function FunctionCard({
  name,
  syntax,
  purpose,
  category,
  returns,
  supportedTypes,
  architectTip,
  codePushdown = true,
  children,
}: FunctionCardProps) {
  return (
    <div className="my-10 overflow-hidden rounded-xl border border-slate-200 border-t-4 border-t-blue-600 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b bg-slate-50 px-6 py-5">
        {category && (
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            {category}
          </span>
        )}

        <h3 className="text-3xl font-bold text-slate-900">{name}</h3>

        <p className="mt-2 text-slate-600 leading-7">{purpose}</p>
      </div>

      {/* Syntax */}
      <div className="border-b bg-slate-900 px-6 py-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            ABAP CDS Syntax
          </p>

          <button
            className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-300 hover:bg-slate-700"
            disabled
            title="Copy (Coming Soon)"
          >
            📋
          </button>
        </div>

        <code className="font-mono text-lg text-green-400">{syntax}</code>
      </div>

      {/* Metadata */}

      {(returns || codePushdown) && (
        <div className="grid gap-4 border-b bg-slate-50 px-6 py-4 md:grid-cols-2">
          {returns && (
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Returns
              </p>

              <p className="mt-1 font-semibold text-slate-800">{returns}</p>
            </div>
          )}

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Code Pushdown
            </p>

            <p className="mt-1 font-semibold text-green-600">
              {codePushdown ? "✅ Supported" : "❌ No"}
            </p>
          </div>
        </div>
      )}

      {/* Supported Types */}

      {supportedTypes && supportedTypes.length > 0 && (
        <div className="border-b px-6 py-4">
          <p className="mb-3 text-sm font-semibold text-slate-700">
            Supported Types
          </p>

          <div className="flex flex-wrap gap-2">
            {supportedTypes.map((type) => (
              <span
                key={type}
                className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Architect Tip */}

      {architectTip && (
        <div className="border-b bg-amber-50 px-6 py-4">
          <div className="flex gap-3">
            <div className="text-xl">💡</div>

            <div>
              <p className="font-semibold text-amber-900">Architect Tip</p>

              <p className="mt-1 text-amber-800 leading-7">{architectTip}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}

      <div className="space-y-6 px-6 py-6">{children}</div>
    </div>
  );
}
