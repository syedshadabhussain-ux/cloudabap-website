export default function CDSViewEntityPage() {
  const sections = [
    {
      title: "Getting Started",
      tutorials: [
        {
          title: "Create Your First CDS View Entity",
          slug: "first-cds-view-entity",
          duration: "20 min",
        },
        {
          title: "Business Semantic Data Elements",
          slug: "business-semantic-data-elements",
          duration: "20 min",
        },
        {
          title: "Understanding Built-in Data Types",
          slug: "built-in-data-types",
          duration: "40 min",
        },
      ],
    },

    {
      title: "Expressions",
      tutorials: [
        {
          title: "CAST Expressions",
          slug: "cast-expressions",
          duration: "40 min",
        },
        {
          title: "CASE Expressions",
          slug: "case-expressions",
          duration: "40 min",
        },
        {
          title: "COALESCE Expression",
          slug: "coalesce-expression",
          duration: "20 min",
        },
      ],
    },

    {
      title: "Functions",
      tutorials: [
        {
          title: "String Functions",
          slug: "string-functions",
          duration: "35 min",
        },
        {
          title: "Numeric Functions",
          slug: "numeric-functions",
          duration: "35 min",
        },
        {
          title: "Date & Time Functions",
          slug: "date-time-functions",
          duration: "35 min",
        },
        {
          title: "Conversion Functions",
          slug: "conversion-functions",
          duration: "45 min",
        },
      ],
    },

    {
      title: "Associations",
      tutorials: [
        {
          title: "Why Associations",
          slug: "association",
          duration: "20 min",
        },
        {
          title: "First Association",
          slug: "association-first-association",
          duration: "25 min",
        },
        {
          title: "Association Navigation",
          slug: "association-navigation",
          duration: "25 min",
        },
        {
          title: "Association Cardinality",
          slug: "association-cardinality",
          duration: "40 min",
        },
        {
          title: "To-One vs To-Many",
          slug: "association-to-one-vs-to-many",
          duration: "30 min",
        },
        {
          title: "Lazy Loading",
          slug: "association-lazy-loading",
          duration: "25 min",
        },
        {
          title: "Generated SQL",
          slug: "association-generated-sql",
          duration: "20 min",
        },
        {
          title: "Association vs JOIN",
          slug: "association-vs-join",
          duration: "40 min",
        },
        {
          title: "Advanced Patterns",
          slug: "association-advanced-patterns",
          duration: "30 min",
        },
        {
          title: "Performance Best Practices",
          slug: "association-performance-best-practices",
          duration: "30 min",
        },
      ],
    },

    {
      title: "Aggregation",
      tutorials: [
        {
          title: "Aggregate Functions, GROUP BY & HAVING",
          slug: "aggregate-functions-group-by-having",
          duration: "60 min",
        },
      ],
    },

    {
      title: "Advanced CDS",
      tutorials: [
        {
          title: "Session Variables, Parameters & UNION",
          slug: "session-variables-parameters-union",
          duration: "90 min",
        },
      ],
    },
  ];

  let lessonNumber = 1;

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
        CDS View Entity
      </span>

      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        ABAP CDS View Entity
      </h1>

      <p className="text-xl text-gray-600 mb-12 max-w-4xl">
        Build ABAP CDS View Entities with step-by-step tutorials on data types,
        expressions, functions, associations, aggregation and advanced modeling
        techniques.
      </p>

      {sections.map((section) => (
        <div key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            {section.title}
          </h2>

          <div className="space-y-4">
            {section.tutorials.map((tutorial) => (
              <a
                key={tutorial.slug}
                href={`/tutorials/rap/cds-view-entity/${tutorial.slug}`}
                className="block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-teal-600 font-semibold mb-2">
                      LESSON {lessonNumber++}
                    </div>

                    <h2 className="text-2xl font-bold">{tutorial.title}</h2>
                  </div>

                  <div className="text-gray-500 text-sm">
                    {tutorial.duration}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
