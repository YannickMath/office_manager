interface TitreProps {
  title: string;
  description: string;
}

export default function Titre({ title, description }: TitreProps): JSX.Element {
  return (
    <div
      className="bg-titreJob-bg bg-cover bg-center bg-no-repeat 
                    flex flex-col w-full h-[350px] justify-center items-center 
                    p-8 text-center gap-10"
    >
      <div className="flex justify-center items-center text-base shadow-xl border-b border-r border-black p-4 bg-opacity-30">
        <div className="flex flex-col justify-center h-[200px] gap-8">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
}
