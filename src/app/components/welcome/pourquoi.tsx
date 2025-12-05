import { GrValidate } from "react-icons/gr";
import { getPourquoiItems } from "@/app/data/welcomeData";
import CardContainer from "../shared/cardContainer";

const Pourquoi = () => {
  const arrayBuilderPourquoiItems = getPourquoiItems();
  const PourquoiItemContent: React.FC<{ id: number; label: string }> = ({
    id,
    label,
  }) => (
    <div
      key={id}
      className="flex flex-row w-full justify-center items-center gap-6 text-base phone:text-sm"
    >
      <div className="flexs">
        <GrValidate className="w-6 h-6" />
      </div>
      <div className="w-full">
        <p>{label}</p>
      </div>
    </div>
  );

  const PourquoiListe = () => {
    return arrayBuilderPourquoiItems.map((item) => (
      <PourquoiItemContent key={item.id} id={item.id} label={item.label} />
    ));
  };

  return (
    <CardContainer width="w-1/2 phone:w-3/4">
      <div className="flex flex-col gap-8">
        <h1 className="text-xl phone:text-base font-bold text-center">
          Pourquoi faire appel à mes services ?
        </h1>
        <div className="flex flex-col w-full h-1/4 items-start gap-4">
          <PourquoiListe />
        </div>
      </div>
    </CardContainer>
  );
};

export default Pourquoi;
