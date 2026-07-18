import { FaRocket, FaArrowRight } from "react-icons/fa";

export default function RAPPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}

      <section className="mb-14">
        <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
          RAP Development
        </span>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          RAP Learning Paths
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl leading-8">
          Learn SAP RAP step-by-step from CDS Views and Behavior Definitions to
          Draft Handling, EML and SAP S/4HANA Public Cloud extensibility.
        </p>
      </section>

      {/* Learning Paths */}

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fundamentals */}

          <a
            href="/tutorials/rap/fundamentals"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-500"
          >
            <h3 className="text-2xl font-bold mb-4">RAP Fundamentals</h3>

            <p className="text-gray-600 mb-6">
              CDS Views, Behavior Definitions, Service Definitions and Service
              Bindings.
            </p>

            <div className="text-purple-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* CDS Fundamentals */}

          <a
            href="/tutorials/rap/cds-fundamentals"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-sky-500"
          >
            <h3 className="text-2xl font-bold mb-4">CDS Fundamentals</h3>

            <p className="text-gray-600 mb-6">
              Learn CDS architecture, SAP HANA concepts, Code Pushdown, VDM,
              data modeling and CDS design principles.
            </p>

            <div className="text-sky-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* CDS View Entity */}

          <a
            href="/tutorials/rap/cds-view-entity"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-teal-500"
          >
            <h3 className="text-2xl font-bold mb-4">CDS View Entity</h3>

            <p className="text-gray-600 mb-6">
              Build CDS View Entities with step-by-step tutorials on
              expressions, functions, associations and data modeling techniques.
            </p>

            <div className="text-teal-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* Managed RAP */}

          <a
            href="/tutorials/rap/managed"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-500"
          >
            <h3 className="text-2xl font-bold mb-4">Managed RAP</h3>

            <p className="text-gray-600 mb-6">
              Actions, Determinations, Validations, Side Effects and Business
              Objects.
            </p>

            <div className="text-blue-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* Draft */}

          <a
            href="/tutorials/rap/draft"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-green-500"
          >
            <h3 className="text-2xl font-bold mb-4">Draft Handling</h3>

            <p className="text-gray-600 mb-6">
              Draft Enablement, Edit Mode, Activation Process and Best
              Practices.
            </p>

            <div className="text-green-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* EML */}

          <a
            href="/tutorials/rap/eml"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-500"
          >
            <h3 className="text-2xl font-bold mb-4">EML</h3>

            <p className="text-gray-600 mb-6">
              Read Entity, Modify Entity, Deep Insert and Transaction
              Processing.
            </p>

            <div className="text-orange-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* API Integration */}

          <a
            href="/tutorials/rap/api"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-cyan-500"
          >
            <h3 className="text-2xl font-bold mb-4">API Integration</h3>

            <p className="text-gray-600 mb-6">
              SAP Released APIs, OData services, REST integration and API Hub
              usage.
            </p>

            <div className="text-cyan-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* Custom Entity */}

          <a
            href="/tutorials/rap/custom-entity"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-indigo-500"
          >
            <h3 className="text-2xl font-bold mb-4">Custom Entities</h3>

            <p className="text-gray-600 mb-6">
              Query Providers, virtual entities, external data and custom
              reporting.
            </p>

            <div className="text-indigo-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* Unmanaged RAP */}

          <a
            href="/tutorials/rap/unmanaged"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-red-500"
          >
            <h3 className="text-2xl font-bold mb-4">Unmanaged RAP</h3>

            <p className="text-gray-600 mb-6">
              Legacy integration, custom persistence, save sequence and
              unmanaged scenarios.
            </p>

            <div className="text-red-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* Public Cloud */}

          <a
            href="/tutorials/rap/public-cloud"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-pink-500"
          >
            <h3 className="text-2xl font-bold mb-4">RAP Public Cloud</h3>

            <p className="text-gray-600 mb-6">
              Released APIs, Developer Extensibility, Clean Core and SAP S/4HANA
              Cloud.
            </p>

            <div className="text-pink-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* Performance */}

          <a
            href="/tutorials/rap/performance"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-emerald-500"
          >
            <h3 className="text-2xl font-bold mb-4">RAP Best Practices</h3>

            <p className="text-gray-600 mb-6">
              Debugging, Optimization, Runtime Analysis and RAP Best Practices.
            </p>

            <div className="text-emerald-600 font-semibold flex items-center">
              Start Learning
              <FaArrowRight className="ml-2" />
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
