import { ButtonProps } from "@/app/interface/buttonInterface";

const buttonSizeMap: { [key: string]: string } = {
  small: "w-1/4",
  normal: "w-1/2",
};
export default function Button({
  color,
  label,
  url,
  size = "normal",
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${size ? buttonSizeMap[size] : ""}
      bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded
      hover:bg-opacity-80 transition duration-500 ease-in-out
      focus:border-2 focus:border-${color}-700 
      `}
    >
      <a href={url}>{label}</a>
    </button>
  );
}
