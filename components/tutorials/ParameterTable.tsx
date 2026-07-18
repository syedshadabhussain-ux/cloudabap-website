interface Parameter {
  name: string;
  required?: boolean;
  type: string;
  description: string;
  defaultValue?: string;
  example?: string;
}

interface ParameterTableProps {
  title?: string;
  description?: string;
  parameters: Parameter[];
}

export default function ParameterTable({
  title = "Parameter Reference",
  description = "The following table describes all supported parameters for this function.",
  parameters,
}: ParameterTableProps) {
  return (
    <div className="my-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}

      <div className="border-b bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-2xl">
            ⚙️
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>

            <p className="mt-1 text-sm text-slate-300">{description}</p>
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-5 py-4 text-left font-semibold">Parameter</th>

              <th className="px-5 py-4 text-center font-semibold">Required</th>

              <th className="px-5 py-4 text-left font-semibold">Type</th>

              <th className="px-5 py-4 text-left font-semibold">Default</th>

              <th className="px-5 py-4 text-left font-semibold">Description</th>

              <th className="px-5 py-4 text-left font-semibold">Example</th>
            </tr>
          </thead>

          <tbody>
            {parameters.map((parameter, index) => (
              <tr
                key={parameter.name}
                className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                {/* Parameter */}

                <td className="border-t px-5 py-4">
                  <code className="rounded-md bg-blue-50 px-2 py-1 font-mono text-sm font-semibold text-blue-700">
                    {parameter.name}
                  </code>
                </td>

                {/* Required */}

                <td className="border-t px-5 py-4 text-center">
                  {parameter.required ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      Required
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                      Optional
                    </span>
                  )}
                </td>

                {/* Type */}

                <td className="border-t px-5 py-4">
                  <span className="rounded-md bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700">
                    {parameter.type}
                  </span>
                </td>

                {/* Default */}

                <td className="border-t px-5 py-4 text-slate-700">
                  {parameter.defaultValue ?? "—"}
                </td>

                {/* Description */}

                <td className="border-t px-5 py-4 text-slate-700 leading-7">
                  {parameter.description}
                </td>

                {/* Example */}

                <td className="border-t px-5 py-4">
                  {parameter.example ? (
                    <code className="rounded bg-slate-100 px-2 py-1 font-mono text-sm text-slate-700">
                      {parameter.example}
                    </code>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
