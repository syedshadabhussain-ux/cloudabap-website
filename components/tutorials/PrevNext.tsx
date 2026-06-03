import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  prevTitle?: string;
  prevHref?: string;

  nextTitle?: string;
  nextHref?: string;
};

export default function PrevNext({
  prevTitle,
  prevHref,
  nextTitle,
  nextHref,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-16">
      <div>
        {prevHref && (
          <Link
            href={prevHref}
            className="block border rounded-2xl p-6 hover:shadow-md transition"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <FaArrowLeft />
              Previous Lesson
            </div>

            <div className="font-semibold text-lg">{prevTitle}</div>
          </Link>
        )}
      </div>

      <div>
        {nextHref && (
          <Link
            href={nextHref}
            className="block border rounded-2xl p-6 hover:shadow-md transition text-right"
          >
            <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-2">
              Next Lesson
              <FaArrowRight />
            </div>

            <div className="font-semibold text-lg">{nextTitle}</div>
          </Link>
        )}
      </div>
    </div>
  );
}
