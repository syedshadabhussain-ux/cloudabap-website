"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCode } from "react-icons/fa";

const sections = [
  {
    title: "Getting Started",
    lessons: [
      {
        title: "Create Your First CDS View Entity",
        slug: "first-cds-view-entity",
      },
      {
        title: "Business Semantic Data Elements",
        slug: "business-semantic-data-elements",
      },
      {
        title: "Understanding Built-in Data Types",
        slug: "built-in-data-types",
      },
    ],
  },

  {
    title: "Expressions",
    lessons: [
      {
        title: "CAST Expressions",
        slug: "cast-expressions",
      },
      {
        title: "CASE Expressions",
        slug: "case-expressions",
      },
      {
        title: "COALESCE Expression",
        slug: "coalesce-expression",
      },
    ],
  },

  {
    title: "Functions",
    lessons: [
      {
        title: "String Functions",
        slug: "string-functions",
      },
      {
        title: "Numeric Functions",
        slug: "numeric-functions",
      },
      {
        title: "Date & Time Functions",
        slug: "date-time-functions",
      },
      {
        title: "Conversion Functions",
        slug: "conversion-funtions",
      },
    ],
  },

  {
    title: "Associations",
    lessons: [
      {
        title: "Why Associations",
        slug: "association",
      },
      {
        title: "First Association",
        slug: "association-first-association",
      },
      {
        title: "Navigation",
        slug: "association-navigation",
      },
      {
        title: "Cardinality",
        slug: "association-cardinality",
      },
      {
        title: "To-One vs To-Many",
        slug: "association-to-one-vs-to-many",
      },
      {
        title: "Lazy Loading",
        slug: "association-lazy-loading",
      },
      {
        title: "Generated SQL",
        slug: "association-generated-sql",
      },
      {
        title: "Association vs JOIN",
        slug: "association-vs-join",
      },
      {
        title: "Advanced Patterns",
        slug: "association-advanced-patterns",
      },
      {
        title: "Performance Best Practices",
        slug: "association-performance-best-practices",
      },
    ],
  },

  {
    title: "Aggregation",
    lessons: [
      {
        title: "Aggregate Functions, GROUP BY & HAVING",
        slug: "aggregate-functions-group-by-having",
      },
    ],
  },

  {
    title: "Advanced CDS",
    lessons: [
      {
        title: "Session Variables, Parameters & UNION",
        slug: "session-variables-parameters-union",
      },
    ],
  },
];

export default function CDSViewEntitySidebar() {
  const pathname = usePathname();

  const totalLessons = sections.reduce(
    (count, section) => count + section.lessons.length,
    0,
  );

  let lessonNumber = 1;

  return (
    <div className="sticky top-24">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <FaCode className="text-blue-600" />
            CDS View Entity
          </h3>

          <p className="mt-1 text-sm text-gray-500">{totalLessons} Tutorials</p>

          <p className="text-xs text-gray-400">Beginner → Architect</p>
        </div>

        <div className="p-3">
          {sections.map((section) => (
            <div key={section.title} className="mb-4">
              <div className="mb-2 border-b border-gray-100 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                {section.title}
              </div>

              {section.lessons.map((lesson) => {
                const currentLesson = lessonNumber++;
                const href = `/tutorials/rap/cds-view-entity/${lesson.slug}`;
                const active = pathname === href;

                return (
                  <Link
                    key={lesson.slug}
                    href={href}
                    className={`mb-2 flex items-start gap-3 rounded-2xl p-3 transition ${
                      active
                        ? "border border-blue-200 bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        active
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {currentLesson}
                    </div>

                    <div>
                      <div
                        className={`mb-1 text-xs font-semibold uppercase tracking-wide ${
                          active ? "text-blue-600" : "text-gray-500"
                        }`}
                      >
                        Lesson {currentLesson}
                      </div>

                      <div
                        className={`text-sm font-medium leading-4 ${
                          active ? "text-blue-700" : "text-gray-800"
                        }`}
                      >
                        {lesson.title}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
