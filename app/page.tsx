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
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-slate-50/90 backdrop-blur-md py-4">
          <div className="flex items-center justify-between">
            {/* Logo Area */}

            <a href="/" className="flex items-center gap-4">
              <img
                src="/logo.svg"
                alt="CloudABAP"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h1 className="font-extrabold text-3xl tracking-tight">
                  CloudABAP
                </h1>

                <p className="text-sm text-gray-500 font-medium">
                  SAP Technical Architect
                </p>
              </div>
            </a>

            {/* Menu */}

            <div className="hidden md:flex items-center gap-2">
              <a
                href="/tutorials"
                className="px-4 py-2 rounded-lg text-[15px] text-gray-700 font-medium hover:bg-white hover:shadow-sm transition"
              >
                Tutorials
              </a>

              <a
                href="/videos"
                className="px-4 py-2 rounded-lg text-[15px] text-gray-700 font-medium hover:bg-white hover:shadow-sm transition"
              >
                Videos
              </a>

              <a
                href="/downloads"
                className="px-4 py-2 rounded-lg text-[15px] text-gray-700 font-medium hover:bg-white hover:shadow-sm transition"
              >
                Downloads
              </a>

              <a
                href="/about"
                className="px-4 py-2 rounded-lg text-[15px] text-gray-700 font-medium hover:bg-white hover:shadow-sm transition"
              >
                About
              </a>
            </div>
          </div>
        </nav>
        {/* Hero */}
        <section className="py-20">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-5 py-2 text-sm font-semibold mb-8 shadow-sm">
            RAP • ABAP Cloud • CAP • UI5 • SAP BTP
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8">
              Master SAP Cloud Development
              <br />
              with RAP, CAP & SAP BTP
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl">
              Learn RAP, ABAP Cloud, CAP, SAP UI5 and SAP BTP through practical
              tutorials, reusable code samples and real-world implementation
              guides from production projects.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/tutorials"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Start Learning
              </a>

              <a
                href="/videos"
                className="border border-gray-300 bg-white px-8 py-4 rounded-xl font-semibold"
              >
                Watch Videos
              </a>
            </div>

            <div className="flex gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/shadabsyedhussain/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <a
                href="https://youtube.com/@cloudabap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium text-red-600 hover:text-red-700"
              >
                <FaYoutube size={20} />
                YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Why CloudABAP */}

        <section className="mb-24">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 shadow-xl">
            <h2 className="text-5xl font-bold text-white mb-6">
              Why CloudABAP?
            </h2>

            <p className="text-xl text-slate-100 leading-9 max-w-5xl mb-12">
              Most SAP tutorials explain how a feature works. CloudABAP focuses
              on how it is implemented in real production projects. The goal is
              to bridge the gap between SAP documentation and enterprise
              implementation experience.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
                <FaLaptopCode className="text-blue-600 text-4xl mb-5" />

                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  Real Project Experience
                </h3>

                <p className="text-slate-600 leading-7">
                  Learn implementation patterns, architecture decisions and
                  practical solutions used in real SAP production environments.
                </p>
              </div>

              {/* Card 2 */}

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
                <FaCloud className="text-purple-600 text-4xl mb-5" />

                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  Cloud First Approach
                </h3>

                <p className="text-slate-600 leading-7">
                  Focused on RAP, ABAP Cloud, CAP, SAP BTP and modern S/4HANA
                  Public Cloud development practices.
                </p>
              </div>

              {/* Card 3 */}

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
                <FaCode className="text-green-600 text-4xl mb-5" />

                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  Reusable Solutions
                </h3>

                <p className="text-slate-600 leading-7">
                  Reusable code samples, architecture guidance and
                  enterprise-grade implementation best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold">Learning Paths</h2>

              <p className="text-gray-600 mt-2">
                Structured SAP learning journeys from beginner to architect
                level.
              </p>
            </div>

            <a
              href="/tutorials"
              className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2"
            >
              View All
              <FaArrowRight />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* RAP */}

            <a
              href="/tutorials/rap"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-500 block"
            >
              <FaRocket className="text-4xl text-purple-600 mb-5" />

              <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Most Popular
              </div>

              <h3 className="text-2xl font-bold mb-3">RAP Development</h3>

              <p className="text-gray-600 mb-6">
                RESTful Application Programming Model tutorials, behavior
                definitions, actions, determinations, and EML.
              </p>

              <div className="flex items-center text-purple-600 font-semibold">
                Start Journey
                <FaArrowRight className="ml-2" />
              </div>
            </a>

            {/* ABAP Cloud */}

            <a
              href="/tutorials/abap-cloud"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-500 block"
            >
              <FaCode className="text-4xl text-blue-600 mb-5" />

              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Foundation
              </div>

              <h3 className="text-2xl font-bold mb-3">ABAP Cloud</h3>

              <p className="text-gray-600 mb-6">
                Modern ABAP development using released APIs, clean core
                principles and SAP Public Cloud extensibility.
              </p>

              <div className="flex items-center text-blue-600 font-semibold">
                Start Journey
                <FaArrowRight className="ml-2" />
              </div>
            </a>

            {/* CAP */}

            <a
              href="/tutorials/cap"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-green-500 block"
            >
              <FaCloud className="text-4xl text-green-600 mb-5" />

              <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Full Stack
              </div>

              <h3 className="text-2xl font-bold mb-3">CAP Development</h3>

              <p className="text-gray-600 mb-6">
                Build cloud-native applications using SAP CAP, Node.js, Java and
                SAP HANA.
              </p>

              <div className="flex items-center text-green-600 font-semibold">
                Start Journey
                <FaArrowRight className="ml-2" />
              </div>
            </a>

            {/* UI5 */}

            <a
              href="/tutorials/ui5"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-pink-500 block"
            >
              <FaLaptopCode className="text-4xl text-pink-500 mb-5" />

              <div className="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Frontend
              </div>

              <h3 className="text-2xl font-bold mb-3">SAP UI5 & Fiori</h3>

              <p className="text-gray-600 mb-6">
                Build enterprise-grade Fiori applications using SAPUI5 and Fiori
                Elements with modern development practices.
              </p>

              <div className="flex items-center text-pink-600 font-semibold">
                Start Journey
                <FaArrowRight className="ml-2" />
              </div>
            </a>

            {/* BTP */}

            <a
              href="/tutorials/sap-btp"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-500 block"
            >
              <FaCloud className="text-4xl text-orange-500 mb-5" />

              <div className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Platform
              </div>

              <h3 className="text-2xl font-bold mb-3">SAP BTP</h3>

              <p className="text-gray-600 mb-6">
                Integration Suite, Event Mesh, Destination Service, Work Zone
                and extension development.
              </p>

              <div className="flex items-center text-orange-600 font-semibold">
                Start Journey
                <FaArrowRight className="ml-2" />
              </div>
            </a>

            {/* CDS */}

            <a
              href="/tutorials/abap-cloud"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-emerald-500 block"
            >
              <FaDatabase className="text-4xl text-emerald-600 mb-5" />

              <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Data Modeling
              </div>

              <h3 className="text-2xl font-bold mb-3">CDS Views</h3>

              <p className="text-gray-600 mb-6">
                Core Data Services modeling, performance optimization and
                analytical design patterns.
              </p>

              <div className="flex items-center text-emerald-600 font-semibold">
                Start Journey
                <FaArrowRight className="ml-2" />
              </div>
            </a>
          </div>
        </section>
        {/* Featured Learning Path */}
        <section className="mb-24">
          <div className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2">
              {/* Left Side */}

              <div className="p-10 lg:p-14 text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <FaRocket />
                  Featured Learning Path
                </div>

                <h2 className="text-5xl font-bold mb-5">
                  RAP Developer
                  <br />
                  Learning Journey
                </h2>

                <p className="text-blue-100 text-lg leading-8 mb-8">
                  Master SAP RAP from beginner to advanced level. Learn CDS
                  Views, Behavior Definitions, Actions, Determinations, Draft
                  Handling, EML and enterprise architecture patterns used in
                  production projects.
                </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold">10</div>
                    <div className="text-blue-100">Modules</div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold">45+</div>
                    <div className="text-blue-100">Lessons</div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold">25h</div>
                    <div className="text-blue-100">Learning Time</div>
                  </div>
                </div>

                <a
                  href="/tutorials/rap"
                  className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
                >
                  Start RAP Journey
                  <FaArrowRight />
                </a>
              </div>

              {/* Right Side */}

              <div className="bg-black/10 p-10 lg:p-14 flex items-center">
                <div className="w-full">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <FaDatabase className="text-green-600" />
                        <span>CDS Root View</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <FaDatabase className="text-green-600" />
                        <span>CDS Child View</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <FaCode className="text-blue-600" />
                        <span>Behavior Definition</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <FaRocket className="text-purple-600" />
                        <span>Managed RAP BO</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <FaRocket className="text-purple-600" />
                        <span>Actions & Determinations</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <FaRocket className="text-purple-600" />
                        <span>Draft Handling</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <FaRocket className="text-purple-600" />
                        <span>EML & Advanced RAP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Learning Roadmap */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-3">
              SAP Technical Learning Roadmap
            </h2>

            <p className="text-gray-600 text-lg">
              Recommended progression path from ABAP fundamentals to
              cloud-native SAP development.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}

            <a
              href="/tutorials/abap-cloud"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-500 block"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                Step 1
              </div>

              <FaCode className="text-4xl text-blue-600 mb-4" />

              <h3 className="text-xl font-bold mb-2">ABAP Basics</h3>

              <p className="text-gray-600 text-sm mb-5">
                Learn ABAP syntax, internal tables, modularization and
                object-oriented concepts.
              </p>

              <div className="flex items-center text-blue-600 font-medium">
                Start Learning
                <FaArrowRight className="ml-2" />
              </div>
            </a>

            {/* Step 2 */}

            <a
              href="/tutorials/abap-cloud"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-green-500 block"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-green-600 mb-3">
                Step 2
              </div>

              <FaDatabase className="text-4xl text-green-600 mb-4" />

              <h3 className="text-xl font-bold mb-2">CDS Views</h3>

              <p className="text-gray-600 text-sm mb-5">
                Build semantic data models, associations, annotations and
                analytical views.
              </p>

              <div className="flex items-center text-green-600 font-medium">
                Start Learning
                <FaArrowRight className="ml-2" />
              </div>
            </a>

            {/* Step 3 */}

            <a
              href="/tutorials/rap"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-500 block"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-3">
                Step 3
              </div>

              <FaRocket className="text-4xl text-purple-600 mb-4" />

              <h3 className="text-xl font-bold mb-2">RAP Development</h3>

              <p className="text-gray-600 text-sm mb-5">
                Create enterprise-grade business applications using SAP RAP.
              </p>

              <div className="flex items-center text-purple-600 font-medium">
                Start Learning
                <FaArrowRight className="ml-2" />
              </div>
            </a>

            {/* Step 4 */}

            <a
              href="/tutorials/sap-btp"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-500 block"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-3">
                Step 4
              </div>

              <FaCloud className="text-4xl text-orange-500 mb-4" />

              <h3 className="text-xl font-bold mb-2">SAP BTP</h3>

              <p className="text-gray-600 text-sm mb-5">
                Build extensions, integrations and side-by-side applications on
                SAP BTP.
              </p>

              <div className="flex items-center text-orange-500 font-medium">
                Start Learning
                <FaArrowRight className="ml-2" />
              </div>
            </a>
          </div>
        </section>

        {/* Instructor */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-3">Meet Your Instructor</h2>

            <p className="text-gray-600 text-lg">
              Learn from real-world SAP implementation experience and
              production-grade projects.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-3">
              {/* Left Side */}

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white flex flex-col items-center justify-center">
                <img
                  src="/images/shadab.png"
                  alt="Syed Shadab Hussain"
                  className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-xl mb-6"
                />

                <h3 className="text-2xl font-bold text-center">
                  Syed Shadab Hussain
                </h3>

                <p className="text-blue-100 mt-2 text-center">
                  SAP Technical Architect
                </p>

                <div className="flex gap-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/shadabsyedhussain/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full"
                  >
                    <FaLinkedin size={20} />
                  </a>

                  <a
                    href="https://youtube.com/@cloudabap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full"
                  >
                    <FaYoutube size={20} />
                  </a>

                  <a
                    href="mailto:syedhussain_sap@outlook.com"
                    className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full"
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>

              {/* Right Side */}

              <div className="lg:col-span-2 p-10">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <FaUserTie />
                  SAP Technical Architect
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  Sharing Real SAP Production Experience
                </h3>

                <p className="text-gray-600 leading-8 mb-8">
                  Specialized in RAP, ABAP Cloud, CAP, SAP BTP and S/4HANA
                  Public Cloud implementations. CloudABAP was created to share
                  practical SAP knowledge, reusable solutions and enterprise
                  architecture guidance gained from real customer projects.
                </p>

                {/* Stats */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-slate-50 rounded-xl p-5 text-center">
                    <FaUserTie className="mx-auto text-blue-600 text-2xl mb-2" />

                    <div className="text-2xl font-bold">10+</div>

                    <div className="text-sm text-gray-500">Years</div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-5 text-center">
                    <FaLaptopCode className="mx-auto text-green-600 text-2xl mb-2" />

                    <div className="text-2xl font-bold">50+</div>

                    <div className="text-sm text-gray-500">Projects</div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-5 text-center">
                    <FaBook className="mx-auto text-purple-600 text-2xl mb-2" />

                    <div className="text-2xl font-bold">100+</div>

                    <div className="text-sm text-gray-500">Articles</div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-5 text-center">
                    <FaYoutube className="mx-auto text-red-600 text-2xl mb-2" />

                    <div className="text-2xl font-bold">20+</div>

                    <div className="text-sm text-gray-500">Videos</div>
                  </div>
                </div>

                {/* Expertise */}

                <div className="flex flex-wrap gap-3">
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                    RAP
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    ABAP Cloud
                  </span>

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                    CAP
                  </span>

                  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                    SAP BTP
                  </span>

                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                    S/4HANA Public Cloud
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
      </div>
    </main>
  );
}
