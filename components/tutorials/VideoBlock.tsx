import { FaPlayCircle } from "react-icons/fa";

type VideoBlockProps = {
  title: string;
  videoId: string;
};

export default function VideoBlock({ title, videoId }: VideoBlockProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <FaPlayCircle className="text-red-600 text-2xl" />

        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
