interface OutputPreviewProps {
  title?: string;
  children: React.ReactNode;
}

export default function OutputPreview({
  title = "Expected Output",
  children,
}: OutputPreviewProps) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-green-200 shadow-sm">
      <div className="border-b border-green-200 bg-green-50 px-6 py-4">
        <h3 className="flex items-center gap-2 text-xl font-bold text-green-700">
          ✅ {title}
        </h3>
      </div>

      <div className="bg-white p-6">{children}</div>
    </div>
  );
}
