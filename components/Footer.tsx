import Link from "next/link";
import { FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              CloudABAP
            </h3>

            <p className="text-gray-600 leading-7">
              Practical SAP learning focused on RAP, ABAP Cloud, CAP, SAP BTP
              and S/4HANA Public Cloud development.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>

            <div className="flex flex-col gap-3 text-gray-600">
              <Link href="/tutorials" className="hover:text-blue-600">
                Tutorials
              </Link>

              <Link href="/downloads" className="hover:text-blue-600">
                Downloads
              </Link>

              <Link href="/videos" className="hover:text-blue-600">
                Videos
              </Link>

              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </div>
          </div>

          {/* Connect */}

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>

            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/shadabsyedhussain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:scale-110 transition"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://youtube.com/@cloudabap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:scale-110 transition"
              >
                <FaYoutube size={24} />
              </a>

              <a
                href="mailto:shadabhussainara@gmail.com"
                className="text-slate-700 hover:scale-110 transition"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            © 2026 CloudABAP. Built by{" "}
            <span className="font-semibold text-slate-700">
              Syed Shadab Hussain
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
