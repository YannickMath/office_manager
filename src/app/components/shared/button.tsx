import { ButtonProps } from "@/app/interface/buttonInterface";

export default function Button({ color, label, url }: ButtonProps) {
  const getColorClasses = (color: "blue" | "green" | "red") => {
    switch (color) {
      case "blue":
        return "bg-indigo-500 hover:bg-blue-700";
      case "green":
        return "bg-green-500 hover:bg-green-700";
      case "red":
        return "bg-red-500 hover:bg-red-700";
      default:
        return "";
    }
  };

  return (
    <button
      type="button"
      className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Voir mes prestations
    </button>
  );
}
