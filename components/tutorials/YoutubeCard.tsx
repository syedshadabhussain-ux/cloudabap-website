import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaPlayCircle, FaExternalLinkAlt } from "react-icons/fa";

type YoutubeCardProps = {
  videoId: string;
  title: string;
  description?: string;
  duration?: string;
};

export default function YoutubeCard({
  videoId,
  title,
  description,
  duration,
}: YoutubeCardProps) {
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <Link href={youtubeUrl} target="_blank">
        <div className="relative">
          <Image
            src={thumbnail}
            alt={title}
            width={1280}
            height={720}
            className="w-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <FaPlayCircle className="text-white text-6xl drop-shadow-lg" />
          </div>

          {duration && (
            <div className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs text-white">
              {duration}
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-2 text-red-600 mb-3">
          <FaYoutube />
          <span className="font-semibold">Video Tutorial</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

        {description && <p className="text-gray-600 mb-5">{description}</p>}

        <Link
          href={youtubeUrl}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white font-medium hover:bg-red-700 transition"
        >
          Watch on YouTube
          <FaExternalLinkAlt className="text-sm" />
        </Link>
      </div>
    </div>
  );
}
