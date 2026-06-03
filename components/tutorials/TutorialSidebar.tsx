"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookOpen } from "react-icons/fa";

const lessons = [
  {
    title: "Introduction to RAP",
    slug: "introduction-to-rap",
  },
  {
    title: "CDS View Entity",
    slug: "cds-view-entity",
  },
  {
    title: "Associations",
    slug: "associations",
  },
  {
    title: "Composition",
    slug: "composition",
  },
  {
    title: "Metadata Extensions",
    slug: "metadata-extensions",
  },
  {
    title: "Service Definition",
    slug: "service-definition",
  },
  {
    title: "Service Binding",
    slug: "service-binding",
  },
  {
    title: "First RAP Application",
    slug: "first-rap-application",
  },
];

export default function TutorialSidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <FaBookOpen className="text-purple-600" />
            RAP Fundamentals
          </h3>

          <p className="text-sm text-gray-500 mt-2">8 Lessons</p>
        </div>

        <div className="p-3">
          {lessons.map((lesson, index) => {
            const isActive =
              pathname === `/tutorials/rap/fundamentals/${lesson.slug}`;

            return (
              <Link
                key={lesson.slug}
                href={`/tutorials/rap/fundamentals/${lesson.slug}`}
                className={`flex items-start gap-3 p-4 rounded-2xl transition mb-2
                  ${
                    isActive
                      ? "bg-purple-50 border border-purple-200"
                      : "hover:bg-gray-50"
                  }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0
                  ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>

                <div>
                  <div
                    className={`text-xs font-semibold uppercase tracking-wide mb-1
                    ${isActive ? "text-purple-600" : "text-gray-500"}`}
                  >
                    Lesson {index + 1}
                  </div>

                  <div
                    className={`text-sm font-medium leading-5
                    ${isActive ? "text-purple-700" : "text-gray-800"}`}
                  >
                    {lesson.title}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
