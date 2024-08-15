const CardContainer = ({
  children,
  width,
}: {
  children: JSX.Element;
  width: string;
}) => {
  const containerStyle = `flex flex-wrap ${width} justify-center items-center gap-4 bg-blue-100 p-4 rounded-xl border-b border-gray-200`;
  return <div className={`${containerStyle}`}>{children}</div>;
};

export default CardContainer;
