const CardContainer = ({
  children,
  width,
  bgColor = "bg-customCardBg",
}: {
  children: JSX.Element;
  width: string;
  bgColor?: string;
}) => {
  const containerStyle = `flex flex-wrap ${width} justify-center items-center gap-4 ${bgColor} p-4 rounded-xl overflow-y-auto`;
  return <div className={`${containerStyle}`}>{children}</div>;
};

export default CardContainer;
