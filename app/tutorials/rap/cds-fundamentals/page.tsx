export default function CDSFundamentalsPage() {
  const tutorials = [
    {
      title: "What Are Core Data Services (CDS)?",
      slug: "what-is-cds",
      duration: "15 min",
    },
    {
      title: "Why SAP Introduced CDS and the Code Pushdown Paradigm",
      slug: "why-cds-introduced",
      duration: "15 min",
    },
    {
      title:
        "Evolution from Traditional Databases to SAP HANA In-Memory Computing",
      slug: "sap-hana-evolution",
      duration: "20 min",
    },
    {
      title: "Row Store vs Column Store",
      slug: "row-vs-column-store",
      duration: "20 min",
    },
    {
      title: "Data Compression in SAP HANA",
      slug: "hana-compression",
      duration: "20 min",
    },
    {
      title: "Parallel Processing in SAP HANA",
      slug: "parallel-processing",
      duration: "20 min",
    },
    {
      title: "CDS, Open SQL, and AMDP: The Three Pillars of Code Pushdown",
      slug: "code-pushdown",
      duration: "20 min",
    },
    {
      title: "CDS Language Components: Understanding DDL, QL, and DCL",
      slug: "cds-language-components",
      duration: "20 min",
    },
    {
      title: "Virtual Data Model (VDM)",
      slug: "virtual-data-model",
      duration: "25 min",
    },
    {
      title: "Why CDS Is the Foundation of RAP and Modern SAP Development",
      slug: "cds-foundation-of-rap",
      duration: "20 min",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
        CDS Fundamentals
      </span>

      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        CDS Fundamentals & Architecture
      </h1>

      <p className="text-xl text-gray-600 mb-12 max-w-4xl">
        Learn the architectural foundations behind CDS, SAP HANA, Code Pushdown,
        Virtual Data Models (VDM), and the technologies that make CDS the
        strategic data modeling layer for SAP S/4HANA and RAP development.
      </p>

      <div className="space-y-4">
        {tutorials.map((tutorial, index) => (
          <a
            key={tutorial.slug}
            href={`/tutorials/rap/cds-fundamentals/${tutorial.slug}`}
            className="block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  LESSON {index + 1}
                </div>

                <h2 className="text-2xl font-bold">{tutorial.title}</h2>
              </div>

              <div className="text-gray-500 text-sm">{tutorial.duration}</div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
