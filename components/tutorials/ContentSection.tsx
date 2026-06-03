interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ContentSection({
  title,
  children,
}: ContentSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>

      <div className="prose prose-lg max-w-none text-gray-700">{children}</div>
    </section>
  );
}
