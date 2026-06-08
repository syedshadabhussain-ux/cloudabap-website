interface KeyTakeawayProps {
  children: React.ReactNode;
}

export default function KeyTakeaway({ children }: KeyTakeawayProps) {
  return (
    <div className="my-8 rounded-xl border border-yellow-300 bg-yellow-50 p-6">
      <h4 className="mb-3 font-bold text-lg">Key Takeaway</h4>

      {children}
    </div>
  );
}
