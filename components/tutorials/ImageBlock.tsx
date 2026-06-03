import Image from "next/image";

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className="rounded-2xl border border-gray-200 shadow-sm w-full"
      />

      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
