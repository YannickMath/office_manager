import { GrValidate } from "react-icons/gr";

export default function Intro(): JSX.Element {
  const pourquoiItems = [
    { id: 1, label: "Gagner en productivité" },
    { id: 2, label: "Se consacrer pleinement à son coeur de métier" },
    { id: 3, label: "Gagner en flexibilité" },
    { id: 4, label: "Se libérer du temps" },
    { id: 5, label: "Déléguer en toute sérénité et confidentialité" },
    { id: 6, label: "Maîtriser son budget" },
  ];

  const pourquoiItem = pourquoiItems.map((item) => (
    <div
      key={item.id}
      className=" flex flex-row w-full justify-center items-center gap-6 text-xl"
    >
      <div className="flex w-1/3 justify-end">
        <GrValidate className="w-6 h-6" />
      </div>
      <div className="w-2/3 ">
        <p>{item.label}</p>
      </div>
    </div>
  ));

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <div className="bg-teamwork-bg bg-cover bg-center opacity-35 w-full h-full absolute"></div>

      <div className="relative z-10 flex flex-col w-full justify-center items-center gap-6 p-4">
        <h1 className="text-3xl font-bold">
          Pourquoi faire appel à mes services ?
        </h1>
        <div className="flex flex-col w-full h-1/4 items-start gap-4">
          {pourquoiItem}
        </div>
      </div>
    </div>
  );
}
