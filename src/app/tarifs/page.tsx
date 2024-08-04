import { MdOutlineAvTimer } from "react-icons/md";
import Button from "../utils/button";
import Titre from "../utils/titre";
import { PiPackageFill } from "react-icons/pi";

export default function Tarifs() {
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
        <div
          key={id}
          className="flex flex-col w-1/3 bg-gray-200 justify-center items-center p-2 font-medium gap-8"
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
      )
    );
  };

  return (
    <div>
      <Titre
        title="Tarifs"
        description="Découvrez les tarifs de mes prestations"
      />
      <div className="flex flex-row justify-around items-center py-[6vh] p-2 text-lg">
        <OffersContent />
      </div>
    </div>
  );
}
