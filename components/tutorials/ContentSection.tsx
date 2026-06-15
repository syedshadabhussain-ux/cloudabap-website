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
      <h2 className="text-3xl font-bold text-gray-900 mb-5">{title}</h2>

      <div
        className="
          space-y-2
          text-gray-700
          leading-7

          [&_strong]:font-semibold

          [&_ul]:list-disc
          [&_ul]:pl-5
          [&_ul]:space-y-0.5
          [&_ul]:my-2

          [&_ol]:list-decimal
          [&_ol]:pl-5
          [&_ol]:space-y-0.5
          [&_ol]:my-2

          [&_li]:leading-6
          [&_li]:mb-0

          [&_p]:mb-2
        "
      >
        {children}
      </div>
    </section>
  );
}
