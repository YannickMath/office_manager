interface TitreProps {
  title: string;
  description: string;
}

export default function Titre({ title, description }: TitreProps): JSX.Element {
  return (
    <div className=" flex flex-col w-full h-[150px] justify-center items-center p-8 text-center gap-10">
      <div
        className="flex justify-center items-center 
                      shadow-xl border-b border-r border-black p-4 bg-opacity-30"
      >
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
}
