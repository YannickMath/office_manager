import { FcAssistant } from "react-icons/fc";
import Button from "../../../utils/button";

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

  const items1 = arrayBuilderItems.map(({ id, label }) => (
    <p key={id}>{label}</p>
  ));

  const items2 = arrayBuilderItems.map(({ id, label }) => (
    <p key={id}>{label}</p>
  ));

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col w-2/3 gap-12 border-2 border-primary p-6">
        <div className="flex flex-row h-1/4">
          <div className="flex justify-center border-2 items-center w-1/3">
            <FcAssistant className="w-20 h-20" />
          </div>
          <div className="flex flex-col items-start justify-center text-l border-2 w-2/3 gap-4 p-2">
            {items1}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start justify-center gap-4">
            {items2}
          </div>
          <div className="flex flex-row justify-center">
            <Button
              color="indigo"
              label="Voir mes prestations"
              url="/services"
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
