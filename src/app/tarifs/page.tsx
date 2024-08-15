import { MdOutlineAvTimer } from "react-icons/md";
import Button from "../components/shared/button";
import Titre from "../components/shared/titre";
import { PiPackageFill } from "react-icons/pi";
import CardContainer from "../components/shared/cardContainer";

const Tarifs = () => {
  const arrayBuilderOffers = [
    {
      id: 1,
      title: "Tarif horaire",
      icon: <MdOutlineAvTimer />,
      description: "A partir de 29€ net / heure *",
      note: "TVA non applicable art 293 B du CGI",
      button: <Button url="" label="Contactez moi" color="indigo" />,
    },
    {
      id: 2,
      title: "Forfait",
      icon: <PiPackageFill />,
      description: "Besoin d'une offre adaptée à vos besoins ?",
      note: "Contactez-moi pour un devis personnalisé.",
      button: <Button url="" label="Demandez un devis" color="indigo" />,
    },
  ];

  const OffersContent = () => {
    return arrayBuilderOffers.map(
      ({ id, title, icon, description, note, button }) => (
        <>
          <CardContainer width="w-1/3 text-nowrap">
            <div
              key={id}
              className="flex flex-col justify-center items-center p-2 font-medium gap-8"
            >
              <div className="flex justify-center items-center gap-4">
                {icon}
                <h2>{title}</h2>
              </div>
              <div className="flex flex-col w-full justify-center items-center gap-2">
                <p>{description}</p>
                <p className="text-sm">{note}</p>
              </div>
              <div className="flex w-full justify-center">{button}</div>
            </div>
          </CardContainer>
        </>
      )
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Titre
        title="Tarifs"
        description="Découvrez les tarifs de mes prestations"
      />
      <div className="flex flex-row w-3/4 justify-around items-center py-[6vh] p-2 text-lg">
        <OffersContent />
      </div>
    </div>
  );
};

export default Tarifs;
