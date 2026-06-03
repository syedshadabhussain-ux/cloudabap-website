type TableBlockProps = {
  title?: string;
  headers: string[];
  rows: string[][];
};

export default function TableBlock({ title, headers, rows }: TableBlockProps) {
  return (
    <div className="mb-10">
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      )}

      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="min-w-full">
          <thead className="bg-purple-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 text-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
