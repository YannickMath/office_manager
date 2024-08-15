import { FcAssistant } from "react-icons/fc";
import Button from "../../shared/button";
import CardContainer from "../../shared/cardContainer";

export default function MiniCV(): JSX.Element {
  const arrayBuilderItems = [
    {
      id: 1,
      label:
        "Bonjour, je suis Cécile Boiron, ancienne ADQ, avec de 15 ans d'expérience en cabinet dentaire, je dispose d'un riche parcours professionnel qui m'apporte aujourd'hui de solides compétences sur de multiples aspects de la gestion dans un cabinet dentaire",
    },
    {
      id: 2,
      label:
        "Mon objectif: alléger votre charge administrative pour vous recentrer sur votre métier et gagner en sérénité et rentabilité.",
    },
    {
      id: 3,
      label: "Ma priorité: votre satifsaction et celle de vos patients !",
    },
    {
      id: 4,
      label:
        "Petit plus: la confidentialité. Pour les dirigeants qui préfèrent que certaines données sensibles, notamment RH ou financières, ne soient pas gérées en interne par un salarié.",
    },
  ];

  const Items1 = () => (
    <>
      {arrayBuilderItems.map(({ id, label }) => (
        <p key={id}>{label}</p>
      ))}
    </>
  );

  const Items2 = () => (
    <>
      {arrayBuilderItems.map(({ id, label }) => (
        <p key={id}>{label}</p>
      ))}
    </>
  );

  return (
    <CardContainer width="w-1/2">
      <div className="flex flex-col gap-12 p-6">
        <div className="flex flex-row h-1/4">
          <div className="flex justify-center  items-center w-1/3">
            <FcAssistant className="w-20 h-20" />
          </div>
          <div className="flex flex-col items-start justify-center border-2 border-gray-400 rounded-xl text-l w-2/3 gap-4 p-2">
            <Items1 />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start justify-center gap-4">
            <Items2 />
          </div>
          <div className="flex flex-row justify-center">
            <Button
              color="indigo"
              label="Voir mes prestations"
              url="/services"
              size="normal"
            />
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
