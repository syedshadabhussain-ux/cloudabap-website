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
      <h4 className="mb-3 font-bold text-lg">Real Project Example: {title}</h4>

      {children}
    </div>
  );
}
