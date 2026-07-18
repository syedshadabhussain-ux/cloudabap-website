interface BestPracticeProps {
  title?: string;
  children: React.ReactNode;
}

export default function BestPractice({
  title = "SAP Best Practice",
  children,
}: BestPracticeProps) {
  return (
    <div className="my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-emerald-700">
        💡 {title}
      </h3>

      <div className="space-y-4 text-gray-800">{children}</div>
    </div>
  );
}
