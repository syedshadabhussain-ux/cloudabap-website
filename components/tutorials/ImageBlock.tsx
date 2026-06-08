"use client";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
  return (
    <figure className="my-8">
      <Zoom>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          priority={priority}
          className="w-full h-auto rounded-xl border border-gray-200 cursor-zoom-in"
        />
      </Zoom>

      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3">
          {caption}
          <div className="text-xs text-gray-400 mt-1">
            Click image to enlarge
          </div>
        </figcaption>
      )}
    </figure>
  );
}
