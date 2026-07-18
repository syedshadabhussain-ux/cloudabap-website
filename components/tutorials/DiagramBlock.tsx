import Image from "next/image";
import { ReactNode } from "react";

interface DiagramBlockProps {
  src: string;
  alt: string;
  title: string;
  figure?: string;
  caption?: string;
  children?: ReactNode;
}

export default function DiagramBlock({
  src,
  alt,
  title,
  figure = "Figure",
  caption,
  children,
}: DiagramBlockProps) {
  return (
    <div className="my-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}

      <div className="border-b bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          {figure}
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">{title}</h2>
      </div>

      {/* Image */}

      <div className="bg-slate-50 p-8">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={src}
            alt={alt}
            width={1400}
            height={900}
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Caption */}

      {caption && (
        <div className="border-t bg-blue-50 px-6 py-5">
          <h3 className="mb-2 text-lg font-semibold text-blue-800">
            📘 Diagram Explanation
          </h3>

          <p className="leading-7 text-slate-700">{caption}</p>
        </div>
      )}

      {/* Additional Explanation */}

      {children && <div className="border-t px-6 py-6">{children}</div>}

      {/* Footer */}

      <div className="border-t bg-slate-50 px-6 py-3">
        <p className="text-center text-sm text-slate-500">
          CloudABAP.com • Technical Diagram
        </p>
      </div>
    </div>
  );
}
