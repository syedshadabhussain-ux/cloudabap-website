interface InterviewQuestionProps {
  question: string;
  answer: string;
  followup?: string;
  level?: "Beginner" | "Experienced" | "Architect";
}

export default function InterviewQuestion({
  question,
  answer,
  followup,
  level = "Beginner",
}: InterviewQuestionProps) {
  const levelStyles = {
    Beginner: "bg-green-100 text-green-700",
    Experienced: "bg-amber-100 text-amber-700",
    Architect: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-200 bg-slate-50">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${levelStyles[level]}`}
        >
          {level}
        </span>

        <span className="text-base font-semibold text-slate-700">
          Interview Question
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-semibold text-slate-900 leading-8 mb-4">
          {question}
        </h4>

        <p className="text-base text-slate-700 leading-7">
          <span className="font-semibold text-slate-900">Answer:</span> {answer}
        </p>

        {followup && (
          <div className="mt-5 pt-5 border-t border-slate-200">
            <p className="text-base text-slate-700 leading-7">
              <span className="font-semibold text-slate-900">
                Architect Note:
              </span>{" "}
              {followup}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
