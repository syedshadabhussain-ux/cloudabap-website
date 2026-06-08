interface ArchitectNoteProps {
  children: React.ReactNode;
}

export default function ArchitectNote({ children }: ArchitectNoteProps) {
  return (
    <div className="my-8 border-l-4 border-indigo-600 bg-indigo-50 p-6">
      <h4 className="mb-3 font-bold text-lg">Architect Perspective</h4>

      {children}
    </div>
  );
}
