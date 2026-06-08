export default function RAPFundamentalsPage() {
  const tutorials = [
    {
      title: "Introduction to RAP and ABAP Cloud",
      slug: "introduction-to-rap-and-abap-cloud",
      duration: "25 min",
    },
    {
      title: "CDS View Entity",
      slug: "cds-view-entity",
      duration: "20 min",
    },
    {
      title: "Associations",
      slug: "associations",
      duration: "15 min",
    },
    {
      title: "Composition",
      slug: "composition",
      duration: "15 min",
    },
    {
      title: "Metadata Extensions",
      slug: "metadata-extensions",
      duration: "10 min",
    },
    {
      title: "Service Definition",
      slug: "service-definition",
      duration: "10 min",
    },
    {
      title: "Service Binding",
      slug: "service-binding",
      duration: "10 min",
    },
    {
      title: "Create First RAP Application",
      slug: "first-rap-application",
      duration: "30 min",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
        RAP Fundamentals
      </span>

      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        RAP Fundamentals Learning Path
      </h1>

      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        Learn the building blocks of RAP development from CDS Views to your
        first end-to-end RAP Business Object.
      </p>

      <div className="space-y-4">
        {tutorials.map((tutorial, index) => (
          <a
            key={tutorial.slug}
            href={`/tutorials/rap/fundamentals/${tutorial.slug}`}
            className="block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-purple-600 font-semibold mb-2">
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
