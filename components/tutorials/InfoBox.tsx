import {
  FaInfoCircle,
  FaLightbulb,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

type InfoBoxProps = {
  type?: "info" | "tip" | "warning" | "success";
  title: string;
  children: React.ReactNode;
};

export default function InfoBox({
  type = "info",
  title,
  children,
}: InfoBoxProps) {
  const styles = {
    info: {
      icon: <FaInfoCircle />,
      container: "bg-blue-50 border-l-4 border-blue-500",
      iconColor: "text-blue-600",
    },

    tip: {
      icon: <FaLightbulb />,
      container: "bg-amber-50 border-l-4 border-amber-500",
      iconColor: "text-amber-600",
    },

    warning: {
      icon: <FaExclamationTriangle />,
      container: "bg-red-50 border-l-4 border-red-500",
      iconColor: "text-red-600",
    },

    success: {
      icon: <FaCheckCircle />,
      container: "bg-green-50 border-l-4 border-green-500",
      iconColor: "text-green-600",
    },
  };

  const current = styles[type];

  return (
    <div className={`${current.container} rounded-r-2xl p-6 my-8`}>
      <div className="flex items-start gap-4">
        <div className={`text-2xl mt-1 ${current.iconColor}`}>
          {current.icon}
        </div>

        <div>
          <h4 className="font-bold text-lg mb-2">{title}</h4>

          <div className="text-gray-700 leading-7">{children}</div>
        </div>
      </div>
    </div>
  );
}
