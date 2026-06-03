"use client";

import { FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

type Props = {
  title?: string;
  code: string;
};

export default function CodeBlock({ title, code }: Props) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    try {
      const textarea = document.createElement("textarea");

      textarea.value = code;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";

      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();

      document.execCommand("copy");

      document.body.removeChild(textarea);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
      alert("Unable to copy code");
    }
  };

  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between bg-slate-900 px-5 py-3">
        <span className="text-sm font-medium text-gray-300">
          {title || "Code Example"}
        </span>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-lg px-3 py-1 text-sm text-gray-300 transition hover:bg-slate-800 hover:text-white"
        >
          {copied ? <FaCheck /> : <FaCopy />}

          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre className="overflow-x-auto bg-black p-6 text-sm text-green-400">
        <code>{code}</code>
      </pre>
    </div>
  );
}
