export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-6xl font-bold mb-6">CloudABAP</h1>

        <p className="text-2xl text-gray-600 mb-4">By Syed Shadab Hussain</p>

        <p className="text-xl text-gray-700 mb-10">
          Master RAP, ABAP Cloud, CAP, UI5 and SAP BTP through practical
          tutorials and real-world examples.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            Start Learning
          </button>

          <button className="px-6 py-3 border rounded-lg">Watch Videos</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="p-6 border rounded-xl">
            <h2 className="text-xl font-semibold mb-2">RAP</h2>
            <p>RESTful Application Programming Model tutorials.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h2 className="text-xl font-semibold mb-2">ABAP Cloud</h2>
            <p>Modern ABAP development for S/4HANA Public Cloud.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h2 className="text-xl font-semibold mb-2">CAP</h2>
            <p>Cloud Application Programming Model tutorials.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h2 className="text-xl font-semibold mb-2">UI5</h2>
            <p>SAP UI5 and Fiori application development tutorials.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h2 className="text-xl font-semibold mb-2">SAP BTP</h2>
            <p>
              Build and extend applications on SAP Business Technology Platform.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h2 className="text-xl font-semibold mb-2">CDS Views</h2>
            <p>Core Data Services modeling and best practices.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
