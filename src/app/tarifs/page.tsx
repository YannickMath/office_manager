import { MdOutlineAvTimer } from "react-icons/md";
import Button from "../components/shared/button";
import Titre from "../components/shared/titre";
import { PiPackageFill } from "react-icons/pi";
import CardContainer from "../components/shared/cardContainer";
import Image from "next/image"; // Import the Image component from the correct package

const Tarifs = () => {
  const arrayBuilderOffers = [
    {
      id: 1,
      title: "Tarif horaire",
      icon: <MdOutlineAvTimer className="w-8 h-8" />,
      description: "31€ net / heure",
      note: "TVA non applicable art 293 B du CGI",
      button: <Button url="/contacts" label="Contactez moi" />,
    },
    {
      id: 2,
      title: "Pack mission(s)",
      icon: <PiPackageFill className="w-8 h-8" />,
      description: "Besoin d'une offre adaptée à vos besoins ?",
      note: "Contactez-moi pour un devis personnalisé.",
      button: <Button url="/contacts" label="Demander un devis" />,
    },
  ];

  const OffersContent = () => {
    return arrayBuilderOffers.map(
      ({ id, title, icon, description, note, button }) => (
        <>
          <CardContainer width="w-3/4 h-2/3 phone:w-full">
            <div
              key={id}
              className="flex flex-col justify-center items-center p-2 font-medium gap-8"
            >
              <div className="flex justify-center items-center gap-4">
                {icon}
                <h2 className="text-xl phone:text-lg">{title}</h2>
              </div>
              <div className="flex flex-col w-full justify-center items-center gap-2 phone:text-wrap text-center">
                <p className="text-lg ">{description}</p>
                <p
                  className={`${
                    id === 2
                      ? "text-lg text-gray-500"
                      : "text-base phone:text-sm"
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
    <div className="relative flex flex-col h-full justify-between items-center phone:py-4">
      <Image
        src="/office_manager_main.png"
        layout="fill"
        objectFit="cover"
        alt="Office background"
        priority
        className="z-[-1]"
      />

      <div className="relative z-1 flex flex-row laptop:flex-col w-3/4 h-full justify-around items-center p-2 gap-8">
        <OffersContent />
      </div>
    </div>
  );
};

export default Tarifs;
