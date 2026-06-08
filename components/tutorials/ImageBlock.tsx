"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export default function ImageBlock({
  src,
  alt,
  caption,
  priority = false,
}: ImageBlockProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="my-8">
        <div onClick={() => setOpen(true)} className="cursor-zoom-in">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={675}
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority={priority}
            className="w-full h-auto rounded-xl border border-gray-200"
          />
        </div>

        {caption && (
          <figcaption className="text-center text-sm text-gray-500 mt-3">
            {caption}
            <div className="text-xs text-gray-400 mt-1">
              Click image to enlarge
            </div>
          </figcaption>
        )}
      </figure>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <Image
            src={src}
            alt={alt}
            width={2000}
            height={1200}
            className="max-w-[95vw] max-h-[95vh] w-auto h-auto rounded-lg"
          />
        </div>
      )}
    </>
  );
}
