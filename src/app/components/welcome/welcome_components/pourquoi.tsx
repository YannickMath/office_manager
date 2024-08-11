import { GrValidate } from "react-icons/gr";

export default function Pourquoi(): JSX.Element {
  const pourquoiItems = [
    { id: 1, label: "Se consacrer pleinement à son coeur de métier" },
    { id: 2, label: "Gagner en productivité" },
    { id: 3, label: "Se libérer du temps" },
    { id: 4, label: "Déléguer en toute sérénité et confidentialité" },
    { id: 5, label: "Maîtriser son budget" },
    { id: 5, label: "Sans engagement" },
  ];

  const pourquoiItem = pourquoiItems.map((item) => (
    <div
      key={item.id}
      className=" flex flex-row w-full justify-center items-center gap-6 text-base"
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
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-2/3 fondBleuLogo justify-center items-center rounded-xl  shadow-xl gap-6 p-4 border-2">
        <h1 className="text-xl font-bold">
          Pourquoi faire appel à mes services ?
        </h1>
        <div className="flex flex-col w-full h-1/4 items-start gap-4">
          {pourquoiItem}
        </div>
      </div>
    </div>
  );
}
