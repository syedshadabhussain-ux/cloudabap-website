"use client";

import { FaCopy, FaCheck, FaCode } from "react-icons/fa";
import { useState } from "react";

type Props = {
  title?: string;
  filename?: string;
  language?: string;
  code: string;
};

export default function CodeBlock({
  title,
  filename,
  language = "ABAP CDS",
  code,
}: Props) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    try {
      navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Unable to copy code.");
    }
  };

  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between bg-slate-900 px-5 py-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-100 font-medium">
            <FaCode className="text-blue-400" />

            {title || "Code Example"}
          </div>

          {(filename || language) && (
            <div className="mt-1 text-xs text-gray-400">
              {filename && <span>{filename}</span>}

              {filename && language && <span className="mx-2">•</span>}

              {language && <span>{language}</span>}
            </div>
          )}
        </div>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-slate-800 hover:text-white"
        >
          {copied ? <FaCheck /> : <FaCopy />}

          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}

      <pre className="overflow-x-auto bg-[#0d1117] p-6 text-sm leading-7 text-green-400">
        <code>{code}</code>
      </pre>
    </div>
  );
}
