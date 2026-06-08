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
  return (
    <div className="my-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
          {level}
        </span>

        <h4 className="font-bold text-lg">Interview Question</h4>
      </div>

      <p className="mb-3">
        <strong>Q:</strong> {question}
      </p>

      <p className="mb-3">
        <strong>Answer:</strong> {answer}
      </p>

      {followup && (
        <p className="text-gray-700">
          <strong>Follow-Up:</strong> {followup}
        </p>
      )}
    </div>
  );
}
