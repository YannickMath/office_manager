import { FcAssistant } from "react-icons/fc";
import Button from "../../shared/button";

export default function MiniCV(): JSX.Element {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col w-2/3 gap-12 border-2 border-primary  p-6">
        <div className="flex flex-row h-1/4">
          <div className="flex justify-center border-2 items-center w-1/3">
            <FcAssistant className="w-20 h-20" />
          </div>
          <div className="flex flex-col items-start justify-center text-l border-2 w-2/3 gap-4">
            <p>Bonjour, je suis Cécile Boiron</p>
            <p>Office Manager Indépendant</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start justify-center gap-4">
            <p>
              Assistante dentaire qualifiée avec plus de 15 ans
              d&apos;expérience, je dispose d&apos;un riche parcours
              professionnel et de solides compétences d&apos;assistant
              administratif.
            </p>
            <p>
              Mon objectif est de vous accompagner dans la gestion et le
              développement de votre cabinet.
            </p>
          </div>
          <Button
            color="indigo"
            label="Voir mes prestations"
            url="/mes-prestations"
          />
        </div>
      </div>
    </div>
  );
}
