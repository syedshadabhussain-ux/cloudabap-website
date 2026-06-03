import TutorialSidebar from "./TutorialSidebar";
import TutorialBreadcrumb from "./TutorialBreadcrumb";
import { FaClock } from "react-icons/fa";

type Props = {
  title: string;
  category: string;
  duration: string;
  children: React.ReactNode;
};

export default function TutorialLayout({
  title,
  category,
  duration,
  children,
}: Props) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <TutorialBreadcrumb
        category={category}
        path="/tutorials/rap/fundamentals"
      />

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>

        <div className="flex items-center gap-2 text-gray-500 text-lg">
          <FaClock />
          <span>{duration}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-12 gap-10">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <TutorialSidebar />
        </aside>

        {/* Main Content */}
        <section className="lg:col-span-9">
          <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
            {children}
          </article>
        </section>
      </div>
    </main>
  );
}
