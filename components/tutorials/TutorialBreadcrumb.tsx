import Link from "next/link";
import { FaChevronRight, FaHome } from "react-icons/fa";

type Props = {
  category: string;
  path: string;
};

export default function TutorialBreadcrumb({ category, path }: Props) {
  return (
    <nav className="flex items-center flex-wrap gap-3 text-sm mb-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition"
      >
        <FaHome className="text-xs" />
        Home
      </Link>

      <FaChevronRight className="text-xs text-gray-400" />

      <Link
        href="/tutorials"
        className="text-gray-500 hover:text-blue-600 transition"
      >
        Tutorials
      </Link>

      <FaChevronRight className="text-xs text-gray-400" />

      <Link
        href="/tutorials/rap"
        className="text-gray-500 hover:text-purple-600 transition"
      >
        RAP
      </Link>

      <FaChevronRight className="text-xs text-gray-400" />

      <Link
        href={path}
        className="font-medium text-purple-600 hover:text-purple-700 transition"
      >
        {category}
      </Link>
    </nav>
  );
}
