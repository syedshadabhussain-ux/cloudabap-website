"use client";

import { useState } from "react";
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

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const lastSent = localStorage.getItem("lastMessageTime");

    if (lastSent && Date.now() - Number(lastSent) < 60000) {
      setStatus("Please wait 1 minute before sending another message.");
      setLoading(false);
      return;
    }

    if (formData.name.trim().length < 2) {
      setStatus("Please enter a valid name.");
      setLoading(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("Please enter a valid email.");
      setLoading(false);
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus("Please enter a detailed message.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: "CloudABAP Contact Form",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully. I will get back to you soon.");

        localStorage.setItem("lastMessageTime", Date.now().toString());
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message.");
        console.error(result);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero */}

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
                  href="mailto:shadabhussainara@gmail.com"
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
                Specialized in RAP, ABAP Cloud, CAP, SAP BTP and S/4HANA Public
                Cloud implementations. CloudABAP was created to share practical
                SAP knowledge, reusable solutions and enterprise architecture
                guidance gained from real customer projects.
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

      {/* Areas of Expertise */}

      <section className="mb-20">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-3">Areas of Expertise</h2>

          <p className="text-lg text-gray-600">
            Core technologies and architectures I work with in enterprise SAP
            projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-5">
              <FaRocket />
            </div>

            <h3 className="font-bold text-2xl mb-4">RAP Development</h3>

            <p className="text-gray-600 leading-8">
              Managed Business Objects, Behavior Definitions, Actions,
              Determinations, Draft Handling and enterprise RAP architecture
              patterns.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-5">
              <FaCode />
            </div>

            <h3 className="font-bold text-2xl mb-4">ABAP Cloud</h3>

            <p className="text-gray-600 leading-8">
              Clean Core development, released APIs, extensibility, key-user
              adaptation and SAP Public Cloud best practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-5">
              <FaCloud />
            </div>

            <h3 className="font-bold text-2xl mb-4">SAP BTP & CAP</h3>

            <p className="text-gray-600 leading-8">
              Side-by-side extensions, CAP applications, integrations,
              event-driven architectures and cloud-native development.
            </p>
          </div>
        </div>
      </section>

      {/* Why CloudABAP */}

      {/* Why CloudABAP */}

      <section className="mb-20">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-3">Why CloudABAP?</h2>

          <p className="text-lg text-gray-600 max-w-4xl">
            Practical SAP knowledge focused on real implementation experience
            rather than theoretical examples.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
          <p className="text-xl text-gray-700 leading-9 mb-10">
            Most SAP tutorials explain how a feature works. CloudABAP focuses on
            how it is implemented in real production projects. The goal is to
            bridge the gap between SAP documentation and enterprise
            implementation experience.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="text-blue-600 text-3xl mb-4">
                <FaLaptopCode />
              </div>

              <h3 className="font-bold text-xl mb-3">
                Real Project Experience
              </h3>

              <p className="text-gray-600 leading-7">
                Implementation patterns, architecture decisions and practical
                solutions used in real SAP production environments.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
              <div className="text-green-600 text-3xl mb-4">
                <FaCloud />
              </div>

              <h3 className="font-bold text-xl mb-3">Cloud First Approach</h3>

              <p className="text-gray-600 leading-7">
                Focused on RAP, ABAP Cloud, CAP, SAP BTP and modern S/4HANA
                Public Cloud development practices.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6">
              <div className="text-purple-600 text-3xl mb-4">
                <FaCode />
              </div>

              <h3 className="font-bold text-xl mb-3">Reusable Solutions</h3>

              <p className="text-gray-600 leading-7">
                Reusable code samples, architecture guidance and
                enterprise-grade implementation best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}

      <section className="mt-20">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-3">Connect & Collaborate</h2>

          <p className="text-lg text-gray-600">
            Let's discuss SAP RAP, ABAP Cloud, CAP, SAP BTP and S/4HANA Public
            Cloud.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side */}

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>

            <div className="space-y-5">
              <a
                href="mailto:syedhussain_sap@outlook.com"
                className="flex items-center gap-5 p-5 rounded-2xl bg-blue-50 hover:bg-blue-100 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <div className="font-semibold text-lg">Email</div>

                  <div className="text-gray-500">
                    syedhussain_sap@outlook.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/shadabsyedhussain/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl bg-blue-50 hover:bg-blue-100 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                  <FaLinkedin size={22} />
                </div>

                <div>
                  <div className="font-semibold text-lg">LinkedIn</div>

                  <div className="text-gray-500">
                    linkedin.com/in/shadabsyedhussain
                  </div>
                </div>
              </a>

              <a
                href="https://youtube.com/@cloudabap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl bg-red-50 hover:bg-red-100 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-red-600 shadow-sm">
                  <FaYoutube size={22} />
                </div>

                <div>
                  <div className="font-semibold text-lg">YouTube</div>

                  <div className="text-gray-500">CloudABAP Channel</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-3">Let's Discuss SAP</h3>

            <p className="text-gray-600 mb-8 leading-7">
              Questions about RAP, ABAP Cloud, CAP, SAP BTP or S/4HANA Public
              Cloud? Send a message and I'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows={6}
                required
                placeholder="Describe your RAP, ABAP Cloud, CAP, SAP BTP or S/4HANA Public Cloud requirement..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition
  ${
    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
  }`}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <FaArrowRight />}
              </button>

              {status && (
                <div
                  className={`rounded-2xl p-4 text-sm font-medium ${
                    status.includes("success")
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
