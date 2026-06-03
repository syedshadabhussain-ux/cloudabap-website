import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold mb-4">404</h1>

      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>

      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>

      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl">
        Back Home
      </Link>
    </div>
  );
}
