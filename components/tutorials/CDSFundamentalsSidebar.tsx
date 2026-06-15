"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookOpen } from "react-icons/fa";

const lessons = [
  {
    title: "What Are Core Data Services (CDS)?",
    slug: "what-is-cds",
  },
  {
    title: "Why SAP Introduced CDS",
    slug: "why-cds-introduced",
  },
  {
    title: "Evolution to SAP HANA",
    slug: "sap-hana-evolution",
  },
  {
    title: "Row Store vs Column Store",
    slug: "row-vs-column-store",
  },
  {
    title: "Data Compression in SAP HANA",
    slug: "hana-compression",
  },
  {
    title: "Parallel Processing in SAP HANA",
    slug: "parallel-processing",
  },
  {
    title: "CDS, Open SQL and AMDP",
    slug: "cds-opensql-amdp",
  },
  {
    title: "DDL, QL and DCL",
    slug: "ddl-ql-dcl",
  },
  {
    title: "Virtual Data Model (VDM)",
    slug: "virtual-data-model",
  },
  {
    title: "CDS Foundation of RAP",
    slug: "cds-foundation-of-rap",
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
            CDS Fundamentals
          </h3>

          <p className="text-sm text-gray-500 mt-2">10 Lessons</p>
        </div>

        <div className="p-3">
          {lessons.map((lesson, index) => {
            const isActive =
              pathname === `/tutorials/rap/cds-fundamentals/${lesson.slug}`;

            return (
              <Link
                key={lesson.slug}
                href={`/tutorials/rap/cds-fundamentals/${lesson.slug}`}
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
