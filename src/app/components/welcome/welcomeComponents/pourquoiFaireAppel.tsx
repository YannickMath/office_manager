import Button from "../../shared/button";

export default function PourquoiFaireAppel(): JSX.Element {
  return (
    <div className="flex flex-col  w-full justify-center items-center gap-6 p-6 border-2">
      <div>
        <h2 className="text-2xl">Pourquoi faire appel à mes services ?</h2>
      </div>
      <div className="fex flex-col gap-6 p-2">
        <div className="flex items-center flex-col gap-4">
          <div className="flex flex-col w-full h-1/4  justify-center gap-1 text-l border-2">
            <p>
              Vous souhaitez déléguer votre administratif pour vous consacrer à
              votre cœur de métier ?
            </p>
            <p>Vous rencontrez un surcroît d&apos;activité ?</p>
            <p>
              Votre collaborateur est absent et vous souhaitez assurer un suivi
              pendant son absence ?
            </p>
            <p>
              L&apos;externalisation de votre administratif est la solution à
              vos besoins !
            </p>
          </div>
          <div className="flex flex-col gap-2 w-1/2 justify-center   border-2">
            <p>Un renseignement, une question, un devis ? </p>
            <p> Une aide pour évaluer vos besoins ?</p>
            <p> Discutons-en ensemble !</p>
          </div>
          <div>
            <Button
              color="indigo"
              label="Voir mes prestations"
              url="/mes-prestations"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
