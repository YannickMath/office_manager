import { GrValidate } from "react-icons/gr";
import CardContainer from "../../shared/cardContainer";

export default function Pourquoi(): JSX.Element {
  const PourquoiItem: React.FC<{ id: number; label: string }> = ({
    id,
    label,
  }) => (
    <div
      key={id}
      className="flex flex-row w-full justify-center items-center gap-6 text-base"
    >
      <div className="flexs">
        <GrValidate className="w-6 h-6" />
      </div>
      <div className="w-full">
        <p>{label}</p>
      </div>
    </div>
  );

  const pourquoiItems = [
    { id: 1, label: "Se consacrer pleinement à son coeur de métier" },
    { id: 2, label: "Gagner en productivité" },
    { id: 3, label: "Se libérer du temps" },
    { id: 4, label: "Déléguer en toute sérénité et confidentialité" },
    { id: 5, label: "Maîtriser son budget" },
    { id: 5, label: "Sans engagement" },
  ];

  const pourquoiItem = pourquoiItems.map((item) => (
    <PourquoiItem key={item.id} id={item.id} label={item.label} />
  ));

  return (
    <CardContainer width="w-1/2">
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-bold">
          Pourquoi faire appel à mes services ?
        </h1>
        <div className="flex flex-col w-full h-1/4 items-start gap-4">
          {pourquoiItem}
        </div>
      </div>
    </CardContainer>
  );
}
