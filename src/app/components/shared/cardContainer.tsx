const CardContainer = ({
  children,
  width,
  bgColor = "bg-customCardBg",
  className,
}: {
  children: JSX.Element;
  width: string;
  bgColor?: string;
  className?: string;
}) => {
  const containerStyle = `flex ${width} ${className} justify-center items-center gap-4 ${bgColor} p-4 rounded-xl`;
  return <div className={`${containerStyle}`}>{children}</div>;
};

export default CardContainer;
