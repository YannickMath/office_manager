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
      icon: <MdOutlineAvTimer className="w-8 h-8" />,
      description: "A partir de 29€ net / heure *",
      note: "TVA non applicable art 293 B du CGI",
      button: <Button url="/contacts" label="Contactez moi" />,
    },
    {
      id: 2,
      title: "Forfait",
      icon: <PiPackageFill className="w-8 h-8" />,
      description: "Besoin d'une offre adaptée à vos besoins ?",
      note: "Contactez-moi pour un devis personnalisé.",
      button: <Button url="/contacts" label="Demandez un devis" />,
    },
  ];

  const OffersContent = () => {
    return arrayBuilderOffers.map(
      ({ id, title, icon, description, note, button }) => (
        <>
          <CardContainer width="w-2/3 phone:w-full text-nowrap">
            <div
              key={id}
              className="flex flex-col justify-center items-center p-2 font-medium gap-8"
            >
              <div className="flex justify-center items-center gap-4">
                {icon}
                <h2 className="text-xl">{title}</h2>
              </div>
              <div className="flex flex-col w-full justify-center items-center gap-2 phone:text-wrap phone:text-center">
                <p>{description}</p>
                <p
                  className={`${
                    id === 2 ? "text-base text-gray-500" : "text-sm"
                  }`}
                >
                  {note}
                </p>
              </div>
              <div className="flex w-full justify-center">{button}</div>
            </div>
          </CardContainer>
        </>
      )
    );
  };

  return (
    <div
      className="flex flex-col h-full justify-between items-center py-6 
    bg-office-manager-main-bg bg-cover bg-center bg-no-repeat 
    "
    >
      <Titre
        title="Tarifs"
        description="Découvrez les tarifs de mes prestations"
      />
      <div className="flex flex-row phone:flex-col w-3/4 justify-around items-center py-[6vh] p-2 text-lg gap-8">
        <OffersContent />
      </div>
    </div>
  );
};

export default Tarifs;
