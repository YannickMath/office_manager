import { ButtonProps } from "@/app/interface/buttonInterface";

const buttonSizeMap: { [key: string]: string } = {
  xSmall: "w-1/6",
  small: "w-1/4",
  normal: "w-1/2",
};

const colorMap: { [key: string]: string } = {
  primary: "bg-primary-500 hover:bg-primary-700",
  success: "bg-success-500 hover:bg-success-700",
  warning: "bg-warning-500 hover:bg-warning-700",
  info: "bg-info-500 hover:bg-info-700",
  indigo: "bg-indigo-500 hover:bg-indigo-700",
  white: "bg-white-500 hover:bg-white-700",
  black: "bg-black-500 hover:bg-black-700",
};

export default function Button({
  color = "",
  label = "",
  url = "",
  size = "normal",
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${size ? buttonSizeMap[size] : ""}
      ${color ? colorMap[color] : ""}
      text-white text-sm font-bold py-2 px-4 rounded-lg
      hover:bg-opacity-80 hover:bg-blue-800 transition duration-500 ease-in-out
      focus:border-2 focus:border-${color}-700 
      `}
    >
      <a href={url}>{label}</a>
    </button>
  );
}
