interface KeyTakeawayProps {
  children: React.ReactNode;
}

export default function KeyTakeaway({ children }: KeyTakeawayProps) {
  return (
    <div className="my-8 rounded-xl border border-yellow-300 bg-yellow-50 p-6">
      <h4 className="mb-4 font-bold text-lg">💡 Key Takeaway</h4>

      <div className="border-l-4 border-yellow-500 pl-4 space-y-3 text-gray-800">
        {children}
      </div>
    </div>
  );
}
