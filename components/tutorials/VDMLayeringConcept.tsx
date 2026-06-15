export default function VDMLayeringConcept() {
  return (
    <div className="my-8 max-w-3xl mx-auto">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center font-semibold text-blue-900 shadow-sm">
        Database Tables
      </div>

      <div className="flex justify-center py-3 text-3xl text-gray-400">↓</div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center shadow-sm">
        <div className="font-semibold text-green-900">Basic Views (I_*)</div>

        <div className="text-sm text-gray-600 mt-2">
          Product, Business Partner, Customer, Supplier
        </div>
      </div>

      <div className="flex justify-center py-3 text-3xl text-gray-400">↓</div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center shadow-sm">
        <div className="font-semibold text-amber-900">Composite Views</div>

        <div className="text-sm text-gray-600 mt-2">
          Joins, Calculations, Aggregations, Business Logic
        </div>
      </div>

      <div className="flex justify-center py-3 text-3xl text-gray-400">↓</div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 text-center shadow-sm">
        <div className="font-semibold text-purple-900">
          Consumption Views (C_*)
        </div>

        <div className="text-sm text-gray-600 mt-2">
          UI Annotations, Search, Filters, Consumption Metadata
        </div>
      </div>

      <div className="flex justify-center py-3 text-3xl text-gray-400">↓</div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center shadow-sm">
        <div className="font-semibold text-gray-900">
          Fiori • RAP • APIs • Analytics
        </div>
      </div>
    </div>
  );
}
