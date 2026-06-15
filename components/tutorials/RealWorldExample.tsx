interface RealWorldExampleProps {
  title: string;
  children: React.ReactNode;
}

export default function RealWorldExample({
  title,
  children,
}: RealWorldExampleProps) {
  return (
    <div className="my-8 rounded-xl border border-green-200 bg-green-50 p-6">
      <h4 className="mb-4 text-xl font-bold text-gray-900">
        Real Project Example: {title}
      </h4>

      <div
        className="
    space-y-2
    text-gray-700
    leading-7

    [&_p]:mb-2

    [&_ul]:list-disc
    [&_ul]:pl-6
    [&_ul]:mb-2
    [&_ul]:space-y-0.5

    [&_ol]:list-decimal
    [&_ol]:pl-6
    [&_ol]:mb-2
    [&_ol]:space-y-0.5

    [&_li]:leading-6

    [&_h4]:font-semibold
    [&_h4]:text-lg
    [&_h4]:text-gray-900
    [&_h4]:mt-4
    [&_h4]:mb-2
  "
      >
        {children}
      </div>
    </div>
  );
}
