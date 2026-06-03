import {
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaDownload,
  FaGithub,
  FaSearch,
  FaPlayCircle,
  FaBook,
  FaCloud,
  FaDatabase,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaFileCode,
  FaArrowRight,
  FaHome,
  FaUserTie,
  FaCalendarAlt,
  FaClock,
  FaFolderOpen,
  FaRocket,
} from "react-icons/fa";
export default function TutorialsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <section className="mb-14">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
          Tutorials
        </span>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          SAP Tutorial Library
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl leading-8">
          Browse implementation guides, code samples and tutorials covering RAP,
          ABAP Cloud, CAP, UI5, SAP BTP and CDS Views.
        </p>
      </section>

      {/* Learning Paths */}
      <section className="mb-24">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* RAP */}

          <a
            href="/tutorials/rap"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-500 flex flex-col"
          >
            <FaRocket className="text-4xl text-purple-600 mb-5" />

            <div className="mb-6">
              <span className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3">RAP Development</h3>

            <p className="text-gray-600 mb-6">
              CDS Views, Behavior Definitions, Actions, Determinations and Draft
              Handling in RAP.
            </p>

            <div className="flex items-center text-purple-600 font-semibold">
              Browse Tutorials
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* ABAP Cloud */}

          <a
            href="/tutorials/abap-cloud"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-500 flex flex-col"
          >
            <FaCode className="text-4xl text-blue-600 mb-5" />

            <div className="mb-6">
              <span className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Foundation
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3">ABAP Cloud</h3>

            <p className="text-gray-600 mb-6">
              Released APIs, extensibility, clean core principles and Public
              Cloud development.
            </p>

            <div className="flex items-center text-blue-600 font-semibold">
              Browse Tutorials
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* CAP */}

          <a
            href="/tutorials/cap"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-green-500 flex flex-col"
          >
            <FaCloud className="text-4xl text-green-600 mb-5" />

            <div className="mb-6">
              <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Full Stack
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3">CAP Development</h3>

            <p className="text-gray-600 mb-6">
              Build cloud-native applications using SAP CAP, Node.js, Java and
              SAP HANA.
            </p>

            <div className="flex items-center text-green-600 font-semibold">
              Browse Tutorials
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* UI5 */}

          <a
            href="/tutorials/ui5"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-pink-500 flex flex-col"
          >
            <FaLaptopCode className="text-4xl text-pink-500 mb-5" />

            <div className="mb-6">
              <span className="inline-flex items-center bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Frontend
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3">SAP UI5 & Fiori</h3>

            <p className="text-gray-600 mb-6">
              Build enterprise-grade Fiori applications using SAPUI5 and Fiori
              Elements.
            </p>

            <div className="flex items-center text-pink-600 font-semibold">
              Browse Tutorials
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* BTP */}

          <a
            href="/tutorials/sap-btp"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-500 flex flex-col"
          >
            <FaCloud className="text-4xl text-orange-500 mb-5" />

            <div className="mb-6">
              <span className="inline-flex items-center bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                Platform
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3">SAP BTP</h3>

            <p className="text-gray-600 mb-6">
              Integration Suite, Event Mesh, Work Zone and extension
              development.
            </p>

            <div className="flex items-center text-orange-600 font-semibold">
              Browse Tutorials
              <FaArrowRight className="ml-2" />
            </div>
          </a>

          {/* CDS */}

          <a
            href="/tutorials/cds"
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-emerald-500 flex flex-col"
          >
            <FaDatabase className="text-4xl text-emerald-600 mb-5" />

            <div className="mb-6">
              <span className="inline-flex items-center bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                Data Modeling
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3">CDS Views</h3>

            <p className="text-gray-600 mb-6">
              Core Data Services modeling, performance optimization and
              analytical design patterns.
            </p>

            <div className="flex items-center text-emerald-600 font-semibold">
              Browse Tutorials
              <FaArrowRight className="ml-2" />
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
