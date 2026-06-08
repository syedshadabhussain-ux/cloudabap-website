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
  return (
    <figure className="my-8">
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

      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
