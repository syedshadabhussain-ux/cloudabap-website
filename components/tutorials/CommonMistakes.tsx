interface CommonMistakesProps {
  title?: string;
  items: string[];
}

export default function CommonMistakes({
  title = "Common Mistakes",
  items,
}: CommonMistakesProps) {
  return (
    <div className="my-8 rounded-2xl border border-red-200 bg-red-50 p-6">
      <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-red-700">
        ❌ {title}
      </h3>

      <ul className="list-disc space-y-3 pl-6 text-gray-800">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
