import { FcAssistant } from "react-icons/fc";
import Button from "../shared/button";

export default function MiniCV(): JSX.Element {
  return (
    <div className="flex flex-col gap-12 border-2 border-primary  p-6">
      <div className="flex flex-row h-1/4">
        <div className="flex justify-center border-2 items-center w-1/3">
          <FcAssistant className="w-20 h-20" />
        </div>
        <div className="flex flex-col items-start justify-center text-l border-2 w-2/3">
          <p>Bonjour, je suis Cécile Boiron</p>
          <p>Fondatrice de OMI Conseils</p>
          <p>Experte en assistance administrative</p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p>
          Assistante de gestion diplômée et expérimentée, je dispose d&aposun
          riche parcours professionnel qui m&aposapporte aujourd&aposhui de
          solides compétences en matière de responsabilité, de polyvalence et
          d&aposautonomie. Mon objectif est de mettre à profit mon savoir-faire
          et mes connaissances au service de votre entreprise. Véritable
          partenaire dans votre gestion administrative, ma priorité est votre
          satisfaction !
        </p>
        <div></div>
        <Button
          color="indigo"
          label="Voir mes prestations"
          url="/mes-prestations"
        />
      </div>
    </div>
  );
}
